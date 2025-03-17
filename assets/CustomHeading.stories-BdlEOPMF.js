import{d as on,k as sn,s as an,u as ln,n as s,x as cn,o as t,g as v,b as o,e as k,f as rn,F as b,q as gn}from"./vue.esm-bundler-X6O22w2E.js";const dn={class:"custom-heading__content"},mn={key:1,class:"custom-heading__trailing-icons"},un=["onClick"],i=on({__name:"CustomHeading",props:{level:{default:1},color:{default:"brand"},align:{default:"left"},spacing:{default:"md"},icon:{default:""},size:{default:"md"},trailingIcons:{type:[Array,Boolean],default:!1},isTrailingIconClickable:{type:Boolean,default:!0},isIconClickable:{type:Boolean,default:!0}},emits:["iconClick","trailingIconClick"],setup(e,{emit:Z}){const H=e,I=Z,nn=()=>{I("iconClick")},en=n=>{I("trailingIconClick",n)},tn=sn(()=>Array.isArray(H.trailingIcons)?H.trailingIcons:H.trailingIcons===!0?["icon icon--md icon--settings"]:[]);return(n,Cn)=>(t(),an(cn(`h${n.level}`),{class:s(["custom-heading",`custom-heading--${n.color}`,`custom-heading--spacing-${n.spacing}`,`custom-heading--align-${n.align}`,{"custom-heading--with-icon":n.icon}])},{default:ln(()=>[v("div",dn,[n.icon?(t(),o(b,{key:0},[n.isIconClickable?(t(),o("button",{key:0,class:"custom-heading__icon-button",onClick:nn},[v("i",{class:s(["custom-heading__icon",n.icon])},null,2)])):(t(),o("i",{key:1,class:s(["custom-heading__icon",n.icon])},null,2))],64)):k("",!0),rn(n.$slots,"default"),n.trailingIcons?(t(),o("div",mn,[(t(!0),o(b,null,gn(tn.value,(f,y)=>(t(),o(b,{key:y},[n.isTrailingIconClickable?(t(),o("button",{key:0,class:"custom-heading__icon-button",onClick:pn=>en(y)},[v("i",{class:s(["custom-heading__icon","custom-heading__icon--trailing",f])},null,2)],8,un)):(t(),o("i",{key:1,class:s(["custom-heading__icon","custom-heading__icon--trailing",f])},null,2))],64))),128))])):k("",!0)])]),_:3},8,["class"]))}}),vn={title:"Components/CustomHeading",component:i,tags:["autodocs"],argTypes:{level:{control:"select",options:[1,2,3,4,5,6],description:"제목의 HTML 태그 레벨을 지정합니다. (h1-h6)",table:{type:{summary:"string"},defaultValue:{summary:"1"}}},color:{control:"select",options:["brand","gray","dark-gray"],description:"제목의 색상을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"brand"}}},align:{control:"select",options:["left","center","right"],description:"제목의 정렬 방식을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},spacing:{control:"select",options:["none","sm","md","lg"],description:"제목의 여백을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},icon:{control:"select",options:["","icon icon--md icon--settings"],description:"제목 앞에 표시할 아이콘을 지정합니다.",table:{type:{summary:"string"},defaultValue:{summary:""}}},trailingIcons:{control:{type:"radio"},options:[!0,!1],description:"제목 뒤에 아이콘을 표시할지 여부를 지정합니다. false일 때는 전행 아이콘만 표시하고, true일 때는 전행 아이콘과 함께 후행 아이콘도 표시합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isIconClickable:{control:"boolean",description:"전행 아이콘을 클릭 가능하게 할지 여부를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},isTrailingIconClickable:{control:"boolean",description:"후행 아이콘을 클릭 가능하게 할지 여부를 지정합니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},a={render:e=>({components:{CustomHeading:i},setup(){return{args:e}},template:'<CustomHeading v-bind="args">기본 제목</CustomHeading>'}),args:{level:2,color:"brand",align:"left",spacing:"md",icon:""}},l={render:()=>({components:{CustomHeading:i},template:`
      <div>
        <CustomHeading :level="1">H1 제목 (4xl)</CustomHeading>
        <CustomHeading :level="2">H2 제목 (3xl)</CustomHeading>
        <CustomHeading :level="3">H3 제목 (2xl)</CustomHeading>
        <CustomHeading :level="4">H4 제목 (xl)</CustomHeading>
        <CustomHeading :level="5">H5 제목 (lg)</CustomHeading>
        <CustomHeading :level="6">H6 제목 (md)</CustomHeading>
      </div>
    `})},c={render:()=>({components:{CustomHeading:i},template:`
      <div>
        <CustomHeading :level="2" align="left">왼쪽 정렬 제목</CustomHeading>
        <CustomHeading :level="2" align="center">가운데 정렬 제목</CustomHeading>
        <CustomHeading :level="2" align="right">오른쪽 정렬 제목</CustomHeading>
      </div>
    `})},r={render:()=>({components:{CustomHeading:i},template:`
      <div style="background-color: #f0f0f0;">
        <CustomHeading :level="2" spacing="none">여백 없음</CustomHeading>
        <CustomHeading :level="2" spacing="sm">작은 여백</CustomHeading>
        <CustomHeading :level="2" spacing="md">중간 여백</CustomHeading>
        <CustomHeading :level="2" spacing="lg">큰 여백</CustomHeading>
      </div>
    `})},g={render:e=>({components:{CustomHeading:i},setup(){return{args:e}},template:`
      <div>
        <CustomHeading :level="2" :icon="args.icon">설정 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="3" icon="icon icon--md icon--settings" align="center">홈 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="4" icon="icon icon--md icon--settings" align="right">사용자 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="2" icon="icon icon--md icon--settings">알림 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="3" icon="icon icon--md icon--settings">차트 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="4" icon="icon icon--md icon--settings">정보 아이콘이 있는 제목</CustomHeading>
      </div>
    `}),args:{icon:"icon icon--md icon--settings"}},d={render:e=>({components:{CustomHeading:i},setup(){return{args:e}},template:`
      <div>
        <CustomHeading :level="2" :icon="args.icon" :isIconClickable="false">
          클릭 불가능한 전행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="3" icon="icon icon--md icon--settings" :isIconClickable="false" align="center">
          클릭 불가능한 전행 아이콘이 있는 가운데 정렬 제목
        </CustomHeading>
      </div>
    `}),args:{icon:"icon icon--md icon--settings",isIconClickable:!1}},m={render:e=>({components:{CustomHeading:i},setup(){return{args:e}},template:`
      <div>
        <CustomHeading :level="2" :trailingIcons="args.trailingIcons">
          후행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="3" :trailingIcons="true">
          여러 후행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="2" icon="icon icon--md icon--settings" :trailingIcons="true">
          앞뒤 아이콘이 모두 있는 제목
        </CustomHeading>
      </div>
    `}),args:{trailingIcons:!0}},u={render:e=>({components:{CustomHeading:i},setup(){return{args:e}},template:`
      <div>
        <CustomHeading :level="2" :trailingIcons="args.trailingIcons" :isTrailingIconClickable="false">
          클릭 불가능한 후행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="3" :trailingIcons="true" :isTrailingIconClickable="false">
          클릭 불가능한 여러 후행 아이콘이 있는 제목
        </CustomHeading>
      </div>
    `}),args:{trailingIcons:!0,isTrailingIconClickable:!1}},C={render:e=>({components:{CustomHeading:i},setup(){return{args:e}},template:`
      <div>
        <CustomHeading :level="2" :trailingIcons="args.trailingIcons">
          <button class="btn btn--primary" @click.stop="() => alert('버튼이 클릭되었습니다')">
            <i class="icon icon--md icon--settings"></i>
            버튼과 후행 아이콘
          </button>
        </CustomHeading>
        <CustomHeading :level="3" :trailingIcons="true">
          <button class="btn btn--secondary" @click.stop="() => alert('다른 버튼이 클릭되었습니다')">
            다른 버튼
          </button>
        </CustomHeading>
      </div>
    `}),args:{trailingIcons:!0}},p={render:()=>({components:{CustomHeading:i},template:`
      <div>
        <CustomHeading :level="2">
          <button class="btn btn--primary" @click.stop="() => alert('버튼이 클릭되었습니다')">
            <i class="icon icon--md icon--settings"></i>
            버튼 내 아이콘
          </button>
        </CustomHeading>
        <CustomHeading :level="3">
          <button class="btn btn--secondary" @click.stop="() => alert('설정 버튼이 클릭되었습니다')">
            설정
            <i class="icon icon--md icon--settings"></i>
          </button>
        </CustomHeading>
        <CustomHeading :level="2" :trailingIcons="true">
          <button class="btn btn--primary" @click.stop="() => alert('여러 아이콘과 함께 있는 버튼이 클릭되었습니다')">
            <i class="icon icon--md icon--settings"></i>
            여러 아이콘과 함께 있는 버튼
          </button>
        </CustomHeading>
      </div>
    `})};var h,_,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      CustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: '<CustomHeading v-bind="args">기본 제목</CustomHeading>'
  }),
  args: {
    level: 2,
    color: 'brand',
    align: 'left',
    spacing: 'md',
    icon: ''
  }
}`,...(T=(_=a.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var S,B,V;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomHeading
    },
    template: \`
      <div>
        <CustomHeading :level="1">H1 제목 (4xl)</CustomHeading>
        <CustomHeading :level="2">H2 제목 (3xl)</CustomHeading>
        <CustomHeading :level="3">H3 제목 (2xl)</CustomHeading>
        <CustomHeading :level="4">H4 제목 (xl)</CustomHeading>
        <CustomHeading :level="5">H5 제목 (lg)</CustomHeading>
        <CustomHeading :level="6">H6 제목 (md)</CustomHeading>
      </div>
    \`
  })
}`,...(V=(B=l.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var W,A,N;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomHeading
    },
    template: \`
      <div>
        <CustomHeading :level="2" align="left">왼쪽 정렬 제목</CustomHeading>
        <CustomHeading :level="2" align="center">가운데 정렬 제목</CustomHeading>
        <CustomHeading :level="2" align="right">오른쪽 정렬 제목</CustomHeading>
      </div>
    \`
  })
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var $,L,D;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomHeading
    },
    template: \`
      <div style="background-color: #f0f0f0;">
        <CustomHeading :level="2" spacing="none">여백 없음</CustomHeading>
        <CustomHeading :level="2" spacing="sm">작은 여백</CustomHeading>
        <CustomHeading :level="2" spacing="md">중간 여백</CustomHeading>
        <CustomHeading :level="2" spacing="lg">큰 여백</CustomHeading>
      </div>
    \`
  })
}`,...(D=(L=r.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var w,z,E;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <CustomHeading :level="2" :icon="args.icon">설정 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="3" icon="icon icon--md icon--settings" align="center">홈 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="4" icon="icon icon--md icon--settings" align="right">사용자 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="2" icon="icon icon--md icon--settings">알림 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="3" icon="icon icon--md icon--settings">차트 아이콘이 있는 제목</CustomHeading>
        <CustomHeading :level="4" icon="icon icon--md icon--settings">정보 아이콘이 있는 제목</CustomHeading>
      </div>
    \`
  }),
  args: {
    icon: 'icon icon--md icon--settings'
  }
}`,...(E=(z=g.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var F,q,M;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <CustomHeading :level="2" :icon="args.icon" :isIconClickable="false">
          클릭 불가능한 전행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="3" icon="icon icon--md icon--settings" :isIconClickable="false" align="center">
          클릭 불가능한 전행 아이콘이 있는 가운데 정렬 제목
        </CustomHeading>
      </div>
    \`
  }),
  args: {
    icon: 'icon icon--md icon--settings',
    isIconClickable: false
  }
}`,...(M=(q=d.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var O,j,x;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <CustomHeading :level="2" :trailingIcons="args.trailingIcons">
          후행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="3" :trailingIcons="true">
          여러 후행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="2" icon="icon icon--md icon--settings" :trailingIcons="true">
          앞뒤 아이콘이 모두 있는 제목
        </CustomHeading>
      </div>
    \`
  }),
  args: {
    trailingIcons: true
  }
}`,...(x=(j=m.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <CustomHeading :level="2" :trailingIcons="args.trailingIcons" :isTrailingIconClickable="false">
          클릭 불가능한 후행 아이콘이 있는 제목
        </CustomHeading>
        <CustomHeading :level="3" :trailingIcons="true" :isTrailingIconClickable="false">
          클릭 불가능한 여러 후행 아이콘이 있는 제목
        </CustomHeading>
      </div>
    \`
  }),
  args: {
    trailingIcons: true,
    isTrailingIconClickable: false
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,R;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => ({
    components: {
      CustomHeading
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <CustomHeading :level="2" :trailingIcons="args.trailingIcons">
          <button class="btn btn--primary" @click.stop="() => alert('버튼이 클릭되었습니다')">
            <i class="icon icon--md icon--settings"></i>
            버튼과 후행 아이콘
          </button>
        </CustomHeading>
        <CustomHeading :level="3" :trailingIcons="true">
          <button class="btn btn--secondary" @click.stop="() => alert('다른 버튼이 클릭되었습니다')">
            다른 버튼
          </button>
        </CustomHeading>
      </div>
    \`
  }),
  args: {
    trailingIcons: true
  }
}`,...(R=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,X,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CustomHeading
    },
    template: \`
      <div>
        <CustomHeading :level="2">
          <button class="btn btn--primary" @click.stop="() => alert('버튼이 클릭되었습니다')">
            <i class="icon icon--md icon--settings"></i>
            버튼 내 아이콘
          </button>
        </CustomHeading>
        <CustomHeading :level="3">
          <button class="btn btn--secondary" @click.stop="() => alert('설정 버튼이 클릭되었습니다')">
            설정
            <i class="icon icon--md icon--settings"></i>
          </button>
        </CustomHeading>
        <CustomHeading :level="2" :trailingIcons="true">
          <button class="btn btn--primary" @click.stop="() => alert('여러 아이콘과 함께 있는 버튼이 클릭되었습니다')">
            <i class="icon icon--md icon--settings"></i>
            여러 아이콘과 함께 있는 버튼
          </button>
        </CustomHeading>
      </div>
    \`
  })
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const bn=["Default","Levels","Alignment","Spacing","WithIcon","WithNonClickableIcon","WithTrailingIcons","WithNonClickableTrailingIcons","WithTrailingIconsAndButton","IconsInButton"];export{c as Alignment,a as Default,p as IconsInButton,l as Levels,r as Spacing,g as WithIcon,d as WithNonClickableIcon,u as WithNonClickableTrailingIcons,m as WithTrailingIcons,C as WithTrailingIconsAndButton,bn as __namedExportsOrder,vn as default};
