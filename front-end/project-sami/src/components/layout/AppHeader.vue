<script setup>
import { ref } from 'vue'
import { navigation } from '@/data/home'
import { assetPath } from '@/utils/assetPath'
const open = ref(false)
const logoSrc = assetPath('/logo.png')
</script>
<template><header class="site-header"><RouterLink class="brand" to="/"><img :src="logoSrc" alt="عناية سامي"></RouterLink><button class="menu-toggle" @click="open=!open" :aria-expanded="open">☰</button><nav :class="{open}"><template v-for="item in navigation" :key="item.label"><RouterLink v-if="item.to" :to="item.to" @click="open=false">{{item.label}}</RouterLink><a v-else :href="item.href" @click="open=false">{{item.label}}</a></template></nav><div class="header-tools"><RouterLink to="/branches" class="branch-pick">📍<small>الفرع</small></RouterLink><button class="loyalty-btn">♛<small>انضم لبرنامج الولاء</small></button><button>♙<small>تسجيل دخول</small></button><RouterLink to="/booking">▣ احجز الآن</RouterLink></div></header></template>
