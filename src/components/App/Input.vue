<script setup lang="ts">
defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String
  }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <div class="my-2" :class="$i18n.locale === 'en' ? 'text-left' : 'text-right'">
      {{ title }} 
      <span v-if="required" class="text-danger">*</span></div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      :required="required"
      class="w-100 p-2 border focus"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>
