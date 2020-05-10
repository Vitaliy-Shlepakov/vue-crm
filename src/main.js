import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import store from './store';

import dateFilter from './filters/date.filter';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import messagePlugin from './utils/message.plugin';

Vue.config.productionTip = false;
Vue.filter('dateFromFilter', dateFilter);
Vue.use(messagePlugin);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
