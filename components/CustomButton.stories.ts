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
      options: ['brand', 'gray', 'white'],
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
        'icon--settings',
        'icon--chart-bar',
        'icon--users',
        'icon--calendar',
        'icon--bell'
      ],
      description: '버튼에 표시할 아이콘 클래스를 지정합니다.',
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
      description: '버튼의 로딩 상태를 지정합니다.',
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
    square: {
      control: 'boolean',
      description: '버튼을 정사각형 형태로 만들지 여부를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
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
  render: (args) => ({
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
    icon: "icon--users",
    trailing: true,
    disabled: true
  }
}