export default defineAppConfig({
  ui: {
    // 기본 브랜드 색상 정의
    primary: 'brand',  // 문자열로 변경

    // 보조 색상 정의 (사용자 정의)
    gray: 'zinc', // 또는 'slate', 'neutral' 중 선택

    // 버튼 컴포넌트 커스터마이징
    button: {
      default: {
        size: 'md',
        color: 'brand',
        variant: 'solid',  // soft에서 solid로 변경
        rounded: 'brand', // tailwind.config.ts에서 정의한 커스텀 radius
        font: 'font-heading font-medium',
        padding: {
          xs: 'btn-xs',
          sm: 'btn-sm',
          md: 'btn-md',
          lg: 'btn-lg',
          xl: 'btn-xl',
        }
      }
    },
  },
})