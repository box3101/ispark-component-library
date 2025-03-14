<template>
  <div class="custom-select" :class="{ 'is-disabled': disabled }" ref="selectRef">
    <!-- 레이블 표시 (있는 경우만) -->
    <label v-if="label" class="custom-select__label">{{ label }}</label>
    <div class="custom-select__wrapper">
      <!-- 입력 필드 영역 -->
      <div class="custom-select__input-wrapper">
        <input
          type="text"
          class="custom-select__input"
          :class="[
            `custom-select__input--${size}`,
            { 'custom-select__input--error': error }
          ]"
          :placeholder="placeholder"
          :disabled="disabled"
          :value="selectedOption ? (selectedOption.name || selectedOption.label) : searchQuery"
          @input="e => { searchQuery = (e.target as HTMLInputElement).value; handleSearch(); }"
          @focus="handleFocus"
        />
        <!-- 검색 아이콘 -->
        <i class="custom-select__search-icon icon-search"></i>
        <!-- 드롭다운 화살표 아이콘 (열림/닫힘 상태에 따라 회전) -->
        <i class="custom-select__chevron icon icon--md icon--chevron-down" :class="{ 'is-open': isOpen }"></i>
      </div>

      <!-- 드롭다운 메뉴 (열려있을 때만 표시) -->
      <div
        v-if="isOpen"
        class="custom-select__dropdown"
        :class="`custom-select__dropdown--${size}`"
      >
        <div class="custom-select__options">
          <!-- 옵션 목록 -->
          <button
            v-for="option in filteredOptions"
            :key="option.value"
            type="button"
            class="custom-select__option"
            :class="[
              `custom-select__option--${size}`,
              { 'custom-select__option--selected': modelValue === option.value }
            ]"
            @click="selectOption(option)"
          >
            <div class="custom-select__option-content">
              <!-- 부서/이름/직위 형식인 경우 (직원 정보 표시) -->
              <template v-if="option.department && option.name && option.position">
                <div class="custom-select__option-group">
                  <span class="custom-select__option-department">{{ option.department }}</span>
                  <div class="custom-select__option-user">
                    <span class="custom-select__option-name">{{ option.name }}</span>
                    <span class="custom-select__option-position">{{ option.position }}</span>
                  </div>
                </div>
                <!-- 옵션 개수 표시 (showCount가 true일 때만) -->
                <span v-if="showCount" class="custom-select__option-count">{{ optionsCount }}개</span>
              </template>
              <!-- 일반적인 옵션인 경우 -->
              <template v-else>
                <div class="custom-select__option-basic">
                  <!-- 이미지가 있는 경우 -->
                  <img
                    v-if="option.image"
                    :src="option.image"
                    :alt="option.label"
                    class="custom-select__option-image"
                  />
                  <!-- 아이콘이 있는 경우 -->
                  <i
                    v-else-if="option.icon"
                    :class="['custom-select__option-icon', option.icon]"
                  ></i>
                  <span class="custom-select__option-label">{{ option.label }}</span>
                </div>
              </template>
            </div>
          </button>
        </div>
      </div>
    </div>
    <!-- 에러 메시지 표시 (있는 경우만) -->
    <div v-if="error" class="custom-select__error">{{ error }}</div>
    <!-- 도움말 텍스트 표시 (있는 경우만) -->
    <div v-if="help" class="custom-select__help">{{ help }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'

// 옵션 항목의 인터페이스 정의
interface Option {
  value: string        // 옵션의 실제 값
  label: string        // 옵션의 표시 레이블
  department?: string  // 부서명 (직원 정보 표시 시)
  name?: string        // 이름 (직원 정보 표시 시)
  position?: string    // 직위 (직원 정보 표시 시)
  icon?: string        // 아이콘 클래스명
  image?: string       // 이미지 URL
}

// 컴포넌트 Props 인터페이스 정의
interface Props {
  modelValue: string                       // v-model 값 (선택된 옵션의 value)
  options: Option[]                        // 선택 가능한 옵션 목록
  label?: string                           // 입력 필드 레이블
  placeholder?: string                     // 입력 필드 플레이스홀더
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'  // 컴포넌트 크기
  error?: string                           // 에러 메시지
  help?: string                            // 도움말 텍스트
  disabled?: boolean                       // 비활성화 여부
  showCount?: boolean                      // 옵션 개수 표시 여부
}

// Props 기본값 설정
const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  placeholder: '선택하세요',
  disabled: false,
  showCount: true
})

// 이벤트 정의
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void  // v-model 업데이트 이벤트
}>()

// 상태 관리
const isOpen = ref(false)                        // 드롭다운 열림/닫힘 상태
const searchQuery = ref('')                      // 검색어
const selectRef = ref<HTMLElement | null>(null)  // 컴포넌트 루트 요소 참조

// 현재 선택된 옵션 계산
const selectedOption = computed(() =>
  props.options.find(option => option.value === props.modelValue)
)

// 전체 옵션 개수 계산
const optionsCount = computed(() => props.options.length)

// 검색어에 따른 필터링된 옵션 목록
const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options
  const query = searchQuery.value.toLowerCase()
  return props.options.filter(option => {
    // 직원 정보 형식인 경우 이름으로 검색
    if (option.department && option.name && option.position) {
      return option.name.toLowerCase().includes(query)
    }
    // 일반 옵션인 경우 레이블로 검색
    return option.label.toLowerCase().includes(query)
  })
})

// 입력 필드 포커스 처리
const handleFocus = () => {
  if (!props.disabled) {
    isOpen.value = true
  }
}

// 검색어 입력 처리
const handleSearch = () => {
  isOpen.value = true
}

// 옵션 선택 처리
const selectOption = (option: Option) => {
  emit('update:modelValue', option.value)
  searchQuery.value = option.name || option.label
  isOpen.value = false
}

// 외부 클릭 감지하여 드롭다운 닫기
onClickOutside(selectRef, () => {
  isOpen.value = false
})
</script>

<style lang="scss">
.custom-select {
  position: relative;
  width: 100%;

  /* 레이블 스타일 */
  &__label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-gray-700);
  }

  &__wrapper {
    position: relative;
  }

  &__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  /* 입력 필드 기본 스타일 */
  &__input {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
    border: 1px solid var(--color-gray-300);
    border-radius: 0.375rem;
    font-size: 0.875rem;
    background-color: white;
    transition: all 0.2s;

    /* 호버 상태 (비활성화 아닐 때) */
    &:hover:not(:disabled) {
      border-color: var(--color-gray-400);
    }

    /* 포커스 상태 */
    &:focus {
      outline: none;
      border-color: var(--color-brand-500);
      box-shadow: 0 0 0 2px var(--color-brand-100);
    }

    /* 비활성화 상태 */
    &:disabled {
      background-color: var(--color-gray-100);
      cursor: not-allowed;
    }

    /* 에러 상태 */
    &--error {
      border-color: var(--color-red-500);
    }
  }

  /* 검색 아이콘 */
  &__search-icon {
    position: absolute;
    right: 2rem;
    color: var(--color-gray-400);
    pointer-events: none;
  }

  /* 드롭다운 화살표 아이콘 */
  &__chevron {
    position: absolute;
    right: 0.75rem;
    color: var(--color-gray-400);
    transition: transform 0.2s;

    /* 열린 상태일 때 회전 */
    &.is-open {
      transform: rotate(180deg);
    }
  }

  /* 드롭다운 메뉴 */
  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 0.25rem;
    background-color: white;
    border: 1px solid var(--color-gray-200);
    border-radius: 0.375rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 50;
  }

  /* 옵션 목록 컨테이너 */
  &__options {
    max-height: 15rem;
    overflow-y: auto;
  }

  /* 개별 옵션 항목 */
  &__option {
    width: 100%;
    padding: 0.75rem;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;

    /* 호버 상태 */
    &:hover {
      background-color: var(--color-gray-100);

      .custom-select__option-department {
        color: var(--color-brand-600);
      }

      .custom-select__option-name {
        color: var(--color-brand-600);
      }

      .custom-select__option-position {
        color: var(--color-brand-500);
      }

      .custom-select__option-count {
        color: var(--color-brand-500);
      }

      .custom-select__option-label {
        color: var(--color-brand-600);
      }

      .custom-select__option-icon {
        color: var(--color-brand-500);
      }
    }

    /* 선택된 상태 */
    &--selected {
      background-color: var(--color-brand-50);

      .custom-select__option-department {
        color: var(--color-brand-700);
      }

      .custom-select__option-name {
        color: var(--color-brand-700);
      }

      .custom-select__option-position {
        color: var(--color-brand-600);
      }

      .custom-select__option-count {
        color: var(--color-brand-600);
      }

      .custom-select__option-label {
        color: var(--color-brand-700);
      }

      .custom-select__option-icon {
        color: var(--color-brand-600);
      }

      /* 선택된 상태에서 호버 */
      &:hover {
        background-color: var(--color-brand-100);
      }
    }
  }

  /* 옵션 내용 레이아웃 */
  &__option-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* 직원 정보 그룹 */
  &__option-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  /* 부서명 스타일 */
  &__option-department {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-gray-700);
  }

  /* 사용자 정보 레이아웃 */
  &__option-user {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* 이름 스타일 */
  &__option-name {
    font-size: 0.875rem;
    color: var(--color-gray-700);
  }

  /* 직위 스타일 */
  &__option-position {
    font-size: 0.75rem;
    color: var(--color-gray-500);
  }

  /* 옵션 개수 스타일 */
  &__option-count {
    font-size: 0.875rem;
    color: var(--color-gray-500);
    margin-left: auto;
  }

  /* 기본 옵션 레이아웃 */
  &__option-basic {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* 옵션 이미지 스타일 */
  &__option-image {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  /* 옵션 아이콘 스타일 */
  &__option-icon {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-gray-500);
  }

  /* 옵션 레이블 스타일 */
  &__option-label {
    font-size: 0.875rem;
    color: var(--color-gray-700);
  }

  /* 에러 메시지 스타일 */
  &__error {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: var(--color-red-500);
  }

  /* 도움말 텍스트 스타일 */
  &__help {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: var(--color-gray-500);
  }

  /* 크기 변형 - 입력 필드 */
  &__input--xs {
    padding: 0.25rem 2rem 0.25rem 0.5rem;
    font-size: 0.75rem;
  }

  &__input--sm {
    padding: 0.375rem 2rem 0.375rem 0.625rem;
    font-size: 0.875rem;
  }

  &__input--md {
    padding: 0.5rem 2rem 0.5rem 0.75rem;
    font-size: 1rem;
  }

  &__input--lg {
    padding: 0.625rem 2rem 0.625rem 0.875rem;
    font-size: 1.125rem;
  }

  &__input--xl {
    padding: 0.75rem 2rem 0.75rem 1rem;
    font-size: 1.25rem;
  }
}
</style>
