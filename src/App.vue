<template>
  <div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style lang="scss">
  @import "../static/demo";
  /*全局css放置的地方*/
  html,body{
    margin: 0px;
    padding: 0px;
  }
</style>
