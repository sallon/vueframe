import Vue from 'vue'
import Router from 'vue-router'
import c_index from '@/views/index.vue'

Vue.use(Router);

var _export = new Router({
	mode: 'hash',
	routes: [{
			path: '/',
			redirect: {
				path: '/index'
			}
		},
		{
			path: '/index',
			name: '首页',
			component: c_index,
		},
		{
			path: '/index2',
			name: '首页2',
			component: c_index,
		}
	]
});

export default _export;
