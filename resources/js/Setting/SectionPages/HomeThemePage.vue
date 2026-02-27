<template>
  <div class="card mt-3">
    <div class="card-body">
      <div class="col-md-12 mb-3">
        <CardTitle title="Homepage Theme" icon="fa-solid fa-palette"></CardTitle>
      </div>

      <div class="row align-items-end">
        <div class="form-group col-md-8">
          <label class="form-label">Homepage Theme</label>
          <select class="form-select" v-model="homeTheme" :disabled="isSubmitting">
            <option v-for="option in homeThemeOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          <small class="text-muted">Choose the decoration theme for the homepage navbar.</small>
        </div>

        <div class="col-md-4">
          <button @click="onSubmit" class="btn btn-primary w-100" :disabled="isSubmitting">
            <i v-if="isSubmitting" class="fas fa-spinner fa-spin me-1"></i>
            {{ $t('messages.save') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import CardTitle from '@/Setting/Components/CardTitle.vue'
import { useRequest } from '@/helpers/hooks/useCrudOpration'
import { STORE_URL, GET_URL } from '@/vue/constants/setting'
import { createRequest } from '@/helpers/utilities'

const homeTheme = ref('none')
const isSubmitting = ref(false)

const homeThemeOptions = [
  { label: 'None', value: 'none' },
  { label: 'Ramadan', value: 'ramadan' },
  { label: 'Eid Al-Adha', value: 'eid_aladha' },
  { label: 'Eid Al-Fitr', value: 'eid_alfitr' },
  { label: 'Saudi National Day', value: 'saudi_national_day' }
]

const { storeRequest } = useRequest()

const displaySubmitMessage = (res) => {
  isSubmitting.value = false
  if (res?.status) {
    if (window.successSnackbar) {
      window.successSnackbar(res.message)
    }
  } else if (window.errorSnackbar) {
    window.errorSnackbar(res?.message || 'Failed to save')
  }
}

const onSubmit = () => {
  isSubmitting.value = true
  storeRequest({
    url: STORE_URL,
    body: { home_theme: homeTheme.value }
  }).then((res) => displaySubmitMessage(res))
}

onMounted(() => {
  createRequest(GET_URL('home_theme')).then((response) => {
    if (response.home_theme) {
      homeTheme.value = response.home_theme
    }
  })
})
</script>
