import Vue from 'vue';
import App from './App.vue';
import Icon from './v-icon.vue';
import Button from './v-button.vue';
// import './assets/iconfont.css';

Vue.component('v-button', Button);
Vue.component('v-icon', Icon);

const app = new Vue({
  el: '#app',
  components:{
    App
  },
  template:'<App />'
});


