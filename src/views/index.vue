<template>
	<div id="app">
		<TopHeader :show="openHead" :title='title' ref='header'>
			<router-link :to="backurl" slot="left">
				<button>
					&lang;
				</button>
			</router-link>
			<div slot="right" @click="click_plus">
				&oplus;
			</div>
		</TopHeader>
		<div class="container">
			<router-view>
			</router-view>
			<div id="nav-bar" class="weui-flex">
				<div class="item weui-flex__item">
					<router-link to="/index/nav1">nav1</router-link>
				</div>
				<div class="item weui-flex__item">
					<router-link to="/index/nav2">nav2</router-link>
				</div>
				<div class="item weui-flex__item">
					<router-link to="/index/nav3">nav3</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { weui } from '@/assets/js/weui' //生产版
	import TopHeader from '../components/TopHeader'; //头部组件

	let _export = {
		name: 'index',
		data() {
			return {
				openHead: true,
				title: 'index',
				backurl: '/index/nav3'
			}
		},
		methods: {
			click_plus() {
				console.log(ENV.debug);
				weui.confirm('自定义标题的alert', function() {
					console.log('ok');
				}, {
					title: '自定义标题'
				});
			}
		},
		components: {
			TopHeader
		}
	};
	export default _export;
</script>

<style scoped>

</style>