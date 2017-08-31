<template>
  <div class="hello">
   <div class="bf">212121</div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../common/public.scss";
.box{
  width: 200px;
  height: 200px;
  background: yellowgreen;
}
</style>
