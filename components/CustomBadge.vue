<template>
  <span
    class="custom-badge"
    :class="[
      `custom-badge--${color}`,
      `custom-badge--${size}`,
      { 'custom-badge--outline': variant === 'outline' }
    ]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  color?: 'blue' | 'green' | 'red' | 'purple' | 'orange' | 'gray'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline'
}

withDefaults(defineProps<Props>(), {
  color: 'blue',
  size: 'md',
  variant: 'solid'
})
</script>