<template>
  <Teleport to="body">
    <Transition :name="'modal-' + direction">
      <div v-if="isModalOpen" class="modal-overlay" @click="handleOverlayClick">
        <div
          class="modal"
          :class="[
            `modal--${size}`,
            `modal--${direction}`,
            { 'modal--no-footer': !showFooter }
          ]"
          @click.stop
        >
          <!-- 헤더 영역 -->
          <div class="modal__header">
            <slot name="header">
              <h3 class="modal__title">{{ title }}</h3>
            </slot>
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

          <!-- 컨텐츠 영역 -->
          <div
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
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface Props {
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closable?: boolean
  closeOnClickOverlay?: boolean
  scrollable?: boolean
  direction?: 'center' | 'top' | 'right' | 'bottom' | 'left'
  showFooter?: boolean
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

const isModalOpen = ref(false)

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()

const open = () => {
  isModalOpen.value = true
  preventScroll()
}

const handleClose = () => {
  isModalOpen.value = false
  enableScroll()
  emit('close')
}

const handleConfirm = () => {
  emit('confirm')
}

const handleOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    handleClose()
  }
}

// ESC 키로 모달 닫기
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closable) {
    handleClose()
  }
}

// 모달이 열려있을 때 body 스크롤 방지
const preventScroll = () => {
  document.body.style.overflow = 'hidden'
}

const enableScroll = () => {
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  enableScroll()
})

defineExpose({
  open,
  close: handleClose
})
</script>

<style lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;

  // 크기 변형
  &--sm { max-width: 24rem; }  // 384px
  &--md { max-width: 32rem; }  // 512px
  &--lg { max-width: 40rem; }  // 640px
  &--xl { max-width: 48rem; }  // 768px
  &--full {
    max-width: 90vw;
    height: 90vh;
  }

  // 방향별 위치 설정
  &--top {
    align-self: flex-start;
    margin-top: 2rem;
  }

  &--right {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    max-height: 100%;
    width: 32rem;
    max-width: 100%;
    margin: 0;
    border-radius: 0;
    border-left: 1px solid var(--color-gray-200);
  }

  &--bottom {
    align-self: flex-end;
    margin-bottom: 2rem;
  }

  &--left {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    max-height: 100%;
    width: 32rem;
    max-width: 100%;
    margin: 0;
    border-radius: 0;
    border-right: 1px solid var(--color-gray-200);
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

  &__content {
    padding: 1.5rem;
    flex: 1;
    overflow-y: auto;
    min-height: 0;

    &--no-footer {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
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
}

// 중앙 트랜지션
.modal-center-enter-active,
.modal-center-leave-active {
  transition: opacity 0.3s ease;
  .modal {
    transition: transform 0.3s ease;
  }
}

.modal-center-enter-from,
.modal-center-leave-to {
  opacity: 0;
  .modal {
    transform: scale(0.9);
  }
}

// 위에서 아래로
.modal-top-enter-active,
.modal-top-leave-active {
  transition: opacity 0.3s ease;
  .modal {
    transition: transform 0.3s ease;
  }
}

.modal-top-enter-from,
.modal-top-leave-to {
  opacity: 0;
  .modal {
    transform: translateY(-100%);
  }
}

// 오른쪽에서 왼쪽으로
.modal-right-enter-active {
  transition: all 0.3s ease;
  .modal {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.modal-right-leave-active {
  transition: all 0.3s ease;
  .modal {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.modal-right-enter-from,
.modal-right-leave-to {
  .modal {
    transform: translateX(100%);
  }
}

// 왼쪽에서 오른쪽으로
.modal-left-enter-active {
  transition: all 0.3s ease;
  .modal {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.modal-left-leave-active {
  transition: all 0.3s ease;
  .modal {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.modal-left-enter-from,
.modal-left-leave-to {
  .modal {
    transform: translateX(-100%);
  }
}

// 아래에서 위로
.modal-bottom-enter-active,
.modal-bottom-leave-active {
  transition: opacity 0.3s ease;
  .modal {
    transition: transform 0.3s ease;
  }
}

.modal-bottom-enter-from,
.modal-bottom-leave-to {
  opacity: 0;
  .modal {
    transform: translateY(100%);
  }
}
</style>