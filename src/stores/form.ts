import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
  const form = ref({
    organization_name: '',
    organization_specialty: '',
    region: '',
    town: '',
    choose_package: '',

    responsible_person: '',
    responsible_position: '',
    responsible_phone_number: '',
    authorized_person: '',
    authorized_position: '',
    authorized_phone_number: '',
    authorized_e_mail: '',
    notes: '',
  })

  const passStepOne = computed(
    () =>
      form.value.choose_package.length > 2 &&
      form.value.organization_specialty.length > 2 &&
      form.value.choose_package.length > 2
  )

  return { form, passStepOne }
})
