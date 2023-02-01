<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
function toggleLang() {
  switch (locale.value) {
    case 'en':
      locale.value = 'ar'
      break
    case 'ar':
      locale.value = 'en'
      break
  }
}
</script>

<template>
  <div class="app-bg-primary-color">
    <div class="app-container">
      <a href="#" class="text-white pr-4">
        <Icon width="20" icon="fa:twitter" />
      </a>
      <a href="#" class="text-white pr-4">
        <Icon width="20" icon="fa:whatsapp" />
      </a>
      <button class="py-4 pr-5 font-weight-bold btn text-white" @click="toggleLang">
        <Icon width="30" icon="ic:baseline-arrow-drop-down" />
        {{ $t('lang.ar') }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
