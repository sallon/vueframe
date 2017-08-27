<template>
	<!--头部组件 start-->
	<header v-if="show" class="TopHeader">
		<div class="header-left">
			<slot name="left">
			</slot>
		</div>
		<div class="title">
			{{title}}
		</div>
		<div class="header-right">
			<slot name="right">
			</slot>
		</div>
	</header>
	<!--头部组件 end-->
</template>
<script>
	let _export = {
		data() {
			return {}
		},
		props: ['title', 'show'],
		methods: {}
	};
	export default _export;
</script>
<style lang="scss" scoped type="text/css">
	.TopHeader {
		height: 1rem;
		font-size: .3rem;
		line-height: 1rem;
		text-align: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		box-shadow: 0 1px 0px #c1c1c1;
		/*color: #fff;*/
		/*background-color: #F37938;*/
		.header-left,
		.header-right {
			height: 100%;
			width: 20%;
		}
		.header-left {
			$dec: left;
			float: $dec;
			text-align: $dec;
			padding-#{$dec}: 15px;
		}
		.header-right {
			$dec: right;
			float: $dec;
			text-align: $dec;
			padding-#{$dec}: 15px;
		}
		.title {
			height: 100%;
			float: left;
			width: 60%;
			text-align: center;
		}
	}
</style>
