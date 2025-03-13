<template>
  <!-- 버튼 요소: 다양한 클래스와 속성을 동적으로 적용 -->
  <button
    :class="[
      'custom-button',
      `custom-button--${size}`, // 버튼 크기 클래스 (xs, sm, md, lg, xl)
      `custom-button--${variant}`, // 버튼 스타일 변형 클래스 (solid, outline, soft, ghost, link)
      `custom-button--${color}`, // 버튼 색상 클래스 (brand, gray, dark-gray)
      { 'custom-button--loading': loading }, // 로딩 상태 클래스
      { 'custom-button--disabled': disabled }, // 비활성화 상태 클래스
      { 'custom-button--block': block }, // 블록 레벨 버튼 클래스
      { 'custom-button--square': square }, // 정사각형 버튼 클래스
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <!-- 로딩 상태 표시 요소 -->
    <span v-if="loading" class="custom-button__loader"></span>

    <!-- 선행 아이콘 (trailing이 false일 때) -->
    <span v-if="icon && !trailing" class="custom-button__icon">
      <i :class="['icon', 'icon--md', icon]"></i>
    </span>

    <!-- 버튼 내용 (슬롯이 있을 경우에만 표시) -->
    <span
      v-if="$slots.default && $slots.default().length > 0"
      class="custom-button__content"
    >
      <slot />
    </span>

    <!-- 후행 아이콘 (trailing이 true일 때) -->
    <span v-if="icon && trailing" class="custom-button__icon">
      <i :class="['icon', 'icon--md', icon]"></i>
    </span>
  </button>
</template>

<script setup lang="ts">
// 버튼 컴포넌트 속성 정의
interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl"; // 버튼 크기 옵션
  color?: "brand" | "gray" | "dark-gray"; // 버튼 색상 옵션
  variant?: "solid" | "outline" | "soft" | "ghost" | "link"; // 버튼 스타일 변형 옵션
  icon?: string; // 아이콘 클래스명
  trailing?: boolean; // 아이콘 위치 (true: 텍스트 뒤, false: 텍스트 앞)
  loading?: boolean; // 로딩 상태 여부
  disabled?: boolean; // 비활성화 상태 여부
  block?: boolean; // 블록 레벨 버튼 여부 (가로 너비 100%)
  square?: boolean; // 정사각형 버튼 여부
}

// 기본값 설정
withDefaults(defineProps<Props>(), {
  size: "md", // 기본 크기: 중간
  color: "brand", // 기본 색상: 브랜드 색상
  variant: "solid", // 기본 스타일: 솔리드
  icon: "", // 기본 아이콘: 없음
  trailing: false, // 기본 아이콘 위치: 텍스트 앞
  loading: false, // 기본 로딩 상태: 비로딩
  disabled: false, // 기본 활성화 상태: 활성화
  block: false, // 기본 너비: 자동
  square: false, // 기본 형태: 직사각형
});

// 클릭 이벤트 정의
defineEmits(["click"]);
</script>
