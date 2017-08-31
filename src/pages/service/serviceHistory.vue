<template>
    <div>
        <top>
            <div class="middle big">服务历史</div>
        </top>
        <div>
            <div  class="weui-cells box" v-for="item of 1" @click="serviceDetail">
                <a  class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p >
                            <span class="bf">2017-02-28 8:59--2017-02-28 23:59</span>
                        </p>
                        <p  style="margin-top: 10px">
                            <span class="bf">董克武</span>&nbsp;&nbsp;
                            <span class="bf">上门服务</span>
                        </p>
                    </div>
                    <div class="weui-cell__ft bfc">详细</div>
                </a>
                <div class="evaluate">
                    <span class="bf" style="color: blue">暂未评价</span>
                </div>
            </div>
            <div  class="weui-cells box" v-for="item of 1" @click="serviceDetail">
                <a  class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p >
                            <span class="bf">2017-02-28 8:59--2017-02-28 23:59</span>
                        </p>
                        <p  style="margin-top: 10px">
                            <span class="bf">董克武</span>&nbsp;&nbsp;
                            <span class="bf">上门服务</span>
                        </p>
                    </div>
                    <div class="weui-cell__ft bfc">详细</div>
                </a>
                <div class="evaluate">
                    <span class="bf" style="color: blue">暂未评价</span>
                </div>
            </div>
            <div class="weui-cells box" v-for="item of 1" @click="serviceDetail">
                <a  class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p >
                            <span class="bf">2017-02-28 8:59--2017-02-28 23:59</span>
                        </p>
                        <p  style="margin-top: 10px">
                            <span class="bf">董克武</span>&nbsp;&nbsp;
                            <span class="bf">上门服务</span>
                        </p>
                    </div>
                    <div class="weui-cell__ft bfc">详细</div>
                </a>
                <div class="evaluate">
                    <span class="bf" style="color: #eeba1b">
                         已评价 <label v-for="i of 5" :class="{active :  3>=i}" >&#xe60b;</label>
                    </span>
                </div>
            </div>
            <div class="weui-cells box" v-for="item of 1" @click="serviceDetail">
                <a  class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p >
                            <span class="bf">2017-02-28 8:59--2017-02-28 23:59</span>
                        </p>
                        <p  style="margin-top: 10px">
                            <span class="bf">董克武</span>&nbsp;&nbsp;
                            <span class="bf">上门服务</span>
                        </p>
                    </div>
                    <div class="weui-cell__ft bfc">详细</div>
                </a>
                <div class="evaluate">
                    <span class="bf" style="color: #eeba1b">
                         已评价 <label v-for="i of 5" :class="{active :  3>=i}" >&#xe60b;</label>
                    </span>
                </div>
            </div>
            <div class="register" @click="registerService">
            </div>
            <!--<div class="btn" @click="registerService">-->
                <!--<span class="addService">-->
                    <!--+登记服务-->
                <!--</span>-->
            <!--</div>-->

        </div>
        <footers index="2"></footers>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import footers from '../../components/app-footer.vue'
    export default{
        components: {
            top,
            footers
        },
        data(){
            return {}
        },
        mounted(){

        },
        methods:{
            serviceDetail(){
                this.$router.push({
                    name:'serviceDetail'
                })

            },
            registerService(){
                this.$router.push({
                    name:"registerService"
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
    .register{
        position: fixed;
        bottom: 150px;
        right: 50px;
        background-image: url("../../../static/img/add.png");
        repeat:no-repeat;
        width: 110px;
        height: 110px;
        background-size: 110px;
    }
    @font-face {
        font-family: 'iconfont';
        src: url('//at.alicdn.com/t/font_umg51q7zjupzxgvi.woff') format('woff');
    }
    label {
        font-family: 'iconfont';
    }
    .active{
        color: #eeba1b;
    }
    .box{
        margin: 20px 0;
    }
    .weui-cells{
        margin-top: 0;
    }
    .evaluate{
        border-top: 1px solid gainsboro;
        border-bottom: 1px solid gainsboro;
        height: 70px;
        line-height: 70px;
        text-align: center;
    }
    .btn{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 90px;
        line-height: 90px;
        text-align: center;
        background: white;
    }
    .addService{
        font-size: 32px;
        color: blue;
    }
</style>
