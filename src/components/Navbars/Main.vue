<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="border-bottom">
    <div class="app-container d-flex flex-wrap justify-content-between">
      <div class="logo p-4 font-weight-bold text-center mx-auto">LOGO</div>
      <ul class="list-unstyled d-flex flex-wrap justify-content-between align-items-center px-4 mb-0">
        <li>
          <router-link class="text-black-50 p-2 text-decoration-none font-weight-bold" to="/">
            {{ $t('navbar.home') }}
          </router-link>
        </li>
        <li>
          <router-link class="text-black-50 p-2 text-decoration-none font-weight-bold" to="/">
            {{ $t('navbar.our_products') }}
          </router-link>
        </li>
        <li>
          <router-link class="text-black-50 p-2 text-decoration-none font-weight-bold" to="/">
            {{ $t('navbar.financial_sustainability') }}
          </router-link>
        </li>
        <li>
          <router-link class="text-black-50 p-2 text-decoration-none font-weight-bold" to="/">
            {{ $t('navbar.about_measure') }}
          </router-link>
        </li>
        <li>
          <router-link class="text-black-50 p-2 text-decoration-none font-weight-bold" to="/">
            {{ $t('navbar.who_we_are') }}
          </router-link>
        </li>
        <li>
          <router-link class="text-black-50 p-2 text-decoration-none font-weight-bold" to="/">
            {{ $t('navbar.contact_us') }}
          </router-link>
        </li>
        <li>
          <router-link class="text-black-50 p-2 text-decoration-none font-weight-bold" to="/">
            {{ $t('navbar.fqa') }}
          </router-link>
        </li>
      </ul>
      <div class="d-flex mx-auto">
        <button class="logo app-bg-secondary-color p-4 font-weight-bold border border-top-0 text-white">
          {{ $t('navbar.login') }}
        </button>
        <div class="logo p-4 font-weight-bold border-right">LOGO</div>
        <div class="logo p-4 font-weight-bold border-right">
          <Icon icon="ic:sharp-search" width="30" />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
