<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {}
  },
  mounted(){

  }
}
</script>

<style lang="scss">
  @import "./common/public.scss";
  #app {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    background: #f5f5f5;
    display:flex;
    flex-direction:column;
  }
</style>
