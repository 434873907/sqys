<template>
    <div class="page">
        <top>
            <div class="middle big">签约信息</div>
        </top>
        <div class="wrapper" ref="wrap">
            <div>
                <div class="weui-cells">
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__hd"><img class="titleImg" src="../../../static/img/7.jpg" alt="" style="display:block"></div>
                        <div class="weui-cell__bd">
                            <p>
                                <span class="bf">蔡睿</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="mfc">景城花园社区</span>
                                <span  class="sign sf">签约</span>
                            </p>
                            <p>
                                <span class="mfc">姓名：蔡睿</span>
                            </p>
                            <p>
                                <span class="mfc">男 27</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div class="weui-cells textMargin">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="bf">签约有效期</p>
                        </div>
                        <div class="weui-cell__ft bf">2017-8-6至2018-3-9</div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="bf">签约价格</p>
                        </div>
                        <div class="weui-cell__ft bf"  style="color: orange">￥300/年</div>
                    </div>
                </div>
                <div class="title">签约服务</div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="bf">
                                <span class="bf">图文咨询</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="mfc">不限次数</span>
                            </p>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="bf">
                                <span class="bf">电话咨询</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="mfc">共36次，剩余9次</span>
                            </p>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="bf">
                                <span class="bf">上门服务</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="mfc">共12次，剩余10次</span>
                                 <span class="complete sf" style="color: white">完成一次</span>
                            </p>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="bf">
                                <span class="bf"> 保健品鉴别</span>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span class="mfc">不限次数</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="title">服务历史</div>
                <div class="weui-cells" v-for="item of 5" @click="serviceDetail">
                    <a  class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p >
                                <span class="bf">2017-02-28 8:59--2017-02-28 23:59</span>
                            </p>
                            <p class="bf" style="margin-top: 10px">
                                <span class="bf">丁克峰</span>&nbsp;&nbsp;
                                <span class="bf">上门服务</span>
                            </p>
                        </div>
                        <div class="weui-cell__ft bfc">详细</div>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import BScroll from 'better-scroll'
    export default{
        components: {
            top
        },
        data(){
            return {}
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrap,{
                click:true,
                bounce:true
            })
        },
        methods:{
            serviceDetail(){
                this.$router.push({
                    name:'serviceDetail'
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
    .wrapper{
        position: fixed;
        left: 0;
        right: 0;
        top: 88px;
        bottom:0
    }
    .titleImg{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin-right: 40px;
    }
    .sign{
        display: inline-block;
        width: 80px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        border: 1px solid blue;
        text-align: center;
        color: blue;
        margin-left: 20px;
    }
    .weui-cells{
        margin-top: 0;
    }
    .textMargin{
        margin-top: 20px;
    }
    .title{
        box-sizing: border-box;
        padding: 20px;
    }
    .complete{
        display: inline-block;
        float: right;
        width: 120px;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        background: lawngreen;
        text-align: center;
    }

</style>
