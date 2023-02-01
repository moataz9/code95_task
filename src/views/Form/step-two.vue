<script setup lang="ts">
import { AppInput } from '@/components'
import { useFormStore } from '@/stores/form'
import { ref } from 'vue';

const formStore = useFormStore()

const data = ref()

function logData() {
  data.value = formStore.form
}
</script>

<template>
  <div class="container my-5">
    <form action="">
      <div class="container-fluid">
        <h2 class="app-secondary-color text-center font-weight-bold mt-5">
          {{ $t('form.responsible_persons_data') }}
        </h2>
        <div class="row row-cols-1 row-cols-md-2">
          <AppInput
            v-model="formStore.form.responsible_person"
            class="col mt-4"
            :title="$t('form.responsible_person')"
            required
          />
          <AppInput
            v-model="formStore.form.responsible_position"
            class="col mt-4"
            :title="$t('form.his_position')"
            required
          />
          <AppInput
            v-model="formStore.form.responsible_phone_number"
            class="col mt-4"
            :title="$t('form.phone_number')"
          />
        </div>
        <div class="row row-cols-1 row-cols-md-2">
          <AppInput
            v-model="formStore.form.authorized_person"
            class="col mt-4"
            :title="$t('form.authorized_person')"
            required
          />
          <AppInput
            v-model="formStore.form.authorized_position"
            class="col mt-4"
            :title="$t('form.his_position')"
            required
          />
          <AppInput
            v-model="formStore.form.authorized_phone_number"
            class="col mt-4"
            :title="$t('form.phone_number')"
          />
          <AppInput
            v-model="formStore.form.authorized_e_mail"
            class="col mt-4"
            :title="$t('form.e_mail')"
          />
        </div>
        <div class="row">
          <div class="col mt-4" :class="$i18n.locale === 'en' ? 'text-left' : 'text-right'">
            <div class="mb-2">{{ $t('form.notes') }}</div>
            <textarea v-model="formStore.form.notes" rows="10" class="w-100 border focus p-2"></textarea>
          </div>
        </div>
      </div>
    </form>

    <button
      @click="logData"
      class="app-bg-secondary-color text-center mx-auto d-block btn py-3 rounded-0 mt-5 w-75 text-white font-weight-bold"
    >
      {{ $t('form.request_product') }}
    </button>
    <!-- <router-link
      :to="{ name: 'FromStepTwo' }"
      class="app-bg-secondary-color text-center mx-auto d-block btn py-3 rounded-0 mt-5 w-75 text-white font-weight-bold"
    >
      {{ $t('form.request_product') }}
    </router-link> -->

    <div class="text-center mt-3">
      <router-link :to="{ name: 'FromStepOne' }">
        <span class="bg-secondary rounded-circle d-inline-block m-1" style="width: 1rem; height: 1rem">
        </span>
      </router-link>
      <router-link :to="{ name: 'FromStepTwo' }">
        <span
          class="app-bg-secondary-color rounded-circle d-inline-block m-1"
          style="width: 1rem; height: 1rem"
        >
        </span>
      </router-link>
    </div>


    <pre class="text-black-50" dir="ltr">
      {{ data }}
    </pre>

  </div>
</template>

<style lang="scss" scoped></style>
