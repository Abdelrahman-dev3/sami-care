<script setup>
defineProps({ logo: { type: String, required: true } })
</script>

<template>
  <header class="hero">
    <div class="hero__frame" aria-hidden="true" />
    <span class="hero__particle p1">✦</span><span class="hero__particle p2">❖</span>
    <span class="hero__particle p3">✧</span><span class="hero__particle p4">✦</span>
    <div class="hero__glow" /><div class="hero__ring" />
    <img class="hero__logo" :src="logo" alt="شعار عناية سامي" />
    <h1>عناية سامي</h1>
    <p class="hero__en">SAMI CARE — FOR MEN</p>
    <p class="hero__tagline">الجمال. الثقة. <b>العناية الفاخرة</b></p>
    <span class="hero__verified"><i /> مركز معتمد — جدة، المملكة العربية السعودية</span>
  </header>
</template>
