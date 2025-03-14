import{w as _e,B as ge,C as ye,j as B,D as y,E as Se,d as Ce,q as F,b,o as f,e as w,g as m,t as g,n as O,F as q,p as we}from"./vue.esm-bundler-JCTZ8lj_.js";function Oe(e){return ge()?(ye(e),!0):!1}const be=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ve=Object.prototype.toString,ke=e=>Ve.call(e)==="[object Object]",V=()=>{},Ee=ze();function ze(){var e,c;return be&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((c=window==null?void 0:window.navigator)==null?void 0:c.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function x(e){return Array.isArray(e)?e:[e]}function We(e,c,r){return _e(e,c,{...r,immediate:!0})}const fe=be?window:void 0;function W(e){var c;const r=y(e);return(c=r==null?void 0:r.$el)!=null?c:r}function z(...e){const c=[],r=()=>{c.forEach(n=>n()),c.length=0},d=(n,t,i,v)=>(n.addEventListener(t,i,v),()=>n.removeEventListener(t,i,v)),p=B(()=>{const n=x(y(e[0])).filter(t=>t!=null);return n.every(t=>typeof t!="string")?n:void 0}),_=We(()=>{var n,t;return[(t=(n=p.value)==null?void 0:n.map(i=>W(i)))!=null?t:[fe].filter(i=>i!=null),x(y(p.value?e[1]:e[0])),x(Se(p.value?e[2]:e[1])),y(p.value?e[3]:e[2])]},([n,t,i,v])=>{if(r(),!(n!=null&&n.length)||!(t!=null&&t.length)||!(i!=null&&i.length))return;const E=ke(v)?{...v}:v;c.push(...n.flatMap(C=>t.flatMap(s=>i.map(u=>d(C,s,u,E)))))},{flush:"post"}),S=()=>{_(),r()};return Oe(r),S}let N=!1;function Le(e,c,r={}){const{window:d=fe,ignore:p=[],capture:_=!0,detectIframe:S=!1,controls:n=!1}=r;if(!d)return n?{stop:V,cancel:V,trigger:V}:V;if(Ee&&!N){N=!0;const o={passive:!0};Array.from(d.document.body.children).forEach(l=>z(l,"click",V,o)),z(d.document.documentElement,"click",V,o)}let t=!0;const i=o=>y(p).some(l=>{if(typeof l=="string")return Array.from(d.document.querySelectorAll(l)).some(h=>h===o.target||o.composedPath().includes(h));{const h=W(l);return h&&(o.target===h||o.composedPath().includes(h))}});function v(o){const l=y(o);return l&&l.$.subTree.shapeFlag===16}function E(o,l){const h=y(o),j=h.$.subTree&&h.$.subTree.children;return j==null||!Array.isArray(j)?!1:j.some(R=>R.el===l.target||l.composedPath().includes(R.el))}const C=o=>{const l=W(e);if(o.target!=null&&!(!(l instanceof Element)&&v(e)&&E(e,o))&&!(!l||l===o.target||o.composedPath().includes(l))){if("detail"in o&&o.detail===0&&(t=!i(o)),!t){t=!0;return}c(o)}};let s=!1;const u=[z(d,"click",o=>{s||(s=!0,setTimeout(()=>{s=!1},0),C(o))},{passive:!0,capture:_}),z(d,"pointerdown",o=>{const l=W(e);t=!i(o)&&!!(l&&!o.composedPath().includes(l))},{passive:!0}),S&&z(d,"blur",o=>{setTimeout(()=>{var l;const h=W(e);((l=d.document.activeElement)==null?void 0:l.tagName)==="IFRAME"&&!(h!=null&&h.contains(d.document.activeElement))&&c(o)},0)},{passive:!0})].filter(Boolean),a=()=>u.forEach(o=>o());return n?{stop:a,cancel:()=>{t=!1},trigger:o=>{t=!0,C(o),t=!1}}:a}const Ae={key:0,class:"custom-select__label"},Ie={class:"custom-select__wrapper"},Pe={class:"custom-select__input-wrapper"},Te=["placeholder","disabled","value"],De={class:"custom-select__options"},Me=["onClick"],$e={class:"custom-select__option-content"},Be={class:"custom-select__option-group"},je={class:"custom-select__option-department"},Fe={class:"custom-select__option-user"},xe={class:"custom-select__option-name"},Re={class:"custom-select__option-position"},qe={key:0,class:"custom-select__option-count"},Ne={key:1,class:"custom-select__option-basic"},Ge=["src","alt"],He={class:"custom-select__option-label"},Qe={key:1,class:"custom-select__error"},Je={key:2,class:"custom-select__help"},ve=Ce({__name:"CustomSelect",props:{modelValue:{},options:{},label:{},placeholder:{default:"선택하세요"},size:{default:"md"},error:{},help:{},disabled:{type:Boolean,default:!1},showCount:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:c}){const r=e,d=c,p=F(!1),_=F(""),S=F(null),n=B(()=>r.options.find(s=>s.value===r.modelValue)),t=B(()=>r.options.length),i=B(()=>{if(!_.value)return r.options;const s=_.value.toLowerCase();return r.options.filter(u=>u.department&&u.name&&u.position?u.name.toLowerCase().includes(s):u.label.toLowerCase().includes(s))}),v=()=>{r.disabled||(p.value=!0)},E=()=>{p.value=!0},C=s=>{d("update:modelValue",s.value),_.value=s.name||s.label,p.value=!1};return Le(S,()=>{p.value=!1}),(s,u)=>(f(),b("div",{class:O(["custom-select",{"is-disabled":s.disabled}]),ref_key:"selectRef",ref:S},[s.label?(f(),b("label",Ae,g(s.label),1)):w("",!0),m("div",Ie,[m("div",Pe,[m("input",{type:"text",class:O(["custom-select__input",[`custom-select__input--${s.size}`,{"custom-select__input--error":s.error}]]),placeholder:s.placeholder,disabled:s.disabled,value:n.value?n.value.name||n.value.label:_.value,onInput:u[0]||(u[0]=a=>{_.value=a.target.value,E()}),onFocus:v},null,42,Te),u[1]||(u[1]=m("i",{class:"custom-select__search-icon icon-search"},null,-1)),m("i",{class:O(["custom-select__chevron icon icon--md icon--chevron-down",{"is-open":p.value}])},null,2)]),p.value?(f(),b("div",{key:0,class:O(["custom-select__dropdown",`custom-select__dropdown--${s.size}`])},[m("div",De,[(f(!0),b(q,null,we(i.value,a=>(f(),b("button",{key:a.value,type:"button",class:O(["custom-select__option",[`custom-select__option--${s.size}`,{"custom-select__option--selected":s.modelValue===a.value}]]),onClick:o=>C(a)},[m("div",$e,[a.department&&a.name&&a.position?(f(),b(q,{key:0},[m("div",Be,[m("span",je,g(a.department),1),m("div",Fe,[m("span",xe,g(a.name),1),m("span",Re,g(a.position),1)])]),s.showCount?(f(),b("span",qe,g(t.value)+"개",1)):w("",!0)],64)):(f(),b("div",Ne,[a.image?(f(),b("img",{key:0,src:a.image,alt:a.label,class:"custom-select__option-image"},null,8,Ge)):a.icon?(f(),b("i",{key:1,class:O(["custom-select__option-icon",a.icon])},null,2)):w("",!0),m("span",He,g(a.label),1)]))])],10,Me))),128))])],2)):w("",!0)]),s.error?(f(),b("div",Qe,g(s.error),1)):w("",!0),s.help?(f(),b("div",Je,g(s.help),1)):w("",!0)],2))}}),Ye={title:"Components/CustomSelect",component:ve,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"선택된 값"},options:{control:"object",description:"선택 가능한 옵션 목록"},placeholder:{control:"text",description:"선택되지 않았을 때 표시할 텍스트"},label:{control:"text",description:"선택 필드의 레이블"},help:{control:"text",description:"도움말 텍스트"},error:{control:"text",description:"에러 메시지"},disabled:{control:"boolean",description:"비활성화 여부"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"크기 옵션"},showCount:{control:"boolean",description:"옵션 개수 표시 여부"}}},k=[{value:"1",label:"옵션 1"},{value:"2",label:"옵션 2"},{value:"3",label:"옵션 3"},{value:"4",label:"옵션 4"}],Ke=[{value:"1",label:"설정",icon:"icon-settings"},{value:"2",label:"알림",icon:"icon-bell"},{value:"3",label:"사용자",icon:"icon-user"},{value:"4",label:"대시보드",icon:"icon-chart"}],Ue=[{value:"1",label:"최웅 주임",department:"인사팀",name:"최웅",position:"주임"},{value:"2",label:"김지호 부장",department:"인사팀",name:"김지호",position:"부장"},{value:"3",label:"이수진 과장",department:"인사팀",name:"이수진",position:"과장"},{value:"4",label:"박민준 대리",department:"인사팀",name:"박민준",position:"대리"}],L={args:{modelValue:"",options:k,placeholder:"선택하세요"}},A={args:{modelValue:"",options:k,label:"기본 선택",placeholder:"선택하세요"}},I={args:{modelValue:"",options:Ke,label:"아이콘 포함",placeholder:"선택하세요"}},P={args:{modelValue:"",options:Ue,label:"직원 선택",placeholder:"이름으로 검색",showCount:!0}},T={args:{modelValue:"",options:k,label:"도움말 포함",help:"옵션을 선택해주세요.",placeholder:"선택하세요"}},D={args:{modelValue:"",options:k,label:"에러 상태",error:"필수 항목입니다.",placeholder:"선택하세요"}},M={args:{modelValue:"",options:k,label:"비활성화 상태",disabled:!0,placeholder:"선택할 수 없음"}},$={render:e=>({components:{CustomSelect:ve},setup(){return{args:e}},template:`
      <div class="space-y-4">
        <CustomSelect v-bind="args" size="xs" label="Extra Small" />
        <CustomSelect v-bind="args" size="sm" label="Small" />
        <CustomSelect v-bind="args" size="md" label="Medium" />
        <CustomSelect v-bind="args" size="lg" label="Large" />
        <CustomSelect v-bind="args" size="xl" label="Extra Large" />
      </div>
    `}),args:{modelValue:"",options:k,placeholder:"선택하세요"}};var G,H,Q;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    placeholder: '선택하세요'
  }
}`,...(Q=(H=L.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var J,K,U;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    label: '기본 선택',
    placeholder: '선택하세요'
  }
}`,...(U=(K=A.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,Y,Z;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: iconOptions,
    label: '아이콘 포함',
    placeholder: '선택하세요'
  }
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,se;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: employeeOptions,
    label: '직원 선택',
    placeholder: '이름으로 검색',
    showCount: true
  }
}`,...(se=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var te,le,ne;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    label: '도움말 포함',
    help: '옵션을 선택해주세요.',
    placeholder: '선택하세요'
  }
}`,...(ne=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ae,re,ce;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    label: '에러 상태',
    error: '필수 항목입니다.',
    placeholder: '선택하세요'
  }
}`,...(ce=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var ie,ue,de;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    label: '비활성화 상태',
    disabled: true,
    placeholder: '선택할 수 없음'
  }
}`,...(de=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,he;$.parameters={...$.parameters,docs:{...(pe=$.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomSelect
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <CustomSelect v-bind="args" size="xs" label="Extra Small" />
        <CustomSelect v-bind="args" size="sm" label="Small" />
        <CustomSelect v-bind="args" size="md" label="Medium" />
        <CustomSelect v-bind="args" size="lg" label="Large" />
        <CustomSelect v-bind="args" size="xl" label="Extra Large" />
      </div>
    \`
  }),
  args: {
    modelValue: '',
    options: defaultOptions,
    placeholder: '선택하세요'
  }
}`,...(he=(me=$.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const Ze=["Default","WithLabel","WithIcons","WithEmployees","WithHelp","WithError","Disabled","Sizes"];export{L as Default,M as Disabled,$ as Sizes,P as WithEmployees,D as WithError,T as WithHelp,I as WithIcons,A as WithLabel,Ze as __namedExportsOrder,Ye as default};
