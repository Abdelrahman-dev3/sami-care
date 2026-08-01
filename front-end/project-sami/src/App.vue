<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { assetPath } from '@/utils/assetPath'

const route = useRoute()
const router = useRouter()
const media = window.matchMedia('(max-width: 640px)')
const isMobile = ref(media.matches)
const viewByRoute = { home:'home', booking:'booking', store:'store', gifts:'gifts', 'packages-gifts':'packages', branches:'branches', contact:'account', 'gift-recipient':'gifts' }
const vueMobileRoutes = ['blog', 'blog-detail']
const mobileVersion = '20260723-home-hero-compact-v11'
const mobileSrc = computed(() => {
  const initialMobileView = viewByRoute[route.name] || 'home'
  return `${assetPath('mobile/index.html')}?view=${initialMobileView}&v=${mobileVersion}`
})
const shouldUseMobileShell = computed(() => isMobile.value && !vueMobileRoutes.includes(route.name))
const syncMedia = event => { isMobile.value = event.matches }
const handleMobileNavigation = event => {
  if (event.data?.type !== 'sami:navigate' || typeof event.data.path !== 'string') return
  if (event.data.path === route.fullPath || (event.data.path === '/' && route.path === '/')) return
  router.push(event.data.path)
}
onMounted(() => { media.addEventListener('change', syncMedia); window.addEventListener('message', handleMobileNavigation) })
onBeforeUnmount(() => { media.removeEventListener('change', syncMedia); window.removeEventListener('message', handleMobileNavigation) })
</script>

<template>
  <div v-if="shouldUseMobileShell" class="global-mobile-shell">
    <iframe class="global-mobile-frame" :src="mobileSrc" title="تطبيق عناية سامي للجوال"></iframe>
  </div>
  <RouterView v-else />
</template>

<style>
.global-mobile-shell{width:100%;height:100dvh;background:#e8e1d6;overflow:hidden}.global-mobile-frame{display:block;width:100%;height:100%;border:0;background:#e8e1d6}
@media(max-width:640px){html,body,#app{width:100%;height:100%;margin:0;overflow:hidden}}
</style>
