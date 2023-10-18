import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

async function prepareApp() {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
    const { worker } = await import('./mocks/browser')
    return worker.start()
  }

  return Promise.resolve()
}

const app = createApp(App)

prepareApp().then(() => {
  app.mount('#app')
})
