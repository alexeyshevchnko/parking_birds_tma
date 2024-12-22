
import { createApp } from 'vue' 

import App from './App.vue'
import { VueTelegramPlugin } from 'vue-tg'



const app = createApp(App) 

app.use(VueTelegramPlugin)

app.mount('#app')
