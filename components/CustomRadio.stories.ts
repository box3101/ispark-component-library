import type { Meta, StoryObj } from '@storybook/vue3'
import CustomRadio from './CustomRadio.vue'

const meta = {
  title: 'Components/CustomRadio',
  component: CustomRadio,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '라디오 버튼의 선택 값을 지정합니다.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: '' }
      }
    },
    value: {
      control: 'text',
      description: '라디오 버튼의 값을 지정합니다.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: '' }
      }
    },
    name: {
      control: 'text',
      description: '라디오 버튼 그룹의 이름을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    label: {
      control: 'text',
      description: '라디오 버튼의 레이블 텍스트를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    help: {
      control: 'text',
      description: '라디오 버튼 아래에 표시될 도움말 텍스트를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    error: {
      control: 'text',
      description: '라디오 버튼의 오류 메시지를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    disabled: {
      control: 'boolean',
      description: '라디오 버튼의 비활성화 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    color: {
      control: 'select',
      options: ['brand', 'gray', 'dark-gray'],
      description: '라디오 버튼의 색상을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'brand' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '라디오 버튼의 크기를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    }
  }
} satisfies Meta<typeof CustomRadio>

export default meta
type Story = StoryObj<typeof meta>

// 기본 라디오 버튼
export const Default: Story = {
  render: (args: any) => ({
    components: { CustomRadio },
    setup() {
      return { args }
    },
    template: '<CustomRadio v-bind="args" />'
  }),
  args: {
    label: '기본 라디오 버튼',
    value: 'option1',
    modelValue: 'option1',
    name: 'radio-group',
    color: 'brand',
    size: 'md'
  }
}

// 도움말이 있는 라디오 버튼
export const WithHelp: Story = {
  render: (args: any) => ({
    components: { CustomRadio },
    setup() {
      return { args }
    },
    template: '<CustomRadio v-bind="args" />'
  }),
  args: {
    label: '도움말이 있는 라디오 버튼',
    help: '이 라디오 버튼에 대한 추가 설명입니다.',
    value: 'option1',
    modelValue: 'option1',
    name: 'radio-group-help',
    color: 'brand',
    size: 'md'
  }
}

// 오류 상태의 라디오 버튼
export const WithError: Story = {
  render: (args: any) => ({
    components: { CustomRadio },
    setup() {
      return { args }
    },
    template: '<CustomRadio v-bind="args" />'
  }),
  args: {
    label: '오류 상태의 라디오 버튼',
    error: '필수 항목입니다.',
    value: 'option1',
    modelValue: '',
    name: 'radio-group-error',
    color: 'brand',
    size: 'md'
  }
}

// 비활성화된 라디오 버튼
export const Disabled: Story = {
  render: (args: any) => ({
    components: { CustomRadio },
    setup() {
      return { args }
    },
    template: '<CustomRadio v-bind="args" />'
  }),
  args: {
    label: '비활성화된 라디오 버튼',
    disabled: true,
    value: 'option1',
    modelValue: 'option1',
    name: 'radio-group-disabled',
    color: 'brand',
    size: 'md'
  }
}

// 다양한 크기의 라디오 버튼
export const Sizes: Story = {
  render: () => ({
    components: { CustomRadio },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <CustomRadio label="Extra Small 라디오" size="xs" name="size-group" value="xs" modelValue="xs" />
        <CustomRadio label="Small 라디오" size="sm" name="size-group" value="sm" modelValue="sm" />
        <CustomRadio label="Medium 라디오" size="md" name="size-group" value="md" modelValue="md" />
        <CustomRadio label="Large 라디오" size="lg" name="size-group" value="lg" modelValue="lg" />
        <CustomRadio label="Extra Large 라디오" size="xl" name="size-group" value="xl" modelValue="xl" />
      </div>
    `
  })
}

// 다양한 색상의 라디오 버튼
export const Colors: Story = {
  render: () => ({
    components: { CustomRadio },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <CustomRadio label="Brand 색상" color="brand" name="color-group" value="brand" modelValue="brand" />
        <CustomRadio label="Gray 색상" color="gray" name="color-group" value="gray" modelValue="gray" />
        <CustomRadio label="Dark Gray 색상" color="dark-gray" name="color-group" value="dark-gray" modelValue="dark-gray" />
      </div>
    `
  })
}

// 라디오 버튼 그룹 예시
export const RadioGroup: Story = {
  render: () => ({
    components: { CustomRadio },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <h3>선호하는 프로그래밍 언어를 선택하세요:</h3>
        <CustomRadio label="JavaScript" name="language" value="js" modelValue="js" />
        <CustomRadio label="TypeScript" name="language" value="ts" modelValue="ts" />
        <CustomRadio label="Python" name="language" value="py" modelValue="py" />
        <CustomRadio label="Java" name="language" value="java" modelValue="java" />
      </div>
    `
  })
}