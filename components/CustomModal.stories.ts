import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, computed } from 'vue'
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
      const centerModalRef = ref()
      const topModalRef = ref()
      const rightModalRef = ref()
      const bottomModalRef = ref()
      const leftModalRef = ref()

      return {
        centerModalRef,
        topModalRef,
        rightModalRef,
        bottomModalRef,
        leftModalRef
      }
    },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <button @click="centerModalRef.open()">중앙에서</button>
        <button @click="topModalRef.open()">위에서</button>
        <button @click="rightModalRef.open()">오른쪽에서</button>
        <button @click="bottomModalRef.open()">아래에서</button>
        <button @click="leftModalRef.open()">왼쪽에서</button>

        <CustomModal
          ref="centerModalRef"
          title="중앙 모달"
          direction="center"
        >
          <p>중앙에서 나타나는 모달입니다.</p>
        </CustomModal>

        <CustomModal
          ref="topModalRef"
          title="상단 모달"
          direction="top"
        >
          <p>위에서 아래로 나타나는 모달입니다.</p>
        </CustomModal>

        <CustomModal
          ref="rightModalRef"
          title="우측 모달"
          direction="right"
        >
          <p>오른쪽에서 왼쪽으로 나타나는 모달입니다.</p>
        </CustomModal>

        <CustomModal
          ref="bottomModalRef"
          title="하단 모달"
          direction="bottom"
        >
          <p>아래에서 위로 나타나는 모달입니다.</p>
        </CustomModal>

        <CustomModal
          ref="leftModalRef"
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
            <p>이 모달은 화면 오른쪽에 고정되어 있으며, 왼쪽 가장자리를 드래그하여 너비를 조절할 수 있습니다.</p>
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

export const SideModalWithTextarea: Story = {
  render: (args) => ({
    components: { CustomModal },
    setup() {
      const modalRef = ref()
      const textContent = ref(`# 마크다운 에디터

이 텍스트 영역에 마크다운 형식으로 내용을 작성할 수 있습니다.

## 사용 방법
1. 텍스트를 입력하세요
2. 오른쪽 상단의 전체화면 버튼을 클릭하면 더 넓은 화면에서 편집할 수 있습니다
3. 완료 후 확인 버튼을 클릭하세요

## 마크다운 예시
- **굵은 글씨**
- *기울임 글씨*
- ~~취소선~~
- [링크](https://example.com)
- \`코드\`

\`\`\`javascript
// 코드 블록
function hello() {
  console.log("Hello, world!");
}
\`\`\`

> 인용문

이 에디터는 전체화면 모드에서 더 편리하게 사용할 수 있습니다.`)

      const handleOpen = () => {
        modalRef.value?.open()
      }

      const handleClose = () => {
        modalRef.value?.close()
      }

      const handleConfirm = () => {
        console.log('입력된 내용:', textContent.value)
        handleClose()
      }

      return {
        modalRef,
        textContent,
        handleOpen,
        handleClose,
        handleConfirm,
        args
      }
    },
    template: `
      <div>
        <button @click="handleOpen">텍스트 입력 가능한 사이드 모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
          direction="right"
          @close="handleClose"
          @confirm="handleConfirm"
        >
          <div class="textarea-container" style="display: flex; flex-direction: column; height: 100%; padding: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <h4 style="margin: 0;">마크다운 에디터</h4>
              <div style="font-size: 0.875rem; color: #6b7280;">
                <span>* 오른쪽 상단의 전체화면 버튼을 클릭하면 더 넓은 화면에서 편집할 수 있습니다.</span>
              </div>
            </div>

            <div style="flex-grow: 1; display: flex; flex-direction: column;">
              <textarea
                id="content-textarea"
                v-model="textContent"
                style="flex-grow: 1; min-height: 300px; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; resize: none; font-family: monospace; font-size: 0.875rem; line-height: 1.6; background-color: #f9fafb;"
                placeholder="여기에 내용을 입력하세요..."
              ></textarea>
            </div>

            <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
              <div style="font-size: 0.75rem; color: #6b7280;">
                마크다운 형식으로 작성할 수 있습니다.
              </div>
              <div style="font-size: 0.75rem; color: #6b7280;">
                <span>글자 수: {{ textContent.length }}</span>
              </div>
            </div>
          </div>
        </CustomModal>
      </div>
    `,
    args: {
      title: '마크다운 에디터',
      size: 'lg',
      direction: 'right',
      closable: true,
      closeOnClickOverlay: true,
      scrollable: true,
      showFooter: true
    }
  })
}

export const CodeEditorSideModal: Story = {
  render: (args) => ({
    components: { CustomModal },
    setup() {
      const modalRef = ref()
      const codeContent = ref(`// JavaScript 코드 에디터
function calculateSum(a, b) {
  return a + b;
}

// 배열 메서드 예시
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 객체 리터럴
const user = {
  name: '홍길동',
  age: 30,
  isAdmin: false,
  permissions: ['read', 'write'],
  
  greet() {
    return \`안녕하세요, \${this.name}님!\`;
  }
};

// 비동기 함수
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('사용자 데이터를 가져오는 중 오류 발생:', error);
    return null;
  }
}

// 클래스 정의
class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(value) {
    this.result += value;
    return this;
  }
  
  subtract(value) {
    this.result -= value;
    return this;
  }
  
  getResult() {
    return this.result;
  }
}

// 사용 예시
const calc = new Calculator();
const finalResult = calc.add(10).subtract(5).add(3).getResult();
console.log(finalResult); // 8
`)

      const lineCount = computed(() => {
        return codeContent.value.split('\n').length;
      })

      const handleOpen = () => {
        modalRef.value?.open()
      }

      const handleClose = () => {
        modalRef.value?.close()
      }

      const handleConfirm = () => {
        console.log('코드 저장:', codeContent.value)
        handleClose()
      }

      return {
        modalRef,
        codeContent,
        lineCount,
        handleOpen,
        handleClose,
        handleConfirm,
        args
      }
    },
    template: `
      <div>
        <button @click="handleOpen">코드 에디터 사이드 모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
          direction="right"
          @close="handleClose"
          @confirm="handleConfirm"
        >
          <div class="code-editor-container" style="display: flex; flex-direction: column; height: 100%; padding: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <h4 style="margin: 0;">JavaScript 코드 에디터</h4>
              <div style="font-size: 0.875rem; color: #6b7280;">
                <span>* 오른쪽 상단의 전체화면 버튼을 클릭하면 더 넓은 화면에서 편집할 수 있습니다.</span>
              </div>
            </div>

            <div style="flex-grow: 1; display: flex; position: relative; border: 1px solid #e5e7eb; border-radius: 0.375rem; overflow: hidden;">
              <!-- 줄 번호 영역 -->
              <div style="width: 3rem; background-color: #f3f4f6; padding: 0.5rem 0; text-align: right; border-right: 1px solid #e5e7eb; font-family: monospace; font-size: 0.875rem; user-select: none; color: #6b7280;">
                <div v-for="i in lineCount" :key="i" style="padding: 0 0.5rem;">{{ i }}</div>
              </div>
              
              <!-- 코드 에디터 영역 -->
              <textarea
                v-model="codeContent"
                style="flex-grow: 1; min-height: 300px; padding: 0.5rem; border: none; resize: none; font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 0.875rem; line-height: 1.6; background-color: #1e1e1e; color: #d4d4d4; outline: none; tab-size: 2;"
                spellcheck="false"
                @keydown.tab.prevent="codeContent += '  '"
              ></textarea>
            </div>

            <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
              <div style="font-size: 0.75rem; color: #6b7280;">
                JavaScript 코드를 작성하고 편집할 수 있습니다.
              </div>
              <div style="font-size: 0.75rem; color: #6b7280;">
                <span>줄 수: {{ lineCount }}</span>
              </div>
            </div>
          </div>
        </CustomModal>
      </div>
    `,
    args: {
      title: 'JavaScript 코드 에디터',
      size: 'lg',
      direction: 'right',
      closable: true,
      closeOnClickOverlay: true,
      scrollable: true,
      showFooter: true
    }
  })
}

export const FormSideModal: Story = {
  render: (args) => ({
    components: { CustomModal },
    setup() {
      const modalRef = ref()
      const formData = ref({
        name: '',
        email: '',
        phone: '',
        department: '',
        position: '',
        startDate: '',
        salary: '',
        status: 'active'
      })

      const handleOpen = () => {
        modalRef.value?.open()
      }

      const handleClose = () => {
        modalRef.value?.close()
      }

      const handleConfirm = () => {
        console.log('폼 데이터 제출:', formData.value)
        handleClose()
      }

      return {
        modalRef,
        formData,
        handleOpen,
        handleClose,
        handleConfirm,
        args
      }
    },
    template: `
      <div>
        <button @click="handleOpen">폼 입력 사이드 모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
          direction="right"
          @close="handleClose"
          @confirm="handleConfirm"
        >
          <div style="padding: 1rem;">
            <h4 style="margin-top: 0;">직원 정보 입력</h4>
            <p style="margin-bottom: 1.5rem; color: #6b7280;">아래 양식을 작성하여 새 직원 정보를 등록하세요.</p>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
              <!-- 이름 -->
              <div style="display: flex; flex-direction: column;">
                <label style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">이름 *</label>
                <input 
                  v-model="formData.name" 
                  type="text" 
                  style="padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; font-size: 0.875rem;"
                  placeholder="홍길동"
                />
              </div>
              
              <!-- 이메일 -->
              <div style="display: flex; flex-direction: column;">
                <label style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">이메일 *</label>
                <input 
                  v-model="formData.email" 
                  type="email" 
                  style="padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; font-size: 0.875rem;"
                  placeholder="example@company.com"
                />
              </div>
              
              <!-- 전화번호 -->
              <div style="display: flex; flex-direction: column;">
                <label style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">전화번호</label>
                <input 
                  v-model="formData.phone" 
                  type="tel" 
                  style="padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; font-size: 0.875rem;"
                  placeholder="010-1234-5678"
                />
              </div>
              
              <!-- 부서 -->
              <div style="display: flex; flex-direction: column;">
                <label style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">부서 *</label>
                <select 
                  v-model="formData.department" 
                  style="padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; font-size: 0.875rem; background-color: white;"
                >
                  <option value="">선택하세요</option>
                  <option value="development">개발</option>
                  <option value="design">디자인</option>
                  <option value="marketing">마케팅</option>
                  <option value="sales">영업</option>
                  <option value="hr">인사</option>
                </select>
              </div>
              
              <!-- 직급 -->
              <div style="display: flex; flex-direction: column;">
                <label style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">직급 *</label>
                <select 
                  v-model="formData.position" 
                  style="padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; font-size: 0.875rem; background-color: white;"
                >
                  <option value="">선택하세요</option>
                  <option value="intern">인턴</option>
                  <option value="staff">사원</option>
                  <option value="senior">주임</option>
                  <option value="manager">대리</option>
                  <option value="director">과장</option>
                  <option value="executive">임원</option>
                </select>
              </div>
              
              <!-- 입사일 -->
              <div style="display: flex; flex-direction: column;">
                <label style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">입사일 *</label>
                <input 
                  v-model="formData.startDate" 
                  type="date" 
                  style="padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; font-size: 0.875rem;"
                />
              </div>
              
              <!-- 연봉 -->
              <div style="display: flex; flex-direction: column;">
                <label style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">연봉 (만원)</label>
                <input 
                  v-model="formData.salary" 
                  type="number" 
                  style="padding: 0.5rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; font-size: 0.875rem;"
                  placeholder="3000"
                />
              </div>
              
              <!-- 상태 -->
              <div style="display: flex; flex-direction: column; grid-column: span 2;">
                <label style="font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">상태</label>
                <div style="display: flex; gap: 1rem;">
                  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                    <input type="radio" v-model="formData.status" value="active" />
                    <span>재직중</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                    <input type="radio" v-model="formData.status" value="onboarding" />
                    <span>입사예정</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                    <input type="radio" v-model="formData.status" value="leave" />
                    <span>휴직중</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-size: 0.75rem; color: #6b7280;">
              * 표시된 항목은 필수 입력 사항입니다.
            </div>
          </div>
        </CustomModal>
      </div>
    `,
    args: {
      title: '직원 정보 등록',
      size: 'lg',
      direction: 'right',
      closable: true,
      closeOnClickOverlay: true,
      scrollable: true,
      showFooter: true
    }
  })
}
