import{d as H,b as r,g as p,e as c,n as y,t as g,o as l}from"./vue.esm-bundler-jYkWp-3M.js";const M={class:"custom-radio-wrapper"},N=["value","checked","name","disabled"],P={key:0,class:"custom-radio__label"},w={key:0,class:"custom-radio__help"},O={key:1,class:"custom-radio__error"},o=H({__name:"CustomRadio",props:{modelValue:{default:null},value:{},name:{},label:{default:""},help:{default:""},error:{default:""},disabled:{type:Boolean,default:!1},color:{default:"brand"}},emits:["update:modelValue"],setup(a){return(e,b)=>(l(),r("div",M,[p("label",{class:y(["custom-radio",{"is-disabled":e.disabled}])},[p("input",{type:"radio",class:"custom-radio__input",value:e.value,checked:e.modelValue===e.value,name:e.name,disabled:e.disabled,onChange:b[0]||(b[0]=q=>e.$emit("update:modelValue",e.value))},null,40,N),p("span",{class:y(["custom-radio__mark",`custom-radio__mark--${e.color}`])},null,2),e.label?(l(),r("span",P,g(e.label),1)):c("",!0)],2),e.help?(l(),r("span",w,g(e.help),1)):c("",!0),e.error?(l(),r("span",O,g(e.error),1)):c("",!0)]))}}),F={title:"Components/CustomRadio",component:o,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"라디오 버튼의 선택 값을 지정합니다.",table:{type:{summary:"string | number | boolean"},defaultValue:{summary:""}}},value:{control:"text",description:"라디오 버튼의 값을 지정합니다.",table:{type:{summary:"string | number | boolean"},defaultValue:{summary:""}}},name:{control:"text",description:"라디오 버튼 그룹의 이름을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},label:{control:"text",description:"라디오 버튼의 레이블 텍스트를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},help:{control:"text",description:"라디오 버튼 아래에 표시될 도움말 텍스트를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},error:{control:"text",description:"라디오 버튼의 오류 메시지를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",description:"라디오 버튼의 비활성화 상태를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},color:{control:"select",options:["brand","gray","dark-gray"],description:"라디오 버튼의 색상을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"brand"}}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"라디오 버튼의 크기를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"md"}}}}},s={render:a=>({components:{CustomRadio:o},setup(){return{args:a}},template:'<CustomRadio v-bind="args" />'}),args:{label:"기본 라디오 버튼",value:"option1",modelValue:"option1",name:"radio-group",color:"brand",size:"md"}},t={render:a=>({components:{CustomRadio:o},setup(){return{args:a}},template:'<CustomRadio v-bind="args" />'}),args:{label:"도움말이 있는 라디오 버튼",help:"이 라디오 버튼에 대한 추가 설명입니다.",value:"option1",modelValue:"option1",name:"radio-group-help",color:"brand",size:"md"}},n={render:a=>({components:{CustomRadio:o},setup(){return{args:a}},template:'<CustomRadio v-bind="args" />'}),args:{label:"오류 상태의 라디오 버튼",error:"필수 항목입니다.",value:"option1",modelValue:"",name:"radio-group-error",color:"brand",size:"md"}},m={render:a=>({components:{CustomRadio:o},setup(){return{args:a}},template:'<CustomRadio v-bind="args" />'}),args:{label:"비활성화된 라디오 버튼",disabled:!0,value:"option1",modelValue:"option1",name:"radio-group-disabled",color:"brand",size:"md"}},d={render:()=>({components:{CustomRadio:o},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <CustomRadio label="Extra Small 라디오" size="xs" name="size-group" value="xs" modelValue="xs" />
        <CustomRadio label="Small 라디오" size="sm" name="size-group" value="sm" modelValue="sm" />
        <CustomRadio label="Medium 라디오" size="md" name="size-group" value="md" modelValue="md" />
        <CustomRadio label="Large 라디오" size="lg" name="size-group" value="lg" modelValue="lg" />
        <CustomRadio label="Extra Large 라디오" size="xl" name="size-group" value="xl" modelValue="xl" />
      </div>
    `})},u={render:()=>({components:{CustomRadio:o},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <CustomRadio label="Brand 색상" color="brand" name="color-group" value="brand" modelValue="brand" />
        <CustomRadio label="Gray 색상" color="gray" name="color-group" value="gray" modelValue="gray" />
        <CustomRadio label="Dark Gray 색상" color="dark-gray" name="color-group" value="dark-gray" modelValue="dark-gray" />
      </div>
    `})},i={render:()=>({components:{CustomRadio:o},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <h3>선호하는 프로그래밍 언어를 선택하세요:</h3>
        <CustomRadio label="JavaScript" name="language" value="js" modelValue="js" />
        <CustomRadio label="TypeScript" name="language" value="ts" modelValue="ts" />
        <CustomRadio label="Python" name="language" value="py" modelValue="py" />
        <CustomRadio label="Java" name="language" value="java" modelValue="java" />
      </div>
    `})};var v,C,R;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomRadio
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomRadio v-bind="args" />'
  }),
  args: {
    label: '기본 라디오 버튼',
    value: 'option1',
    modelValue: 'option1',
    name: 'radio-group',
    color: 'brand',
    size: 'md'
  }
}`,...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var V,f,z;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomRadio
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomRadio v-bind="args" />'
  }),
  args: {
    label: '도움말이 있는 라디오 버튼',
    help: '이 라디오 버튼에 대한 추가 설명입니다.',
    value: 'option1',
    modelValue: 'option1',
    name: 'radio-group-help',
    color: 'brand',
    size: 'md'
  }
}`,...(z=(f=t.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var h,x,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomRadio
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomRadio v-bind="args" />'
  }),
  args: {
    label: '오류 상태의 라디오 버튼',
    error: '필수 항목입니다.',
    value: 'option1',
    modelValue: '',
    name: 'radio-group-error',
    color: 'brand',
    size: 'md'
  }
}`,...(k=(x=n.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var S,_,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomRadio
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomRadio v-bind="args" />'
  }),
  args: {
    label: '비활성화된 라디오 버튼',
    disabled: true,
    value: 'option1',
    modelValue: 'option1',
    name: 'radio-group-disabled',
    color: 'brand',
    size: 'md'
  }
}`,...(j=(_=m.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var E,D,B;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomRadio
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <CustomRadio label="Extra Small 라디오" size="xs" name="size-group" value="xs" modelValue="xs" />
        <CustomRadio label="Small 라디오" size="sm" name="size-group" value="sm" modelValue="sm" />
        <CustomRadio label="Medium 라디오" size="md" name="size-group" value="md" modelValue="md" />
        <CustomRadio label="Large 라디오" size="lg" name="size-group" value="lg" modelValue="lg" />
        <CustomRadio label="Extra Large 라디오" size="xl" name="size-group" value="xl" modelValue="xl" />
      </div>
    \`
  })
}`,...(B=(D=d.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var G,J,L;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomRadio
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <CustomRadio label="Brand 색상" color="brand" name="color-group" value="brand" modelValue="brand" />
        <CustomRadio label="Gray 색상" color="gray" name="color-group" value="gray" modelValue="gray" />
        <CustomRadio label="Dark Gray 색상" color="dark-gray" name="color-group" value="dark-gray" modelValue="dark-gray" />
      </div>
    \`
  })
}`,...(L=(J=u.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var W,T,$;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomRadio
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <h3>선호하는 프로그래밍 언어를 선택하세요:</h3>
        <CustomRadio label="JavaScript" name="language" value="js" modelValue="js" />
        <CustomRadio label="TypeScript" name="language" value="ts" modelValue="ts" />
        <CustomRadio label="Python" name="language" value="py" modelValue="py" />
        <CustomRadio label="Java" name="language" value="java" modelValue="java" />
      </div>
    \`
  })
}`,...($=(T=i.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};const I=["Default","WithHelp","WithError","Disabled","Sizes","Colors","RadioGroup"];export{u as Colors,s as Default,m as Disabled,i as RadioGroup,d as Sizes,n as WithError,t as WithHelp,I as __namedExportsOrder,F as default};
