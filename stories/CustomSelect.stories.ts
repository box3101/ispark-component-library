import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import CustomSelect from '../components/CustomSelect.vue'

const meta = {
  title: 'Components/CustomSelect',
  component: CustomSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '선택된 값'
    },
    options: {
      control: 'object',
      description: '선택 옵션 배열'
    },
    label: {
      control: 'text',
      description: '라벨 텍스트'
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '셀렉트 박스의 크기'
    },
    error: {
      control: 'text',
      description: '에러 메시지'
    },
    help: {
      control: 'text',
      description: '도움말 텍스트'
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태'
    }
  }
} satisfies Meta<typeof CustomSelect>

export default meta
type Story = StoryObj<typeof meta>

const baseOptions = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
  { value: 'option5', label: '옵션 5' }
]

const iconOptions = [
  { value: 'dashboard', label: '대시보드', icon: 'icon icon--md icon--chart-bar' },
  { value: 'users', label: '사용자 관리', icon: 'icon icon--md icon--users' },
  { value: 'settings', label: '설정', icon: 'icon icon--md icon--settings' },
  { value: 'calendar', label: '일정 관리', icon: 'icon icon--md icon--calendar' },
  { value: 'notifications', label: '알림', icon: 'icon icon--md icon--bell' }
]

const imageOptions = [
  {
    value: 'user1',
    label: '김철수',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    value: 'user2',
    label: '이영희',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    value: 'user3',
    label: '박지성',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    value: 'user4',
    label: '최민지',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  }
]

// 기본 셀렉트
export const Default: Story = {
  args: {
    modelValue: '',
    options: baseOptions,
    label: '기본 셀렉트',
    placeholder: '옵션을 선택하세요'
  }
}

// 아이콘이 있는 셀렉트
export const WithIcons: Story = {
  args: {
    modelValue: '',
    options: iconOptions,
    label: '아이콘 셀렉트',
    placeholder: '메뉴를 선택하세요'
  }
}

// 프로필 이미지가 있는 셀렉트
export const WithImages: Story = {
  args: {
    modelValue: '',
    options: imageOptions,
    label: '프로필 셀렉트',
    placeholder: '팀원을 선택하세요'
  }
}

// 크기 변형
export const Sizes: Story = {
  render: () => ({
    components: { CustomSelect },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div class="flex flex-col gap-4">
        <CustomSelect
          v-model="value"
          :options="options"
          label="XS 사이즈"
          size="xs"
          placeholder="옵션을 선택하세요"
        />
        <CustomSelect
          v-model="value"
          :options="options"
          label="SM 사이즈"
          size="sm"
          placeholder="옵션을 선택하세요"
        />
        <CustomSelect
          v-model="value"
          :options="options"
          label="MD 사이즈 (기본)"
          size="md"
          placeholder="옵션을 선택하세요"
        />
        <CustomSelect
          v-model="value"
          :options="options"
          label="LG 사이즈"
          size="lg"
          placeholder="옵션을 선택하세요"
        />
        <CustomSelect
          v-model="value"
          :options="options"
          label="XL 사이즈"
          size="xl"
          placeholder="옵션을 선택하세요"
        />
      </div>
    `,
    data() {
      return {
        options: baseOptions
      }
    }
  })
}

// 상태 변형
export const States: Story = {
  render: () => ({
    components: { CustomSelect },
    setup() {
      const value = ref('')
      return { value }
    },
    template: `
      <div class="flex flex-col gap-4">
        <CustomSelect
          v-model="value"
          :options="options"
          label="에러 상태"
          error="필수 항목입니다"
          placeholder="옵션을 선택하세요"
        />
        <CustomSelect
          v-model="value"
          :options="options"
          label="비활성화 상태"
          disabled
          placeholder="옵션을 선택하세요"
        />
        <CustomSelect
          v-model="value"
          :options="options"
          label="도움말이 있는 상태"
          help="추가 정보를 제공하는 도움말입니다"
          placeholder="옵션을 선택하세요"
        />
      </div>
    `,
    data() {
      return {
        options: baseOptions
      }
    }
  })
}