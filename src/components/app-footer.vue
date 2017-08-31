<template>
  <footer class="footer">
    <div class="app">
      <div  v-for="item,index in list" @click=go(index) >
            <img :src="item.url">
            <p>{{item.name}}</p>
      </div>
    </div>

  </footer>
</template>
<script>
  export default {
    props:{
        index:{
            type:String,
            default:"0",
            required:false
        }
    },
    data() {
      return {
        list:[{name:"我的患者",url:'./static/img/home.png'},{name:"咨询大厅",url:'./static/img/myDoctor.png'},{name:"服务记录",url:'./static/img/myDoctor.png'},{name:"我的",url:'./static/img/my.png'}],
        activeUrl:['./static/img/home_on.png',"./static/img/my_on.png","./static/img/my_on.png","./static/img/my_on.png"]
      };
    },
    computed:{

    },
    components:{

    },
    mounted() {
        this.setCurrentPage(this.index);
        console.log(21212121212)
    },
    beforeDestroy() {

    },
    methods: {
        go(index){
            var indexList=["/","/consultList",'/serviceHistory',"/myDetail"];
        this.$router.push(indexList[index]);

        },
        setCurrentPage(index){
            let i = parseInt(index);
            console.log(i,99999)
            this.list[i].url=this.activeUrl[i];
        }
    }
  };
</script>

<style  lang="scss">
    @import "../common/public.scss";
    img{
        height:45px;
        display:block;
        margin:0 auto;
    }
    p{
        font-size:22px;
        color:#999999;
    }
  .footer{
      position:fixed;
      bottom:0;
      left:0;
      width:100%;
      border-top:1px solid rgb(204,204,204);
      /*height: 94px;;*/
    background-color: white;
    .app{
        padding-top: 12px;
      display: flex;
        flex-direction:row;
      div{
          flex:1 1 auto;
          text-align:center;
      }
    }
  }

</style>
