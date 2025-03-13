import type { Meta, StoryObj } from '@storybook/vue3'
import CustomHeading from './CustomHeading.vue'

const meta = {
  title: 'Components/CustomHeading',
  component: CustomHeading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: '제목의 HTML 태그 레벨을 지정합니다. (h1-h6)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1' }
      }
    },
    color: {
      control: 'select',
      options: ['brand', 'gray', 'dark-gray'],
      description: '제목의 색상을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'brand' }
      }
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: '제목의 정렬 방식을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'left' }
      }
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: '제목의 여백을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    icon: {
      control: 'select',
      options: ['', 'icon icon--md icon--settings'],
      description: '제목 앞에 표시할 아이콘을 지정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    trailingIcons: {
      control: { type: 'radio' },
      options: [true, false],
      description: '제목 뒤에 아이콘을 표시할지 여부를 지정합니다. false일 때는 전행 아이콘만 표시하고, true일 때는 전행 아이콘과 함께 후행 아이콘도 표시합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    isIconClickable: {
      control: 'boolean',
      description: '전행 아이콘을 클릭 가능하게 할지 여부를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    },
    isTrailingIconClickable: {
      control: 'boolean',
      description: '후행 아이콘을 클릭 가능하게 할지 여부를 지정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    }
  }
} satisfies Meta<typeof CustomHeading>

export default meta
type Story = StoryObj<typeof meta>

// 기본 제목
export const Default: Story = {
  render: (args: any) => ({
    components: { CustomHeading },
    setup() {
      return { args }
    },
    template: '<CustomHeading v-bind="args">기본 제목</CustomHeading>'
  }),
  args: {
    level: 2,
    color: 'brand',
    align: 'left',
    spacing: 'md',
    icon: ''
  }
}

// 제목 레벨
export const Levels: Story = {
  render: () => ({
    components: { CustomHeading },
    template: `
      <div>
        <CustomHeading :level="1">H1 제목 (4xl)</CustomHeading>
        <CustomHeading :level="2">H2 제목 (3xl)</CustomHeading>
        <CustomHeading :level="3">H3 제목 (2xl)</CustomHeading>
        <CustomHeading :level="4">H4 제목 (xl)</CustomHeading>
        <CustomHeading :level="5">H5 제목 (lg)</CustomHeading>
        <CustomHeading :level="6">H6 제목 (md)</CustomHeading>
      </div>
    `
  })
}

// 정렬
export const Alignment: Story = {
  render: () => ({
    components: { CustomHeading },
    template: `
      <div>
        <CustomHeading :level="2" align="left">왼쪽 정렬 제목</CustomHeading>
        <CustomHeading :level="2" align="center">가운데 정렬 제목</CustomHeading>
        <CustomHeading :level="2" align="right">오른쪽 정렬 제목</CustomHeading>
      </div>
    `
  })
}

// 여백
export const Spacing: Story = {
  render: () => ({
    components: { CustomHeading },
    template: `
      <div style="background-color: #f0f0f0;">
        <CustomHeading :level="2" spacing="none">여백 없음</CustomHeading>
        <CustomHeading :level="2" spacing="sm">작은 여백</CustomHeading>
        <CustomHeading :level="2" spacing="md">중간 여백</CustomHeading>
        <CustomHeading :level="2" spacing="lg">큰 여백</CustomHeading>
      </div>
    `
  })
}

// 아이콘이 있는 제목
export const WithIcon: Story = {
  render: (args) => ({
    components: { CustomHeading },
    setup() {
      return { args }
    },
    template: `
      <div>
        <CustomHeading :level="2" :icon="args.icon">설정 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="3" icon="icon icon--md icon--settings" align="center">홈 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="4" icon="icon icon--md icon--settings" align="right">사용자 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="2" icon="icon icon--md icon--settings">알림 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="3" icon="icon icon--md icon--settings">차트 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="4" icon="icon icon--md icon--settings">정보 아이콘이 있는 제목</CustomHeading>
      </div>
    `
  }),
  args: {
    icon: 'icon icon--md icon--settings'
  }
}

// 클릭 불가능한 아이콘이 있는 제목
export const WithNonClickableIcon: Story = {
  render: (args) => ({
    components: { CustomHeading },
    setup() {
      return { args }
    },
    template: `
      <div>
        <CustomHeading :level="2" :icon="args.icon" :isIconClickable="false">
          클릭 불가능한 전행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="3" icon="icon icon--md icon--settings" :isIconClickable="false" align="center">
          클릭 불가능한 전행 아이콘이 있는 가운데 정렬 제목
        </CustomHeading>
      </div>
    `
  }),
  args: {
    icon: 'icon icon--md icon--settings',
    isIconClickable: false
  }
}

// 후행 아이콘이 있는 제목
export const WithTrailingIcons: Story = {
  render: (args) => ({
    components: { CustomHeading },
    setup() {
      return { args }
    },
    template: `
      <div>
        <CustomHeading :level="2" :trailingIcons="args.trailingIcons">
          후행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="3" :trailingIcons="true">
          여러 후행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="2" icon="icon icon--md icon--settings" :trailingIcons="true">
          앞뒤 아이콘이 모두 있는 제목
        </CustomHeading>
      </div>
    `
  }),
  args: {
    trailingIcons: true
  }
}

// 클릭 불가능한 후행 아이콘이 있는 제목
export const WithNonClickableTrailingIcons: Story = {
  render: (args) => ({
    components: { CustomHeading },
    setup() {
      return { args }
    },
    template: `
      <div>
        <CustomHeading :level="2" :trailingIcons="args.trailingIcons" :isTrailingIconClickable="false">
          클릭 불가능한 후행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="3" :trailingIcons="true" :isTrailingIconClickable="false">
          클릭 불가능한 여러 후행 아이콘이 있는 제목
        </CustomHeading>
      </div>
    `
  }),
  args: {
    trailingIcons: true,
    isTrailingIconClickable: false
  }
}

// 후행 아이콘과 버튼이 있는 제목
export const WithTrailingIconsAndButton: Story = {
  render: (args) => ({
    components: { CustomHeading },
    setup() {
      return { args }
    },
    template: `
      <div>
        <CustomHeading :level="2" :trailingIcons="args.trailingIcons">
          <button class="btn btn--primary" @click.stop="() => alert('버튼이 클릭되었습니다')">
            <i class="icon icon--md icon--settings"></i>
            버튼과 후행 아이콘
          </button>
        </CustomHeading>
        <CustomHeading :level="3" :trailingIcons="true">
          <button class="btn btn--secondary" @click.stop="() => alert('다른 버튼이 클릭되었습니다')">
            다른 버튼
          </button>
        </CustomHeading>
      </div>
    `
  }),
  args: {
    trailingIcons: true
  }
}

// 버튼 내 아이콘
export const IconsInButton: Story = {
  render: () => ({
    components: { CustomHeading },
    template: `
      <div>
        <CustomHeading :level="2">
          <button class="btn btn--primary" @click.stop="() => alert('버튼이 클릭되었습니다')">
            <i class="icon icon--md icon--settings"></i>
            버튼 내 아이콘
          </button>
        </CustomHeading>
        <CustomHeading :level="3">
          <button class="btn btn--secondary" @click.stop="() => alert('설정 버튼이 클릭되었습니다')">
            설정
            <i class="icon icon--md icon--settings"></i>
          </button>
        </CustomHeading>
        <CustomHeading :level="2" :trailingIcons="true">
          <button class="btn btn--primary" @click.stop="() => alert('여러 아이콘과 함께 있는 버튼이 클릭되었습니다')">
            <i class="icon icon--md icon--settings"></i>
            여러 아이콘과 함께 있는 버튼
          </button>
        </CustomHeading>
      </div>
    `
  })
}