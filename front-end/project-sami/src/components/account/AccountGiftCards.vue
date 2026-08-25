<script setup>
defineProps({ profile: { type: Object, default: null } })
</script>

<template>
  <div class="gifts">
    <div v-if="!profile?.gift_cards?.length" class="empty">
      <b>مفيش بطاقات هدايا لسه</b>
      <p>بطاقات الهدايا اللي هتستلمها أو ترسلها هتظهر هنا</p>
    </div>
    <div v-else class="gift-list">
      <div v-for="g in profile.gift_cards" :key="g.id" class="gift-card">
        <b>هدية إلى {{ g.recipient_name || '—' }}</b>
        <small>{{ g.message }}</small>
        <div class="meta">
          <span>{{ g.gift_status }}</span>
          <span>{{ g.created_at }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.empty { text-align: center; padding: 40px 20px; color: #8b8379; }
.empty b { display: block; color: #241f1b; margin-bottom: 6px; }
.gift-list { display: grid; gap: 10px; }
.gift-card { background: #fff; border: 1px solid #e9e0d3; border-radius: 14px; padding: 16px 18px; }
.gift-card b { display: block; font-size: 14px; margin-bottom: 4px; }
.gift-card small { color: #8b8379; font-size: 12px; }
.meta { display: flex; gap: 12px; margin-top: 10px; font-size: 11.5px; color: #6f665c; }
</style>
