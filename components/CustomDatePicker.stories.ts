import type { Meta, StoryObj } from '@storybook/vue3'
import CustomDatePicker from './CustomDatePicker.vue'
import { ref } from 'vue'

const meta = {
  title: 'Components/CustomDatePicker',
  component: CustomDatePicker,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/5KxTT4wOoY5BDAWkhtwpfg/Sgate_Pre-work?node-id=319-260&p=f&m=dev'
    }
  },
  argTypes: {
    modelValue: {
      control: 'date',
      description: '선택된 날짜 (단일 선택 모드)',
      table: {
        type: { summary: 'Date' },
        defaultValue: { summary: 'undefined' }
      }
    },
    startDate: {
      control: 'date',
      description: '시작 날짜 (범위 선택 모드)',
      table: {
        type: { summary: 'Date' },
        defaultValue: { summary: 'undefined' }
      }
    },
    endDate: {
      control: 'date',
      description: '종료 날짜 (범위 선택 모드)',
      table: {
        type: { summary: 'Date' },
        defaultValue: { summary: 'undefined' }
      }
    },
    mode: {
      control: 'select',
      options: ['single', 'range'],
      description: '날짜 선택 모드 (단일 또는 범위)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' }
      }
    },
    label: {
      control: 'text',
      description: '입력 필드 레이블',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    placeholder: {
      control: 'text',
      description: '입력 필드 플레이스홀더',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '날짜 선택' }
      }
    },
    help: {
      control: 'text',
      description: '도움말 텍스트',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    error: {
      control: 'text',
      description: '오류 메시지',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      }
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '입력 필드 크기',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
      }
    },
    minDate: {
      control: 'date',
      description: '선택 가능한 최소 날짜',
      table: {
        type: { summary: 'Date' },
        defaultValue: { summary: 'undefined' }
      }
    },
    maxDate: {
      control: 'date',
      description: '선택 가능한 최대 날짜',
      table: {
        type: { summary: 'Date' },
        defaultValue: { summary: 'undefined' }
      }
    },
    yearRange: {
      control: 'object',
      description: '선택 가능한 년도 범위',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '현재 년도 기준 ±10년' }
      }
    }
  }
} satisfies Meta<typeof CustomDatePicker>

export default meta
type Story = StoryObj<typeof meta>

// 기본 단일 날짜 선택 달력
export const Default: Story = {
  args: {
    label: '날짜 선택',
    placeholder: '날짜를 선택하세요',
    mode: 'single'
  },
  render: (args) => ({
    components: { CustomDatePicker },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `
  })
}

// 날짜 범위 선택 달력
export const DateRange: Story = {
  args: {
    label: '기간 선택',
    placeholder: '기간을 선택하세요',
    mode: 'range'
  },
  render: (args) => ({
    components: { CustomDatePicker },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `
  })
}

// 오류 상태 달력
export const WithError: Story = {
  args: {
    label: '날짜 선택',
    placeholder: '날짜를 선택하세요',
    error: '유효한 날짜를 선택해주세요'
  },
  render: (args) => ({
    components: { CustomDatePicker },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `
  })
}

// 도움말이 있는 달력
export const WithHelp: Story = {
  args: {
    label: '날짜 선택',
    placeholder: '날짜를 선택하세요',
    help: '오늘 이후의 날짜만 선택 가능합니다'
  },
  render: (args) => ({
    components: { CustomDatePicker },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `
  })
}

// 비활성화된 달력
export const Disabled: Story = {
  args: {
    label: '날짜 선택',
    placeholder: '날짜를 선택하세요',
    disabled: true
  },
  render: (args) => ({
    components: { CustomDatePicker },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `
  })
}

// 다양한 크기의 달력
export const Sizes: Story = {
  render: () => ({
    components: { CustomDatePicker },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="max-width: 300px;">
          <CustomDatePicker label="Extra Small" size="xs" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Small" size="sm" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Medium (Default)" size="md" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Large" size="lg" />
        </div>
        <div style="max-width: 300px;">
          <CustomDatePicker label="Extra Large" size="xl" />
        </div>
      </div>
    `
  })
}

// 날짜 제한이 있는 달력
export const WithDateLimits: Story = {
  args: {
    label: '날짜 선택 (제한 있음)',
    placeholder: '날짜를 선택하세요',
    minDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1), // 이번 달 1일
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0) // 이번 달 마지막 날
  },
  render: (args) => ({
    components: { CustomDatePicker },
    setup() {
      return { args }
    },
    template: `
      <div style="max-width: 300px;">
        <CustomDatePicker v-bind="args" />
      </div>
    `
  })
}

// 단일 날짜 선택 예시 (선택된 값 표시)
export const SingleDateWithValue: Story = {
  render: () => ({
    components: { CustomDatePicker },
    setup() {
      const selectedDate = ref(new Date())

      const formatDate = (date: Date | null) => {
        if (!date) return '선택된 날짜 없음'
        return date.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }

      return { selectedDate, formatDate }
    },
    template: `
      <div style="max-width: 500px;">
        <CustomDatePicker
          v-model="selectedDate"
          mode="single"
          label="날짜 선택"
          placeholder="날짜를 선택하세요"
        />
        <div style="margin-top: 1rem; padding: 1rem; background-color: #f5f5f5; border-radius: 0.5rem;">
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">선택된 날짜 (v-model):</h3>
          <pre style="margin: 0; font-family: monospace;">{{ formatDate(selectedDate) }}</pre>
          <pre style="margin-top: 0.5rem; font-family: monospace;">{{ selectedDate ? selectedDate.toISOString() : '없음' }}</pre>
        </div>
      </div>
    `
  })
}

// 날짜 범위 선택 예시 (선택된 값 표시)
export const DateRangeWithValues: Story = {
  render: () => ({
    components: { CustomDatePicker },
    setup() {
      const startDate = ref(new Date())
      const endDate = ref(new Date(new Date().setDate(new Date().getDate() + 7))) // 오늘로부터 7일 후

      const formatDate = (date: Date | null) => {
        if (!date) return '선택된 날짜 없음'
        return date.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }

      return { startDate, endDate, formatDate }
    },
    template: `
      <div style="max-width: 500px;">
        <CustomDatePicker
          v-model:startDate="startDate"
          v-model:endDate="endDate"
          mode="range"
          label="기간 선택"
          placeholder="기간을 선택하세요"
        />
        <div style="margin-top: 1rem; padding: 1rem; background-color: #f5f5f5; border-radius: 0.5rem;">
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">선택된 기간 (v-model:startDate, v-model:endDate):</h3>
          <div style="display: flex; gap: 1rem;">
            <div style="flex: 1;">
              <h4 style="margin-top: 0; margin-bottom: 0.25rem; font-size: 0.875rem;">시작일:</h4>
              <pre style="margin: 0; font-family: monospace;">{{ formatDate(startDate) }}</pre>
              <pre style="margin-top: 0.25rem; font-size: 0.75rem; font-family: monospace;">{{ startDate ? startDate.toISOString() : '없음' }}</pre>
            </div>
            <div style="flex: 1;">
              <h4 style="margin-top: 0; margin-bottom: 0.25rem; font-size: 0.875rem;">종료일:</h4>
              <pre style="margin: 0; font-family: monospace;">{{ formatDate(endDate) }}</pre>
              <pre style="margin-top: 0.25rem; font-size: 0.75rem; font-family: monospace;">{{ endDate ? endDate.toISOString() : '없음' }}</pre>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

// 월/년도 선택 기능 예시
export const MonthYearSelector: Story = {
  render: () => ({
    components: { CustomDatePicker },
    setup() {
      const selectedDate = ref(new Date())
      const customYearRange = Array.from({ length: 10 }, (_, i) => 2020 + i) // 2020-2029년

      const formatDate = (date: Date | null) => {
        if (!date) return '선택된 날짜 없음'
        return date.toLocaleDateString('ko-KR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }

      return { selectedDate, formatDate, customYearRange }
    },
    template: `
      <div style="max-width: 500px;">
        <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">기본 월/년도 선택기</h3>
        <p style="margin-top: 0; margin-bottom: 1rem; font-size: 0.875rem; color: #666;">
          달력 헤더의 "월 년도" 텍스트를 클릭하면 월과 년도를 선택할 수 있는 드롭다운이 표시됩니다.
        </p>
        <div style="max-width: 300px; margin-bottom: 2rem;">
          <CustomDatePicker
            v-model="selectedDate"
            mode="single"
            label="날짜 선택"
            placeholder="날짜를 선택하세요"
          />
        </div>

        <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">사용자 정의 년도 범위</h3>
        <p style="margin-top: 0; margin-bottom: 1rem; font-size: 0.875rem; color: #666;">
          yearRange 속성을 사용하여 선택 가능한 년도 범위를 지정할 수 있습니다. (이 예시: 2020-2029년)
        </p>
        <div style="max-width: 300px;">
          <CustomDatePicker
            v-model="selectedDate"
            mode="single"
            label="날짜 선택 (사용자 정의 년도 범위)"
            placeholder="날짜를 선택하세요"
            :yearRange="customYearRange"
          />
        </div>

        <div style="margin-top: 1rem; padding: 1rem; background-color: #f5f5f5; border-radius: 0.5rem;">
          <h3 style="margin-top: 0; margin-bottom: 0.5rem; font-size: 1rem;">선택된 날짜:</h3>
          <pre style="margin: 0; font-family: monospace;">{{ formatDate(selectedDate) }}</pre>
        </div>
      </div>
    `
  })
}