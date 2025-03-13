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

// 체크된 상태의 체크박스
export const Checked: Story = {
  render: (args: any) => ({
    components: { CustomCheckbox },
    setup() {
      return { args }
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '체크된 체크박스',
    modelValue: true,
    color: 'brand',
    size: 'md'
  }
}

// 비활성화 상태의 체크박스
export const Disabled: Story = {
  render: (args: any) => ({
    components: { CustomCheckbox },
    setup() {
      return { args }
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '비활성화된 체크박스',
    modelValue: false,
    disabled: true,
    color: 'brand',
    size: 'md'
  }
}

// 비활성화 및 체크된 상태의 체크박스
export const DisabledChecked: Story = {
  render: (args: any) => ({
    components: { CustomCheckbox },
    setup() {
      return { args }
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '비활성화 및 체크된 체크박스',
    modelValue: true,
    disabled: true,
    color: 'brand',
    size: 'md'
  }
}

// 도움말이 있는 체크박스
export const WithHelp: Story = {
  render: (args: any) => ({
    components: { CustomCheckbox },
    setup() {
      return { args }
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '도움말이 있는 체크박스',
    modelValue: false,
    help: '이 체크박스에 대한 추가 설명입니다.',
    color: 'brand',
    size: 'md'
  }
}

// 오류 메시지가 있는 체크박스
export const WithError: Story = {
  render: (args: any) => ({
    components: { CustomCheckbox },
    setup() {
      return { args }
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '오류 메시지가 있는 체크박스',
    modelValue: false,
    error: '이 필드는 필수입니다.',
    color: 'brand',
    size: 'md'
  }
}

// 다양한 색상의 체크박스
export const Colors: Story = {
  render: () => ({
    components: { CustomCheckbox },
    template: `
      <div style="display: flex; gap: 16px;">
        <CustomCheckbox label="Brand" modelValue="true" color="brand" />
        <CustomCheckbox label="Gray" modelValue="true" color="gray" />
        <CustomCheckbox label="Dark Gray" modelValue="true" color="dark-gray" />
      </div>
    `
  })
}

// 다양한 크기의 체크박스
export const Sizes: Story = {
  render: () => ({
    components: { CustomCheckbox },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CustomCheckbox label="Extra Small" modelValue="true" size="xs" />
        <CustomCheckbox label="Small" modelValue="true" size="sm" />
        <CustomCheckbox label="Medium" modelValue="true" size="md" />
        <CustomCheckbox label="Large" modelValue="true" size="lg" />
        <CustomCheckbox label="Extra Large" modelValue="true" size="xl" />
      </div>
    `
  })
}
