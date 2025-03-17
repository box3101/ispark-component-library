<template>
  <Teleport to="body">
    <!-- 오버레이 (트랜지션 없음) -->
    <div v-if="isModalOpen" class="modal-overlay" @click="handleOverlayClick"></div>

    <!-- 모달 컨텐츠 (트랜지션 적용) -->
    <Transition :name="getTransitionName">
      <div
        v-if="isModalOpen"
        ref="modalRef"
        class="modal"
        :class="[
          `modal--${size}`,
          `modal--${direction}`,
          { 'modal--no-footer': !showFooter },
          { 'modal--fullscreen': isFullscreen }
        ]"
        :style="modalStyle"
        @click.stop
      >
        <!-- 헤더 영역 -->
        <div class="modal__header">
          <slot name="header">
            <h3 class="modal__title">{{ title }}</h3>
          </slot>
          <div class="modal__header-actions">
            <button
              v-if="direction === 'right' || direction === 'left'"
              class="modal__fullscreen"
              @click="toggleFullscreen"
              type="button"
              aria-label="전체화면"
            >
              <span class="modal__fullscreen-icon" :class="{ 'modal__fullscreen-icon--exit': isFullscreen }"></span>
            </button>
            <button
              v-if="closable"
              class="modal__close"
              @click="handleClose"
              type="button"
              aria-label="닫기"
            >
              <span class="modal__close-icon"></span>
            </button>
          </div>
        </div>

        <!-- 리사이즈 핸들 -->
        <div
          v-if="direction === 'right' && !isFullscreen"
          class="modal__resize-handle modal__resize-handle--left"
          @mousedown="startResizeLeft"
          @touchstart="startResizeLeft"
        ></div>

        <!-- 컨텐츠 영역 -->
        <div
          ref="contentRef"
          class="modal__content"
          :class="{
            'modal__content--scrollable': scrollable,
            'modal__content--no-footer': !showFooter
          }"
        >
          <slot></slot>
        </div>

        <!-- 푸터 영역 -->
        <div v-if="showFooter" class="modal__footer">
          <slot name="footer">
            <button
              class="modal__button modal__button--secondary"
              @click="handleClose"
            >
              취소
            </button>
            <button
              class="modal__button modal__button--primary"
              @click="handleConfirm"
            >
              확인
            </button>
          </slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick, computed } from 'vue'

/**
 * 모달 컴포넌트 Props 인터페이스
 */
interface Props {
  title?: string                // 모달 제목
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'  // 모달 크기
  closable?: boolean            // 닫기 버튼 표시 여부
  closeOnClickOverlay?: boolean // 오버레이 클릭 시 닫기 여부
  scrollable?: boolean          // 컨텐츠 영역 스크롤 가능 여부
  direction?: 'center' | 'top' | 'right' | 'bottom' | 'left'  // 모달 표시 방향
  showFooter?: boolean          // 푸터 표시 여부
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  size: 'md',
  closable: true,
  closeOnClickOverlay: true,
  scrollable: false,
  direction: 'center',
  showFooter: true
})

// 상태 관리 변수
const isModalOpen = ref(false)
const isResizing = ref(false)
const resizeDirection = ref<'left' | 'right' | null>(null)
const startX = ref(0)
const startWidth = ref(0)
const currentWidth = ref(0)
const startLeft = ref(0)
const modalRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const isFullscreen = ref(false)
const previousWidth = ref(0)

// 이벤트 정의
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()

/**
 * 전체화면 모드 토글
 */
const toggleFullscreen = () => {
  if (isFullscreen.value) {
    // 전체화면 모드 해제
    isFullscreen.value = false

    // 이전 너비로 복원
    if (previousWidth.value > 0) {
      currentWidth.value = previousWidth.value
    }
  } else {
    // 전체화면 모드 활성화
    isFullscreen.value = true

    // 현재 너비 저장
    if (currentWidth.value > 0) {
      previousWidth.value = currentWidth.value
    }
  }
}

/**
 * 모달 열기 함수
 * - 모달 상태를 열림으로 변경
 * - 배경 스크롤 방지
 * - 모달 초기 너비 설정
 */
const open = () => {
  isModalOpen.value = true
  preventScroll()

  // 전체화면 모드 초기화
  isFullscreen.value = false

  // 모달이 열릴 때 초기 너비 설정
  nextTick(() => {
    if (modalRef.value) {
      // 사이드 모달인 경우 기본 너비 설정
      if (props.direction === 'right' || props.direction === 'left') {
        // 기본 너비 설정 (32rem = 512px)
        currentWidth.value = 512;
        previousWidth.value = 512;

        // 사이드 모달인 경우 트랜지션 종료 후 리사이징 가능하도록 설정
        setTimeout(() => {
          if (modalRef.value) {
            modalRef.value.style.transition = '';

            // 사이드 모달 위치 강제 설정
            if (props.direction === 'right') {
              modalRef.value.style.right = '0';
              modalRef.value.style.left = 'auto';
              modalRef.value.style.transform = 'none';
            } else if (props.direction === 'left') {
              modalRef.value.style.left = '0';
              modalRef.value.style.right = 'auto';
              modalRef.value.style.transform = 'none';
            }
          }
        }, 300); // 트랜지션 시간과 동일하게 설정
      } else {
        // 일반 모달은 현재 너비 가져오기
        const rect = modalRef.value.getBoundingClientRect();
        currentWidth.value = rect.width;
        previousWidth.value = rect.width;
      }
    }
  })
}

/**
 * 모달 닫기 함수
 * - 모달 상태를 닫힘으로 변경
 * - 배경 스크롤 복원
 * - close 이벤트 발생
 */
const handleClose = () => {
  isModalOpen.value = false
  enableScroll()
  emit('close')
}

/**
 * 확인 버튼 클릭 핸들러
 * - confirm 이벤트 발생
 */
const handleConfirm = () => {
  emit('confirm')
}

/**
 * 오버레이 클릭 핸들러
 * - closeOnClickOverlay 설정에 따라 모달 닫기
 */
const handleOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    handleClose()
  }
}

/**
 * 키보드 이벤트 핸들러
 * - ESC 키 누를 경우 모달 닫기
 */
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closable) {
    handleClose()
  }
}

/**
 * 모달 열림 시 배경 스크롤 방지
 */
const preventScroll = () => {
  document.body.style.overflow = 'hidden'
}

/**
 * 모달 닫힘 시 배경 스크롤 복원
 */
const enableScroll = () => {
  document.body.style.overflow = ''
}

/**
 * 왼쪽 리사이즈 시작 핸들러
 * - 리사이징 상태 및 방향 설정
 * - 시작 위치 및 너비 저장
 */
const startResizeLeft = (e: MouseEvent | TouchEvent) => {
  isResizing.value = true;
  resizeDirection.value = 'left';
  startX.value = 'touches' in e ? e.touches[0].clientX : e.clientX;
  startWidth.value = currentWidth.value;
  startLeft.value = modalRef.value?.getBoundingClientRect().left || 0;

  // 리사이징 시작 시 트랜지션 제거
  if (modalRef.value) {
    modalRef.value.style.transition = 'none';
  }
}

/**
 * 오른쪽 리사이즈 시작 핸들러
 * - 리사이징 상태 및 방향 설정
 * - 시작 위치 및 너비 저장
 */
const startResizeRight = (e: MouseEvent | TouchEvent) => {
  isResizing.value = true;
  resizeDirection.value = 'right';
  startX.value = 'touches' in e ? e.touches[0].clientX : e.clientX;
  startWidth.value = currentWidth.value;

  // 리사이징 시작 시 트랜지션 제거
  if (modalRef.value) {
    modalRef.value.style.transition = 'none';
  }
}

/**
 * 리사이즈 진행 핸들러
 * - 마우스/터치 이동에 따라 모달 크기 조정
 * - 최소/최대 너비 제한
 */
const handleResize = (e: MouseEvent | TouchEvent) => {
  if (!isResizing.value || props.direction !== 'right') return;

  const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
  const deltaX = clientX - startX.value;

  if (resizeDirection.value === 'left') {
    // 최소 너비 400px, 최대 너비 1200px로 제한
    const newWidth = Math.min(1200, Math.max(400, startWidth.value - deltaX));

    currentWidth.value = newWidth;

    if (modalRef.value) {
      modalRef.value.style.width = `${newWidth}px`;
    }
  }
}

/**
 * 리사이즈 종료 핸들러
 * - 리사이징 상태 초기화
 * - 트랜지션 복원
 */
const stopResize = () => {
  isResizing.value = false;
  resizeDirection.value = null;

  // 리사이징 종료 시 트랜지션 복원
  if (modalRef.value) {
    modalRef.value.style.transition = '';
  }
}

/**
 * 방향에 따른 트랜지션 이름 계산
 */
const getTransitionName = computed(() => {
  switch (props.direction) {
    case 'top':
      return 'slide-top'
    case 'right':
      return 'slide-right'
    case 'bottom':
      return 'slide-bottom'
    case 'left':
      return 'slide-left'
    default:
      return 'v' // 기본 페이드 트랜지션
  }
})

/**
 * 모달 스타일 계산
 * - 방향 및 크기에 따른 스타일 적용
 */
const modalStyle = computed(() => {
  if (isFullscreen.value) {
    return {
      width: '100%',
      height: '100%',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      transform: 'none',
      borderRadius: '0'
    }
  } else if (props.direction === 'right' && currentWidth.value > 0) {
    return {
      width: `${currentWidth.value}px`,
      right: '0',
      left: 'auto',
      transform: 'none'
    }
  } else if (props.direction === 'left' && currentWidth.value > 0) {
    return {
      width: `${currentWidth.value}px`,
      left: '0',
      right: 'auto',
      transform: 'none'
    }
  }
  return {}
})

/**
 * 컴포넌트 마운트 시 이벤트 리스너 등록
 */
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  document.addEventListener('mousemove', handleResize)
  document.addEventListener('mouseup', stopResize)
  document.addEventListener('touchmove', handleResize)
  document.addEventListener('touchend', stopResize)
})

/**
 * 컴포넌트 언마운트 시 이벤트 리스너 제거 및 정리
 */
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.removeEventListener('mousemove', handleResize)
  document.removeEventListener('mouseup', stopResize)
  document.removeEventListener('touchmove', handleResize)
  document.removeEventListener('touchend', stopResize)
  enableScroll()
})

// 외부에서 사용할 메서드 노출
defineExpose({
  open,
  close: handleClose
})
</script>

<style lang="scss">
// CSS 변수 정의
:root {
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-500: #6b7280;
  --color-gray-700: #374151;
  --color-gray-900: #111827;
  
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

// 모달 트랜지션 효과
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.v-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

// 방향별 트랜지션
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease !important;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%) !important;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.3s ease !important;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%) !important;
}

.slide-top-enter-active,
.slide-top-leave-active {
  transition: transform 0.3s ease;
}

.slide-top-enter-from,
.slide-top-leave-to {
  transform: translateY(-100%);
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: transform 0.3s ease;
}

.slide-bottom-enter-from,
.slide-bottom-leave-to {
  transform: translateY(100%);
}

.modal {
  position: fixed;
  z-index: 1001;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  // 크기 변형
  &--sm {
    width: 24rem;
    max-width: 90vw;
    max-height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &--md {
    width: 32rem;
    max-width: 90vw;
    max-height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &--lg {
    width: 40rem;
    max-width: 90vw;
    max-height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &--xl {
    width: 48rem;
    max-width: 90vw;
    max-height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &--full {
    width: 90vw;
    height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  // 방향별 위치 설정
  &--top {
    width: 32rem;
    max-width: 90vw;
    max-height: 90vh;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  &--right {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: auto;
    height: 100vh;
    width: 32rem;
    min-width: 400px;
    max-width: 1200px;
    margin: 0;
    padding: 0;
    border-radius: 0;
    border-left: 1px solid var(--color-gray-200);
    transition: transform 0.3s ease;
  }

  &--bottom {
    width: 32rem;
    max-width: 90vw;
    max-height: 90vh;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  &--left {
    position: fixed;
    left: 0;
    right: auto;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 32rem;
    min-width: 400px;
    max-width: 1200px;
    margin: 0;
    padding: 0;
    border-radius: 0;
    border-right: 1px solid var(--color-gray-200);
    transition: transform 0.3s ease;
  }

  &--center {
    width: 32rem;
    max-width: 90vw;
    max-height: 90vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  &__header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--color-gray-200);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    background-color: white;
  }

  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-gray-900);
    margin: 0;
  }

  &__close {
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--color-gray-500);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-gray-100);
      color: var(--color-gray-700);
    }
  }

  &__close-icon {
    position: relative;
    width: 1rem;
    height: 1rem;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: currentColor;
      transform-origin: center;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  &__resize-handle {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    cursor: ew-resize;
    z-index: 1;
    background-color: transparent;
    transition: background-color 0.2s;

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }

    &:hover {
      background-color: var(--color-brand-500);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 4px;
      background-color: transparent;
      cursor: ew-resize;
    }

    &--left::after {
      left: -2px;
    }

    &--right::after {
      right: -2px;
    }
  }

  &__content {
    padding: 1.5rem;
    flex: 1;
    overflow-y: auto;
    min-height: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    &--no-footer {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
    
    // textarea가 포함된 컨테이너 스타일
    .textarea-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      
      textarea {
        flex: 1;
        min-height: 200px;
        padding: 0.75rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.375rem;
        resize: none;
        font-family: inherit;
        font-size: 0.875rem;
        line-height: 1.5;
        
        &:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }
      }
    }
  }

  &__footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--color-gray-200);
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    flex-shrink: 0;
    background-color: white;
  }

  &__button {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    min-width: 5rem;

    &--primary {
      background-color: var(--color-brand-500);
      color: white;
      border: 1px solid var(--color-brand-500);

      &:hover {
        background-color: var(--color-brand-600);
      }
    }

    &--secondary {
      background-color: white;
      color: var(--color-gray-700);
      border: 1px solid var(--color-gray-300);

      &:hover {
        background-color: var(--color-gray-50);
      }
    }
  }

  &--no-footer {
    .modal__content {
      padding-bottom: 1.5rem;
    }
  }

  &--fullscreen {
    width: 100% !important;
    height: 100vh !important;
    max-width: 100% !important;
    max-height: 100vh !important;
    border-radius: 0 !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    transform: none !important;
    
    .modal__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      
      // textarea가 포함된 컨테이너가 확장되도록 설정
      .textarea-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        
        textarea {
          flex: 1;
          min-height: 300px;
        }
      }
    }
  }

  &__header-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__fullscreen {
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--color-gray-500);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-gray-100);
      color: var(--color-gray-700);
    }
  }

  &__fullscreen-icon {
    position: relative;
    width: 1rem;
    height: 1rem;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: currentColor;
    }

    // 전체화면 아이콘 (네 개의 모서리)
    &::before {
      width: 0.75rem;
      height: 0.75rem;
      border: 2px solid currentColor;
      border-radius: 1px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    // 전체화면 해제 아이콘
    &--exit {
      &::before {
        width: 0.6rem;
        height: 0.6rem;
      }

      &::after {
        content: '';
        position: absolute;
        width: 0.3rem;
        height: 0.3rem;
        border-top: 2px solid currentColor;
        border-right: 2px solid currentColor;
        top: 50%;
        left: 50%;
        transform: translate(-75%, -75%);
      }
    }
  }
}
</style>