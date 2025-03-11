<template>
  <div class="flex flex-col gap-8 p-8">
    <!-- 기본 버튼 스타일 -->
    <div>
      <h2 class="text-xl font-bold mb-4">기본 버튼 스타일</h2>
      <div class="flex flex-wrap items-center gap-4">
        <CustomButton color="brand">기본 버튼</CustomButton>
        <CustomButton color="brand" variant="outline"
          >아웃라인 버튼</CustomButton
        >
        <CustomButton color="brand" variant="soft">소프트 버튼</CustomButton>
        <CustomButton color="brand" variant="ghost">고스트 버튼</CustomButton>
        <CustomButton color="brand" variant="link">링크 버튼</CustomButton>
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <CustomButton color="gray">기본 버튼</CustomButton>
        <CustomButton color="gray" variant="outline"
          >아웃라인 버튼</CustomButton
        >
        <CustomButton color="gray" variant="soft">소프트 버튼</CustomButton>
        <CustomButton color="gray" variant="ghost">고스트 버튼</CustomButton>
        <CustomButton color="gray" variant="link">링크 버튼</CustomButton>
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <CustomButton color="dark-gray">다크 그레이 버튼</CustomButton>
        <CustomButton color="dark-gray" variant="outline"
          >다크 그레이 아웃라인</CustomButton
        >
        <CustomButton color="dark-gray" variant="soft"
          >다크 그레이 소프트</CustomButton
        >
        <CustomButton color="dark-gray" variant="ghost"
          >다크 그레이 고스트</CustomButton
        >
        <CustomButton color="dark-gray" variant="link"
          >다크 그레이 링크</CustomButton
        >
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
        <CustomButton
          color="brand"
          icon="icon icon--md icon--settings icon--white"
          >아이콘 버튼</CustomButton
        >
        <CustomButton
          color="brand"
          icon="icon icon--md icon--settings icon--white"
          trailing
        >
          후행 아이콘
        </CustomButton>
        <CustomButton
          color="brand"
          icon="icon icon--md icon--settings icon--white"
          square
        />
        <CustomButton
          color="brand"
          variant="outline"
          icon="icon icon--md icon--settings"
          square
        />
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <CustomButton color="gray" icon="icon icon--md icon--settings" square />
        <CustomButton
          color="gray"
          variant="outline"
          icon="icon icon--md icon--settings"
          square
        />
        <CustomButton color="gray" icon="icon icon--md icon--settings"
          >그레이 아이콘 버튼</CustomButton
        >
        <CustomButton color="gray" icon="icon icon--md icon--settings" trailing>
          그레이 후행 아이콘
        </CustomButton>
      </div>
      <div class="flex flex-wrap items-center gap-4 mt-4">
        <CustomButton
          color="dark-gray"
          icon="icon icon--md icon--settings icon--white"
          square
        />
        <CustomButton
          color="dark-gray"
          variant="outline"
          icon="icon icon--md icon--settings"
          square
        />
        <CustomButton
          color="dark-gray"
          icon="icon icon--md icon--settings icon--white"
          >다크 그레이 아이콘 버튼</CustomButton
        >
        <CustomButton
          color="dark-gray"
          icon="icon icon--md icon--settings icon--white"
          trailing
        >
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
        <CustomButton color="brand" block class="max-w-md"
          >블록 버튼</CustomButton
        >
      </div>
    </div>

    <!-- 체크박스 -->
    <div>
      <h2 class="text-xl font-bold mb-4">체크박스</h2>
      <div class="flex gap-2">
        <CustomCheckbox v-model="checkboxValue" label="체크박스 라벨" />
        <CustomCheckbox
          v-model="checkboxValue2"
          label="브랜드 체크박스"
          color="brand"
        />
        <CustomCheckbox
          v-model="checkboxValue3"
          label="그레이 체크박스"
          color="gray"
        />
        <CustomCheckbox
          v-model="checkboxValue4"
          label="다크 그레이 체크박스"
          color="dark-gray"
        />
        <CustomCheckbox
          v-model="checkboxValue5"
          label="비활성화 체크박스"
          disabled
        />
        <CustomCheckbox
          v-model="checkboxValue6"
          label="도움말이 있는 체크박스"
          help="이 체크박스에 대한 추가 설명입니다."
        />
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
        <CustomRadio
          v-model="radioValue"
          value="option1"
          name="radioGroup1"
          label="라디오박스 라벨 1"
        />
        <CustomRadio
          v-model="radioValue"
          value="option2"
          name="radioGroup1"
          label="라디오박스 라벨 2"
        />
        <CustomRadio
          v-model="radioValue"
          value="option3"
          name="radioGroup1"
          label="라디오박스 라벨 3"
        />
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
        <CustomBadge color="purple" variant="outline"
          >실적/목표*100</CustomBadge
        >
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

  <!-- 셀렉트 -->
  <div class="select-examples">
    <h2 class="text-xl font-bold mb-4">셀렉트 컴포넌트</h2>

    <!-- 기본 셀렉트 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">기본 셀렉트</h3>
      <div class="flex flex-col md:flex-row gap-4">
        <CustomSelect
          v-model="selectValue1"
          :options="selectOptions"
          label="기본 셀렉트"
          placeholder="옵션을 선택하세요"
        />
        <CustomSelect
          v-model="selectValue2"
          :options="selectOptions"
          label="에러 상태"
          placeholder="옵션을 선택하세요"
          error="필수 항목입니다"
        />
      </div>
    </div>

    <!-- 아이콘이 있는 셀렉트 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">아이콘이 있는 셀렉트</h3>
      <div class="flex flex-col md:flex-row gap-4">
        <CustomSelect
          v-model="selectValueWithIcon"
          :options="selectOptionsWithIcon"
          label="아이콘 셀렉트"
          placeholder="메뉴를 선택하세요"
        />
      </div>
    </div>

    <!-- 프로필 이미지가 있는 셀렉트 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">프로필 이미지가 있는 셀렉트</h3>
      <div class="flex flex-col md:flex-row gap-4">
        <CustomSelect
          v-model="selectValueWithImage"
          :options="selectOptionsWithImage"
          label="팀원 선택"
          placeholder="팀원을 선택하세요"
        />
      </div>
    </div>

    <!-- 크기 변형 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">크기 변형</h3>
      <div class="flex flex-col md:flex-row flex-wrap gap-4">
        <CustomSelect
          v-model="selectValue3"
          :options="selectOptions"
          label="소형 셀렉트"
          size="xs"
          placeholder="옵션을 선택하세요"
        />
        <CustomSelect
          v-model="selectValue4"
          :options="selectOptions"
          label="중형 셀렉트 (기본)"
          size="md"
          placeholder="옵션을 선택하세요"
        />
        <CustomSelect
          v-model="selectValue5"
          :options="selectOptions"
          label="대형 셀렉트"
          size="xl"
          placeholder="옵션을 선택하세요"
        />
      </div>
    </div>

    <!-- 비활성화 상태 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">비활성화 상태</h3>
      <div class="flex flex-col md:flex-row gap-4">
        <CustomSelect
          v-model="selectValue9"
          :options="selectOptions"
          label="비활성화된 셀렉트"
          placeholder="옵션을 선택하세요"
          disabled
        />
        <CustomSelect
          v-model="selectValue10"
          :options="selectOptions"
          label="도움말이 있는 셀렉트"
          placeholder="옵션을 선택하세요"
          help="추가 정보를 제공하는 도움말입니다"
        />
      </div>
    </div>

    <!-- 멀티 셀렉트 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">멀티 셀렉트</h3>
      <div class="flex flex-col md:flex-row gap-4">
        <CustomMultiSelect
          v-model="multiSelectValue"
          :options="selectOptions"
          label="기본 멀티 셀렉트"
          placeholder="여러 옵션을 선택하세요"
        />
        <CustomMultiSelect
          v-model="multiSelectValueWithIcon"
          :options="selectOptionsWithIcon"
          label="아이콘이 있는 멀티 셀렉트"
          placeholder="여러 메뉴를 선택하세요"
        />
      </div>
    </div>

    <!-- 프로필 이미지가 있는 멀티 셀렉트 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">프로필 이미지가 있는 멀티 셀렉트</h3>
      <div class="flex flex-col md:flex-row gap-4">
        <CustomMultiSelect
          v-model="multiSelectValueWithImage"
          :options="selectOptionsWithImage"
          label="팀원 다중 선택"
          placeholder="팀원을 선택하세요"
        />
      </div>
    </div>

    <!-- 크기 변형 멀티 셀렉트 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">크기 변형 멀티 셀렉트</h3>
      <div class="flex flex-col md:flex-row flex-wrap gap-4">
        <CustomMultiSelect
          v-model="multiSelectSizeXS"
          :options="selectOptionsWithImage"
          label="소형 멀티 셀렉트"
          size="xs"
          placeholder="팀원을 선택하세요"
        />
        <CustomMultiSelect
          v-model="multiSelectSizeMD"
          :options="selectOptionsWithImage"
          label="중형 멀티 셀렉트 (기본)"
          size="md"
          placeholder="팀원을 선택하세요"
        />
        <CustomMultiSelect
          v-model="multiSelectSizeXL"
          :options="selectOptionsWithImage"
          label="대형 멀티 셀렉트"
          size="xl"
          placeholder="팀원을 선택하세요"
        />
      </div>
    </div>

    <!-- 비활성화 상태 멀티 셀렉트 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">비활성화 상태 멀티 셀렉트</h3>
      <div class="flex flex-col md:flex-row gap-4">
        <CustomMultiSelect
          v-model="multiSelectDisabled"
          :options="selectOptionsWithImage"
          label="비활성화된 멀티 셀렉트"
          placeholder="팀원을 선택하세요"
          disabled
        />
        <CustomMultiSelect
          v-model="multiSelectWithHelp"
          :options="selectOptionsWithImage"
          label="도움말이 있는 멀티 셀렉트"
          placeholder="팀원을 선택하세요"
          help="팀원을 여러 명 선택할 수 있습니다"
        />
      </div>
    </div>
  </div>

  <!-- 헤딩 -->
  <div class="heading-examples">
    <h2 class="text-xl font-bold mb-4">헤딩 컴포넌트</h2>

    <!-- 기본 헤딩 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">기본 헤딩</h3>
      <div class="flex flex-col gap-2">
        <CustomHeading tag="h1" size="2xl">헤딩 1</CustomHeading>
        <CustomHeading tag="h2" size="xl">헤딩 2</CustomHeading>
        <CustomHeading tag="h3" size="lg">헤딩 3</CustomHeading>
        <CustomHeading tag="h4" size="md">헤딩 4</CustomHeading>
        <CustomHeading tag="h5" size="sm">헤딩 5</CustomHeading>
        <CustomHeading tag="h6" size="xs">헤딩 6</CustomHeading>
      </div>
    </div>

    <!-- 아이콘이 있는 헤딩 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">아이콘이 있는 헤딩</h3>
      <div class="flex flex-col gap-2">
        <CustomHeading
          tag="h2"
          size="2xl"
          color="brand"
          icon="icon icon--md icon--chart-bar"
        >
          성과 지표
        </CustomHeading>
        <CustomHeading
          tag="h2"
          size="xl"
          color="gray"
          icon="icon icon--md icon--users"
        >
          팀원 관리
        </CustomHeading>
        <CustomHeading
          tag="h2"
          size="lg"
          color="dark-gray"
          icon="icon icon--md icon--calendar"
          :trailingIcons="['icon icon--md icon--chevron-right']"
        >
          일정 관리
        </CustomHeading>
        <CustomHeading
          tag="h2"
          size="lg"
          color="brand"
          icon="icon icon--md icon--bell"
          :trailingIcons="[
            'icon icon--md icon--star',
            'icon icon--md icon--info',
            'icon icon--md icon--chevron-right'
          ]"
        >
          알림 센터
        </CustomHeading>
      </div>
    </div>

    <!-- 색상 변형 -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">색상 변형</h3>
      <div class="flex flex-col gap-2">
        <CustomHeading tag="h2" size="xl" color="brand">브랜드 컬러</CustomHeading>
        <CustomHeading tag="h2" size="xl" color="gray">그레이 컬러</CustomHeading>
        <CustomHeading tag="h2" size="xl" color="dark-gray">다크 그레이 컬러</CustomHeading>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
// 체크박스 상태
const checkboxValue = ref(false)
const checkboxValue2 = ref(false)
const checkboxValue3 = ref(false)
const checkboxValue4 = ref(false)
const checkboxValue5 = ref(false)
const checkboxValue6 = ref(false)

// 사이즈별 체크박스 상태
const checkboxSizeXS = ref(false)
const checkboxSizeSM = ref(false)
const checkboxSizeMD = ref(false)
const checkboxSizeLG = ref(false)
const checkboxSizeXL = ref(false)

// 라디오 상태
const radioValue = ref('option1')

// 셀렉트 상태
const selectValue1 = ref('')
const selectValue2 = ref('')
const selectValue3 = ref('')
const selectValue4 = ref('')
const selectValue5 = ref('')
const selectValue9 = ref('')
const selectValue10 = ref('')
const selectValueWithIcon = ref('')
const selectValueWithImage = ref('')

// 셀렉트 옵션
const selectOptions = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
  { value: 'option5', label: '옵션 5' }
]

// 아이콘이 있는 셀렉트 옵션
const selectOptionsWithIcon = [
  { value: 'dashboard', label: '대시보드', icon: 'icon icon--md icon--chart-bar' },
  { value: 'users', label: '사용자 관리', icon: 'icon icon--md icon--users' },
  { value: 'settings', label: '설정', icon: 'icon icon--md icon--settings' },
  { value: 'calendar', label: '일정 관리', icon: 'icon icon--md icon--calendar' },
  { value: 'notifications', label: '알림', icon: 'icon icon--md icon--bell' }
]

// 프로필 이미지가 있는 셀렉트 옵션
const selectOptionsWithImage = [
  {
    value: 'user1',
    label: '김철수',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    value: 'user2',
    label: '이영희',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    value: 'user3',
    label: '박지성',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    value: 'user4',
    label: '최민지',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  }
]

// 멀티 셀렉트 상태
const multiSelectValue = ref<string[]>([])
const multiSelectValueWithIcon = ref<string[]>([])
const multiSelectValueWithImage = ref<string[]>([])
const multiSelectSizeXS = ref<string[]>([])
const multiSelectSizeMD = ref<string[]>([])
const multiSelectSizeXL = ref<string[]>([])
const multiSelectDisabled = ref<string[]>([])
const multiSelectWithHelp = ref<string[]>([])
</script>
