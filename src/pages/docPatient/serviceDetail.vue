<template>
    <div class="page">
        <top>
            <div class="middle big">服务详情</div>
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
                            <p class="bf">服务类型</p>
                        </div>
                        <div class="weui-cell__ft bf">上门服务</div>
                    </div>
                </div>
                <div class="weui-cells textMargin">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <p class="bf">开始时间</p>
                        </div>
                        <div class="weui-cell__ft bf">2017-9-23</div>
                    </div>
                    <div class="weui-cell" @click="showMaps">
                        <div class="weui-cell__bd">
                            <p>
                                <span class="bf">定位</span>&nbsp;&nbsp;&nbsp;
                                <span class="mfc">{{msg}}</span>
                            </p>
                        </div>
                        <div class="weui-cell__ft bf"></div>
                    </div>
                </div>
                <upload></upload>
            </div>

        </div>
        <map-position :showMap="showMap" @getMsg="getMsg"></map-position>

    </div>
</template>

<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import BScroll from 'better-scroll'
    import mapPosition from '../../components/map.vue'
    import upload from '../../components/upload.vue'
    export default{
        components: {
            top,
            mapPosition,
            upload
        },
        data(){
            return {
                showMap:false,
                msg:""
            }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrap,{
                click:true,
                bounce:true
            });

        },
        methods:{
            showMaps(){
                this.$set(this.$data,'showMap',true)
            },
            getMsg(value){
                this.$set(this.$data,'msg',value)
                this.$set(this.$data,'showMap',false)
            }
        },
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


</style>
