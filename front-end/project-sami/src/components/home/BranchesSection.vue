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
    banner: {
        type: Object,
        default: null,
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

function localized(value, fallback = '') {
    if (!value) return fallback
    return typeof value === 'object'
        ? value[lang.lang] || value.ar || value.en || fallback
        : value
}

<<<<<<< HEAD
function bookBranch(branch) {
    setLocation(branch.home ? 'home-service' : branch.id)
    router.push('/booking')
}
=======
function nameOf(branch) {
    return localized(branch.name)
}

const activeBanner = computed(() => {
    const banner = props.banner
    if (!banner) {
        return {
            title: 'بمناسبة افتتاح الفرع الجديد',
            description: '',
            discount: '25%',
            image: '/images/generated/branches/offer-person-hq.png',
            color: '#f3eadf',
            link: '/branches',
            overlay: true,
            dynamic: false,
        }
    }

    const value = Number(banner.discount_value || 0)
    const formattedValue = Number.isInteger(value) ? value : value.toFixed(2)

    return {
        title: localized(banner.title, 'عرض مميز'),
        description: localized(banner.description),
        discount: banner.discount_type === 'fixed' ? `${formattedValue} ر.س` : `${formattedValue}%`,
        image: banner.image || '/images/generated/branches/offer-person-hq.png',
        color: banner.color || '#f3eadf',
        link: banner.link || '/branches',
        overlay: banner.overlay !== false,
        dynamic: true,
    }
})

const bannerStyle = computed(() => ({
    '--branch-banner-image': `url("${String(activeBanner.value.image).replace(/"/g, '\\"')}")`,
    '--branch-banner-color': activeBanner.value.color,
}))
>>>>>>> d7635d7e750ffd15d04dcc6f43b7358a40378eb6
</script>

<template>
    <section data-reveal id="branches" class="home-section container">
        <SectionTitle title="فروعنا" />
        <div class="branches-grid">
            <div
                class="offer-card"
                :class="{ 'offer-card--dynamic': activeBanner.dynamic, 'offer-card--no-overlay': !activeBanner.overlay }"
                :style="bannerStyle"
            >
                <p>خصم <strong>{{ activeBanner.discount }}</strong></p>
                <h3>{{ activeBanner.title }}</h3>
                <small v-if="activeBanner.description" class="offer-card__description">{{ activeBanner.description }}</small>
                <BaseButton label="اعرف المزيد" :href="activeBanner.link" />
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
