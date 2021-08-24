import { createApp } from 'vue'
import router from './routers'
import App from './App.vue'
import 'normalize.css/normalize.css'
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(router);
app.use(Vant);
app.mount('#app');
