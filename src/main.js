import './assets/main.css'

import { createApp, markRaw } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { mdi } from 'vuetify/iconsets/mdi'
import { aliases } from 'vuetify/iconsets/fa'
import 'vuetify/styles'
import { createPinia } from 'pinia' // Global styles

const icons = {
  defaultSet: 'mdi',
  aliases,
  sets: {
    mdi
  }
}
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})
const vuetify = createVuetify({
  icons,
  components,
  directives
})

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')
