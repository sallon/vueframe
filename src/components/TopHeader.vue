<template>
	<!--头部组件 start-->
	<div class="header">
		{{title}}
	</div>
	<!--头部组件 end-->
</template>
<script>
	export default {
		data() {
			return {}
		},
		props: ['title']
	}
</script>
<!--<style rel="base.scss" lang="scss" scoped type="text/css"></style>-->
<style lang="scss" scoped type="text/css">
	.header {
		height: 1rem;
		font-size: .3rem;
		line-height: 1rem;
		text-align: center;
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		color: #fff;
		background-color: #F37938;
	}
</style>