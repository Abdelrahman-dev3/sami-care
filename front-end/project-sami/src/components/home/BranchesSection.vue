<script setup>
import { computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AppImage from '@/components/common/AppImage.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { branches as fallbackBranches } from '@/data/home'

const props = defineProps({
  branches: { type: Array, default: () => [] },
})

const items = computed(() => (props.branches?.length ? props.branches : fallbackBranches))
</script>

<template>
  <section id="branches" class="home-section container">
    <SectionTitle title="فروعنا" />
    <div class="branches-grid">
      <div class="offer-card">
        <p>خصم <strong>25%</strong></p>
        <h3>بمناسبة افتتاح الفرع الجديد</h3>
        <BaseButton label="اعرف المزيد" />
      </div>
      <article v-for="branch in items" :key="branch.id">
        <AppImage :src="branch.image" :alt="branch.name" />
        <h3>{{ branch.name }}</h3>
        <p>{{ branch.address }}</p>
        <BaseButton label="احجز الآن" href="/booking" />
      </article>
    </div>
  </section>
</template>

