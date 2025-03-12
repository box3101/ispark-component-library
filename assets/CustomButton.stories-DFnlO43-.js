import{d as b,b as t,o,e as s,f as i,n,g}from"./vue.esm-bundler-B2VokqQK.js";const f=["disabled"],y={key:0,class:"custom-button__loader"},k={key:1,class:"custom-button__icon"},B={key:2,class:"custom-button__content"},w={key:3,class:"custom-button__icon"},c=b({__name:"CustomButton",props:{size:{default:"md"},color:{default:"brand"},variant:{default:"solid"},icon:{default:""},trailing:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1},square:{type:Boolean,default:!1}},emits:["click"],setup(l){return(e,r)=>(o(),t("button",{class:n(["custom-button",`custom-button--${e.size}`,`custom-button--${e.variant}`,`custom-button--${e.color}`,{"custom-button--loading":e.loading},{"custom-button--disabled":e.disabled},{"custom-button--block":e.block},{"custom-button--square":e.square}]),disabled:e.disabled||e.loading,onClick:r[0]||(r[0]=p=>e.$emit("click",p))},[e.loading?(o(),t("span",y)):s("",!0),e.icon&&!e.trailing?(o(),t("span",k,[i("i",{class:n(["icon","icon--md",e.icon])},null,2)])):s("",!0),e.$slots.default?(o(),t("span",B,[g(e.$slots,"default")])):s("",!0),e.icon&&e.trailing?(o(),t("span",w,[i("i",{class:n(["icon","icon--md",e.icon])},null,2)])):s("",!0)],10,f))}}),h={title:"Components/CustomButton",component:c,tags:["autodocs"],parameters:{design:{type:"figma",url:"https://www.figma.com/design/5KxTT4wOoY5BDAWkhtwpfg/Sgate_Pre-work?node-id=319-260&p=f&m=dev"}},argTypes:{slots:{control:"text",description:"버튼의 텍스트 내용을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"버튼"}}},color:{control:"select",options:["brand","gray","dark-gray"],description:"버튼의 색상을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"brand"}}},variant:{control:"select",options:["solid","outline","soft","ghost","link"],description:"버튼의 스타일 변형을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"solid"}}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"버튼의 크기를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},icon:{control:"select",options:["icon--settings","icon--chart-bar","icon--users","icon--calendar","icon--bell"],description:"버튼에 표시할 아이콘 클래스를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},trailing:{control:"boolean",description:"아이콘을 버튼의 뒤쪽에 배치할지 여부를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"버튼의 로딩 상태를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"버튼의 비활성화 상태를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},block:{control:"boolean",description:"버튼을 블록 레벨 요소로 만들지 여부를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},square:{control:"boolean",description:"버튼을 정사각형 형태로 만들지 여부를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/5KxTT4wOoY5BDAWkhtwpfg/Sgate_Pre-work?node-id=319-260&p=f&m=dev"}},render:l=>({components:{CustomButton:c},setup(){return{args:l}},template:'<CustomButton v-bind="args">{{ args.slots }}</CustomButton>'}),args:{slots:"기본 버튼",color:"brand",variant:"solid",size:"md",icon:"icon--users",trailing:!0,disabled:!0}};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/5KxTT4wOoY5BDAWkhtwpfg/Sgate_Pre-work?node-id=319-260&p=f&m=dev'
    }
  },
  render: args => ({
    components: {
      CustomButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomButton v-bind="args">{{ args.slots }}</CustomButton>'
  }),
  args: {
    slots: '기본 버튼',
    color: 'brand',
    variant: 'solid',
    size: 'md',
    icon: "icon--users",
    trailing: true,
    disabled: true
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const V=["Default"];export{a as Default,V as __namedExportsOrder,h as default};
