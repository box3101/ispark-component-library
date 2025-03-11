<template>
 <div class="custom-checkbox-wrapper">
   <label class="custom-checkbox" :class="[{ 'is-disabled': disabled }, `custom-checkbox--${size}`]">
     <input
       type="checkbox"
       class="custom-checkbox__input"
       :checked="modelValue"
       :disabled="disabled"
       @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
     />
     <span class="custom-checkbox__checkmark" :class="`custom-checkbox__checkmark--${color}`"></span>
     <span v-if="label" class="custom-checkbox__label">{{ label }}</span>
   </label>
   <span v-if="help" class="custom-checkbox__help">{{ help }}</span>
   <span v-if="error" class="custom-checkbox__error">{{ error }}</span>
 </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: boolean
  label?: string
  help?: string
  error?: string
  disabled?: boolean
  color?: 'brand' | 'gray' | 'dark-gray'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
  color: 'brand',
  size: 'md',
  disabled: false
})

defineEmits(['update:modelValue'])
</script>