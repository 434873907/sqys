<template>
  <header >
        <div class="left" >
          <slot name="left">
            <font><span @click="back">&#xe600;</span></font>
          </slot>
         </div>
        <slot class="bf"> </slot>
      <div class="right bf">
        <slot name="right"></slot>
      </div>
  </header>
</template>


<script type="text/ecmascript-6">

  export default {
    props: {},
    data() {
      return {};
    },
    computed: {},

    mounted() {

    },
    beforeDestroy() {

    },

    methods: {
      back(){
        this.$router.go(-1)
      }
    }

  };
</script>

<style scoped lang="scss">
  @import "../common/public.scss";
  @font-face {
    font-family: 'iconfont';
    src: url('//at.alicdn.com/t/font_33qiq29sp5y7gb9.woff') format('woff'),
  }
  span{
    font-family: 'iconfont';
    font-size: 18px; /*no*/
  }



  header{
    position: relative;
    height:88px;
    line-height: 88px;
    background-color: white;
    width: 100%;
    text-align: center;
    border-bottom:1px solid gainsboro;
   z-index:888;
  }




.left{
  position: absolute;
  top:0px;
  left: 10px;
  height: 88px;
  line-height: 88px;
  z-index: 911;
}
  .right{
    position: absolute;
    top: 0px;
    right: 15px;
    height: 88px;
    line-height: 88px;
    z-index: 911;
  }

</style>
