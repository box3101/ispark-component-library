import{d as X,q as n,x as Y,y as Z,k as oo,s as eo,l as to,T as no,u as lo,o as u,b as R,e as h,g as r,v as ao,n as w,f as y,t as so}from"./vue.esm-bundler-jYkWp-3M.js";const ro={class:"modal__header"},io={class:"modal__title"},co={key:0,class:"modal__footer"},a=X({__name:"CustomModal",props:{title:{default:""},size:{default:"md"},closable:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},scrollable:{type:Boolean,default:!1},direction:{default:"center"},showFooter:{type:Boolean,default:!0}},emits:["close","confirm"],setup(e,{expose:o,emit:l}){const d=e,s=n(!1),i=l,I=()=>{s.value=!0,Q()},c=()=>{s.value=!1,_(),i("close")},J=()=>{i("confirm")},P=()=>{d.closeOnClickOverlay&&c()},k=t=>{t.key==="Escape"&&d.closable&&c()},Q=()=>{document.body.style.overflow="hidden"},_=()=>{document.body.style.overflow=""};return Y(()=>{window.addEventListener("keydown",k)}),Z(()=>{window.removeEventListener("keydown",k),_()}),o({open:I,close:c}),(t,m)=>(u(),oo(lo,{to:"body"},[eo(no,{name:"modal-"+t.direction},{default:to(()=>[s.value?(u(),R("div",{key:0,class:"modal-overlay",onClick:P},[r("div",{class:w(["modal",[`modal--${t.size}`,`modal--${t.direction}`,{"modal--no-footer":!t.showFooter}]]),onClick:m[0]||(m[0]=ao(()=>{},["stop"]))},[r("div",ro,[y(t.$slots,"header",{},()=>[r("h3",io,so(t.title),1)]),t.closable?(u(),R("button",{key:0,class:"modal__close",onClick:c,type:"button","aria-label":"닫기"},m[1]||(m[1]=[r("span",{class:"modal__close-icon"},null,-1)]))):h("",!0)]),r("div",{class:w(["modal__content",{"modal__content--scrollable":t.scrollable,"modal__content--no-footer":!t.showFooter}])},[y(t.$slots,"default")],2),t.showFooter?(u(),R("div",co,[y(t.$slots,"footer",{},()=>[r("button",{class:"modal__button modal__button--secondary",onClick:c}," 취소 "),r("button",{class:"modal__button modal__button--primary",onClick:J}," 확인 ")])])):h("",!0)],2)])):h("",!0)]),_:3},8,["name"])]))}}),uo={title:"Components/CustomModal",component:a,tags:["autodocs"],argTypes:{title:{control:"text",description:"모달 제목"},size:{control:"select",options:["sm","md","lg","xl","full"],description:"모달 크기"},direction:{control:"select",options:["center","top","right","bottom","left"],description:"모달이 나타나는 방향"},closable:{control:"boolean",description:"닫기 버튼 표시 여부"},closeOnClickOverlay:{control:"boolean",description:"오버레이 클릭시 닫기 여부"},scrollable:{control:"boolean",description:"스크롤 가능 여부"},showFooter:{control:"boolean",description:"푸터 표시 여부"}}},p={render:e=>({components:{CustomModal:a},setup(){const o=n();return{args:e,modalRef:o}},template:`
      <div>
        <button @click="modalRef.open()">모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
        >
          <p>기본 모달 내용입니다.</p>
        </CustomModal>
      </div>
    `}),args:{title:"기본 모달",direction:"center"}},f={render:()=>({components:{CustomModal:a},setup(){const e=n(),o=n(),l=n(),d=n(),s=n();return{centerModalRef:e,topModalRef:o,rightModalRef:l,bottomModalRef:d,leftModalRef:s}},template:`
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
    `})},b={render:e=>({components:{CustomModal:a},setup(){const o=n();return{args:e,modalRef:o}},template:`
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
    `}),args:{size:"md",closable:!0}},M={render:e=>({components:{CustomModal:a},setup(){const o=n();return{args:e,modalRef:o}},template:`
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
            ${Array(20).fill(0).map((o,l)=>`<p>내용 ${l+1}</p>`).join("")}
          </div>
        </CustomModal>
      </div>
    `}),args:{title:"스크롤 모달",size:"md",scrollable:!0}},g={render:e=>({components:{CustomModal:a},setup(){const o=n(),l=n("md");return{args:e,modalRef:o,size:l,openModal:s=>{var i;l.value=s,(i=o.value)==null||i.open()}}},template:`
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
    `}),args:{title:"크기 변형",closable:!0}},C={render:e=>({components:{CustomModal:a},setup(){const o=n();return{args:e,modalRef:o}},template:`
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
    `}),args:{title:"푸터 없는 모달",showFooter:!1}},v={render:e=>({components:{CustomModal:a},setup(){const o=n();return{args:e,modalRef:o}},template:`
      <div>
        <button @click="modalRef.open()">사이드 모달 열기</button>
        <CustomModal
          ref="modalRef"
          v-bind="args"
        >
          <div style="padding: 1rem;">
            <h4>사이드 패널</h4>
            <p>푸터 없이 전체 높이를 사용하는 사이드 모달입니다.</p>
            ${Array(10).fill(0).map((o,l)=>`<p>컨텐츠 ${l+1}</p>`).join("")}
          </div>
        </CustomModal>
      </div>
    `}),args:{title:"사이드 패널",direction:"right",showFooter:!1,scrollable:!0}};var z,S,F;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(F=(S=p.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var $,x,O;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(O=(x=f.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var B,E,D;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(E=b.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var L,j,A;M.parameters={...M.parameters,docs:{...(L=M.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(j=M.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var T,W,N;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(W=g.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var V,H,q;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(H=C.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var K,U,G;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(G=(U=v.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const po=["Default","DirectionalModals","CustomHeaderFooter","ScrollableContent","Sizes","WithoutFooter","SideModalWithoutFooter"];export{b as CustomHeaderFooter,p as Default,f as DirectionalModals,M as ScrollableContent,v as SideModalWithoutFooter,g as Sizes,C as WithoutFooter,po as __namedExportsOrder,uo as default};
