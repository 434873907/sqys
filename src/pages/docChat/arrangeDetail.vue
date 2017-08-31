<template>
    <div>
        <top>
            <div class="middle big">服务详情</div>
        </top>
        <div>
            <div class="toBeAgree">
                <i class="weui-icon-success weui-icon_msg icon" style="font-size: 24px"></i>&nbsp;&nbsp;
                <span class="bf">已同意</span>
            </div>
            <div class="weui-cells__title bf" style="padding-bottom: 0">服务信息</div>
            <div class="weui-cells" style="margin-top: 0">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p>
                            <span class="bf">上门服务</span>&nbsp;&nbsp;
                            <span class="mfc">共12次 剩8次</span>
                        </p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-cells" style="margin-top: 0">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p>
                            <span class="bf">服务时间</span>&nbsp;&nbsp;
                        </p>
                    </div>
                    <div class="weui-cell__ft bf">2017-09-26</div>
                </div>
            </div>
            <div class="weui-cells" style="margin-top: 0">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p>
                            <span class="bf">医生备注</span>&nbsp;&nbsp;
                        </p>
                        <p>
                            <span class="mfc">
                                晚上吃什么好呢？今天发工资了，得好好奖励自己一下，虽然钱不多，但可以去小菜馆点几个菜和对象一起吃，她也好久没吃过好吃的了！
                            </span>
                        </p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p>
                            <span class="bf">患者备注</span>&nbsp;&nbsp;
                        </p>
                        <p>
                            <span class="mfc">
                                晚上吃什么好呢？今天发工资了，得好好奖励自己一下，虽然钱不多，但可以去小菜馆点几个菜和对象一起吃，她也好久没吃过好吃的了！
                            </span>
                        </p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    export default{
        components: {
            top
        },
        data(){
            return {}
        },
        mounted(){

        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
.toBeAgree{
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: white;
    border-bottom: 1px solid gainsboro;
    border-top: 1px solid gainsboro;
    text-align: center;
}

</style>
