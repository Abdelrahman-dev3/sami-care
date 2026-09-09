<script setup>
import AppIcon from './AppIcon.vue'
import SectionTitle from './SectionTitle.vue'
import { branches } from '@/data/aboutSite'
</script>

<template>
  <section>
    <SectionTitle title="فروعنا في جدة" />
    <div class="branches reveal">
      <article v-for="branch in branches" :key="branch.name" class="branch-card">
        <div class="branch-card__image"><img :src="branch.image" :alt="branch.name" loading="lazy" /><b>{{ branch.name }}</b></div>
        <div class="branch-card__body"><small><AppIcon name="map" :size="13" />{{ branch.address }}</small><a :href="branch.map" target="_blank" rel="noopener">فتح في الخرائط</a></div>
      </article>
    </div>
  </section>
</template>
