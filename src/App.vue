<template>
	<transition appear name="fade">
		<router-view>
		</router-view>
	</transition>
</template>
<script>
	export default {
		name: 'app'
	}
</script>
<style lang="scss">
	/*全局css放置的地方*/
	/*重置*/
	@import "../static/_mixin-reset.scss";
	/*css类库*/
	@import "../static/_mixin-css3.scss";
	@import "../static/app";
</style>