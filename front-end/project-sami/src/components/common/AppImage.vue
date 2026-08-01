<script setup>
import { computed, ref } from 'vue'
import { assetPath } from '@/utils/assetPath'

const props = defineProps({ src: String, alt: String })
const failed = ref(false)
const resolvedSrc = computed(() => assetPath(props.src))
</script>
<template><div class="image-frame"><img v-if="!failed" :src="resolvedSrc" :alt="alt" loading="lazy" @error="failed=true"><div v-else class="image-placeholder"><span>أضيفي الصورة هنا</span><small>{{ src }}</small></div></div></template>
