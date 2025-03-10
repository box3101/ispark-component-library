<template>
  <UButton
    :color="color"
    :variant="variant"
    :size="size"
    :class="[
      'brand-button-transition',
      {
        '!p-btn-xs': size === 'xs',
        '!p-btn-sm': size === 'sm',
        '!p-btn-md': size === 'md',
        '!p-btn-lg': size === 'lg',
        '!p-btn-xl': size === 'xl'
      }
    ]"
    v-bind="$attrs"
  >
    <slot />
  </UButton>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'brand'
  },
  variant: {
    type: String,
    default: 'soft'
  },
  size: {
    type: String,
    default: 'sm',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  }
})
</script>

<style scoped>
.brand-button-transition {
  transition: var(--brand-transition);
}
.brand-button-transition:hover {
  transform: translateY(-2px);
}
</style>