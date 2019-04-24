import Vue from 'vue';
import App from './App.vue';
// eslint-disable-next-line import/no-unresolved
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
