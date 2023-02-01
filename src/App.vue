<script setup lang="ts">
import { RouterView } from 'vue-router'
import { MainNavbar, TopNavbar } from './components'
</script>

<template>
  <div :dir="$i18n.locale === 'en' ? 'ltr' : 'rtl'">
    <TopNavbar />
    <MainNavbar />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
