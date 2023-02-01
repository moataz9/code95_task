<script setup lang="ts">
// import AppInput from '@/components/App/Input.vue'
</script>

<template>
  <div class="text-center">
    <h1 class="text-center mt-5">
      {{ $t('navbar.home') }}
    </h1>
    <router-link class="h2" :to="{ name: 'FromStepOne' }">go to From</router-link>
  </div>
</template>

<style lang="scss" scoped></style>
