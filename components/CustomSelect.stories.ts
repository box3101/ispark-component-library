import type { Meta, StoryObj } from '@storybook/vue3'
import CustomSelect from './CustomSelect.vue'

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
      description: '선택 가능한 옵션 목록'
    },
    placeholder: {
      control: 'text',
      description: '선택되지 않았을 때 표시할 텍스트'
    },
    label: {
      control: 'text',
      description: '선택 필드의 레이블'
    },
    help: {
      control: 'text',
      description: '도움말 텍스트'
    },
    error: {
      control: 'text',
      description: '에러 메시지'
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '크기 옵션'
    },
    showCount: {
      control: 'boolean',
      description: '옵션 개수 표시 여부'
    }
  }
} satisfies Meta<typeof CustomSelect>

export default meta
type Story = StoryObj<typeof meta>

const defaultOptions = [
  { value: '1', label: '옵션 1' },
  { value: '2', label: '옵션 2' },
  { value: '3', label: '옵션 3' },
  { value: '4', label: '옵션 4' }
]

const iconOptions = [
  { value: '1', label: '설정', icon: 'icon-settings' },
  { value: '2', label: '알림', icon: 'icon-bell' },
  { value: '3', label: '사용자', icon: 'icon-user' },
  { value: '4', label: '대시보드', icon: 'icon-chart' }
]

const employeeOptions = [
  {
    value: '1',
    label: '최웅 주임',
    department: '인사팀',
    name: '최웅',
    position: '주임'
  },
  {
    value: '2',
    label: '김지호 부장',
    department: '인사팀',
    name: '김지호',
    position: '부장'
  },
  {
    value: '3',
    label: '이수진 과장',
    department: '인사팀',
    name: '이수진',
    position: '과장'
  },
  {
    value: '4',
    label: '박민준 대리',
    department: '인사팀',
    name: '박민준',
    position: '대리'
  }
]

export const Default: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    placeholder: '선택하세요'
  }
}

export const WithLabel: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    label: '기본 선택',
    placeholder: '선택하세요'
  }
}

export const WithIcons: Story = {
  args: {
    modelValue: '',
    options: iconOptions,
    label: '아이콘 포함',
    placeholder: '선택하세요'
  }
}

export const WithEmployees: Story = {
  args: {
    modelValue: '',
    options: employeeOptions,
    label: '직원 선택',
    placeholder: '이름으로 검색',
    showCount: true
  }
}

export const WithHelp: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    label: '도움말 포함',
    help: '옵션을 선택해주세요.',
    placeholder: '선택하세요'
  }
}

export const WithError: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    label: '에러 상태',
    error: '필수 항목입니다.',
    placeholder: '선택하세요'
  }
}

export const Disabled: Story = {
  args: {
    modelValue: '',
    options: defaultOptions,
    label: '비활성화 상태',
    disabled: true,
    placeholder: '선택할 수 없음'
  }
}

export const Sizes: Story = {
  render: (args) => ({
    components: { CustomSelect },
    setup() {
      return { args }
    },
    template: `
      <div class="space-y-4">
        <CustomSelect v-bind="args" size="xs" label="Extra Small" />
        <CustomSelect v-bind="args" size="sm" label="Small" />
        <CustomSelect v-bind="args" size="md" label="Medium" />
        <CustomSelect v-bind="args" size="lg" label="Large" />
        <CustomSelect v-bind="args" size="xl" label="Extra Large" />
      </div>
    `
  }),
  args: {
    modelValue: '',
    options: defaultOptions,
    placeholder: '선택하세요'
  }
}