import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import CustomAlert from './CustomAlert.vue'

const meta = {
  title: 'Components/CustomAlert',
  component: CustomAlert,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '알림 제목'
    },
    message: {
      control: 'text',
      description: '알림 메시지'
    },
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: '알림 타입'
    },
    showCancel: {
      control: 'boolean',
      description: '취소 버튼 표시 여부'
    },
    cancelText: {
      control: 'text',
      description: '취소 버튼 텍스트'
    },
    confirmText: {
      control: 'text',
      description: '확인 버튼 텍스트'
    },
    onConfirm: {
      action: 'confirm'
    },
    onCancel: {
      action: 'cancel'
    }
  }
} satisfies Meta<typeof CustomAlert>

export default meta
type Story = StoryObj<typeof meta>

// 기본 알림
export const Default: Story = {
  render: (args) => ({
    components: { CustomAlert },
    setup() {
      const alertRef = ref()
      const handleConfirm = () => console.log('확인 클릭')
      return { args, alertRef, handleConfirm }
    },
    template: `
      <div>
        <button @click="alertRef.open()">알림 열기</button>
        <CustomAlert
          ref="alertRef"
          v-bind="args"
          @confirm="handleConfirm"
        />
      </div>
    `
  }),
  args: {
    message: '알림 메시지입니다.'
  }
}

// 타입별 알림
export const AlertTypes: Story = {
  render: (args) => ({
    components: { CustomAlert },
    setup() {
      const infoAlertRef = ref()
      const successAlertRef = ref()
      const warningAlertRef = ref()
      const errorAlertRef = ref()
      
      const handleConfirm = (type: string) => console.log(`${type} 확인`)
      const handleCancel = (type: string) => console.log(`${type} 취소`)
      
      return { 
        args,
        infoAlertRef,
        successAlertRef,
        warningAlertRef,
        errorAlertRef,
        handleConfirm,
        handleCancel
      }
    },
    template: `
      <div style="display: flex; gap: 1rem;">
        <button @click="infoAlertRef.open()">Info</button>
        <button @click="successAlertRef.open()">Success</button>
        <button @click="warningAlertRef.open()">Warning</button>
        <button @click="errorAlertRef.open()">Error</button>

        <CustomAlert
          ref="infoAlertRef"
          title="정보"
          message="정보성 메시지입니다."
          type="info"
          @confirm="() => handleConfirm('info')"
        />

        <CustomAlert
          ref="successAlertRef"
          title="성공"
          message="작업이 성공적으로 완료되었습니다."
          type="success"
          @confirm="() => handleConfirm('success')"
        />

        <CustomAlert
          ref="warningAlertRef"
          title="주의"
          message="주의가 필요한 작업입니다."
          type="warning"
          showCancel
          @confirm="() => handleConfirm('warning')"
          @cancel="() => handleCancel('warning')"
        />

        <CustomAlert
          ref="errorAlertRef"
          title="오류"
          message="작업 중 오류가 발생했습니다."
          type="error"
          confirmText="다시 시도"
          @confirm="() => handleConfirm('error')"
        />
      </div>
    `
  }),
  args: {
    message: ''
  }
}

// 확인 다이얼로그
export const ConfirmDialog: Story = {
  render: (args) => ({
    components: { CustomAlert },
    setup() {
      const alertRef = ref()
      const handleConfirm = () => console.log('삭제가 완료되었습니다.')
      const handleCancel = () => console.log('삭제가 취소되었습니다.')
      
      return { args, alertRef, handleConfirm, handleCancel }
    },
    template: `
      <div>
        <button @click="alertRef.open()">삭제하기</button>
        <CustomAlert
          ref="alertRef"
          v-bind="args"
          @confirm="handleConfirm"
          @cancel="handleCancel"
        />
      </div>
    `
  }),
  args: {
    title: '삭제 확인',
    message: '정말 이 항목을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.',
    type: 'warning',
    showCancel: true,
    confirmText: '삭제',
    cancelText: '취소'
  }
} 