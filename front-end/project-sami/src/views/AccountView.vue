<script setup>
import { ref, onMounted, watch } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { fetchProfile } from '@/services/accountApi'
import AccountOverview from '@/components/account/AccountOverview.vue'
import AccountBookings from '@/components/account/AccountBookings.vue'
import AccountAddresses from '@/components/account/AccountAddresses.vue'
import AccountGiftCards from '@/components/account/AccountGiftCards.vue'
import AccountPackages from '@/components/account/AccountPackages.vue'
import AccountProducts from '@/components/account/AccountProducts.vue'
import AccountSettings from '@/components/account/AccountSettings.vue'
import PageSkeleton from '@/components/common/PageSkeleton.vue'

const { isAuthenticated, openAuthModal } = useAuth()

const TABS = [
  { id: 'overview', label: 'نظرة عامة' },
  { id: 'bookings', label: 'حجوزاتي' },
  // 'addresses' مخفي مؤقتًا بطلب من المشروع
  { id: 'packages', label: 'باقاتي' },
  { id: 'products', label: 'منتجاتي' },
  { id: 'gifts', label: 'بطاقات الهدايا' },
  { id: 'settings', label: 'الإعدادات' },
]

const activeTab = ref('overview')
const profile = ref(null)
const loading = ref(false)
const error = ref('')

async function loadProfile() {
  if (!isAuthenticated.value) return
  loading.value = true
  error.value = ''
  try {
    const res = await fetchProfile()
    profile.value = res.data
  } catch (e) {
    error.value = e.message || 'تعذر تحميل بيانات الحساب'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (!isAuthenticated.value) {
    openAuthModal()
  } else {
    loadProfile()
  }
})

watch(isAuthenticated, (v) => { if (v) loadProfile() })
</script>

<template>
  <div class="account-page">
    <div v-if="!isAuthenticated" class="account-guest">
      <div class="guest-card">
        <h1>حسابي</h1>
        <p>سجّل دخولك عشان تشوف حجوزاتك ورصيدك ونقاطك وعناوينك المحفوظة.</p>
        <button class="btn-org" @click="openAuthModal()">تسجيل الدخول</button>
      </div>
    </div>

    <template v-else>
      <div class="account-head">
        <h1>حسابي</h1>
        <p v-if="profile?.user">{{ profile.user.full_name || profile.user.first_name }}</p>
      </div>

      <div class="account-tabs">
        <button
          v-for="t in TABS" :key="t.id"
          :class="{ on: activeTab === t.id }"
          @click="activeTab = t.id"
        >{{ t.label }}</button>
      </div>

      <PageSkeleton v-if="loading" variant="account" />
      <div v-else-if="error" class="account-state error">{{ error }}</div>
      <template v-else>
        <AccountOverview v-if="activeTab === 'overview'" :profile="profile" @go="activeTab = $event" />
        <AccountBookings v-else-if="activeTab === 'bookings'" :profile="profile" />
        <AccountAddresses v-else-if="activeTab === 'addresses'" />
        <AccountPackages v-else-if="activeTab === 'packages'" :profile="profile" />
        <AccountProducts v-else-if="activeTab === 'products'" :profile="profile" />
        <AccountGiftCards v-else-if="activeTab === 'gifts'" :profile="profile" />
        <AccountSettings v-else-if="activeTab === 'settings'" :profile="profile" @updated="loadProfile" />
      </template>
    </template>
  </div>
</template>

<style scoped>
.account-page { max-width: 980px; margin: 0 auto; padding: 40px 20px 80px; min-height: 60vh; font-family: 'Lama Sans', Arial, sans-serif; }
.account-guest { display: flex; justify-content: center; padding: 60px 0; }
.guest-card { text-align: center; max-width: 420px; }
.guest-card h1 { font-size: 26px; margin-bottom: 12px; }
.guest-card p { color: #6f665c; margin-bottom: 20px; line-height: 1.9; }
.btn-org {
  padding: 12px 28px; border: 0; border-radius: 999px; cursor: pointer;
  background: linear-gradient(90deg, #b77420, #f0cf89, #be7920); color: #160f07;
  font-size: 14px; font-weight: 700;
}
.account-head { margin-bottom: 18px; }
.account-head h1 { font-size: 26px; margin: 0 0 4px; }
.account-head p { color: #8b8379; font-size: 13px; margin: 0; }
.account-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; border-bottom: 1px solid #e9e0d3; padding-bottom: 12px; }
.account-tabs button {
  padding: 9px 16px; border-radius: 999px; border: 1.5px solid #e9e0d3; background: #fff;
  color: #6f665c; font-size: 13px; font-weight: 600; cursor: pointer; transition: .2s;
}
.account-tabs button.on { border-color: #c98b31; background: linear-gradient(110deg, #fff 0%, #fff8e9 100%); color: #7c571d; }
.account-state { padding: 40px; text-align: center; color: #8b8379; }
.account-state.error { color: #b42318; }
</style>
