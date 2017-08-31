<template>
    <div>
        <top>
            <div class="middle big">我的</div>
        </top>
        <div>
            <div class="weui-cells">
                <a class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p class="bf">头像</p>
                    </div>
                    <div class="weui-cell__ft mfc">
                        <img src="../../../static/img/1.jpg" alt="">
                    </div>
                </a>
            </div>
            <div class="weui-cells setMargin">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="bf">姓名</p>
                    </div>
                    <div class="weui-cell__ft">
                        <span class="mfc">丁克峰</span>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="bf">执业机构</p>
                    </div>
                    <div class="weui-cell__ft">
                        <span class="mfc">景城花园服务社区</span>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="bf">科室</p>
                    </div>
                    <div class="weui-cell__ft">
                        <span class="mfc">全科</span>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="bf">职称</p>
                    </div>
                    <div class="weui-cell__ft">
                        <span class="mfc">主治医师</span>
                    </div>
                </div>
            </div>
            <div class="weui-cells setMargin">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="bf">手机</p>
                    </div>
                    <div class="weui-cell__ft">
                        <span class="mfc">13522365145</span>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="bf">身份证号</p>
                    </div>
                    <div class="weui-cell__ft">
                        <span class="mfc">14042519921218359</span>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="bf">性别</p>
                    </div>
                    <div class="weui-cell__ft">
                        <span class="mfc">男</span>
                    </div>
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
    .weui-cells{
        margin-top: 0;
    }
    .weui-cell__ft{
        margin-right: 30px;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50px;
            margin-right: 30px;
        }
    }
    .setMargin{
        margin-top: 20px;
    }
</style>
