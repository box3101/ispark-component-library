import type { Meta, StoryObj } from '@storybook/vue3'
import CustomCheckbox from './CustomCheckbox.vue'

const meta = {
  title: 'Components/CustomCheckbox',
  component: CustomCheckbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: '체크박스의 선택 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    label: {
      control: 'text',
      description: '체크박스의 레이블 텍스트를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    help: {
      control: 'text',
      description: '체크박스 아래에 표시될 도움말 텍스트를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    error: {
      control: 'text',
      description: '체크박스의 오류 메시지를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    disabled: {
      control: 'boolean',
      description: '체크박스의 비활성화 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    color: {
      control: 'select',
      options: ['brand', 'gray', 'dark-gray'],
      description: '체크박스의 색상을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'brand' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '체크박스의 크기를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    }
  }
} satisfies Meta<typeof CustomCheckbox>

export default meta
type Story = StoryObj<typeof meta>

// 기본 체크박스
export const Default: Story = {
  render: (args: any) => ({
    components: { CustomCheckbox },
    setup() {
      return { args }
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '기본 체크박스',
    modelValue: false,
    color: 'brand',
    size: 'md'
  }
}