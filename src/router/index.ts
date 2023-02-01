import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FromStepOne from '../views/Form/step-one.vue'
import FromStepTwo from '../views/Form/step-two.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form-step-one',
      name: 'FromStepOne',
      component: FromStepOne
    },
    {
      path: '/form-step-two',
      name: 'FromStepTwo',
      component: FromStepTwo
    },
  ]
})

export default router
