<script setup>
import { computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { useLanguage } from '@/composables/useLanguage'

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
    const hasHomeService = branches.some(branch => branch.home || branch.id === 'hm')

    return hasHomeService
        ? branches
        : [...branches, {
            id: 'hm',
            home: true,
            name: 'خدمة منزلية',
            address: 'حلاقة وعناية ومساجات طبيعية — في منزلك',
            image: '/images/generated/branches/home-service-hq.png',
        }]
})

const { state: lang } = useLanguage()

function nameOf(branch) {
    return branch.name?.[lang.lang] || branch.name?.ar || branch.name?.en || branch.name
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
                <BaseButton :label="branch.home ? 'احجز الخدمة المنزلية' : 'احجز الآن'" :href="`/booking?branch=${branch.home ? 'hm' : branch.id}`" />
            </article>
        </div>
    </section>
</template>
