import Vue from 'vue';
import App from './App.vue';
import Button from './v-button.vue'

Vue.component('v-button', Button);

const app = new Vue({
  el: '#app',
  components:{
    App
  },
  template:'<App />'
});