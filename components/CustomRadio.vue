<template>
  <div class="custom-radio-wrapper">
    <label class="custom-radio" :class="{ 'is-disabled': disabled }">
      <input
        type="radio"
        class="custom-radio__input"
        :value="value"
        :checked="modelValue === value"
        :name="name"
        :disabled="disabled"
        @change="$emit('update:modelValue', value)"
      />
      <span class="custom-radio__mark" :class="`custom-radio__mark--${color}`"></span>
      <span v-if="label" class="custom-radio__label">{{ label }}</span>
    </label>
    <span v-if="help" class="custom-radio__help">{{ help }}</span>
    <span v-if="error" class="custom-radio__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: any
  value: any
  name: string
  label?: string
  help?: string
  error?: string
  disabled?: boolean
  color?: 'brand' | 'gray' | 'dark-gray'
}

withDefaults(defineProps<Props>(), {
  modelValue: null,
  label: '',
  help: '',
  error: '',
  disabled: false,
  color: 'brand'
})

defineEmits(['update:modelValue'])
</script>