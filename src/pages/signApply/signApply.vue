<template>
    <div class="page">
        <top>
            <div class="middle big">新的签约申请</div>
        </top>
        <div class="wrapper" ref="Bscroll">
            <div>
                <div class="weui-cells" v-for="item of 10">
                    <a @click="applyDetail" class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__hd"><img class="titleImg" src="../../../static/img/1.jpg" alt="" style="display:block"></div>
                        <div class="weui-cell__bd">
                            <p>
                                <span class="bf">刘佳明</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="mfc">男 &nbsp;&nbsp;27</span>
                            </p>
                            <p>
                                <span class="mfc">景城花园社区</span>
                            </p>
                            <p>
                                <span class="mfc">购买四项服务，支付</span>
                                <span style="color: orange" class="mf">￥300</span>
                            </p>
                        </div>
                        <div class="weui-cell__ft bfc">处理</div>
                    </a>
                </div>
            </div>
        </div>


    </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import BScroll from 'better-scroll';
    export default{
        components: {
            top
        },
        data(){
            return {}
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.Bscroll,{
                click:true,
                probeType: 1,
                bounce: true
            })
        },
        methods:{
            applyDetail(){
                this.$router.push({
                    name:'applyDetail'
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
    .page{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .titleImg{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin-right: 40px;
    }
    .weui-cells{
        margin-top: 0;
        border-bottom: 1px solid gainsboro;
    }
    .wrapper{
        position: fixed;
        left: 0;
        right: 0;
        top: 88px;
        bottom:0
    }
</style>
