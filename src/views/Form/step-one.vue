<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { AppInput } from '@/components'
import { useFormStore } from '@/stores/form'

const formStore = useFormStore()
</script>

<template>
  <div class="container my-5">
    <h1 class="text-center font-weight-bold">{{ $t('form.ask_for_product') }}</h1>
    <form action="">
      <div class="container-fluid">
        <h2 class="app-secondary-color text-center font-weight-bold mt-5">
          {{ $t('form.organization_data') }}
        </h2>
        <div class="row row-cols-1 row-cols-md-2">
          <AppInput
            v-model="formStore.form.organization_name"
            class="col mt-4"
            :title="$t('form.organization_name')"
            required
          />
          <AppInput
            v-model="formStore.form.organization_specialty"
            class="col mt-4"
            :title="$t('form.organization_specialty')"
            required
          />
          <AppInput v-model="formStore.form.region" class="col mt-4" :title="$t('form.region')" />
          <AppInput v-model="formStore.form.town" class="col mt-4" :title="$t('form.town')" />
        </div>
        <h2 class="app-secondary-color text-center font-weight-bold mt-5">
          {{ $t('form.needed_package') }}
        </h2>
        <div class="row row-cols-1 row-cols-md-2">
          <AppInput
            v-model="formStore.form.choose_package"
            class="col mt-4"
            :title="$t('form.choose_package')"
            required
          />
        </div>
      </div>
    </form>

    <router-link
      :to="{ name: formStore.passStepOne ? 'FromStepTwo' : '' }"
      class="app-bg-secondary-color text-center mx-auto d-block btn py-3 rounded-0 mt-5 w-75 text-white font-weight-bold"
      :class="formStore.passStepOne ? '' : 'stepper-disabled'"
    >
      {{ $t('form.next') }}
    </router-link>

    <div class="text-center mt-3">
      <router-link
        :to="{ name: formStore.passStepOne ? 'FromStepOne' : '' }"
        :class="formStore.passStepOne ? '' : 'stepper-disabled'"
      >
        <span
          class="app-bg-secondary-color rounded-circle d-inline-block m-1"
          style="width: 1rem; height: 1rem"
        >
        </span>
      </router-link>
      <router-link
        :to="{ name: formStore.passStepOne ? 'FromStepTwo' : '' }"
        :class="formStore.passStepOne ? '' : 'stepper-disabled'"
      >
        <span class="bg-secondary rounded-circle d-inline-block m-1" style="width: 1rem; height: 1rem">
        </span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.stepper-disabled {
  opacity: 0.6;
  user-select: none;
  cursor: not-allowed !important;
}
</style>
