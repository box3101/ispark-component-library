import{d as Y,b as e,e as a,g as C,n as r,f as E,o as n}from"./vue.esm-bundler-JCTZ8lj_.js";const N=["disabled"],x={key:0,class:"custom-button__loader"},j={key:1,class:"custom-button__icon"},F={key:3,class:"custom-button__content"},H={key:4,class:"custom-button__icon"},s=Y({__name:"CustomButton",props:{size:{default:"md"},color:{default:"brand"},variant:{default:"solid"},icon:{default:""},trailing:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},block:{type:Boolean,default:!1},square:{type:Boolean,default:!1}},emits:["click"],setup(o){return(t,B)=>(n(),e("button",{class:r(["custom-button",`custom-button--${t.size}`,`custom-button--${t.variant}`,`custom-button--${t.color}`,{"custom-button--loading":t.loading},{"custom-button--disabled":t.disabled},{"custom-button--block":t.block},{"custom-button--square":t.square}]),disabled:t.disabled||t.loading,onClick:B[0]||(B[0]=P=>t.$emit("click",P))},[t.loading?(n(),e("span",x)):a("",!0),t.icon&&!t.trailing&&!t.square?(n(),e("span",j,[C("i",{class:r(["icon","icon--md",t.icon])},null,2)])):a("",!0),t.icon&&t.square?(n(),e("i",{key:2,class:r(["icon","icon--md",t.icon])},null,2)):a("",!0),t.$slots.default&&t.$slots.default().length>0?(n(),e("span",F,[E(t.$slots,"default")])):a("",!0),t.icon&&t.trailing&&!t.square?(n(),e("span",H,[C("i",{class:r(["icon","icon--md",t.icon])},null,2)])):a("",!0)],10,N))}}),Q={title:"Components/CustomButton",component:s,tags:["autodocs"],parameters:{design:{type:"figma",url:"https://www.figma.com/design/5KxTT4wOoY5BDAWkhtwpfg/Sgate_Pre-work?node-id=319-260&p=f&m=dev"}},argTypes:{slots:{control:"text",description:"버튼의 텍스트 내용을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"버튼"}}},color:{control:"select",options:["brand","gray","dark-gray"],description:"버튼의 색상을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"brand"}}},variant:{control:"select",options:["solid","outline","soft","ghost","link"],description:"버튼의 스타일 변형을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"solid"}}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"버튼의 크기를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},icon:{control:"select",options:["","icon--settings","icon--settings icon--white","icon--chart-bar","icon--users","icon--calendar","icon--bell","icon--star"],description:"버튼에 표시할 아이콘 클래스를 지정합니다. icon--white 클래스를 추가하면 아이콘이 흰색으로 표시됩니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},trailing:{control:"boolean",description:"아이콘을 버튼의 뒤쪽에 배치할지 여부를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},loading:{control:"boolean",description:"버튼의 로딩 상태를 지정합니다. 로딩 상태일 때는 버튼 내용이 숨겨지고 로딩 스피너가 표시됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},disabled:{control:"boolean",description:"버튼의 비활성화 상태를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},block:{control:"boolean",description:"버튼을 블록 레벨 요소로 만들지 여부를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},class:{control:"text",description:"버튼에 추가할 사용자 정의 클래스를 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},square:{control:"boolean",description:"버튼을 정사각형 형태로 만들지 여부를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}}},u={parameters:{design:{type:"figma",url:"https://www.figma.com/design/5KxTT4wOoY5BDAWkhtwpfg/Sgate_Pre-work?node-id=319-260&p=f&m=dev"}},render:o=>({components:{CustomButton:s},setup(){return{args:o}},template:'<CustomButton v-bind="args">{{ args.slots }}</CustomButton>'}),args:{slots:"기본 버튼",color:"brand",variant:"solid",size:"md",icon:"",trailing:!1,disabled:!1,class:""}},i={render:o=>({components:{CustomButton:s},setup(){return{args:o}},template:'<CustomButton v-bind="args">{{ args.slots }}</CustomButton>'}),args:{slots:"비활성화 버튼",color:"brand",variant:"solid",size:"md",disabled:!0}},l={render:o=>({components:{CustomButton:s},setup(){return{args:o}},template:'<CustomButton v-bind="args">{{ args.slots }}</CustomButton>'}),args:{slots:"아이콘 버튼",color:"brand",variant:"solid",size:"md",icon:"icon--settings icon--white"}},m={render:o=>({components:{CustomButton:s},setup(){return{args:o}},template:'<CustomButton v-bind="args">{{ args.slots }}</CustomButton>'}),args:{slots:"후행 아이콘 버튼",color:"brand",variant:"solid",size:"md",icon:"icon--settings icon--white",trailing:!0}},d={render:()=>({components:{CustomButton:s},template:`
      <div style="display: flex; gap: 16px;">
        <CustomButton color="brand">Brand</CustomButton>
        <CustomButton color="gray">Gray</CustomButton>
        <CustomButton color="dark-gray">Dark Gray</CustomButton>
        <CustomButton color="danger">Danger</CustomButton>
      </div>
    `})},c={render:()=>({components:{CustomButton:s},template:`
      <div style="display: flex; gap: 16px;">
        <CustomButton variant="solid">Solid</CustomButton>
        <CustomButton variant="outline">Outline</CustomButton>
        <CustomButton variant="ghost">Ghost</CustomButton>
        <CustomButton variant="link">Link</CustomButton>
      </div>
    `})},p={render:()=>({components:{CustomButton:s},template:`
      <div style="display: flex; align-items: center; gap: 16px;">
        <CustomButton size="xs">XS</CustomButton>
        <CustomButton size="sm">SM</CustomButton>
        <CustomButton size="md">MD</CustomButton>
        <CustomButton size="lg">LG</CustomButton>
        <CustomButton size="xl">XL</CustomButton>
      </div>
    `})},g={render:o=>({components:{CustomButton:s},setup(){return{args:o}},template:'<CustomButton v-bind="args">{{ args.content }}</CustomButton>'}),args:{content:"",color:"brand",variant:"solid",size:"md",square:!0}};var b,y,f;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/5KxTT4wOoY5BDAWkhtwpfg/Sgate_Pre-work?node-id=319-260&p=f&m=dev'
    }
  },
  render: (args: any) => ({
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
    icon: "",
    trailing: false,
    disabled: false,
    class: ''
  }
}`,...(f=(y=u.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,k,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => ({
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
    slots: '비활성화 버튼',
    color: 'brand',
    variant: 'solid',
    size: 'md',
    disabled: true
  }
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var z,w,S;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: any) => ({
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
    slots: '아이콘 버튼',
    color: 'brand',
    variant: 'solid',
    size: 'md',
    icon: "icon--settings icon--white"
  }
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var V,D,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: any) => ({
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
    slots: '후행 아이콘 버튼',
    color: 'brand',
    variant: 'solid',
    size: 'md',
    icon: "icon--settings icon--white",
    trailing: true
  }
}`,...(q=(D=m.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var T,G,W;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomButton
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <CustomButton color="brand">Brand</CustomButton>
        <CustomButton color="gray">Gray</CustomButton>
        <CustomButton color="dark-gray">Dark Gray</CustomButton>
        <CustomButton color="danger">Danger</CustomButton>
      </div>
    \`
  })
}`,...(W=(G=d.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var $,L,O;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomButton
    },
    template: \`
      <div style="display: flex; gap: 16px;">
        <CustomButton variant="solid">Solid</CustomButton>
        <CustomButton variant="outline">Outline</CustomButton>
        <CustomButton variant="ghost">Ghost</CustomButton>
        <CustomButton variant="link">Link</CustomButton>
      </div>
    \`
  })
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var I,M,X;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomButton
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 16px;">
        <CustomButton size="xs">XS</CustomButton>
        <CustomButton size="sm">SM</CustomButton>
        <CustomButton size="md">MD</CustomButton>
        <CustomButton size="lg">LG</CustomButton>
        <CustomButton size="xl">XL</CustomButton>
      </div>
    \`
  })
}`,...(X=(M=p.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var _,A,K;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomButton v-bind="args">{{ args.content }}</CustomButton>'
  }),
  args: {
    content: '',
    color: 'brand',
    variant: 'solid',
    size: 'md',
    square: true
  }
}`,...(K=(A=g.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};const R=["Default","Disabled","WithIcon","WithTrailingIcon","Colors","Variants","Sizes","Square"];export{d as Colors,u as Default,i as Disabled,p as Sizes,g as Square,c as Variants,l as WithIcon,m as WithTrailingIcon,R as __namedExportsOrder,Q as default};
