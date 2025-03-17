import{d as L,j as c,s as S,y as V,u as D,T as E,z as $,o as n,b as r,e as u,g as e,A as H,n as N,t as m}from"./vue.esm-bundler-X6O22w2E.js";const Z={key:0,class:"alert__icon-symbol",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},z={key:1,class:"alert__icon-symbol",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I={key:2,class:"alert__icon-symbol",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W={key:3,class:"alert__icon-symbol",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},q={class:"alert__content"},F={key:0,class:"alert__title"},G={class:"alert__message"},J={class:"alert__buttons"},h=L({__name:"CustomAlert",props:{title:{default:""},message:{},type:{default:void 0},showCancel:{type:Boolean,default:!1},cancelText:{default:"취소"},confirmText:{default:"확인"},closeOnClickOverlay:{type:Boolean,default:!0}},emits:["cancel","confirm"],setup(s,{expose:l,emit:i}){const f=s,d=c(!1),k=i,w=()=>{d.value=!0,document.body.style.overflow="hidden"},a=()=>{d.value=!1,document.body.style.overflow=""},y=()=>{a(),k("cancel")},B=()=>{a(),k("confirm")},O=()=>{f.closeOnClickOverlay&&y()};return l({open:w,close:a}),(t,o)=>(n(),S($,{to:"body"},[V(E,{name:"alert"},{default:D(()=>[d.value?(n(),r("div",{key:0,class:"alert-overlay",onClick:O},[e("div",{class:"alert",onClick:o[0]||(o[0]=H(()=>{},["stop"]))},[t.type?(n(),r("div",{key:0,class:N(["alert__icon","alert__icon--"+t.type])},[t.type==="info"?(n(),r("svg",Z,o[1]||(o[1]=[e("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{d:"M12 16V12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{d:"M12 8H12.01",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):t.type==="success"?(n(),r("svg",z,o[2]||(o[2]=[e("path",{d:"M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{d:"M22 4L12 14.01L9 11.01",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):t.type==="warning"?(n(),r("svg",I,o[3]||(o[3]=[e("path",{d:"M10.29 3.86L1.82 18C1.64537 18.3024 1.55296 18.6453 1.55199 18.9945C1.55101 19.3437 1.64149 19.6871 1.81442 19.9905C1.98736 20.2939 2.23673 20.5467 2.53771 20.7238C2.83869 20.9009 3.18074 20.9962 3.53 21H20.47C20.8192 20.9962 21.1613 20.9009 21.4623 20.7238C21.7632 20.5467 22.0126 20.2939 22.1855 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3437 2.89725 12 2.89725C11.6563 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{d:"M12 9V13",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{d:"M12 17H12.01",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):t.type==="error"?(n(),r("svg",W,o[4]||(o[4]=[e("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{d:"M15 9L9 15",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{d:"M9 9L15 15",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)]))):u("",!0)],2)):u("",!0),e("div",q,[t.title?(n(),r("h3",F,m(t.title),1)):u("",!0),e("p",G,m(t.message),1)]),e("div",J,[t.showCancel?(n(),r("button",{key:0,class:"alert__button alert__button--secondary",onClick:y},m(t.cancelText),1)):u("",!0),e("button",{class:"alert__button alert__button--primary",onClick:B},m(t.confirmText),1)])])])):u("",!0)]),_:1})]))}}),P={title:"Components/CustomAlert",component:h,tags:["autodocs"],argTypes:{title:{control:"text",description:"알림 제목"},message:{control:"text",description:"알림 메시지"},type:{control:"select",options:["info","success","warning","error"],description:"알림 타입"},showCancel:{control:"boolean",description:"취소 버튼 표시 여부"},cancelText:{control:"text",description:"취소 버튼 텍스트"},confirmText:{control:"text",description:"확인 버튼 텍스트"},onConfirm:{action:"confirm"},onCancel:{action:"cancel"}}},p={render:s=>({components:{CustomAlert:h},setup(){const l=c();return{args:s,alertRef:l,handleConfirm:()=>console.log("확인 클릭")}},template:`
      <div>
        <button @click="alertRef.open()">알림 열기</button>
        <CustomAlert
          ref="alertRef"
          v-bind="args"
          @confirm="handleConfirm"
        />
      </div>
    `}),args:{message:"알림 메시지입니다."}},C={render:s=>({components:{CustomAlert:h},setup(){const l=c(),i=c(),f=c(),d=c();return{args:s,infoAlertRef:l,successAlertRef:i,warningAlertRef:f,errorAlertRef:d,handleConfirm:a=>console.log(`${a} 확인`),handleCancel:a=>console.log(`${a} 취소`)}},template:`
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
    `}),args:{message:""}},g={render:s=>({components:{CustomAlert:h},setup(){const l=c();return{args:s,alertRef:l,handleConfirm:()=>console.log("삭제가 완료되었습니다."),handleCancel:()=>console.log("삭제가 취소되었습니다.")}},template:`
      <div>
        <button @click="alertRef.open()">삭제하기</button>
        <CustomAlert
          ref="alertRef"
          v-bind="args"
          @confirm="handleConfirm"
          @cancel="handleCancel"
        />
      </div>
    `}),args:{title:"삭제 확인",message:`정말 이 항목을 삭제하시겠습니까?
삭제된 데이터는 복구할 수 없습니다.`,type:"warning",showCancel:!0,confirmText:"삭제",cancelText:"취소"}};var A,b,v;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomAlert
    },
    setup() {
      const alertRef = ref();
      const handleConfirm = () => console.log('확인 클릭');
      return {
        args,
        alertRef,
        handleConfirm
      };
    },
    template: \`
      <div>
        <button @click="alertRef.open()">알림 열기</button>
        <CustomAlert
          ref="alertRef"
          v-bind="args"
          @confirm="handleConfirm"
        />
      </div>
    \`
  }),
  args: {
    message: '알림 메시지입니다.'
  }
}`,...(v=(b=p.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var R,_,x;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomAlert
    },
    setup() {
      const infoAlertRef = ref();
      const successAlertRef = ref();
      const warningAlertRef = ref();
      const errorAlertRef = ref();
      const handleConfirm = (type: string) => console.log(\`\${type} 확인\`);
      const handleCancel = (type: string) => console.log(\`\${type} 취소\`);
      return {
        args,
        infoAlertRef,
        successAlertRef,
        warningAlertRef,
        errorAlertRef,
        handleConfirm,
        handleCancel
      };
    },
    template: \`
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
    \`
  }),
  args: {
    message: ''
  }
}`,...(x=(_=C.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var T,j,M;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomAlert
    },
    setup() {
      const alertRef = ref();
      const handleConfirm = () => console.log('삭제가 완료되었습니다.');
      const handleCancel = () => console.log('삭제가 취소되었습니다.');
      return {
        args,
        alertRef,
        handleConfirm,
        handleCancel
      };
    },
    template: \`
      <div>
        <button @click="alertRef.open()">삭제하기</button>
        <CustomAlert
          ref="alertRef"
          v-bind="args"
          @confirm="handleConfirm"
          @cancel="handleCancel"
        />
      </div>
    \`
  }),
  args: {
    title: '삭제 확인',
    message: '정말 이 항목을 삭제하시겠습니까?\\n삭제된 데이터는 복구할 수 없습니다.',
    type: 'warning',
    showCancel: true,
    confirmText: '삭제',
    cancelText: '취소'
  }
}`,...(M=(j=g.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const Q=["Default","AlertTypes","ConfirmDialog"];export{C as AlertTypes,g as ConfirmDialog,p as Default,Q as __namedExportsOrder,P as default};
