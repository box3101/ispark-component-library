import{d as _e,j as t,k as L,l as Se,m as De,s as Oe,b as g,e as h,y as Fe,u as $e,T as je,z as Ee,B as Le,o as b,A as Be,C as Te,n as j,g as v,f as E,t as We}from"./vue.esm-bundler-X6O22w2E.js";const Je={class:"modal__header"},Xe={class:"modal__title"},Ae={class:"modal__header-actions"},Ne={key:1,class:"modal__footer"},m=_e({__name:"CustomModal",props:{title:{default:""},size:{default:"md"},closable:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},scrollable:{type:Boolean,default:!1},direction:{default:"center"},showFooter:{type:Boolean,default:!0}},emits:["close","confirm"],setup(n,{expose:e,emit:l}){const a=n,s=t(!1),d=t(!1),i=t(null),u=t(0),B=t(0),c=t(0),ge=t(0),r=t(null),he=t(null),p=t(!1),y=t(0),T=l,ye=()=>{p.value?(p.value=!1,y.value>0&&(c.value=y.value)):(p.value=!0,c.value>0&&(y.value=c.value))},Ce=()=>{s.value=!0,Re(),p.value=!1,Le(()=>{if(r.value)if(a.direction==="right"||a.direction==="left")c.value=512,y.value=512,setTimeout(()=>{r.value&&(r.value.style.transition="",a.direction==="right"?(r.value.style.right="0",r.value.style.left="auto",r.value.style.transform="none"):a.direction==="left"&&(r.value.style.left="0",r.value.style.right="auto",r.value.style.transform="none"))},300);else{const o=r.value.getBoundingClientRect();c.value=o.width,y.value=o.width}})},C=()=>{s.value=!1,W(),T("close")},Me=()=>{T("confirm")},xe=()=>{a.closeOnClickOverlay&&C()},Re=()=>{document.body.style.overflow="hidden"},W=()=>{document.body.style.overflow=""},J=o=>{var f;d.value=!0,i.value="left",u.value="touches"in o?o.touches[0].clientX:o.clientX,B.value=c.value,ge.value=((f=r.value)==null?void 0:f.getBoundingClientRect().left)||0,r.value&&(r.value.style.transition="none")},M=o=>{if(!d.value||a.direction!=="right")return;const ke=("touches"in o?o.touches[0].clientX:o.clientX)-u.value;if(i.value==="left"){const X=Math.min(1200,Math.max(400,B.value-ke));c.value=X,r.value&&(r.value.style.width=`${X}px`)}},x=()=>{d.value=!1,i.value=null,r.value&&(r.value.style.transition="")},ze=L(()=>{switch(a.direction){case"top":return"slide-top";case"right":return"slide-right";case"bottom":return"slide-bottom";case"left":return"slide-left";default:return"v"}}),we=L(()=>p.value?{width:"100%",height:"100%",top:"0",right:"0",bottom:"0",left:"0",transform:"none",borderRadius:"0"}:a.direction==="right"&&c.value>0?{width:`${c.value}px`,right:"0",left:"auto",transform:"none"}:a.direction==="left"&&c.value>0?{width:`${c.value}px`,left:"0",right:"auto",transform:"none"}:{});return Se(()=>{document.addEventListener("mousemove",M),document.addEventListener("mouseup",x),document.addEventListener("touchmove",M),document.addEventListener("touchend",x)}),De(()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",M),document.removeEventListener("touchend",x),W()}),e({open:Ce,close:C}),(o,f)=>(b(),Oe(Ee,{to:"body"},[s.value?(b(),g("div",{key:0,class:"modal-overlay",onClick:xe})):h("",!0),Fe(je,{name:ze.value},{default:$e(()=>[s.value?(b(),g("div",{key:0,ref_key:"modalRef",ref:r,class:j(["modal",[`modal--${o.size}`,`modal--${o.direction}`,{"modal--no-footer":!o.showFooter},{"modal--fullscreen":p.value}]]),style:Te(we.value),onClick:f[0]||(f[0]=Be(()=>{},["stop"]))},[v("div",Je,[E(o.$slots,"header",{},()=>[v("h3",Xe,We(o.title),1)]),v("div",Ae,[o.direction==="right"||o.direction==="left"?(b(),g("button",{key:0,class:"modal__fullscreen",onClick:ye,type:"button","aria-label":"전체화면"},[v("span",{class:j(["modal__fullscreen-icon",{"modal__fullscreen-icon--exit":p.value}])},null,2)])):h("",!0),o.closable?(b(),g("button",{key:1,class:"modal__close",onClick:C,type:"button","aria-label":"닫기"},f[1]||(f[1]=[v("span",{class:"modal__close-icon"},null,-1)]))):h("",!0)])]),o.direction==="right"&&!p.value?(b(),g("div",{key:0,class:"modal__resize-handle modal__resize-handle--left",onMousedown:J,onTouchstart:J},null,32)):h("",!0),v("div",{ref_key:"contentRef",ref:he,class:j(["modal__content",{"modal__content--scrollable":o.scrollable,"modal__content--no-footer":!o.showFooter}])},[E(o.$slots,"default")],2),o.showFooter?(b(),g("div",Ne,[E(o.$slots,"footer",{},()=>[v("button",{class:"modal__button modal__button--secondary",onClick:C}," 취소 "),v("button",{class:"modal__button modal__button--primary",onClick:Me}," 확인 ")])])):h("",!0)],6)):h("",!0)]),_:3},8,["name"])]))}}),Ie={title:"Components/CustomModal",component:m,tags:["autodocs"],argTypes:{title:{control:"text",description:"모달 제목"},size:{control:"select",options:["sm","md","lg","xl","full"],description:"모달 크기"},direction:{control:"select",options:["center","top","right","bottom","left"],description:"모달이 나타나는 방향"},closable:{control:"boolean",description:"닫기 버튼 표시 여부"},closeOnClickOverlay:{control:"boolean",description:"오버레이 클릭시 닫기 여부"},scrollable:{control:"boolean",description:"스크롤 가능 여부"},showFooter:{control:"boolean",description:"푸터 표시 여부"}}},R={render:n=>({components:{CustomModal:m},setup(){const e=t();return{args:n,modalRef:e}},template:`
      <div>
        <button @click="modalRef.open()">모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
        >
          <p>기본 모달 내용입니다.</p>
        </CustomModal>
      </div>
    `}),args:{title:"기본 모달",direction:"center"}},z={render:()=>({components:{CustomModal:m},setup(){const n=t(),e=t(),l=t(),a=t(),s=t();return{centerModalRef:n,topModalRef:e,rightModalRef:l,bottomModalRef:a,leftModalRef:s}},template:`
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
    `})},w={render:n=>({components:{CustomModal:m},setup(){const e=t();return{args:n,modalRef:e}},template:`
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
    `}),args:{size:"md",closable:!0}},k={render:n=>({components:{CustomModal:m},setup(){const e=t();return{args:n,modalRef:e}},template:`
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
            ${Array(20).fill(0).map((e,l)=>`<p>내용 ${l+1}</p>`).join("")}
          </div>
        </CustomModal>
      </div>
    `}),args:{title:"스크롤 모달",size:"md",scrollable:!0}},_={render:n=>({components:{CustomModal:m},setup(){const e=t(),l=t("md");return{args:n,modalRef:e,size:l,openModal:s=>{var d;l.value=s,(d=e.value)==null||d.open()}}},template:`
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
    `}),args:{title:"크기 변형",closable:!0}},S={render:n=>({components:{CustomModal:m},setup(){const e=t();return{args:n,modalRef:e}},template:`
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
    `}),args:{title:"푸터 없는 모달",showFooter:!1}},D={render:n=>({components:{CustomModal:m},setup(){const e=t();return{args:n,modalRef:e}},template:`
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
            ${Array(10).fill(0).map((e,l)=>`<p>컨텐츠 ${l+1}</p>`).join("")}
          </div>
        </CustomModal>
      </div>
    `}),args:{title:"사이드 패널",direction:"right",showFooter:!1,scrollable:!0}},O={render:n=>({components:{CustomModal:m},setup(){const e=t(),l=t(`# 마크다운 에디터

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

이 에디터는 전체화면 모드에서 더 편리하게 사용할 수 있습니다.`),a=()=>{var i;(i=e.value)==null||i.open()},s=()=>{var i;(i=e.value)==null||i.close()};return{modalRef:e,textContent:l,handleOpen:a,handleClose:s,handleConfirm:()=>{console.log("입력된 내용:",l.value),s()},args:n}},template:`
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
    `,args:{title:"마크다운 에디터",size:"lg",direction:"right",closable:!0,closeOnClickOverlay:!0,scrollable:!0,showFooter:!0}})},F={render:n=>({components:{CustomModal:m},setup(){const e=t(),l=t(`// JavaScript 코드 에디터
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
`),a=L(()=>l.value.split(`
`).length),s=()=>{var u;(u=e.value)==null||u.open()},d=()=>{var u;(u=e.value)==null||u.close()};return{modalRef:e,codeContent:l,lineCount:a,handleOpen:s,handleClose:d,handleConfirm:()=>{console.log("코드 저장:",l.value),d()},args:n}},template:`
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
    `,args:{title:"JavaScript 코드 에디터",size:"lg",direction:"right",closable:!0,closeOnClickOverlay:!0,scrollable:!0,showFooter:!0}})},$={render:n=>({components:{CustomModal:m},setup(){const e=t(),l=t({name:"",email:"",phone:"",department:"",position:"",startDate:"",salary:"",status:"active"}),a=()=>{var i;(i=e.value)==null||i.open()},s=()=>{var i;(i=e.value)==null||i.close()};return{modalRef:e,formData:l,handleOpen:a,handleClose:s,handleConfirm:()=>{console.log("폼 데이터 제출:",l.value),s()},args:n}},template:`
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
    `,args:{title:"직원 정보 등록",size:"lg",direction:"right",closable:!0,closeOnClickOverlay:!0,scrollable:!0,showFooter:!0}})};var A,N,H;R.parameters={...R.parameters,docs:{...(A=R.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      return {
        args,
        modalRef
      };
    },
    template: \`
      <div>
        <button @click="modalRef.open()">모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
        >
          <p>기본 모달 내용입니다.</p>
        </CustomModal>
      </div>
    \`
  }),
  args: {
    title: '기본 모달',
    direction: 'center'
  }
}`,...(H=(N=R.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var I,U,V;z.parameters={...z.parameters,docs:{...(I=z.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomModal
    },
    setup() {
      const centerModalRef = ref();
      const topModalRef = ref();
      const rightModalRef = ref();
      const bottomModalRef = ref();
      const leftModalRef = ref();
      return {
        centerModalRef,
        topModalRef,
        rightModalRef,
        bottomModalRef,
        leftModalRef
      };
    },
    template: \`
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
    \`
  })
}`,...(V=(U=z.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var q,G,K;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      return {
        args,
        modalRef
      };
    },
    template: \`
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
    \`
  }),
  args: {
    size: 'md',
    closable: true
  }
}`,...(K=(G=w.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var P,Q,Y;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      return {
        args,
        modalRef
      };
    },
    template: \`
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
            \${Array(20).fill(0).map((_, i) => \`<p>내용 \${i + 1}</p>\`).join('')}
          </div>
        </CustomModal>
      </div>
    \`
  }),
  args: {
    title: '스크롤 모달',
    size: 'md',
    scrollable: true
  }
}`,...(Y=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      const size = ref('md');
      const openModal = (newSize: string) => {
        size.value = newSize;
        modalRef.value?.open();
      };
      return {
        args,
        modalRef,
        size,
        openModal
      };
    },
    template: \`
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
    \`
  }),
  args: {
    title: '크기 변형',
    closable: true
  }
}`,...(te=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      return {
        args,
        modalRef
      };
    },
    template: \`
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
    \`
  }),
  args: {
    title: '푸터 없는 모달',
    showFooter: false
  }
}`,...(le=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ae,re,se;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      return {
        args,
        modalRef
      };
    },
    template: \`
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
            \${Array(10).fill(0).map((_, i) => \`<p>컨텐츠 \${i + 1}</p>\`).join('')}
          </div>
        </CustomModal>
      </div>
    \`
  }),
  args: {
    title: '사이드 패널',
    direction: 'right',
    showFooter: false,
    scrollable: true
  }
}`,...(se=(re=D.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,de,ce;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      const textContent = ref(\`# 마크다운 에디터

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
- \\\`코드\\\`

\\\`\\\`\\\`javascript
// 코드 블록
function hello() {
  console.log("Hello, world!");
}
\\\`\\\`\\\`

> 인용문

이 에디터는 전체화면 모드에서 더 편리하게 사용할 수 있습니다.\`);
      const handleOpen = () => {
        modalRef.value?.open();
      };
      const handleClose = () => {
        modalRef.value?.close();
      };
      const handleConfirm = () => {
        console.log('입력된 내용:', textContent.value);
        handleClose();
      };
      return {
        modalRef,
        textContent,
        handleOpen,
        handleClose,
        handleConfirm,
        args
      };
    },
    template: \`
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
    \`,
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
}`,...(ce=(de=O.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ue,pe;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      const codeContent = ref(\`// JavaScript 코드 에디터
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
    return \\\`안녕하세요, \\\${this.name}님!\\\`;
  }
};

// 비동기 함수
async function fetchUserData(userId) {
  try {
    const response = await fetch(\\\`https://api.example.com/users/\\\${userId}\\\`);
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
\`);
      const lineCount = computed(() => {
        return codeContent.value.split('\\n').length;
      });
      const handleOpen = () => {
        modalRef.value?.open();
      };
      const handleClose = () => {
        modalRef.value?.close();
      };
      const handleConfirm = () => {
        console.log('코드 저장:', codeContent.value);
        handleClose();
      };
      return {
        modalRef,
        codeContent,
        lineCount,
        handleOpen,
        handleClose,
        handleConfirm,
        args
      };
    },
    template: \`
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
    \`,
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
}`,...(pe=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var fe,ve,be;$.parameters={...$.parameters,docs:{...(fe=$.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      const formData = ref({
        name: '',
        email: '',
        phone: '',
        department: '',
        position: '',
        startDate: '',
        salary: '',
        status: 'active'
      });
      const handleOpen = () => {
        modalRef.value?.open();
      };
      const handleClose = () => {
        modalRef.value?.close();
      };
      const handleConfirm = () => {
        console.log('폼 데이터 제출:', formData.value);
        handleClose();
      };
      return {
        modalRef,
        formData,
        handleOpen,
        handleClose,
        handleConfirm,
        args
      };
    },
    template: \`
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
    \`,
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
}`,...(be=(ve=$.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Ue=["Default","DirectionalModals","CustomHeaderFooter","ScrollableContent","Sizes","WithoutFooter","SideModalWithoutFooter","SideModalWithTextarea","CodeEditorSideModal","FormSideModal"];export{F as CodeEditorSideModal,w as CustomHeaderFooter,R as Default,z as DirectionalModals,$ as FormSideModal,k as ScrollableContent,O as SideModalWithTextarea,D as SideModalWithoutFooter,_ as Sizes,S as WithoutFooter,Ue as __namedExportsOrder,Ie as default};
