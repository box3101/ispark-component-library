<template>
  <button
    :class="[
      'custom-button',
      `custom-button--${size}`,
      `custom-button--${variant}`,
      `custom-button--${color}`,
      { 'custom-button--loading': loading },
      { 'custom-button--disabled': disabled },
      { 'custom-button--block': block },
      { 'custom-button--square': square },
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="custom-button__loader"></span>
    <span v-if="icon && !trailing" class="custom-button__icon">
      <i :class="['icon', 'icon--md', icon]"></i>
    </span>
    <span
      v-if="$slots.default && $slots.default().length > 0"
      class="custom-button__content"
    >
      <slot />
    </span>
    <span v-if="icon && trailing" class="custom-button__icon">
      <i :class="['icon', 'icon--md', icon]"></i>
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "brand" | "gray" | "dark-gray";
  variant?: "solid" | "outline" | "soft" | "ghost" | "link";
  icon?: string;
  trailing?: boolean;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  square?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "brand",
  variant: "solid",
  icon: "",
  trailing: false,
  loading: false,
  disabled: false,
  block: false,
  square: false,
});

defineEmits(["click"]);
</script>
