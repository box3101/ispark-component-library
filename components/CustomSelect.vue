<template>
  <div class="custom-select" :class="{ 'is-disabled': disabled }" ref="selectRef">
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
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'

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
const selectRef = ref<HTMLElement | null>(null)
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

// 외부 클릭 시 드롭다운 닫기
onClickOutside(selectRef, () => {
  isOpen.value = false
})
</script>

