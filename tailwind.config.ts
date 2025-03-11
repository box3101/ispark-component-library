// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // 색상 팔레트 정의
        // 기본 색상은 500이며, 다른 값들은 밝기/어둡기의 변형입니다
        // 숫자가 작을수록 밝고, 클수록 어두운 색상입니다
        // UI 컴포넌트에서 variant에 따라 다양한 색상 값이 사용됩니다
        brand: {
          50: 'var(--color-brand-50)',   // 가장 밝은 배경색 (soft variant 배경)
          100: 'var(--color-brand-100)',  // 매우 밝은 배경색
          200: 'var(--color-brand-200)',  // 밝은 배경색
          300: 'var(--color-brand-300)',  // 중간 밝기 배경색
          400: 'var(--color-brand-400)',  // 밝은 강조색
          500: 'var(--color-brand-500)',  // 기본 색상 (primary color)
          600: 'var(--color-brand-600)',  // 약간 어두운 강조색 (hover 상태)
          700: 'var(--color-brand-700)',  // 어두운 강조색 (active 상태)
          800: 'var(--color-brand-800)',  // 매우 어두운 강조색
          900: 'var(--color-brand-900)',  // 가장 어두운 강조색
          950: 'var(--color-brand-950)'   // 거의 검은색에 가까운 색상
        },
        gray: {
          50: 'var(--color-gray-50)',   // 가장 밝은 배경색 (soft variant 배경)
          100: 'var(--color-gray-100)',  // 매우 밝은 배경색
          200: 'var(--color-gray-200)',  // 밝은 배경색
          300: 'var(--color-gray-300)',  // 중간 밝기 배경색
          400: 'var(--color-gray-400)',  // 밝은 강조색
          500: 'var(--color-gray-500)',  // 기본 색상 (primary color)
          600: 'var(--color-gray-600)',  // 약간 어두운 강조색 (hover 상태)
          700: 'var(--color-gray-700)',  // 어두운 강조색 (active 상태)
          800: 'var(--color-gray-800)',  // 매우 어두운 강조색
          900: 'var(--color-gray-900)',  // 가장 어두운 강조색
          950: 'var(--color-gray-950)'   // 거의 검은색에 가까운 색상
        }
      }
    }
  }
}