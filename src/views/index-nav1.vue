<template>
	<div>
		nav1
	</div>
</template>

<script>
	let _export = {
		name: 'index-nav1',
		data() {
			let vm = this;
			vm.$nextTick(() => {
				//父页面header路径 注意层级关系
				let header = this.$parent.$refs.header;
				//				header.title = vm.title;
				//				console.log(header)
			});
			return {
				title: 'nav1'
			}
		},
		methods: {},
		components: {}
	};
	export default _export;
</script>

<style scoped>

</style>