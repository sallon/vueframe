import Vue from 'vue'
import Router from 'vue-router'
import c_index from '@/views/index.vue'
import c_index_nav1 from '@/views/index-nav1.vue'
import c_index_nav2 from '@/views/index-nav2.vue'
import c_index_nav3 from '@/views/index-nav3.vue'


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
			children: [{//嵌套路由
				path: '/',
				redirect: {
					path: '/index/nav1'
				}
			}, {
				path: '/index/nav1',
				name: '首页-导航1',
				component: c_index_nav1,
			}, {
				path: '/index/nav2',
				name: '首页-导航2',
				component: c_index_nav2,
			}, {
				path: '/index/nav3',
				name: '首页-导航3',
				component: c_index_nav3,
			}]
		},
		{
			path: '/index2',
			name: '首页2',
			component: c_index,
		}
	]
});

export default _export;