import type { Meta, StoryObj } from '@storybook/vue3'
import CustomButton from './CustomButton.vue'

const meta = {
  title: 'Components/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/5KxTT4wOoY5BDAWkhtwpfg/Sgate_Pre-work?node-id=319-260&p=f&m=dev'
    }
  },
  argTypes: {
    slots: {
      control: 'text',
      description: '버튼의 텍스트 내용을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '버튼' }
      }
    },
    color: {
      control: 'select',
      options: ['brand', 'gray', 'dark-gray'],
      description: '버튼의 색상을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'brand' }
      }
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'ghost', 'link'],
      description: '버튼의 스타일 변형을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '버튼의 크기를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    icon: {
      control: 'select',
      options: [
        '',
        'icon--settings',
        'icon--settings icon--white',
        'icon--chart-bar',
        'icon--users',
        'icon--calendar',
        'icon--bell',
        'icon--star'
      ],
      description: '버튼에 표시할 아이콘 클래스를 지정합니다. icon--white 클래스를 추가하면 아이콘이 흰색으로 표시됩니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    trailing: {
      control: 'boolean',
      description: '아이콘을 버튼의 뒤쪽에 배치할지 여부를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    loading: {
      control: 'boolean',
      description: '버튼의 로딩 상태를 지정합니다. 로딩 상태일 때는 버튼 내용이 숨겨지고 로딩 스피너가 표시됩니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    block: {
      control: 'boolean',
      description: '버튼을 블록 레벨 요소로 만들지 여부를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    class: {
      control: 'text',
      description: '버튼에 추가할 사용자 정의 클래스를 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    square: {
      control: 'boolean',
      description: '버튼을 정사각형 형태로 만들지 여부를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
  }
} satisfies Meta<typeof CustomButton>

export default meta
type Story = StoryObj<typeof meta>

// 기본 버튼
export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/5KxTT4wOoY5BDAWkhtwpfg/Sgate_Pre-work?node-id=319-260&p=f&m=dev'
    }
  },
  render: (args: any) => ({
    components: { CustomButton },
    setup() {
      return { args }
    },
    template: '<CustomButton v-bind="args">{{ args.slots }}</CustomButton>'
  }),
  args: {
    slots: '기본 버튼',
    color: 'brand',
    variant: 'solid',
    size: 'md',
    icon: "",
    trailing: false,
    disabled: false,
    class: ''
  }
}

// 비활성화 상태의 버튼
export const Disabled: Story = {
  render: (args: any) => ({
    components: { CustomButton },
    setup() {
      return { args }
    },
    template: '<CustomButton v-bind="args">{{ args.slots }}</CustomButton>'
  }),
  args: {
    slots: '비활성화 버튼',
    color: 'brand',
    variant: 'solid',
    size: 'md',
    disabled: true
  }
}

// 아이콘이 있는 버튼
export const WithIcon: Story = {
  render: (args: any) => ({
    components: { CustomButton },
    setup() {
      return { args }
    },
    template: '<CustomButton v-bind="args">{{ args.slots }}</CustomButton>'
  }),
  args: {
    slots: '아이콘 버튼',
    color: 'brand',
    variant: 'solid',
    size: 'md',
    icon: "icon--settings icon--white",
  }
}

// 후행 아이콘이 있는 버튼
export const WithTrailingIcon: Story = {
  render: (args: any) => ({
    components: { CustomButton },
    setup() {
      return { args }
    },
    template: '<CustomButton v-bind="args">{{ args.slots }}</CustomButton>'
  }),
  args: {
    slots: '후행 아이콘 버튼',
    color: 'brand',
    variant: 'solid',
    size: 'md',
    icon: "icon--settings icon--white",
    trailing: true
  }
}

// 다양한 색상의 버튼
export const Colors: Story = {
  render: () => ({
    components: { CustomButton },
    template: `
      <div style="display: flex; gap: 16px;">
        <CustomButton color="brand">Brand</CustomButton>
        <CustomButton color="gray">Gray</CustomButton>
        <CustomButton color="dark-gray">Dark Gray</CustomButton>
        <CustomButton color="danger">Danger</CustomButton>
      </div>
    `
  })
}

// 다양한 변형의 버튼
export const Variants: Story = {
  render: () => ({
    components: { CustomButton },
    template: `
      <div style="display: flex; gap: 16px;">
        <CustomButton variant="solid">Solid</CustomButton>
        <CustomButton variant="outline">Outline</CustomButton>
        <CustomButton variant="ghost">Ghost</CustomButton>
        <CustomButton variant="link">Link</CustomButton>
      </div>
    `
  })
}

// 다양한 크기의 버튼
export const Sizes: Story = {
  render: () => ({
    components: { CustomButton },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <CustomButton size="xs">XS</CustomButton>
        <CustomButton size="sm">SM</CustomButton>
        <CustomButton size="md">MD</CustomButton>
        <CustomButton size="lg">LG</CustomButton>
        <CustomButton size="xl">XL</CustomButton>
      </div>
    `
  })
}
// 정사각형 버튼
export const Square: Story = {
  render: (args: any) => ({
    components: { CustomButton },
    setup() {
      return { args }
    },
    template: '<CustomButton v-bind="args">{{ args.content }}</CustomButton>'
  }),
  args: {
    content: '',
    color: 'brand',
    variant: 'solid',
    size: 'md',
    square: true,
  }
}
