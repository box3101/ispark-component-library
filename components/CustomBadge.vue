<template>
  <span
    class="custom-badge"
    :class="[
      `custom-badge--${color}`,
      `custom-badge--${size}`,
      { 'custom-badge--outline': variant === 'outline' }
    ]"
  >
    <i v-if="icon && iconPosition === 'leading'" :class="['custom-badge__icon', 'icon', `icon--${size}`, icon]"></i>
    <slot />
    <i v-if="icon && iconPosition === 'trailing'" :class="['custom-badge__icon', 'custom-badge__icon--trailing', 'icon', `icon--${size}`, icon]"></i>
  </span>
</template>

<script setup lang="ts">
interface Props {
  color?: 'blue' | 'green' | 'red' | 'purple' | 'orange' | 'gray'
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'outline'
  icon?: string
  iconPosition?: 'leading' | 'trailing'
}

withDefaults(defineProps<Props>(), {
  color: 'blue',
  size: 'md',
  variant: 'solid',
  icon: '',
  iconPosition: 'leading'
})
</script>