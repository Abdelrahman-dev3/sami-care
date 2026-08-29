<script setup>
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import { useRouter } from 'vue-router'
import { useServiceLocation } from '@/composables/useServiceLocation'
import { useLanguage } from '@/composables/useLanguage'

import Skeleton from '@/components/common/SkeletonLoader.vue'

defineProps({
    packages: {
        type: Array,
        default: () => [],
    },
    loading: {
        type: Boolean,
        default: false,
    },
})

const router = useRouter()
const { requireLocation } = useServiceLocation()
const { state: lang } = useLanguage()

function nameOf(item) {
    return item.name?.[lang.lang] || item.name?.ar || item.name?.en || item.name
}

const go = path => {
    requireLocation(() => router.push(path))
}
</script>

<template>
    <section
        data-reveal
        id="packages"
        class="catalog-section"
    >
        <SectionTitle title="باقاتنا المميزة" />

        <!-- Skeleton Loading -->
        <div v-if="loading" class="package-grid package-grid--home">
            <article v-for="n in 3" :key="n" data-reveal style="display:flex;flex-direction:column;align-items:center;gap:8px;min-height:210px;justify-content:center">
                <Skeleton width="100px" height="100px" variant="circle" />
                <Skeleton width="80%" height="14px" variant="text" />
                <Skeleton width="90px" height="30px" border-radius="18px" />
            </article>
        </div>

        <div
            v-else
            class="package-grid package-grid--home"
        >
            <article
                v-for="item in packages"
                :key="item.id"
                data-reveal
            >
                <AppImage
                    :src="item.feature_image"
                    :alt="nameOf(item)"
                />

                <h3>{{ nameOf(item) }}</h3>

                <p v-if="item.description">
                    {{ item.description }}
                </p>

                <a
                    href="#"
                    @click.prevent="go('/packages-gifts')"
                >
                    استكشف الباقة ←
                </a>
            </article>
        </div>
    </section>
</template>