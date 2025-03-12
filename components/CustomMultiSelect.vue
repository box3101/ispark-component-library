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
