import{d as Re,q as o,j as D,x as ye,y as ke,k as _e,b,e as g,s as ze,l as we,T as Oe,u as Se,z as xe,o as p,v as Fe,A as Le,n as W,g as f,f as x,t as $e}from"./vue.esm-bundler-JCTZ8lj_.js";const Ee={class:"modal__header"},Be={class:"modal__title"},Te={key:1,class:"modal__footer"},i=Re({__name:"CustomModal",props:{title:{default:""},size:{default:"md"},closable:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},scrollable:{type:Boolean,default:!1},direction:{default:"center"},showFooter:{type:Boolean,default:!0}},emits:["close","confirm"],setup(a,{expose:e,emit:n}){const r=a,d=o(!1),u=o(!1),s=o(null),F=o(0),L=o(0),c=o(0),me=o(0),l=o(null),pe=o(null),$=n,fe=()=>{d.value=!0,ge(),xe(()=>{if(l.value)if(r.direction==="right"||r.direction==="left")c.value=512,setTimeout(()=>{l.value&&(l.value.style.transition="",r.direction==="right"?(l.value.style.right="0",l.value.style.left="auto",l.value.style.transform="none"):r.direction==="left"&&(l.value.style.left="0",l.value.style.right="auto",l.value.style.transform="none"))},300);else{const t=l.value.getBoundingClientRect();c.value=t.width}})},v=()=>{d.value=!1,B(),$("close")},ve=()=>{$("confirm")},be=()=>{r.closeOnClickOverlay&&v()},E=t=>{t.key==="Escape"&&r.closable&&v()},ge=()=>{document.body.style.overflow="hidden"},B=()=>{document.body.style.overflow=""},T=t=>{var m;u.value=!0,s.value="left",F.value="touches"in t?t.touches[0].clientX:t.clientX,L.value=c.value,me.value=((m=l.value)==null?void 0:m.getBoundingClientRect().left)||0,l.value&&(l.value.style.transition="none")},h=t=>{if(!u.value||r.direction!=="right")return;const Ce=("touches"in t?t.touches[0].clientX:t.clientX)-F.value;if(s.value==="left"){const X=Math.min(1200,Math.max(400,L.value-Ce));c.value=X,l.value&&(l.value.style.width=`${X}px`)}},M=()=>{u.value=!1,s.value=null,l.value&&(l.value.style.transition="")},he=D(()=>{switch(r.direction){case"top":return"slide-top";case"right":return"slide-right";case"bottom":return"slide-bottom";case"left":return"slide-left";default:return"v"}}),Me=D(()=>r.direction==="right"&&c.value>0?{width:`${c.value}px`,right:"0",left:"auto",transform:"none"}:r.direction==="left"&&c.value>0?{width:`${c.value}px`,left:"0",right:"auto",transform:"none"}:{});return ye(()=>{window.addEventListener("keydown",E),document.addEventListener("mousemove",h),document.addEventListener("mouseup",M),document.addEventListener("touchmove",h),document.addEventListener("touchend",M)}),ke(()=>{window.removeEventListener("keydown",E),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",M),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",M),B()}),e({open:fe,close:v}),(t,m)=>(p(),_e(Se,{to:"body"},[d.value?(p(),b("div",{key:0,class:"modal-overlay",onClick:be})):g("",!0),ze(Oe,{name:he.value},{default:we(()=>[d.value?(p(),b("div",{key:0,ref_key:"modalRef",ref:l,class:W(["modal",[`modal--${t.size}`,`modal--${t.direction}`,{"modal--no-footer":!t.showFooter}]]),style:Le(Me.value),onClick:m[0]||(m[0]=Fe(()=>{},["stop"]))},[f("div",Ee,[x(t.$slots,"header",{},()=>[f("h3",Be,$e(t.title),1)]),t.closable?(p(),b("button",{key:0,class:"modal__close",onClick:v,type:"button","aria-label":"닫기"},m[1]||(m[1]=[f("span",{class:"modal__close-icon"},null,-1)]))):g("",!0)]),t.direction==="right"?(p(),b("div",{key:0,class:"modal__resize-handle modal__resize-handle--left",onMousedown:T,onTouchstart:T},null,32)):g("",!0),f("div",{ref_key:"contentRef",ref:pe,class:W(["modal__content",{"modal__content--scrollable":t.scrollable,"modal__content--no-footer":!t.showFooter}])},[x(t.$slots,"default")],2),t.showFooter?(p(),b("div",Te,[x(t.$slots,"footer",{},()=>[f("button",{class:"modal__button modal__button--secondary",onClick:v}," 취소 "),f("button",{class:"modal__button modal__button--primary",onClick:ve}," 확인 ")])])):g("",!0)],6)):g("",!0)]),_:3},8,["name"])]))}}),De={title:"Components/CustomModal",component:i,tags:["autodocs"],argTypes:{title:{control:"text",description:"모달 제목"},size:{control:"select",options:["sm","md","lg","xl","full"],description:"모달 크기"},direction:{control:"select",options:["center","top","right","bottom","left"],description:"모달이 나타나는 방향"},closable:{control:"boolean",description:"닫기 버튼 표시 여부"},closeOnClickOverlay:{control:"boolean",description:"오버레이 클릭시 닫기 여부"},scrollable:{control:"boolean",description:"스크롤 가능 여부"},showFooter:{control:"boolean",description:"푸터 표시 여부"}}},C={render:a=>({components:{CustomModal:i},setup(){const e=o();return{args:a,modalRef:e}},template:`
      <div>
        <button @click="modalRef.open()">모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
        >
          <p>기본 모달 내용입니다.</p>
        </CustomModal>
      </div>
    `}),args:{title:"기본 모달",direction:"center"}},R={render:()=>({components:{CustomModal:i},setup(){const a=o(),e=o(),n=o(),r=o(),d=o();return{centerModalRef:a,topModalRef:e,rightModalRef:n,bottomModalRef:r,leftModalRef:d}},template:`
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
    `})},y={render:a=>({components:{CustomModal:i},setup(){const e=o();return{args:a,modalRef:e}},template:`
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
    `}),args:{size:"md",closable:!0}},k={render:a=>({components:{CustomModal:i},setup(){const e=o();return{args:a,modalRef:e}},template:`
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
            ${Array(20).fill(0).map((e,n)=>`<p>내용 ${n+1}</p>`).join("")}
          </div>
        </CustomModal>
      </div>
    `}),args:{title:"스크롤 모달",size:"md",scrollable:!0}},_={render:a=>({components:{CustomModal:i},setup(){const e=o(),n=o("md");return{args:a,modalRef:e,size:n,openModal:d=>{var u;n.value=d,(u=e.value)==null||u.open()}}},template:`
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
    `}),args:{title:"크기 변형",closable:!0}},z={render:a=>({components:{CustomModal:i},setup(){const e=o();return{args:a,modalRef:e}},template:`
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
    `}),args:{title:"푸터 없는 모달",showFooter:!1}},w={render:a=>({components:{CustomModal:i},setup(){const e=o();return{args:a,modalRef:e}},template:`
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
            ${Array(10).fill(0).map((e,n)=>`<p>컨텐츠 ${n+1}</p>`).join("")}
          </div>
        </CustomModal>
      </div>
    `}),args:{title:"사이드 패널",direction:"right",showFooter:!1,scrollable:!0}},O={render:a=>({components:{CustomModal:i},setup(){const e=o(),n=o(!1),r=()=>{var s;n.value=!0,(s=e.value)==null||s.open()},d=()=>{var s;n.value=!1,(s=e.value)==null||s.close()};return{modalRef:e,isOpen:n,handleOpen:r,handleClose:d,handleConfirm:()=>{console.log("확인 버튼 클릭"),d()}}},template:`
      <div>
        <button @click="handleOpen">양쪽 리사이즈 모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
          @close="handleClose"
          @confirm="handleConfirm"
        >
          <template #header>
            <h3>양쪽 리사이즈 모달</h3>
          </template>
          <div style="min-height: 300px; padding: 1rem;">
            <p>이 모달은 <strong>왼쪽과 오른쪽</strong> 가장자리를 드래그하여 너비를 조절할 수 있습니다.</p>
            <p>최소 너비는 400px입니다.</p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 1</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 2</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 3</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 4</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
            </div>
          </div>
        </CustomModal>
      </div>
    `,args:{title:"양쪽 리사이즈 모달",size:"lg",closable:!0,closeOnClickOverlay:!0,scrollable:!0,showFooter:!0}})},S={render:a=>({components:{CustomModal:i},setup(){const e=o(),n=o(!1),r=()=>{var s;n.value=!0,(s=e.value)==null||s.open()},d=()=>{var s;n.value=!1,(s=e.value)==null||s.close()};return{modalRef:e,isOpen:n,handleOpen:r,handleClose:d,handleConfirm:()=>{console.log("확인 버튼 클릭"),d()}}},template:`
      <div>
        <button @click="handleOpen">오른쪽 사이드 리사이즈 모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
          @close="handleClose"
          @confirm="handleConfirm"
        >
          <template #header>
            <h3>오른쪽 사이드 리사이즈 모달</h3>
          </template>
          <div style="min-height: 300px; padding: 1rem;">
            <p>이 모달은 <strong>왼쪽 가장자리</strong>를 드래그하여 너비를 조절할 수 있습니다.</p>
            <p>최소 너비는 400px, 최대 너비는 1200px입니다.</p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 1</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 2</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 3</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 4</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
            </div>
          </div>
        </CustomModal>
      </div>
    `,args:{title:"오른쪽 사이드 리사이즈 모달",size:"lg",direction:"right",closable:!0,closeOnClickOverlay:!0,scrollable:!0,showFooter:!0}})};var j,A,N;C.parameters={...C.parameters,docs:{...(j=C.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(N=(A=C.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var V,H,q;R.parameters={...R.parameters,docs:{...(V=R.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(H=R.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var K,U,G;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(U=y.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var I,J,P;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(J=k.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var Q,Y,Z;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,te;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,le,ae;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(le=w.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var re,se,de;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      const isOpen = ref(false);
      const handleOpen = () => {
        isOpen.value = true;
        modalRef.value?.open();
      };
      const handleClose = () => {
        isOpen.value = false;
        modalRef.value?.close();
      };
      const handleConfirm = () => {
        console.log('확인 버튼 클릭');
        handleClose();
      };
      return {
        modalRef,
        isOpen,
        handleOpen,
        handleClose,
        handleConfirm
      };
    },
    template: \`
      <div>
        <button @click="handleOpen">양쪽 리사이즈 모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
          @close="handleClose"
          @confirm="handleConfirm"
        >
          <template #header>
            <h3>양쪽 리사이즈 모달</h3>
          </template>
          <div style="min-height: 300px; padding: 1rem;">
            <p>이 모달은 <strong>왼쪽과 오른쪽</strong> 가장자리를 드래그하여 너비를 조절할 수 있습니다.</p>
            <p>최소 너비는 400px입니다.</p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 1</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 2</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 3</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 4</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
            </div>
          </div>
        </CustomModal>
      </div>
    \`,
    args: {
      title: '양쪽 리사이즈 모달',
      size: 'lg',
      closable: true,
      closeOnClickOverlay: true,
      scrollable: true,
      showFooter: true
    }
  })
}`,...(de=(se=O.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ie,ue,ce;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomModal
    },
    setup() {
      const modalRef = ref();
      const isOpen = ref(false);
      const handleOpen = () => {
        isOpen.value = true;
        modalRef.value?.open();
      };
      const handleClose = () => {
        isOpen.value = false;
        modalRef.value?.close();
      };
      const handleConfirm = () => {
        console.log('확인 버튼 클릭');
        handleClose();
      };
      return {
        modalRef,
        isOpen,
        handleOpen,
        handleClose,
        handleConfirm
      };
    },
    template: \`
      <div>
        <button @click="handleOpen">오른쪽 사이드 리사이즈 모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
          @close="handleClose"
          @confirm="handleConfirm"
        >
          <template #header>
            <h3>오른쪽 사이드 리사이즈 모달</h3>
          </template>
          <div style="min-height: 300px; padding: 1rem;">
            <p>이 모달은 <strong>왼쪽 가장자리</strong>를 드래그하여 너비를 조절할 수 있습니다.</p>
            <p>최소 너비는 400px, 최대 너비는 1200px입니다.</p>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 1</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 2</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 3</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
              <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
                <h4>섹션 4</h4>
                <p>리사이즈 기능을 테스트하기 위한 샘플 컨텐츠입니다.</p>
              </div>
            </div>
          </div>
        </CustomModal>
      </div>
    \`,
    args: {
      title: '오른쪽 사이드 리사이즈 모달',
      size: 'lg',
      direction: 'right',
      closable: true,
      closeOnClickOverlay: true,
      scrollable: true,
      showFooter: true
    }
  })
}`,...(ce=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const We=["Default","DirectionalModals","CustomHeaderFooter","ScrollableContent","Sizes","WithoutFooter","SideModalWithoutFooter","ResizableFromBothSides","ResizableRightSideModal"];export{y as CustomHeaderFooter,C as Default,R as DirectionalModals,O as ResizableFromBothSides,S as ResizableRightSideModal,k as ScrollableContent,w as SideModalWithoutFooter,_ as Sizes,z as WithoutFooter,We as __namedExportsOrder,De as default};
