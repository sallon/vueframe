<template>
	<div id="app">
		<TopHeader v-if="openHead" v-bind:title='title'></TopHeader>
		<div class="container">
			index
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