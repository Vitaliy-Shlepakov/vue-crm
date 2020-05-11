import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import store from './store';

import dateFilter from './filters/date.filter';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import messagePlugin from './utils/message.plugin';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.filter('dateFromFilter', dateFilter);
Vue.use(messagePlugin);
Vue.use(Vuelidate);

//initialize firebase

firebase.initializeApp({
    apiKey: "AIzaSyCL594YDs_45DqPrY1Bt-ztsIxnSaVtZQs",
    authDomain: "vue-crm-f1fe5.firebaseapp.com",
    databaseURL: "https://vue-crm-f1fe5.firebaseio.com",
    projectId: "vue-crm-f1fe5",
    storageBucket: "vue-crm-f1fe5.appspot.com",
    messagingSenderId: "1076381055428",
    appId: "1:1076381055428:web:765c6cd89e16a703e40c91"
});

let instanceApp = null;

firebase.auth().onAuthStateChanged(() => {
    if (!instanceApp) {
        instanceApp = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
});
