<template>
  <component
    :is="tag"
    :class="[
      'custom-heading',
      `custom-heading--${size}`,
      `custom-heading--${color}`,
      { 'custom-heading--bold': bold }
    ]"
  >
    <div class="custom-heading__content">
      <i v-if="icon" :class="['custom-heading__icon', icon]"></i>
      <slot></slot>
      <template v-if="trailingIcons && trailingIcons.length > 0">
        <i v-for="(iconClass, index) in trailingIcons"
           :key="index"
           :class="['custom-heading__icon', 'custom-heading__icon--trailing', iconClass]">
        </i>
      </template>
    </div>
  </component>
</template>

<script setup lang="ts">
interface Props {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  color?: 'brand' | 'gray' | 'dark-gray'
  bold?: boolean
  icon?: string
  trailingIcons?: string[]
}

withDefaults(defineProps<Props>(), {
  tag: 'h2',
  size: 'md',
  color: 'dark-gray',
  bold: true,
  trailingIcons: () => []
})
</script>
