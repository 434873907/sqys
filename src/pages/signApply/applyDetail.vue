<template>
    <div class="page">
        <top>
            <div class="middle big">新的签约申请</div>
        </top>
        <div class="wrapper" ref="Scroll">
            <div>
                <div class="page__bd">
                    <div class="weui-cells__title">签约人信息</div>
                    <div class="weui-cells">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="bf">签约人</p>
                            </div>
                            <div class="weui-cell__ft">
                                <span class="mfc">男 张三 56岁</span>
                            </div>
                        </div>
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="bf">签约人住址</p>
                            </div>
                            <div class="weui-cell__ft">
                                <span class="mfc">景城花园</span>
                            </div>
                        </div>
                        <a class="weui-cell weui-cell_access" href="javascript:;">
                            <div class="weui-cell__bd">
                                <p class="bf">手机号</p>
                            </div>
                            <div class="weui-cell__ft mfc">135226365145</div>
                        </a>
                    </div>

                </div>
                <div class="page__bd">
                    <div class="weui-cells__title">申请信息</div>
                    <div class="weui-cells">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="bf">代办人/联系人</p>
                            </div>
                            <div class="weui-cell__ft">
                                <span class="mfc">李康飞</span>
                            </div>
                        </div>
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="bf">与签约人关系</p>
                            </div>
                            <div class="weui-cell__ft">
                                <span class="mfc">本人</span>
                            </div>
                        </div>
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="bf">申请日期</p>
                            </div>
                            <div class="weui-cell__ft">
                                <span class="mfc">2017-02-29</span>
                            </div>
                        </div>
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="bf">支付价格</p>
                            </div>
                            <div class="weui-cell__ft">
                                <span class="mfc" style="color: orange">￥300/年</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="page__bd">
                    <div class="weui-cells__title">已选服务</div>
                    <div class="weui-cells">
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="bf">图文咨询</p>
                            </div>
                            <div class="weui-cell__ft">
                                <span class="mfc">必选</span>
                            </div>
                        </div>
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="bf">电话咨询</p>
                            </div>
                            <div class="weui-cell__ft">
                                <span class="mfc">必选</span>
                            </div>
                        </div>
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="bf">上门服务</p>
                            </div>
                            <div class="weui-cell__ft">
                                <span class="mfc">必选</span>
                            </div>
                        </div>
                        <div class="weui-cell">
                            <div class="weui-cell__bd">
                                <p class="bf">保健品鉴别</p>
                            </div>
                            <div class="weui-cell__ft">
                                <span class="mfc" style="color: orange">+￥300/年</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
        <div class="btn">
            <div class="reject" @click="refuse">拒绝</div>
            <div class="agree" @click="agree">同意申请</div>
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
            this.scroll = new BScroll(this.$refs.Scroll,{
                click:true,
                probeType: 1,
                bounce: true
            })
        },
        methods:{
            refuse(){
                this.$weui.alert('已拒绝')
                this.$router.push({
                    name:'myPatient'
                })
            },
            agree(){
                this.$weui.alert('申请成功')
                this.$router.push({
                    name:'myPatient'
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
    .weui-cells__title{
        margin-bottom: 0;
        padding-bottom: 10px;
    }
    .wrapper{
        position: fixed;
        left: 0;
        right: 0;
        top:88px;
        bottom: 110px;
    }
    .btn{
        position: fixed;
        width: 100%;
        height: 100px;
        bottom: 0;
        background: white;
        z-index: 121;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid gainsboro;
    }
    .reject{
        width: 50%;
        display: flex;
        justify-content: center;
        border-right: 1px solid gainsboro;
        color: red;
    }
    .agree{
        width: 50%;
        display: flex;
        justify-content: center;
        color: green;
    }
</style>
