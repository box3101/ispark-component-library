<template>
  <div class="custom-multi-select" :class="{ 'is-disabled': disabled }" ref="selectRef">
    <label v-if="label" class="custom-multi-select__label">{{ label }}</label>
    <div class="custom-multi-select__wrapper">
      <div
        class="custom-multi-select__button"
        :class="[
          `custom-multi-select__button--${size}`,
          { 'custom-multi-select__button--error': error }
        ]"
        :disabled="disabled"
        @click="toggleDropdown"
      >
        <div class="custom-multi-select__selected-items">
          <div
            v-for="option in selectedOptions"
            :key="option.value"
            class="custom-multi-select__selected-item"
          >
            <img
              v-if="option.image"
              :src="option.image"
              :alt="option.label"
              class="custom-multi-select__selected-item-image"
            />
            <span class="custom-multi-select__selected-item-label">{{ option.label }}</span>
            <button
              type="button"
              class="custom-multi-select__remove-button"
              @click.stop="removeOption(option)"
            >
              <i class="icon icon--sm icon--x"></i>
            </button>
          </div>
        </div>
        <span v-if="!selectedOptions.length" class="custom-multi-select__placeholder">
          {{ placeholder }}
        </span>
        <i class="custom-multi-select__chevron icon icon--md icon--chevron-down"></i>
      </div>

      <div
        v-if="isOpen"
        class="custom-multi-select__dropdown"
        :class="`custom-multi-select__dropdown--${size}`"
      >
        <div class="custom-multi-select__options">
          <button
            v-for="option in availableOptions"
            :key="option.value"
            type="button"
            class="custom-multi-select__option"
            :class="[
              `custom-multi-select__option--${size}`,
              { 'custom-multi-select__option--selected': isSelected(option.value) }
            ]"
            @click="toggleOption(option)"
          >
            <img
              v-if="option.image"
              :src="option.image"
              :alt="option.label"
              class="custom-multi-select__option-image"
            />
            <span class="custom-multi-select__option-label">{{ option.label }}</span>
            <i
              v-if="isSelected(option.value)"
              class="custom-multi-select__check icon icon--sm icon--check"
            ></i>
          </button>
        </div>
      </div>
    </div>
    <div v-if="error" class="custom-multi-select__error">{{ error }}</div>
    <div v-if="help" class="custom-multi-select__help">{{ help }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'

interface Option {
  value: string
  label: string
  image?: string
}

interface Props {
  modelValue: string[]
  options: Option[]
  label?: string
  placeholder?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  error?: string
  help?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  placeholder: '팀원을 선택하세요',
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const isOpen = ref(false)
const selectRef = ref<HTMLElement | null>(null)

const selectedOptions = computed(() =>
  props.options.filter(option => props.modelValue.includes(option.value))
)

const availableOptions = computed(() =>
  props.options.filter(option => !props.modelValue.includes(option.value))
)

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

const isSelected = (value: string) => props.modelValue.includes(value)

const toggleOption = (option: Option) => {
  const newValue = isSelected(option.value)
    ? props.modelValue.filter(v => v !== option.value)
    : [...props.modelValue, option.value]
  emit('update:modelValue', newValue)
}

const removeOption = (option: Option) => {
  emit(
    'update:modelValue',
    props.modelValue.filter(v => v !== option.value)
  )
}

// 외부 클릭 시 드롭다운 닫기
onClickOutside(selectRef, () => {
  isOpen.value = false
})
</script>

<style lang="scss" scoped>
.custom-multi-select {
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

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: 2.5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--color-gray-300);
    border-radius: 0.375rem;
    background-color: white;
    cursor: pointer;
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
      opacity: 0.7;
    }

    &--error {
      border-color: var(--color-red-500);
      &:focus {
        box-shadow: 0 0 0 2px var(--color-red-100);
      }
    }
  }

  &__selected-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    flex: 1;
  }

  &__selected-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    background-color: var(--color-brand-50);
    border-radius: 1rem;
    font-size: 0.875rem;
    color: var(--color-brand-700);
  }

  &__selected-item-image {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    object-fit: cover;
  }

  &__remove-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    padding: 0;
    border: none;
    background: none;
    color: var(--color-brand-700);
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-100);
    }
  }

  &__placeholder {
    color: var(--color-gray-500);
  }

  &__chevron {
    color: var(--color-gray-400);
    transition: transform 0.2s;
    margin-left: 0.5rem;
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
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 50;
  }

  &__options {
    max-height: 15rem;
    overflow-y: auto;
  }

  &__option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: none;
    background: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-gray-50);
    }

    &--selected {
      background-color: var(--color-brand-50);
      color: var(--color-brand-700);
    }
  }

  &__option-image {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  &__option-label {
    flex: 1;
    text-align: left;
    color: var(--color-gray-700);
  }

  &__check {
    color: var(--color-brand-500);
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
  &__button--xs {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }

  &__button--sm {
    padding: 0.375rem 0.625rem;
    font-size: 0.875rem;
  }

  &__button--md {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
  }

  &__button--lg {
    padding: 0.625rem 0.875rem;
    font-size: 1.125rem;
  }

  &__button--xl {
    padding: 0.75rem 1rem;
    font-size: 1.25rem;
  }

  &__option--xs {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }

  &__option--sm {
    padding: 0.375rem 0.625rem;
    font-size: 0.875rem;
  }

  &__option--md {
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
  }

  &__option--lg {
    padding: 0.625rem 0.875rem;
    font-size: 1.125rem;
  }

  &__option--xl {
    padding: 0.75rem 1rem;
    font-size: 1.25rem;
  }
}
</style>