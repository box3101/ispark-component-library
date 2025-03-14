import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import CustomModal from './CustomModal.vue'

const meta = {
  title: 'Components/CustomModal',
  component: CustomModal,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '모달 제목'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: '모달 크기'
    },
    direction: {
      control: 'select',
      options: ['center', 'top', 'right', 'bottom', 'left'],
      description: '모달이 나타나는 방향'
    },
    closable: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부'
    },
    closeOnClickOverlay: {
      control: 'boolean',
      description: '오버레이 클릭시 닫기 여부'
    },
    scrollable: {
      control: 'boolean',
      description: '스크롤 가능 여부'
    },
    showFooter: {
      control: 'boolean',
      description: '푸터 표시 여부'
    }
  }
} satisfies Meta<typeof CustomModal>

export default meta
type Story = StoryObj<typeof meta>

// 기본 모달
export const Default: Story = {
  render: (args) => ({
    components: { CustomModal },
    setup() {
      const modalRef = ref()
      return { args, modalRef }
    },
    template: `
      <div>
        <button @click="modalRef.open()">모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
        >
          <p>기본 모달 내용입니다.</p>
        </CustomModal>
      </div>
    `
  }),
  args: {
    title: '기본 모달',
    direction: 'center'
  }
}

// 방향별 모달
export const DirectionalModals: Story = {
  render: () => ({
    components: { CustomModal },
    setup() {
      const modalRefs = {
        center: ref(),
        top: ref(),
        right: ref(),
        bottom: ref(),
        left: ref()
      }
      
      return { modalRefs }
    },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <button @click="modalRefs.center.open()">중앙에서</button>
        <button @click="modalRefs.top.open()">위에서</button>
        <button @click="modalRefs.right.open()">오른쪽에서</button>
        <button @click="modalRefs.bottom.open()">아래에서</button>
        <button @click="modalRefs.left.open()">왼쪽에서</button>

        <CustomModal
          ref="modalRefs.center"
          title="중앙 모달"
          direction="center"
        >
          <p>중앙에서 나타나는 모달입니다.</p>
        </CustomModal>

        <CustomModal
          ref="modalRefs.top"
          title="상단 모달"
          direction="top"
        >
          <p>위에서 아래로 나타나는 모달입니다.</p>
        </CustomModal>

        <CustomModal
          ref="modalRefs.right"
          title="우측 모달"
          direction="right"
        >
          <p>오른쪽에서 왼쪽으로 나타나는 모달입니다.</p>
        </CustomModal>

        <CustomModal
          ref="modalRefs.bottom"
          title="하단 모달"
          direction="bottom"
        >
          <p>아래에서 위로 나타나는 모달입니다.</p>
        </CustomModal>

        <CustomModal
          ref="modalRefs.left"
          title="좌측 모달"
          direction="left"
        >
          <p>왼쪽에서 오른쪽으로 나타나는 모달입니다.</p>
        </CustomModal>
      </div>
    `
  })
}

// 커스텀 헤더와 푸터
export const CustomHeaderFooter: Story = {
  render: (args) => ({
    components: { CustomModal },
    setup() {
      const modalRef = ref()
      return { args, modalRef }
    },
    template: `
      <div>
        <button @click="modalRef.open()">모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
        >
          <template #header>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <i class="icon-settings"></i>
              <h3>커스텀 헤더</h3>
            </div>
          </template>
          
          <p>커스텀 헤더와 푸터가 있는 모달입니다.</p>
          
          <template #footer>
            <button class="modal__button modal__button--secondary">
              삭제
            </button>
            <button class="modal__button modal__button--primary">
              저장
            </button>
          </template>
        </CustomModal>
      </div>
    `
  }),
  args: {
    size: 'md',
    closable: true
  }
}

// 긴 내용이 있는 모달
export const ScrollableContent: Story = {
  render: (args) => ({
    components: { CustomModal },
    setup() {
      const modalRef = ref()
      return { args, modalRef }
    },
    template: `
      <div>
        <button @click="modalRef.open()">모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
        >
          <div style="height: 1000px; padding: 1rem;">
            <h4>긴 내용</h4>
            <p>스크롤이 가능한 긴 내용입니다.</p>
            <p>여러 줄의 내용이 들어갑니다.</p>
            ${Array(20).fill(0).map((_, i) => `<p>내용 ${i + 1}</p>`).join('')}
          </div>
        </CustomModal>
      </div>
    `
  }),
  args: {
    title: '스크롤 모달',
    size: 'md',
    scrollable: true
  }
}

// 크기 변형
export const Sizes: Story = {
  render: (args) => ({
    components: { CustomModal },
    setup() {
      const modalRef = ref()
      const size = ref('md')
      
      const openModal = (newSize: string) => {
        size.value = newSize
        modalRef.value?.open()
      }
      
      return { args, modalRef, size, openModal }
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <button @click="openModal('sm')">Small</button>
        <button @click="openModal('md')">Medium</button>
        <button @click="openModal('lg')">Large</button>
        <button @click="openModal('xl')">Extra Large</button>
        <button @click="openModal('full')">Full</button>
        
        <CustomModal
          ref="modalRef"
          v-bind="args"
          :size="size"
        >
          <p>{{ size }} 크기의 모달입니다.</p>
        </CustomModal>
      </div>
    `
  }),
  args: {
    title: '크기 변형',
    closable: true
  }
}

// 푸터 없는 모달
export const WithoutFooter: Story = {
  render: (args) => ({
    components: { CustomModal },
    setup() {
      const modalRef = ref()
      return { args, modalRef }
    },
    template: `
      <div>
        <button @click="modalRef.open()">푸터 없는 모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
        >
          <p>푸터가 없는 모달입니다.</p>
          <p>컨텐츠만 표시됩니다.</p>
        </CustomModal>
      </div>
    `
  }),
  args: {
    title: '푸터 없는 모달',
    showFooter: false
  }
}

// 사이드 모달 (푸터 없음)
export const SideModalWithoutFooter: Story = {
  render: (args) => ({
    components: { CustomModal },
    setup() {
      const modalRef = ref()
      return { args, modalRef }
    },
    template: `
      <div>
        <button @click="modalRef.open()">사이드 모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
        >
          <div style="padding: 1rem;">
            <h4>사이드 패널</h4>
            <p>푸터 없이 전체 높이를 사용하는 사이드 모달입니다.</p>
            ${Array(10).fill(0).map((_, i) => `<p>컨텐츠 ${i + 1}</p>`).join('')}
          </div>
        </CustomModal>
      </div>
    `
  }),
  args: {
    title: '사이드 패널',
    direction: 'right',
    showFooter: false,
    scrollable: true
  }
} 