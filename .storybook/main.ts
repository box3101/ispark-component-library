import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-designs'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': '/',
          '~': '/',
          'assets': '/assets',
          'public': '/public'
        }
      }
    })
  }
}

export default config