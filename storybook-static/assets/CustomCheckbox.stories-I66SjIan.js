import{d as y,b as a,f as t,e as l,n,t as r,o}from"./vue.esm-bundler-OTMi4Ybr.js";const h={class:"custom-checkbox-wrapper"},k=["checked","disabled"],f={key:0,class:"custom-checkbox__label"},g={key:0,class:"custom-checkbox__help"},_={key:1,class:"custom-checkbox__error"},i=y({__name:"CustomCheckbox",props:{modelValue:{type:Boolean,default:!1},label:{},help:{},error:{},disabled:{type:Boolean,default:!1},color:{default:"brand"},size:{default:"md"}},emits:["update:modelValue"],setup(c){return(e,m)=>(o(),a("div",h,[t("label",{class:n(["custom-checkbox",[{"is-disabled":e.disabled},`custom-checkbox--${e.size}`]])},[t("input",{type:"checkbox",class:"custom-checkbox__input",checked:e.modelValue,disabled:e.disabled,onChange:m[0]||(m[0]=b=>e.$emit("update:modelValue",b.target.checked))},null,40,k),t("span",{class:n(["custom-checkbox__checkmark",`custom-checkbox__checkmark--${e.color}`])},null,2),e.label?(o(),a("span",f,r(e.label),1)):l("",!0)],2),e.help?(o(),a("span",g,r(e.help),1)):l("",!0),e.error?(o(),a("span",_,r(e.error),1)):l("",!0)]))}}),V={title:"Components/CustomCheckbox",component:i,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"체크박스의 선택 상태를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},label:{control:"text",description:"체크박스의 레이블 텍스트를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},help:{control:"text",description:"체크박스 아래에 표시될 도움말 텍스트를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},error:{control:"text",description:"체크박스의 오류 메시지를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},disabled:{control:"boolean",description:"체크박스의 비활성화 상태를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},color:{control:"select",options:["brand","gray","dark-gray"],description:"체크박스의 색상을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"brand"}}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"체크박스의 크기를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"md"}}}}},s={render:c=>({components:{CustomCheckbox:i},setup(){return{args:c}},template:'<CustomCheckbox v-bind="args" />'}),args:{label:"기본 체크박스",modelValue:!1,color:"brand",size:"md"}};var u,d,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const x=["Default"];export{s as Default,x as __namedExportsOrder,V as default};
