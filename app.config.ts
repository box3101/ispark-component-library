export default defineAppConfig({
  ui: {
    // 기본 브랜드 색상 정의
    primary: "brand",

    // 버튼 컴포넌트 기본 설정
    button: {
      default: {
        size: "md",
        color: "brand",
        variant: "solid",
      },
    },
    // 체크박스 기본 설정
    checkbox: {
      default: {
        color: "brand",
      },
    },

    // 라디오 버튼 기본 설정
    radio: {
      default: {
        color: "brand",
      },
    },
  },
});
