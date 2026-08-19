<script setup>
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { useLanguage } from '@/composables/useLanguage'

defineProps({
    branches: {
        type: Array,
        default: () => [],
    },
    loading: {
        type: Boolean,
        default: false,
    },
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
            <article v-for="branch in branches" :key="branch.id">
                <AppImage :src="branch.image" :alt="nameOf(branch)" />
                <h3>{{ nameOf(branch) }}</h3>
                <p>{{ branch.address }}</p>
                <BaseButton label="احجز الآن" />
            </article>
        </div>
    </section>
</template>
