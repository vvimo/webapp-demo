import Vue from 'vue';
import router from './router/index';
import store from './store/index';
import './plugins/vant';
import App from './App.vue';

import './plugins/fastClick';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
