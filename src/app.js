import Vue from 'vue';
import App from './App.vue';
import Icon from './v-icon.vue';
import Button from './v-button.vue';
import ButtonGroup from './v-button-group.vue';
import chai from 'chai';
chai.should();
// import './assets/iconfont.css';

Vue.component('v-button-group', ButtonGroup);
Vue.component('v-button', Button);
Vue.component('v-icon', Icon);

const app = new Vue({
  el: '#app',
  components:{
    App
  },
  template:'<App />'
});


// 单元测试
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData:{
      icon:'arrow-left',
      iconPosition:'right'
    }
  });
  button.$mount('#x1');
  const useEl = button.$el.querySelector('use');
  const buttonEl = button.$el;
  useEl.getAttribute('xlink:href').should.equal('#icon-arrow-left');
  buttonEl.classList.contains('icon-right').should.equal(true);
  buttonEl.remove();
  button.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData:{
      icon:'arrow-left',
      loading:true
    }
  });
  button.$mount('#x2');
  const useEl = button.$el.querySelector('use');
  useEl.getAttribute('xlink:href').should.equal('#icon-loading');
  button.$el.remove();
  button.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData:{
      icon:'arrow-left',
      loading:false
    }
  });
  button.$mount('#x3');
  const buttonEl = button.$el;
  button.$on('click', function (){
    console.log(1);
  });
  button.$emit('click');
  console.log(button);
  const useEl = button.$el.querySelector('use');
  useEl.getAttribute('xlink:href').should.equal('#icon-loading');
  button.$el.remove();
  button.$destroy();
}