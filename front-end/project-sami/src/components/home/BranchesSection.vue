<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { useLanguage } from '@/composables/useLanguage'
import { useServiceLocation } from '@/composables/useServiceLocation'

const props = defineProps({
    branches: {
        type: Array,
        default: () => [],
    },
    loading: {
        type: Boolean,
        default: false,
    },
})

const displayBranches = computed(() => {
    const branches = props.branches || []
    const hasHomeService = branches.some(branch => branch.home || branch.id === 'home-service')

    return hasHomeService
        ? branches
        : [...branches, {
            id: 'home-service',
            home: true,
            name: 'خدمة منزلية',
            address: 'حلاقة وعناية ومساجات طبيعية — في منزلك',
            image: '/images/generated/branches/home-service-hq.png',
        }]
})

const { state: lang } = useLanguage()
const router = useRouter()
const { setLocation } = useServiceLocation()

function nameOf(branch) {
    return branch.name?.[lang.lang] || branch.name?.ar || branch.name?.en || branch.name
}

function bookBranch(branch) {
    setLocation(branch.home ? 'home-service' : branch.id)
    router.push('/booking')
}
</script>

<template>
    <section data-reveal id="branches" class="home-section container">
        <SectionTitle title="فروعنا" />
        <div class="branches-grid">
            <div class="offer-card">
                <p>خصم <strong>25%</strong></p>
                <h3>بمناسبة افتتاح الفرع الجديد</h3>
                <BaseButton label="اعرف المزيد" />
            </div>
            <article v-for="branch in displayBranches" :key="branch.id">
                <AppImage :src="branch.image" :alt="nameOf(branch)" />
                <h3>{{ nameOf(branch) }}</h3>
                <p>{{ branch.address }}</p>
                <BaseButton :label="branch.home ? 'احجز الخدمة المنزلية' : 'احجز الآن'" href="#" @click.prevent="bookBranch(branch)" />
            </article>
        </div>
    </section>
</template>
