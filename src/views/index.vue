<template>
	<div id="app">
		<TopHeader v-if="openHead" :title='title'></TopHeader>
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
	import TopHeader from '../components/TopHeader'; //头部组件

	var _export = {
		name: 'index',
		data() {
			return {
				openHead: true,
				title: '首页'
			}
		},
		methods: {
			showConsole: function() {
				setTimeout(function() {
					console.log(this.store.state.title);
				}, 1000)
			}
		},
		components: {
			TopHeader,
		}
	};
	export default _export;
</script>

<style scoped>

</style>