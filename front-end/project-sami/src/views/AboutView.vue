<script setup>
import SectionTitle from './SectionTitle.vue'
import { stats } from '../data/site'
</script>

<template>
  <section class="about-page">
    <SectionTitle title="نبذة عن المركز" />

    <div class="card about reveal">
      <p>
        <b>مركز عناية سامي للرجال</b> — وجهتك المتكاملة للعناية الرجالية الفاخرة في جدة.
        نقدم تجربة تجمع بين الأصالة والاحترافية...
      </p>

      <div class="stats">
        <div v-for="stat in stats" :key="stat.label">
          <b>{{ stat.value }}</b>
          <small>{{ stat.label }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  padding: 20px 16px 40px;
  background: #f7f3ee;
  min-height: 100vh;
}

.card.about {
  background: #fff;
  border: 1px solid rgba(140, 110, 80, 0.16);
  border-radius: 18px;
  padding: 18px;
  color: #4e4436;
  line-height: 2;
  font-size: 13px;
}

.card.about b {
  color: #9c6b1f;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px dashed rgba(140, 110, 80, 0.16);
}

.stats div {
  text-align: center;
}

.stats b {
  display: block;
  font-size: 20px;
  color: #221f1f;
}

.stats small {
  color: #8a7b6c;
  font-size: 10px;
}
</style>