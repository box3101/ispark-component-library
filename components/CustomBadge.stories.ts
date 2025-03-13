import type { Meta, StoryObj } from '@storybook/vue3'
import CustomBadge from './CustomBadge.vue'
const meta = {
  title: 'Components/CustomBadge',
  component: CustomBadge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'green', 'red', 'purple', 'orange', 'gray'],
      description: '뱃지의 색상을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue' }
      }
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
      description: '뱃지의 스타일 변형을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' }
      }
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '뱃지의 크기를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    icon: {
      control: 'select',
      options: [
        '',
        'icon--check',
        'icon--close',
        'icon--info',
        'icon--warning',
        'icon--bell',
        'icon--star'
      ],
      description: '뱃지에 표시할 아이콘 클래스를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    iconPosition: {
      control: 'select',
      options: ['leading', 'trailing'],
      description: '아이콘의 위치를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'leading' }
      }
    },
    default: {
      description: '뱃지에 표시될 내용을 지정합니다.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    }
  }
} satisfies Meta<typeof CustomBadge>

export default meta
type Story = StoryObj<typeof meta>

// 기본 뱃지
export const Default: Story = {
  render: (args: any) => ({
    components: { CustomBadge },
    setup() {
      return { args }
    },
    template: '<CustomBadge v-bind="args">기본</CustomBadge>'
  }),
  args: {
    color: 'blue',
    variant: 'solid',
    size: 'md',
    icon: ''
  }
}

// 다양한 색상의 뱃지
export const Colors: Story = {
  render: () => ({
    components: { CustomBadge },
    template: `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CustomBadge color="blue">Blue</CustomBadge>
        <CustomBadge color="green">Green</CustomBadge>
        <CustomBadge color="red">Red</CustomBadge>
        <CustomBadge color="purple">Purple</CustomBadge>
        <CustomBadge color="orange">Orange</CustomBadge>
        <CustomBadge color="gray">Gray</CustomBadge>
      </div>
    `
  })
}

// 다양한 변형의 뱃지
export const Variants: Story = {
  render: () => ({
    components: { CustomBadge },
    template: `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CustomBadge variant="solid">Solid</CustomBadge>
        <CustomBadge variant="outline">Outline</CustomBadge>
      </div>
    `
  })
}

// 다양한 크기의 뱃지
export const Sizes: Story = {
  render: () => ({
    components: { CustomBadge },
    template: `
      <div style="display: flex; gap: 0.5rem; align-items: center;">
        <CustomBadge size="sm">SM</CustomBadge>
        <CustomBadge size="md">MD</CustomBadge>
        <CustomBadge size="lg">LG</CustomBadge>
      </div>
    `
  })
}

// 둥근 뱃지
export const Rounded: Story = {
  render: (args: any) => ({
    components: { CustomBadge },
    setup() {
      return { args }
    },
    template: '<CustomBadge v-bind="args">99+</CustomBadge>'
  }),
  args: {
    size: 'md',
    icon: ''
  }
}

// 아이콘이 있는 뱃지
export const WithIcon: Story = {
  render: (args: any) => ({
    components: { CustomBadge },
    setup() {
      return { args }
    },
    template: '<CustomBadge v-bind="args">알림</CustomBadge>'
  }),
  args: {
    color: 'blue',
    variant: 'solid',
    size: 'md',
    icon: 'icon--bell'
  }
}

// 아이콘이 뒤에 있는 뱃지
export const WithTrailingIcon: Story = {
  render: (args: any) => ({
    components: { CustomBadge },
    setup() {
      return { args }
    },
    template: '<CustomBadge v-bind="args">알림</CustomBadge>'
  }),
  args: {
    color: 'purple',
    variant: 'solid',
    size: 'md',
    icon: 'icon--bell',
    iconPosition: 'trailing'
  }
}

// 상태 표시 뱃지
export const Status: Story = {
  render: () => ({
    components: { CustomBadge },
    template: `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <CustomBadge color="green" variant="outline">Active</CustomBadge>
        <CustomBadge color="orange" variant="outline" >Pending</CustomBadge>
        <CustomBadge color="red" variant="outline">Failed</CustomBadge>
        <CustomBadge color="gray" variant="outline">Inactive</CustomBadge>
      </div>
    `
  })
}