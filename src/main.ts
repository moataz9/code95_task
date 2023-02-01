import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n'
import ar from '@/i18n/ar.json'
import en from '@/i18n/en.json'

import { Icon } from '@iconify/vue'

const i18n = createI18n({
  legacy: false,
  locale: 'ar',
  fallbackLocale: 'en',
  messages: { en, ar },
})

import './assets/Bootstrap4/bootstrap.min.css'
import './assets/styles/global.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Icon', Icon)

app.use(i18n)

app.mount('#app')
