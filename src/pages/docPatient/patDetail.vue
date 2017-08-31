<template>
    <div class="page">
        <top>
            <div class="middle big">患者详情</div>
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
                <div class="weui-cells">
                    <a @click="goSignDetail" class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p class="bf">签约信息</p>
                        </div>
                        <div class="weui-cell__ft bf">已服务15次</div>
                    </a>
                </div>
                <div class="weui-cells textMargin">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="bf">代办人/联系人</p>
                        </div>
                        <div class="weui-cell__ft bf">志杰</div>
                    </div>

                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p class="bf">联系人手机号</p>
                        </div>
                        <div class="weui-cell__ft bf">13522365145</div>
                    </a>
                </div>
                <div class="weui-cells textMargin">
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p class="bf">备注名</p>
                        </div>
                        <div class="weui-cell__ft bf">张老爷子(景城花园)</div>
                    </a>
                </div>
                <div class="weui-cells textMargin">
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p class="bf">手机号</p>
                        </div>
                        <div class="weui-cell__ft bf">13849862656</div>
                    </a>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="bf">身份证号</p>
                        </div>
                        <div class="weui-cell__ft bf">410425199212183539</div>
                    </div>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p class="bf">家庭住址</p>
                        </div>
                        <div class="weui-cell__ft bf">西湖区 景城花园 3栋4单元</div>
                    </a>
                </div>
                <div class="weui-cells textMargin">

                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p class="bf">健康档案</p>
                        </div>
                        <div class="weui-cell__ft bf"></div>
                    </a>
                </div>
                <div class="btns" @click="goChat">
                    <a href="javascript:;" class="weui-btn weui-btn_primary">发消息</a>
                </div>
                <div @click="showOption" class="btns" style="padding-top: 0;">
                    <a style="background: white" href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_default">更改签约关系</a>
                </div>
            </div>

        </div>
        <picker :msgDetail="msgDetail" :msg="msg" :showShaw="showShaw" @cancel="cancel"></picker>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import picker from '../../components/picker.vue'
    import BScroll from 'better-scroll'
    export default{
        components: {
            top,
            picker
        },
        data(){
            return {
                msg:'更改签约关系',
                msgDetail:['转介','委托','解约'],
                showShaw:false
            }
        },
        mounted(){
            this.BScroll = new BScroll(this.$refs.wrap,{
                click:true,
                probeType: 1,
                bounce: true
            })
        },
        methods:{
            showOption(){
                this.$set(this.$data,'showShaw',true)
            },
            cancel(){
                this.$set(this.$data,'showShaw',false)
            },
            goSignDetail(){
                this.$router.push({
                    name:'signDetail'
                })
            },
            goChat(){
                this.$router.push({
                    name:'docChat'
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
        flex: 1;
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
    .textMargin{
        margin-top: 20px;
    }
    .btns{
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
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
</style>
