<template>
  <div class="custom-date-picker" :class="{ 'is-disabled': disabled }" ref="datePickerRef">
    <label v-if="label" class="custom-date-picker__label">{{ label }}</label>
    <div class="custom-date-picker__wrapper">
      <div
        class="custom-date-picker__input"
        :class="[
          `custom-date-picker__input--${size}`,
          { 'custom-date-picker__input--error': error }
        ]"
        :disabled="disabled"
        @click="toggleCalendar"
      >
        <div class="custom-date-picker__selected-date">
          <template v-if="mode === 'single'">
            <span v-if="modelValue" class="custom-date-picker__date-text">
              {{ formatDate(modelValue) }}
            </span>
            <span v-else class="custom-date-picker__placeholder">
              {{ placeholder }}
            </span>
          </template>
          <template v-else-if="mode === 'range'">
            <span v-if="startDate && endDate" class="custom-date-picker__date-text">
              {{ formatDate(startDate) }} - {{ formatDate(endDate) }}
            </span>
            <span v-else-if="startDate" class="custom-date-picker__date-text">
              {{ formatDate(startDate) }} - {{ placeholder }}
            </span>
            <span v-else class="custom-date-picker__placeholder">
              {{ placeholder }}
            </span>
          </template>
        </div>
        <i class="custom-date-picker__icon icon icon--md icon--calendar"></i>
      </div>

      <div v-if="isOpen" class="custom-date-picker__calendar">
        <div class="custom-date-picker__header">
          <button
            type="button"
            class="custom-date-picker__nav-button"
            @click="prevMonth"
          >
            <i class="icon icon--md icon--chevron-left"></i>
          </button>
          <div class="custom-date-picker__month-year-selector">
            <button
              type="button"
              class="custom-date-picker__month-year"
              @click="toggleMonthYearSelector"
            >
              {{ currentMonthName }} {{ currentYear }}
            </button>
            
            <div v-if="showMonthYearSelector" class="custom-date-picker__selector-dropdown">
              <div class="custom-date-picker__selector-row">
                <select
                  v-model="currentMonth"
                  class="custom-date-picker__selector"
                  @change="showMonthYearSelector = false"
                >
                  <option v-for="(month, index) in months" :key="index" :value="index">
                    {{ month }}
                  </option>
                </select>
                
                <select
                  v-model="currentYear"
                  class="custom-date-picker__selector"
                  @change="showMonthYearSelector = false"
                >
                  <option v-for="year in yearRange" :key="year" :value="year">
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="custom-date-picker__nav-button"
            @click="nextMonth"
          >
            <i class="icon icon--md icon--chevron-right"></i>
          </button>
        </div>

        <div class="custom-date-picker__weekdays">
          <span v-for="day in weekdays" :key="day" class="custom-date-picker__weekday">
            {{ day }}
          </span>
        </div>

        <div class="custom-date-picker__days">
          <button
            v-for="(day, index) in calendarDays"
            :key="index"
            type="button"
            class="custom-date-picker__day"
            :class="getDayClasses(day)"
            :disabled="!day.isCurrentMonth || day.disabled"
            @click="selectDate(day)"
          >
            {{ day.day }}
          </button>
        </div>
      </div>
    </div>
    <span v-if="help" class="custom-date-picker__help">{{ help }}</span>
    <span v-if="error" class="custom-date-picker__error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

interface DateObj {
  date: Date
  day: number
  month: number
  year: number
  isCurrentMonth: boolean
  isToday: boolean
  disabled: boolean
}

interface Props {
  modelValue?: Date
  startDate?: Date
  endDate?: Date
  mode?: 'single' | 'range'
  label?: string
  placeholder?: string
  help?: string
  error?: string
  disabled?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  minDate?: Date
  maxDate?: Date
  yearRange?: number[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  startDate: undefined,
  endDate: undefined,
  mode: 'single',
  label: '',
  placeholder: '날짜 선택',
  help: '',
  error: '',
  disabled: false,
  size: 'md',
  minDate: undefined,
  maxDate: undefined,
  yearRange: () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);
  }
})

const emit = defineEmits([
  'update:modelValue',
  'update:startDate',
  'update:endDate'
])

const datePickerRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const selectedDate = ref<Date | null>(props.modelValue || null)
const rangeStartDate = ref<Date | null>(props.startDate || null)
const rangeEndDate = ref<Date | null>(props.endDate || null)
const isSelectingEndDate = ref(false)
const showMonthYearSelector = ref(false)

// 월 이름 배열
const months = [
  '1월', '2월', '3월', '4월', '5월', '6월', 
  '7월', '8월', '9월', '10월', '11월', '12월'
]

// 년도 범위 계산
const yearRange = computed(() => {
  if (Array.isArray(props.yearRange) && props.yearRange.length > 0) {
    return props.yearRange;
  }
  
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);
})

// Watch for external changes
watch(() => props.modelValue, (newVal) => {
  if (props.mode === 'single' && newVal) {
    selectedDate.value = newVal
  }
})

watch(() => props.startDate, (newVal) => {
  if (props.mode === 'range' && newVal) {
    rangeStartDate.value = newVal
  }
})

watch(() => props.endDate, (newVal) => {
  if (props.mode === 'range' && newVal) {
    rangeEndDate.value = newVal
  }
})

// Format date to display
const formatDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Toggle calendar visibility
const toggleCalendar = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  showMonthYearSelector.value = false
  
  // Set current month/year based on selected date
  if (isOpen.value) {
    if (props.mode === 'single' && selectedDate.value) {
      currentMonth.value = selectedDate.value.getMonth()
      currentYear.value = selectedDate.value.getFullYear()
    } else if (props.mode === 'range' && rangeStartDate.value) {
      currentMonth.value = rangeStartDate.value.getMonth()
      currentYear.value = rangeStartDate.value.getFullYear()
    }
  }
}

// Toggle month/year selector
const toggleMonthYearSelector = () => {
  showMonthYearSelector.value = !showMonthYearSelector.value
}

// Close calendar when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  if (datePickerRef.value && !datePickerRef.value.contains(event.target as Node)) {
    isOpen.value = false
    showMonthYearSelector.value = false
  }
}

// Navigate to previous month
const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
  showMonthYearSelector.value = false
}

// Navigate to next month
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
  showMonthYearSelector.value = false
}

// Select a date
const selectDate = (day: DateObj) => {
  if (!day.isCurrentMonth || day.disabled) return
  
  const selectedDate = new Date(day.year, day.month, day.day)
  
  if (props.mode === 'single') {
    emit('update:modelValue', selectedDate)
    isOpen.value = false
  } else if (props.mode === 'range') {
    if (!rangeStartDate.value || isSelectingEndDate.value) {
      // If no start date or we're selecting end date
      if (rangeStartDate.value && selectedDate < rangeStartDate.value) {
        // If selected date is before start date, swap them
        emit('update:endDate', rangeStartDate.value)
        emit('update:startDate', selectedDate)
      } else {
        emit('update:endDate', selectedDate)
      }
      isSelectingEndDate.value = false
      isOpen.value = false
    } else {
      // We're selecting start date
      emit('update:startDate', selectedDate)
      emit('update:endDate', null)
      isSelectingEndDate.value = true
    }
  }
}

// Get day classes based on selection state
const getDayClasses = (day: DateObj) => {
  const classes = []
  
  if (!day.isCurrentMonth) {
    classes.push('custom-date-picker__day--other-month')
  }
  
  if (day.isToday) {
    classes.push('custom-date-picker__day--today')
  }
  
  if (props.mode === 'single' && selectedDate.value) {
    const selected = selectedDate.value
    if (day.year === selected.getFullYear() && 
        day.month === selected.getMonth() && 
        day.day === selected.getDate()) {
      classes.push('custom-date-picker__day--selected')
    }
  } else if (props.mode === 'range') {
    // Start date
    if (rangeStartDate.value && 
        day.year === rangeStartDate.value.getFullYear() && 
        day.month === rangeStartDate.value.getMonth() && 
        day.day === rangeStartDate.value.getDate()) {
      classes.push('custom-date-picker__day--range-start')
    }
    
    // End date
    if (rangeEndDate.value && 
        day.year === rangeEndDate.value.getFullYear() && 
        day.month === rangeEndDate.value.getMonth() && 
        day.day === rangeEndDate.value.getDate()) {
      classes.push('custom-date-picker__day--range-end')
    }
    
    // In range
    if (rangeStartDate.value && rangeEndDate.value) {
      const currentDate = new Date(day.year, day.month, day.day)
      if (currentDate > rangeStartDate.value && currentDate < rangeEndDate.value) {
        classes.push('custom-date-picker__day--in-range')
      }
    }
  }
  
  return classes
}

// Generate calendar days for current month view
const calendarDays = computed(() => {
  const days: DateObj[] = []
  const today = new Date()
  
  // First day of the month
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const startingDay = firstDay.getDay() // 0 = Sunday, 1 = Monday, etc.
  
  // Last day of the month
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  const monthLength = lastDay.getDate()
  
  // Previous month's days to display
  const prevMonthLastDay = new Date(currentYear.value, currentMonth.value, 0).getDate()
  
  // Add previous month's days
  for (let i = startingDay - 1; i >= 0; i--) {
    const prevMonth = currentMonth.value === 0 ? 11 : currentMonth.value - 1
    const prevYear = currentMonth.value === 0 ? currentYear.value - 1 : currentYear.value
    const day = prevMonthLastDay - i
    
    const date = new Date(prevYear, prevMonth, day)
    const isDisabled = isDateDisabled(date)
    
    days.push({
      date,
      day,
      month: prevMonth,
      year: prevYear,
      isCurrentMonth: false,
      isToday: false,
      disabled: isDisabled
    })
  }
  
  // Add current month's days
  for (let i = 1; i <= monthLength; i++) {
    const date = new Date(currentYear.value, currentMonth.value, i)
    const isToday = i === today.getDate() && 
                    currentMonth.value === today.getMonth() && 
                    currentYear.value === today.getFullYear()
    const isDisabled = isDateDisabled(date)
    
    days.push({
      date,
      day: i,
      month: currentMonth.value,
      year: currentYear.value,
      isCurrentMonth: true,
      isToday,
      disabled: isDisabled
    })
  }
  
  // Add next month's days to fill out the calendar
  const daysNeeded = 42 - days.length // 6 rows of 7 days
  for (let i = 1; i <= daysNeeded; i++) {
    const nextMonth = currentMonth.value === 11 ? 0 : currentMonth.value + 1
    const nextYear = currentMonth.value === 11 ? currentYear.value + 1 : currentYear.value
    
    const date = new Date(nextYear, nextMonth, i)
    const isDisabled = isDateDisabled(date)
    
    days.push({
      date,
      day: i,
      month: nextMonth,
      year: nextYear,
      isCurrentMonth: false,
      isToday: false,
      disabled: isDisabled
    })
  }
  
  return days
})

// Check if a date is disabled (outside min/max range)
const isDateDisabled = (date: Date): boolean => {
  if (props.minDate && date < props.minDate) {
    return true
  }
  if (props.maxDate && date > props.maxDate) {
    return true
  }
  return false
}

// Month name for header
const currentMonthName = computed(() => {
  return months[currentMonth.value]
})

// Weekday labels
const weekdays = ['일', '월', '화', '수', '목', '금', '토']

// Setup and cleanup event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>