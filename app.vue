<template>
  <div class="flex flex-col gap-8 p-8">
    <!-- 기본 버튼 스타일 -->
    <div>
      <h2 class="text-xl font-bold mb-4">기본 버튼 스타일</h2>
      <div class="flex flex-wrap items-center gap-4">
        <CustomButton color="brand">기본 버튼</CustomButton>
        <CustomButton color="brand" variant="outline">아웃라인 버튼</CustomButton>
        <CustomButton color="brand" variant="soft">소프트 버튼</CustomButton>
        <CustomButton color="brand" variant="ghost">고스트 버튼</CustomButton>
        <CustomButton color="brand" variant="link">링크 버튼</CustomButton>
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <CustomButton color="gray">기본 버튼</CustomButton>
        <CustomButton color="gray" variant="outline">아웃라인 버튼</CustomButton>
        <CustomButton color="gray" variant="soft">소프트 버튼</CustomButton>
        <CustomButton color="gray" variant="ghost">고스트 버튼</CustomButton>
        <CustomButton color="gray" variant="link">링크 버튼</CustomButton>
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <CustomButton color="dark-gray">다크 그레이 버튼</CustomButton>
        <CustomButton color="dark-gray" variant="outline">다크 그레이 아웃라인</CustomButton>
        <CustomButton color="dark-gray" variant="soft">다크 그레이 소프트</CustomButton>
        <CustomButton color="dark-gray" variant="ghost">다크 그레이 고스트</CustomButton>
        <CustomButton color="dark-gray" variant="link">다크 그레이 링크</CustomButton>
      </div>
    </div>

    <!-- 사이즈별 버튼 -->
    <div>
      <h2 class="text-xl font-bold mb-4">사이즈별 버튼</h2>
      <div class="flex flex-wrap items-center gap-4">
        <CustomButton color="brand" size="xs">XS 버튼</CustomButton>
        <CustomButton color="brand" size="sm">SM 버튼</CustomButton>
        <CustomButton color="brand" size="md">MD 버튼</CustomButton>
        <CustomButton color="brand" size="lg">LG 버튼</CustomButton>
        <CustomButton color="brand" size="xl">XL 버튼</CustomButton>
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <CustomButton color="gray" size="xs">XS 버튼</CustomButton>
        <CustomButton color="gray" size="sm">SM 버튼</CustomButton>
        <CustomButton color="gray" size="md">MD 버튼</CustomButton>
        <CustomButton color="gray" size="lg">LG 버튼</CustomButton>
        <CustomButton color="gray" size="xl">XL 버튼</CustomButton>
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <CustomButton color="dark-gray" size="xs">XS 버튼</CustomButton>
        <CustomButton color="dark-gray" size="sm">SM 버튼</CustomButton>
        <CustomButton color="dark-gray" size="md">MD 버튼</CustomButton>
        <CustomButton color="dark-gray" size="lg">LG 버튼</CustomButton>
        <CustomButton color="dark-gray" size="xl">XL 버튼</CustomButton>
      </div>
    </div>

    <!-- 아이콘 버튼 -->
    <div>
      <h2 class="text-xl font-bold mb-4">아이콘 버튼</h2>
      <div class="flex flex-wrap items-center gap-4">
        <CustomButton color="brand" icon="icon icon--md icon--settings icon--white">아이콘 버튼</CustomButton>
        <CustomButton color="brand" icon="icon icon--md icon--settings icon--white" trailing>
          후행 아이콘
        </CustomButton>
        <CustomButton color="brand" icon="icon icon--md icon--settings icon--white" square />
        <CustomButton color="brand" variant="outline" icon="icon icon--md icon--settings" square />
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <CustomButton color="gray" icon="icon icon--md icon--settings" square />
        <CustomButton color="gray" variant="outline" icon="icon icon--md icon--settings" square />
        <CustomButton color="gray" icon="icon icon--md icon--settings">그레이 아이콘 버튼</CustomButton>
        <CustomButton color="gray" icon="icon icon--md icon--settings" trailing>
          그레이 후행 아이콘
        </CustomButton>
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <CustomButton color="dark-gray" icon="icon icon--md icon--settings icon--white" square />
        <CustomButton color="dark-gray" variant="outline" icon="icon icon--md icon--settings" square />
        <CustomButton color="dark-gray" icon="icon icon--md icon--settings icon--white">다크 그레이 아이콘 버튼</CustomButton>
        <CustomButton color="dark-gray" icon="icon icon--md icon--settings icon--white" trailing>
          다크 그레이 후행 아이콘
        </CustomButton>
      </div>
    </div>

    <!-- 상태별 버튼 -->
    <div>
      <h2 class="text-xl font-bold mb-4">상태별 버튼</h2>
      <div class="flex flex-wrap items-center gap-4">
        <CustomButton color="brand" loading>로딩 버튼</CustomButton>
        <CustomButton color="brand" disabled>비활성화 버튼</CustomButton>
        <CustomButton color="brand" block class="max-w-md">블록 버튼</CustomButton>
      </div>
    </div>

    <!-- 체크박스 -->
    <div>
      <h2 class="text-xl font-bold mb-4">체크박스</h2>
        <div class="flex gap-2">
          <CustomCheckbox v-model="checkboxValue" label="체크박스 라벨" />
          <CustomCheckbox v-model="checkboxValue2" label="브랜드 체크박스" color="brand" />
          <CustomCheckbox v-model="checkboxValue3" label="그레이 체크박스" color="gray" />
          <CustomCheckbox v-model="checkboxValue4" label="다크 그레이 체크박스" color="dark-gray" />
          <CustomCheckbox v-model="checkboxValue5" label="비활성화 체크박스" disabled />
          <CustomCheckbox v-model="checkboxValue6" label="도움말이 있는 체크박스" help="이 체크박스에 대한 추가 설명입니다." />
       </div>
      <h3 class="text-lg font-semibold mt-4 mb-2">사이즈별 체크박스</h3>
      <div class="flex gap-4 items-center">
        <CustomCheckbox v-model="checkboxSizeXS" label="XS 사이즈" size="xs" />
        <CustomCheckbox v-model="checkboxSizeSM" label="SM 사이즈" size="sm" />
        <CustomCheckbox v-model="checkboxSizeMD" label="MD 사이즈" size="md" />
        <CustomCheckbox v-model="checkboxSizeLG" label="LG 사이즈" size="lg" />
        <CustomCheckbox v-model="checkboxSizeXL" label="XL 사이즈" size="xl" />
      </div>
    </div>

    <!-- 라디오박스 -->
    <div>
      <h2 class="text-xl font-bold mb-4">라디오박스</h2>
      <div class="flex gap-4 items-center">
        <CustomRadio v-model="radioValue" value="option1" name="radioGroup1" label="라디오박스 라벨 1" />
        <CustomRadio v-model="radioValue" value="option2" name="radioGroup1" label="라디오박스 라벨 2" />
        <CustomRadio v-model="radioValue" value="option3" name="radioGroup1" label="라디오박스 라벨 3" />
      </div>
    </div>
  </div>

  <!-- 뱃지 -->
  <div class="badge-examples">
    <h2 class="text-xl font-bold mb-4">뱃지 컴포넌트</h2>

    <!-- 색상 변형 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">색상 변형</h3>
      <div class="flex flex-wrap gap-2">
        <CustomBadge color="blue">개인 KPI</CustomBadge>
        <CustomBadge color="blue" variant="outline">부서 KPI</CustomBadge>
        <CustomBadge color="green">계량</CustomBadge>
        <CustomBadge color="green" variant="outline">비계량</CustomBadge>
        <CustomBadge color="red">합산</CustomBadge>
        <CustomBadge color="red" variant="outline">평균</CustomBadge>
        <CustomBadge color="purple">당월실적</CustomBadge>
        <CustomBadge color="purple" variant="outline">실적/목표*100</CustomBadge>
      </div>
    </div>

    <!-- 크기 변형 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">크기 변형</h3>
      <div class="flex flex-wrap items-center gap-2">
        <CustomBadge color="blue" size="sm">소형</CustomBadge>
        <CustomBadge color="blue">중형(기본)</CustomBadge>
        <CustomBadge color="blue" size="lg">대형</CustomBadge>
      </div>
    </div>
  </div>

</template>