import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';


import 'bootstrap';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/css/all.min.css';
import numeral from 'numeral';
import $ from 'jquery';
import VueClipboard from 'vue-clipboard2';


import './plugs/Swiper'
import './plugs/vee-validate'

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';

import './bus';
import currencyFilter from './filters/currency';
import percentFilter from './filters/percent';
import dateFilter from './filters/date';

window.numeral = numeral;
window.$ = $;



Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('percent', percentFilter);
Vue.filter('date', dateFilter);
Vue.use(VueAxios, axios);
Vue.use(VueClipboard)
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


router.beforeEach((to, from, next) => {
  
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`; // 加admin是為了存cookies

    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
