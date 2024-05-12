import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import './styles/main.css'


createApp(App).use(Quasar, quasarUserOptions).use(autoAnimatePlugin).use(store).use(router).mount('#app')
