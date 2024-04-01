import { h, createApp } from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import { createPinia } from 'pinia'
import '@/scss/main.scss'

const lc = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {})
    },
  },
  handleInstance(instance, props) {
    instance.use(router)
    instance.use(vuetify)
    instance.use(createPinia())
  },
})

export const { bootstrap, mount, unmount } = lc
