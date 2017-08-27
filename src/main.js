// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//全局配置
//前端环境
window.ENV = {
	debug: true, //调试
	test: true, //测试
	develop: true, //开发
};
//前端配置
window.CONFIG = {
	prefix: 'vue_cli_project', //前缀名称 用于文件名唯一前缀与设置本地存储的唯一名称使用
	ua: navigator.userAgent //用户标示
};
//引入外部css
import '@/assets/css/weui.min.css'
//引入js
import flexible from '@/assets/js/flexible' //引入淘宝的自适应库
//import {weui} from '@/assets/js/weui' //开发版
//import {weui} from '@/assets/js/weui.min'//生产版
import Vue from 'vue'
import router from './router/index'
import App from './App'

Vue.config.productionTip = false;

var vm = new Vue({
	el: '#app',
	template: '<App/>',
	router,
	components: {
		App
	}
});
//全局路由钩子
router.afterEach((to, form, next) => {
	document.title = to.name;
});