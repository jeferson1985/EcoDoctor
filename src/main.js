import { createApp } from 'vue' 
import MyApp from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from '@/store/vuex'
import createPersistedState from 'vuex-persistedstate';

const app = createApp(MyApp)

app.use(router)
app.use(store)
app.use(createPersistedState)
app.mount('#app')
