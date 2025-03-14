<template>
  <Teleport to="body">
    <Transition name="alert">
      <div v-if="isOpen" class="alert-overlay" @click="handleOverlayClick">
        <div class="alert" @click.stop>
          <!-- 아이콘 영역 -->
          <div v-if="type" class="alert__icon" :class="'alert__icon--' + type">
            <svg v-if="type === 'info'" class="alert__icon-symbol" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else-if="type === 'success'" class="alert__icon-symbol" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else-if="type === 'warning'" class="alert__icon-symbol" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.29 3.86L1.82 18C1.64537 18.3024 1.55296 18.6453 1.55199 18.9945C1.55101 19.3437 1.64149 19.6871 1.81442 19.9905C1.98736 20.2939 2.23673 20.5467 2.53771 20.7238C2.83869 20.9009 3.18074 20.9962 3.53 21H20.47C20.8192 20.9962 21.1613 20.9009 21.4623 20.7238C21.7632 20.5467 22.0126 20.2939 22.1855 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3437 2.89725 12 2.89725C11.6563 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 9V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else-if="type === 'error'" class="alert__icon-symbol" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 9L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 9L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <!-- 컨텐츠 영역 -->
          <div class="alert__content">
            <h3 v-if="title" class="alert__title">{{ title }}</h3>
            <p class="alert__message">{{ message }}</p>
          </div>

          <!-- 버튼 영역 -->
          <div class="alert__buttons">
            <button
              v-if="showCancel"
              class="alert__button alert__button--secondary"
              @click="handleCancel"
            >
              {{ cancelText }}
            </button>
            <button
              class="alert__button alert__button--primary"
              @click="handleConfirm"
            >
              {{ confirmText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title?: string
  message: string
  type?: 'info' | 'success' | 'warning' | 'error'
  showCancel?: boolean
  cancelText?: string
  confirmText?: string
  closeOnClickOverlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  type: undefined,
  showCancel: false,
  cancelText: '취소',
  confirmText: '확인',
  closeOnClickOverlay: true
})

const isOpen = ref(false)

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()

const open = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const close = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const handleCancel = () => {
  close()
  emit('cancel')
}

const handleConfirm = () => {
  close()
  emit('confirm')
}

const handleOverlayClick = () => {
  if (props.closeOnClickOverlay) {
    handleCancel()
  }
}

defineExpose({
  open,
  close
})
</script>

<style lang="scss">
.alert-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
}

.alert {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 28rem;
  padding: 1.5rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    &-symbol {
      width: 1.5rem;
      height: 1.5rem;
    }

    &--info {
      background-color: var(--color-blue-50);
      color: var(--color-blue-500);
    }

    &--success {
      background-color: var(--color-green-50);
      color: var(--color-green-500);
    }

    &--warning {
      background-color: var(--color-yellow-50);
      color: var(--color-yellow-500);
    }

    &--error {
      background-color: var(--color-red-50);
      color: var(--color-red-500);
    }
  }

  &__content {
    text-align: center;
  }

  &__title {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--color-gray-900);
    margin: 0 0 0.5rem;
  }

  &__message {
    color: var(--color-gray-600);
    margin: 0;
    white-space: pre-line;
  }

  &__buttons {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    margin-top: 0.5rem;
  }

  &__button {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    min-width: 5rem;

    &--primary {
      background-color: var(--color-brand-500);
      color: white;
      border: 1px solid var(--color-brand-500);

      &:hover {
        background-color: var(--color-brand-600);
      }
    }

    &--secondary {
      background-color: white;
      color: var(--color-gray-700);
      border: 1px solid var(--color-gray-300);

      &:hover {
        background-color: var(--color-gray-50);
      }
    }
  }
}

// 트랜지션
.alert-enter-active,
.alert-leave-active {
  transition: opacity 0.2s ease;
  .alert {
    transition: transform 0.2s ease;
  }
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  .alert {
    transform: scale(0.95);
  }
}
</style> 