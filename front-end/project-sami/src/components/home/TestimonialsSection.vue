<script setup>
import SectionTitle from '@/components/common/SectionTitle.vue'
import { testimonials } from '@/data/home'
</script>
<template>
  <section class="home-section container" aria-label="آراء العملاء">
    <SectionTitle title="آراء عملائنا" />
    <div class="testimonials-grid">
      <article v-for="t in testimonials" :key="t.id" class="testimonial-card">
        <div class="testimonial-card__stars" aria-hidden="true">
          <span v-for="n in t.rating" :key="n">★</span>
        </div>
        <p>{{ t.text }}</p>
        <b>{{ t.name }}</b>
      </article>
    </div>
  </section>
</template>
