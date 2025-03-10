<template>
  <div class="flex flex-col gap-8 p-8">
    <!-- 기본 버튼 스타일 -->
    <div>
      <h2 class="text-xl font-bold mb-4">기본 버튼 스타일</h2>
      <div class="flex flex-wrap items-center gap-4">
        <UButton color="brand">기본 버튼</UButton>
        <UButton color="brand" variant="outline">아웃라인 버튼</UButton>
        <UButton color="brand" variant="soft">소프트 버튼</UButton>
        <UButton color="brand" variant="ghost">고스트 버튼</UButton>
        <UButton color="brand" variant="link">링크 버튼</UButton>
      </div>
    </div>

    <!-- 사이즈별 버튼 -->
    <div>
      <h2 class="text-xl font-bold mb-4">사이즈별 버튼</h2>
      <div class="flex flex-wrap items-center gap-4">
        <UButton color="brand" size="xs">XS 버튼</UButton>
        <UButton color="brand" size="sm">SM 버튼</UButton>
        <UButton color="brand" size="md">MD 버튼</UButton>
        <UButton color="brand" size="lg">LG 버튼</UButton>
        <UButton color="brand" size="xl">XL 버튼</UButton>
      </div>
    </div>

    <!-- 아이콘 버튼 -->
    <div>
      <h2 class="text-xl font-bold mb-4">아이콘 버튼</h2>
      <div class="flex flex-wrap items-center gap-4">
        <UButton color="brand" icon="i-heroicons-plus">아이콘 버튼</UButton>
        <UButton color="brand" icon="i-heroicons-arrow-right" trailing
          >후행 아이콘</UButton
        >
        <UButton color="brand" icon="i-heroicons-check" square />
        <UButton
          color="brand"
          variant="outline"
          icon="i-heroicons-heart"
          square
        />
      </div>
    </div>

    <!-- 상태별 버튼 -->
    <div>
      <h2 class="text-xl font-bold mb-4">상태별 버튼</h2>
      <div class="flex flex-wrap items-center gap-4">
        <UButton color="brand" loading>로딩 버튼</UButton>
        <UButton color="brand" disabled>비활성화 버튼</UButton>
        <UButton color="brand" block class="max-w-xs">블록 버튼</UButton>
      </div>
    </div>

    <!-- 세컨더리 컬러 버튼 -->
    <div>
      <h2 class="text-xl font-bold mb-4">세컨더리 컬러 버튼</h2>
      <div class="flex flex-wrap items-center gap-4">
        <UButton color="secondary">기본 버튼</UButton>
        <UButton color="secondary" variant="outline">아웃라인 버튼</UButton>
        <UButton color="secondary" variant="soft">소프트 버튼</UButton>
        <UButton color="secondary" loading>로딩 버튼</UButton>
        <UButton color="secondary" disabled>비활성화 버튼</UButton>
      </div>
    </div>

    <!-- 인풋 컴포넌트 -->
    <div class="mt-8">
      <h2 class="text-xl font-bold mb-4">인풋 컴포넌트</h2>

      <!-- 기본 인풋 -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">기본 인풋</h3>
        <div class="flex flex-col gap-4 max-w-md">
          <UInput placeholder="기본 인풋" />
          <UInput placeholder="라벨이 있는 인풋" label="이름" />
          <UInput
            placeholder="도움말이 있는 인풋"
            label="이메일"
            help="유효한 이메일 주소를 입력하세요"
          />
          <UInput
            placeholder="에러 상태 인풋"
            label="비밀번호"
            error="비밀번호는 8자 이상이어야 합니다"
          />
        </div>
      </div>

      <!-- 인풋 사이즈 -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">인풋 사이즈</h3>
        <div class="flex flex-col gap-4 max-w-md">
          <UInput size="xs" placeholder="XS 사이즈" />
          <UInput size="sm" placeholder="SM 사이즈" />
          <UInput size="md" placeholder="MD 사이즈" />
          <UInput size="lg" placeholder="LG 사이즈" />
          <UInput size="xl" placeholder="XL 사이즈" />
        </div>
      </div>

      <!-- 인풋 변형 -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">인풋 변형</h3>
        <div class="flex flex-col gap-4 max-w-md">
          <UInput
            placeholder="아이콘이 있는 인풋"
            icon="i-heroicons-magnifying-glass"
          />
          <UInput
            placeholder="후행 아이콘 인풋"
            trailing-icon="i-heroicons-calendar"
          />
          <UInput placeholder="비활성화된 인풋" disabled />
          <UInput placeholder="읽기 전용 인풋" readonly />
          <UInput placeholder="로딩 상태 인풋" loading />
        </div>
      </div>

      <!-- 인풋 타입 -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">인풋 타입</h3>
        <div class="flex flex-col gap-4 max-w-md">
          <UInput type="text" placeholder="텍스트 인풋" />
          <UInput type="password" placeholder="비밀번호 인풋" />
          <UInput type="email" placeholder="이메일 인풋" />
          <UInput type="number" placeholder="숫자 인풋" />
          <UInput type="tel" placeholder="전화번호 인풋" />
        </div>
      </div>

      <!-- 인풋 그룹 -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">인풋 그룹</h3>
        <div class="flex flex-col gap-4 max-w-md">
          <UInputGroup>
            <UButton color="gray">https://</UButton>
            <UInput placeholder="example.com" />
          </UInputGroup>

          <UInputGroup>
            <UInput placeholder="검색어를 입력하세요" />
            <UButton color="brand" icon="i-heroicons-magnifying-glass"
              >검색</UButton
            >
          </UInputGroup>

          <UInputGroup>
            <UButton color="gray">₩</UButton>
            <UInput type="number" placeholder="0" />
            <USelect :options="['KRW', 'USD', 'EUR']" />
          </UInputGroup>
        </div>
      </div>
    </div>
  </div>
</template>
