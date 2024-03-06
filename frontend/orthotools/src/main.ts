/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import router from './router/index'
// Components
import StartPage from './components/StartPage.vue'
import VerhaeltnisRechner from './components/VerhaeltnisRechner.vue'
import App from './App.vue'

// Composables
import { createApp } from 'vue'
router.addRoute({ path: '/', component: StartPage})
router.addRoute({ path: '/verhaeltnisrechner', component: VerhaeltnisRechner})
const app = createApp(App).use(router)

registerPlugins(app)

app.mount('#app')