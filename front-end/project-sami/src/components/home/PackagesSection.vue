<script setup>
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import { useRouter } from 'vue-router'
import { useServiceLocation } from '@/composables/useServiceLocation'

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

        <div v-if="loading">
            جاري تحميل الباقات...
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
                    :alt="item.name"
                />

                <h3>{{ item.name }}</h3>

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