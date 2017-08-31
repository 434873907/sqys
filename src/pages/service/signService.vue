<template>
    <div class="page">
        <top>
            <div class="middle big">签约服务</div>
        </top>
        <div class="wrapper" ref="wrap">
            <div>
                <div class="titles">
                    <div class="titlesLeft bfc">基础服务(必选)</div>
                    <div class="titlesRight bfc">共 <span class="bf" style="color: orange">￥200/年</span>  </div>
                </div>
                <div class="weui-cells">
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>
                                <span class="bf">图文咨询</span>&nbsp;&nbsp;
                                <span class="mfc" style="color: blue">不限次数</span>
                            </p>
                            <p>
                            <span class="mfc">
                                这里是服务介绍：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendut.
                            </span>
                            </p>
                        </div>
                        <div class="weui-cell__ft"></div>
                    </a>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>
                                <span class="bf">电话咨询</span>&nbsp;&nbsp;
                                <span class="mfc" style="color: blue">3次/月</span>
                            </p>
                            <p>
                            <span class="mfc">
                                这里是服务介绍：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendut.
                            </span>
                            </p>
                        </div>
                        <div class="weui-cell__ft"></div>
                    </a>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>
                                <span class="bf">上门服务</span>&nbsp;&nbsp;
                                <span class="mfc" style="color: blue">1次/月</span>
                            </p>
                            <p>
                            <span class="mfc">
                                这里是服务介绍：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendut.
                            </span>
                            </p>
                        </div>
                        <div class="weui-cell__ft"></div>
                    </a>


                </div>
                <div class="titles">
                    <div class="titlesLeft bfc">扩展服务</div>
                </div>
                <div class="weui-cells">
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>
                                <span class="bf">推拿理疗</span>&nbsp;&nbsp;
                                <span class="mfc" style="color: blue">1次/月</span>
                                <span class="addPrint sf">+￥500/年</span>
                            </p>
                            <p>
                            <span class="mfc">
                                这里是服务介绍：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendut.
                            </span>
                            </p>
                        </div>
                        <div class="weui-cell__ft"></div>
                    </a>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>
                                <span class="bf">保健品鉴别</span>&nbsp;&nbsp;
                                <span class="mfc" style="color: blue">不限次数</span>
                                <span class="addPrint sf">+￥100/年</span>
                            </p>
                            <p>
                            <span class="mfc">
                                这里是服务介绍：Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendut.
                            </span>
                            </p>
                        </div>
                        <div class="weui-cell__ft"></div>
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

            })
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
        top: 88px;
        bottom: 0;
        right: 0;
    }
    .titles{
        overflow: hidden;
        box-sizing: border-box;
        padding: 20px;
    }
    .titlesLeft{
        float: left;
    }
    .titlesRight{
        float: right;
    }
    .weui-cells{
        margin-top: 0;
    }
    .addPrint{
        display: inline-block;
        float: right;
        color: orange;
    }
</style>
