<template>
  <div class="custom-select" :class="{ 'is-disabled': disabled }">
    <label v-if="label" class="custom-select__label">{{ label }}</label>
    <div class="custom-select__wrapper">
      <button
        type="button"
        class="custom-select__button"
        :class="[
          `custom-select__button--${size}`,
          { 'custom-select__button--error': error }
        ]"
        :disabled="disabled"
        @click="toggleDropdown"
      >
        <span class="custom-select__button-content">
          <template v-if="selectedOption">
            <!-- 프로필 이미지가 있는 경우 -->
            <img
              v-if="selectedOption.image"
              :src="selectedOption.image"
              :alt="selectedOption.label"
              class="custom-select__option-image"
            />
            <!-- 아이콘이 있는 경우 -->
            <i
              v-else-if="selectedOption.icon"
              :class="['custom-select__option-icon', selectedOption.icon]"
            ></i>
            <span class="custom-select__option-label">{{ selectedOption.label }}</span>
          </template>
          <span v-else class="custom-select__placeholder">{{ placeholder }}</span>
        </span>
        <i class="custom-select__chevron icon icon--md icon--chevron-down"></i>
      </button>

      <div
        v-if="isOpen"
        class="custom-select__dropdown"
        :class="`custom-select__dropdown--${size}`"
      >
        <div class="custom-select__options">
          <button
            v-for="option in options"
            :key="option.value"
            type="button"
            class="custom-select__option"
            :class="[
              `custom-select__option--${size}`,
              { 'custom-select__option--selected': modelValue === option.value }
            ]"
            @click="selectOption(option)"
          >
            <!-- 프로필 이미지가 있는 경우 -->
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
          </button>
        </div>
      </div>
    </div>
    <div v-if="error" class="custom-select__error">{{ error }}</div>
    <div v-if="help" class="custom-select__help">{{ help }}</div>
  </div>
</template>

<script setup lang="ts">
interface Option {
  value: string
  label: string
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
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  placeholder: '선택하세요',
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isOpen = ref(false)
const selectedOption = computed(() =>
  props.options.find(option => option.value === props.modelValue)
)

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value
  }
}

const selectOption = (option: Option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

</script>

<style lang="scss" scoped>
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

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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

  &__button-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__placeholder {
    color: var(--color-gray-500);
  }

  &__chevron {
    color: var(--color-gray-400);
    transition: transform 0.2s;
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
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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

  &__option-icon {
    font-size: 1.25rem;
    color: var(--color-gray-500);
  }

  &__option-label {
    flex: 1;
    text-align: left;
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
