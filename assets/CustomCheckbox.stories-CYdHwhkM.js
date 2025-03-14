import{d as F,b as r,g as p,e as i,n as k,t as C,o as s}from"./vue.esm-bundler-JCTZ8lj_.js";const I={class:"custom-checkbox-wrapper"},J=["checked","disabled"],K={key:0,class:"custom-checkbox__label"},P={key:0,class:"custom-checkbox__help"},Q={key:1,class:"custom-checkbox__error"},a=F({__name:"CustomCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{},help:{},error:{},disabled:{type:Boolean,default:!1},color:{default:"brand"},size:{default:"md"}},emits:["update:modelValue"],setup(e){return(o,h)=>(s(),r("div",I,[p("label",{class:k(["custom-checkbox",[{"is-disabled":o.disabled},`custom-checkbox--${o.size}`]])},[p("input",{type:"checkbox",class:"custom-checkbox__input",checked:o.modelValue,disabled:o.disabled,onChange:h[0]||(h[0]=A=>o.$emit("update:modelValue",A.target.checked))},null,40,J),p("span",{class:k(["custom-checkbox__checkmark",`custom-checkbox__checkmark--${o.color}`])},null,2),o.label?(s(),r("span",K,C(o.label),1)):i("",!0)],2),o.help?(s(),r("span",P,C(o.help),1)):i("",!0),o.error?(s(),r("span",Q,C(o.error),1)):i("",!0)]))}}),U={title:"Components/CustomCheckbox",component:a,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"체크박스의 선택 상태를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},label:{control:"text",description:"체크박스의 레이블 텍스트를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},help:{control:"text",description:"체크박스 아래에 표시될 도움말 텍스트를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},error:{control:"text",description:"체크박스의 오류 메시지를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",description:"체크박스의 비활성화 상태를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},color:{control:"select",options:["brand","gray","dark-gray"],description:"체크박스의 색상을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"brand"}}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"체크박스의 크기를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"md"}}}}},l={render:e=>({components:{CustomCheckbox:a},setup(){return{args:e}},template:'<CustomCheckbox v-bind="args" />'}),args:{label:"기본 체크박스",modelValue:!1,color:"brand",size:"md"}},t={render:e=>({components:{CustomCheckbox:a},setup(){return{args:e}},template:'<CustomCheckbox v-bind="args" />'}),args:{label:"체크된 체크박스",modelValue:!0,color:"brand",size:"md"}},m={render:e=>({components:{CustomCheckbox:a},setup(){return{args:e}},template:'<CustomCheckbox v-bind="args" />'}),args:{label:"비활성화된 체크박스",modelValue:!1,disabled:!0,color:"brand",size:"md"}},c={render:e=>({components:{CustomCheckbox:a},setup(){return{args:e}},template:'<CustomCheckbox v-bind="args" />'}),args:{label:"비활성화 및 체크된 체크박스",modelValue:!0,disabled:!0,color:"brand",size:"md"}},u={render:e=>({components:{CustomCheckbox:a},setup(){return{args:e}},template:'<CustomCheckbox v-bind="args" />'}),args:{label:"도움말이 있는 체크박스",modelValue:!1,help:"이 체크박스에 대한 추가 설명입니다.",color:"brand",size:"md"}},n={render:e=>({components:{CustomCheckbox:a},setup(){return{args:e}},template:'<CustomCheckbox v-bind="args" />'}),args:{label:"오류 메시지가 있는 체크박스",modelValue:!1,error:"이 필드는 필수입니다.",color:"brand",size:"md"}},d={render:()=>({components:{CustomCheckbox:a},template:`
      <div style="display: flex; gap: 16px;">
        <CustomCheckbox label="Brand" modelValue="true" color="brand" />
        <CustomCheckbox label="Gray" modelValue="true" color="gray" />
        <CustomCheckbox label="Dark Gray" modelValue="true" color="dark-gray" />
      </div>
    `})},b={render:()=>({components:{CustomCheckbox:a},template:`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CustomCheckbox label="Extra Small" modelValue="true" size="xs" />
        <CustomCheckbox label="Small" modelValue="true" size="sm" />
        <CustomCheckbox label="Medium" modelValue="true" size="md" />
        <CustomCheckbox label="Large" modelValue="true" size="lg" />
        <CustomCheckbox label="Extra Large" modelValue="true" size="xl" />
      </div>
    `})};var g,x,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '기본 체크박스',
    modelValue: false,
    color: 'brand',
    size: 'md'
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var V,f,z;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '체크된 체크박스',
    modelValue: true,
    color: 'brand',
    size: 'md'
  }
}`,...(z=(f=t.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var v,_,S;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '비활성화된 체크박스',
    modelValue: false,
    disabled: true,
    color: 'brand',
    size: 'md'
  }
}`,...(S=(_=m.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var D,E,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '비활성화 및 체크된 체크박스',
    modelValue: true,
    disabled: true,
    color: 'brand',
    size: 'md'
  }
}`,...(B=(E=c.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var G,L,W;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '도움말이 있는 체크박스',
    modelValue: false,
    help: '이 체크박스에 대한 추가 설명입니다.',
    color: 'brand',
    size: 'md'
  }
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var $,H,M;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomCheckbox
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomCheckbox v-bind="args" />'
  }),
  args: {
    label: '오류 메시지가 있는 체크박스',
    modelValue: false,
    error: '이 필드는 필수입니다.',
    color: 'brand',
    size: 'md'
  }
}`,...(M=(H=n.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var N,w,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomCheckbox
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <CustomCheckbox label="Brand" modelValue="true" color="brand" />
        <CustomCheckbox label="Gray" modelValue="true" color="gray" />
        <CustomCheckbox label="Dark Gray" modelValue="true" color="dark-gray" />
      </div>
    \`
  })
}`,...(O=(w=d.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var T,j,q;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomCheckbox
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <CustomCheckbox label="Extra Small" modelValue="true" size="xs" />
        <CustomCheckbox label="Small" modelValue="true" size="sm" />
        <CustomCheckbox label="Medium" modelValue="true" size="md" />
        <CustomCheckbox label="Large" modelValue="true" size="lg" />
        <CustomCheckbox label="Extra Large" modelValue="true" size="xl" />
      </div>
    \`
  })
}`,...(q=(j=b.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const X=["Default","Checked","Disabled","DisabledChecked","WithHelp","WithError","Colors","Sizes"];export{t as Checked,d as Colors,l as Default,m as Disabled,c as DisabledChecked,b as Sizes,n as WithError,u as WithHelp,X as __namedExportsOrder,U as default};
