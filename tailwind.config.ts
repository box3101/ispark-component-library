// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'brand': '0.75rem',  // 브랜드 전용 rounded 값
        'brand-lg': '1rem',  // 큰 rounded 값
        'brand-sm': '0.5rem' // 작은 rounded 값
      },
      padding: {
        // 커스텀 패딩 정의 (px 값으로 직접 지정)
        'btn-xs': '28px 16px',    // px-2 py-1 대응
        'btn-sm': '12px 24px',   // px-3 py-1.5 대응
        'btn-md': '59px 32px',   // px-4 py-2 대응
        'btn-lg': '20px 40px',   // px-5 py-2.5 대응
        'btn-xl': '24px 48px',   // px-6 py-3 대응
      },
      colors: {
        // 색상 팔레트 정의
        // 기본 색상은 500이며, 다른 값들은 밝기/어둡기의 변형입니다
        // 숫자가 작을수록 밝고, 클수록 어두운 색상입니다
        // UI 컴포넌트에서 variant에 따라 다양한 색상 값이 사용됩니다
        brand: {
          50: '#f0fdf4',   // 가장 밝은 배경색 (soft variant 배경)
          100: '#dcfce7',  // 매우 밝은 배경색
          200: '#bbf7d0',  // 밝은 배경색
          300: '#86efac',  // 중간 밝기 배경색
          400: '#4ade80',  // 밝은 강조색
          500: '#22c55e',  // 기본 색상 (primary color)
          600: '#16a34a',  // 약간 어두운 강조색 (hover 상태)
          700: '#15803d',  // 어두운 강조색 (active 상태)
          800: '#166534',  // 매우 어두운 강조색
          900: '#14532d',  // 가장 어두운 강조색
          950: '#052e16'   // 거의 검은색에 가까운 색상
        },
        secondary: {
          50: '#fef2f2',   // 가장 밝은 배경색 (soft variant 배경)
          100: '#fee2e2',  // 매우 밝은 배경색
          200: '#fecaca',  // 밝은 배경색
          300: '#fca5a5',  // 중간 밝기 배경색
          400: '#f87171',  // 밝은 강조색
          500: '#ef4444',  // 기본 색상 (primary color)
          600: '#dc2626',  // 약간 어두운 강조색 (hover 상태)
          700: '#b91c1c',  // 어두운 강조색 (active 상태)
          800: '#991b1b',  // 매우 어두운 강조색
          900: '#7f1d1d',  // 가장 어두운 강조색
          950: '#450a0a'   // 거의 검은색에 가까운 색상
        }
      }
    }
  }
}