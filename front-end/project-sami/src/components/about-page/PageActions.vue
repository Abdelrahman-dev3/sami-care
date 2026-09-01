<script setup>
import AppIcon from './AppIcon.vue'
import { contact } from '@/data/aboutSite'

const emit = defineEmits(['notify'])

function saveContact() {
  const vCard = ['BEGIN:VCARD', 'VERSION:3.0', 'FN:عناية سامي — SAMI CARE', 'ORG:SAMI CARE FOR MEN',
    'TEL;TYPE=WORK,VOICE:+966920018844', 'TEL;TYPE=CELL:+966550046462', `EMAIL:${contact.email}`, `URL:${contact.website}`,
    'ADR;TYPE=WORK:;;شارع حائل — البغدادية الغربية;جدة;;;السعودية',
    'NOTE:مركز عناية سامي للرجال — حلاقة، مساج، حمام مغربي، تنظيف بشرة، بديكير', 'END:VCARD'].join('\n')
  const link = document.createElement('a')
  link.href = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCard)}`
  link.download = 'SamiCare.vcf'
  link.click()
  emit('notify', 'تم تنزيل جهة الاتصال — افتحها لإضافتها لهاتفك')
}

async function sharePage() {
  const data = { title: 'عناية سامي | SAMI CARE', text: 'مركز عناية سامي للرجال — جدة. كل خدمات العناية الفاخرة في مكان واحد.', url: location.href }
  try {
    if (navigator.share) return await navigator.share(data)
    await navigator.clipboard.writeText(data.url)
    emit('notify', 'تم نسخ رابط الصفحة — شاركه الآن')
  } catch (error) {
    if (error?.name !== 'AbortError') emit('notify', 'تعذرت المشاركة، انسخ الرابط من شريط العنوان')
  }
}
</script>

<template>
  <div class="page-actions reveal">
    <button class="button button--gold" type="button" @click="saveContact"><AppIcon name="userPlus" :size="17" />حفظ جهة الاتصال في هاتفك</button>
    <button class="button button--outline" type="button" @click="sharePage"><AppIcon name="share" :size="16" />مشاركة الصفحة</button>
  </div>
</template>
