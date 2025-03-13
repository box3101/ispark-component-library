<template>
  <component
    :is="`h${level}`"
    :class="[
      'custom-heading',
      `custom-heading--${color}`,
      `custom-heading--spacing-${spacing}`,
      `custom-heading--align-${align}`,
      { 'custom-heading--with-icon': icon }
    ]"
  >
    <div class="custom-heading__content">
      <template v-if="icon">
        <button
          v-if="isIconClickable"
          class="custom-heading__icon-button"
          @click="handleIconClick"
        >
          <i :class="['custom-heading__icon', icon]"></i>
        </button>
        <i
          v-else
          :class="['custom-heading__icon', icon]"
        ></i>
      </template>
      <slot></slot>
      <div v-if="trailingIcons" class="custom-heading__trailing-icons">
        <template v-for="(trailingIcon, index) in trailingIconsArray" :key="index">
          <button
            v-if="isTrailingIconClickable"
            class="custom-heading__icon-button"
            @click="handleTrailingIconClick(index)"
          >
            <i :class="['custom-heading__icon', 'custom-heading__icon--trailing', trailingIcon]"></i>
          </button>
          <i
            v-else
            :class="['custom-heading__icon', 'custom-heading__icon--trailing', trailingIcon]"
          ></i>
        </template>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type IconType = string
type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  color?: 'brand' | 'gray' | 'dark-gray'
  align?: 'left' | 'center' | 'right'
  spacing?: 'none' | 'sm' | 'md' | 'lg'
  icon?: IconType
  size?: SizeType
  trailingIcons?: string[] | boolean
  isTrailingIconClickable?: boolean
  isIconClickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  level: 1,
  color: 'brand',
  align: 'left',
  spacing: 'md',
  icon: '',
  size: 'md',
  trailingIcons: false,
  isTrailingIconClickable: true,
  isIconClickable: true
})

const emit = defineEmits(['iconClick', 'trailingIconClick'])

const handleIconClick = () => {
  emit('iconClick')
}

const handleTrailingIconClick = (index: number) => {
  emit('trailingIconClick', index)
}

const trailingIconsArray = computed(() => {
  if (Array.isArray(props.trailingIcons)) {
    return props.trailingIcons;
  }
  if (props.trailingIcons === true) {
    return ['icon icon--md icon--settings'];
  }
  return [];
});
</script>
