<template>
    <div>
        <app-header>
            <div class="middle big">选择要发送的文章</div>
        </app-header>
        <div>
            <div  class='weui-cells' style="margin-top: 0">
                <a class="weui-cell" v-for="item in 2" @click="goChat('《夏季如何避免高血压》')">
                    <div class="weui-cell__hd" style="width: 100%;">
                        <p class="bf">《夏季如何避免高血压》</p>
                        <p class="weui-msg__desc" style="margin-top: 5px">
                            <span class="sfc">&nbsp;&nbsp;&nbsp;丁克峰</span>
                            <span class="sfc" style="color: blue;display: inline-block;float: right">&nbsp;&nbsp;&nbsp;11阅读 222赞</span>
                        </p>
                    </div>
                </a>
            </div>
            <div  class='weui-cells' style="margin-top: 0">
                <a class="weui-cell" v-for="item in 3" @click="goChat('《如何拥有高效的睡眠》')">
                    <div class="weui-cell__hd" style="width: 100%;">
                        <p class="bf">《如何拥有高效的睡眠》</p>
                        <p class="weui-msg__desc" style="margin-top: 5px">
                            <span class="sfc">&nbsp;&nbsp;&nbsp;董必武</span>
                            <span class="sfc" style="color: blue;display: inline-block;float: right">&nbsp;&nbsp;&nbsp;345阅读 123</span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script >
    import AppHeader from "../../components/app-header";
    export default {
        data() {
            return {
                isCompleted:false,
                articleList:[],
                docName:"",
                docId:''
            };
        },
        computed:{
        },
        components:{
            AppHeader,

        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            goChat(value){
                this.$router.push({
                    name:'docChat',
                    params:{
                        val:value
                    }
                })
            }
        }
    };
</script>

<style scoped lang="scss">
    .recTag{
        border:1px solid #999;
        border-radius:10px;
        padding:0 15px;
    }
</style>
