<template>
  <div class="custom-select" :class="{ 'is-disabled': disabled }" ref="selectRef">
    <label v-if="label" class="custom-select__label">{{ label }}</label>
    <div class="custom-select__wrapper">
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
        <i class="custom-select__search-icon icon-search"></i>
        <i class="custom-select__chevron icon icon--md icon--chevron-down" :class="{ 'is-open': isOpen }"></i>
      </div>

      <div
        v-if="isOpen"
        class="custom-select__dropdown"
        :class="`custom-select__dropdown--${size}`"
      >
        <div class="custom-select__options">
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
              <!-- 부서/이름/직위 형식인 경우 -->
              <template v-if="option.department && option.name && option.position">
                <div class="custom-select__option-group">
                  <span class="custom-select__option-department">{{ option.department }}</span>
                  <div class="custom-select__option-user">
                    <span class="custom-select__option-name">{{ option.name }}</span>
                    <span class="custom-select__option-position">{{ option.position }}</span>
                  </div>
                </div>
                <span v-if="showCount" class="custom-select__option-count">{{ optionsCount }}개</span>
              </template>
              <!-- 일반적인 옵션인 경우 -->
              <template v-else>
                <div class="custom-select__option-basic">
                  <img
                    v-if="option.image"
                    :src="option.image"
                    :alt="option.label"
                    class="custom-select__option-image"
                  />
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
    <div v-if="error" class="custom-select__error">{{ error }}</div>
    <div v-if="help" class="custom-select__help">{{ help }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'

interface Option {
  value: string
  label: string
  department?: string
  name?: string
  position?: string
  icon?: string
  image?: string
}

interface Props {
  modelValue: string
  options: Option[]
  label?: string
  placeholder?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  help?: string
  disabled?: boolean
  showCount?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  placeholder: '선택하세요',
  disabled: false,
  showCount: true
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isOpen = ref(false)
const searchQuery = ref('')
const selectRef = ref<HTMLElement | null>(null)

const selectedOption = computed(() =>
  props.options.find(option => option.value === props.modelValue)
)

const optionsCount = computed(() => props.options.length)

const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options
  const query = searchQuery.value.toLowerCase()
  return props.options.filter(option => {
    if (option.department && option.name && option.position) {
      return option.name.toLowerCase().includes(query)
    }
    return option.label.toLowerCase().includes(query)
  })
})

const handleFocus = () => {
  if (!props.disabled) {
    isOpen.value = true
  }
}

const handleSearch = () => {
  isOpen.value = true
}

const selectOption = (option: Option) => {
  emit('update:modelValue', option.value)
  searchQuery.value = option.name || option.label
  isOpen.value = false
}

onClickOutside(selectRef, () => {
  isOpen.value = false
})
</script>

<style lang="scss">
.custom-select {
  position: relative;
  width: 100%;

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

  &__input {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
    border: 1px solid var(--color-gray-300);
    border-radius: 0.375rem;
    font-size: 0.875rem;
    background-color: white;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      border-color: var(--color-gray-400);
    }

    &:focus {
      outline: none;
      border-color: var(--color-brand-500);
      box-shadow: 0 0 0 2px var(--color-brand-100);
    }

    &:disabled {
      background-color: var(--color-gray-100);
      cursor: not-allowed;
    }

    &--error {
      border-color: var(--color-red-500);
    }
  }

  &__search-icon {
    position: absolute;
    right: 2rem;
    color: var(--color-gray-400);
    pointer-events: none;
  }

  &__chevron {
    position: absolute;
    right: 0.75rem;
    color: var(--color-gray-400);
    transition: transform 0.2s;

    &.is-open {
      transform: rotate(180deg);
    }
  }

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

  &__options {
    max-height: 15rem;
    overflow-y: auto;
  }

  &__option {
    width: 100%;
    padding: 0.75rem;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-gray-50);
    }

    &--selected {
      background-color: var(--color-brand-50);
    }
  }

  &__option-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__option-group {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__option-department {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-gray-700);
  }

  &__option-user {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__option-name {
    font-size: 0.875rem;
    color: var(--color-gray-700);
  }

  &__option-position {
    font-size: 0.75rem;
    color: var(--color-gray-500);
  }

  &__option-count {
    font-size: 0.875rem;
    color: var(--color-gray-500);
    margin-left: auto;
  }

  &__option-basic {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__option-image {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  &__option-icon {
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-gray-500);
  }

  &__option-label {
    font-size: 0.875rem;
    color: var(--color-gray-700);
  }

  &__error {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: var(--color-red-500);
  }

  &__help {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: var(--color-gray-500);
  }

  // Size variants
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

