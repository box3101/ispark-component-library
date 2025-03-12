import type { Meta, StoryObj } from '@storybook/vue3'
import CustomButton from '../components/CustomButton.vue'

const meta = {
  title: 'Components/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['brand', 'gray', 'dark-gray'],
      description: '버튼의 색상을 지정합니다.'
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'ghost', 'link'],
      description: '버튼의 스타일 변형을 지정합니다.'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '버튼의 크기를 지정합니다.'
    },
    disabled: {
      control: 'boolean',
      description: '버튼의 비활성화 상태를 지정합니다.'
    },
    loading: {
      control: 'boolean',
      description: '버튼의 로딩 상태를 지정합니다.'
    },
    icon: {
      control: 'text',
      description: '버튼에 표시할 아이콘 클래스를 지정합니다.'
    },
    trailing: {
      control: 'boolean',
      description: '아이콘을 버튼의 뒤쪽에 배치할지 여부를 지정합니다.'
    },
    square: {
      control: 'boolean',
      description: '버튼을 정사각형 형태로 만들지 여부를 지정합니다.'
    },
    block: {
      control: 'boolean',
      description: '버튼을 블록 레벨 요소로 만들지 여부를 지정합니다.'
    }
  }
} satisfies Meta<typeof CustomButton>

export default meta
type Story = StoryObj<typeof meta>

// 기본 버튼
export const Default: Story = {
  args: {
    default: '기본 버튼',
    color: 'brand'
  }
}

// 색상 변형
export const Colors: Story = {
  render: () => ({
    components: { CustomButton },
    template: `
      <div class="flex gap-4">
        <CustomButton color="brand">브랜드 버튼</CustomButton>
        <CustomButton color="gray">그레이 버튼</CustomButton>
        <CustomButton color="dark-gray">다크 그레이 버튼</CustomButton>
      </div>
    `
  })
}

// 스타일 변형
export const Variants: Story = {
  render: () => ({
    components: { CustomButton },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <CustomButton color="brand">기본 버튼</CustomButton>
          <CustomButton color="brand" variant="outline">아웃라인 버튼</CustomButton>
          <CustomButton color="brand" variant="soft">소프트 버튼</CustomButton>
          <CustomButton color="brand" variant="ghost">고스트 버튼</CustomButton>
          <CustomButton color="brand" variant="link">링크 버튼</CustomButton>
        </div>
      </div>
    `
  })
}

// 크기 변형
export const Sizes: Story = {
  render: () => ({
    components: { CustomButton },
    template: `
      <div class="flex items-center gap-4">
        <CustomButton color="brand" size="xs">XS 버튼</CustomButton>
        <CustomButton color="brand" size="sm">SM 버튼</CustomButton>
        <CustomButton color="brand" size="md">MD 버튼</CustomButton>
        <CustomButton color="brand" size="lg">LG 버튼</CustomButton>
        <CustomButton color="brand" size="xl">XL 버튼</CustomButton>
      </div>
    `
  })
}

// 아이콘 버튼
export const WithIcons: Story = {
  render: () => ({
    components: { CustomButton },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <CustomButton color="brand" icon="icon icon--md icon--settings">아이콘 버튼</CustomButton>
          <CustomButton color="brand" icon="icon icon--md icon--settings" trailing>후행 아이콘</CustomButton>
          <CustomButton color="brand" icon="icon icon--md icon--settings" square />
        </div>
      </div>
    `
  })
}

// 상태 변형
export const States: Story = {
  render: () => ({
    components: { CustomButton },
    template: `
      <div class="flex gap-4">
        <CustomButton color="brand" loading>로딩 버튼</CustomButton>
        <CustomButton color="brand" disabled>비활성화 버튼</CustomButton>
        <CustomButton color="brand" block class="max-w-md">블록 버튼</CustomButton>
      </div>
    `
  })
}