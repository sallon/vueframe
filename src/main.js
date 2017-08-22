// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
 * 引入外部css
 * */
import '@/assets/css/weui.min.css'
// import '@/assets/sass/demo'

import Vue from 'vue'
import router from './router/index'
import App from './App'
import { flexible } from '@/assets/js/flexible' //引入淘宝的自适应库
import { weui } from '@/assets/js/weui' //开发版
// import {weui} from '@/assets/js/weui.min'//生产版

Vue.config.productionTip = false;

var vm = new Vue({
	el: '#app',
  template:'<App/>',
	router,
  components: { App }
});
//路由钩子
router.afterEach((to, form, next) => {
	document.title = to.name;
});
