<template>
    <div class="page">
        <top>
            <div class="middle big">编辑名片</div>
            <span slot="right" class="step" @click="save">保存</span>
        </top>
        <div class="wrapper" ref="wrap">
            <div>
                <div class="weui-cells" style="margin-bottom: 10px;margin-top: 0">
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p class="bf">头像</p>
                        </div>
                        <div class="weui-cell__ft bfc">
                            <img src="../../../static/img/test.jpg" alt="">
                        </div>
                    </a>
                </div>
                <div class="weui-cells__title bfc">医生公告</div>
                <div class="weui-cells weui-cells_form">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
                            <div class="weui-textarea-counter"><span>0</span>/200</div>
                        </div>
                    </div>
                </div>
                <div class="weui-cells__title bfc">医生擅长</div>
                <div class="weui-cells weui-cells_form">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
                            <div class="weui-textarea-counter"><span>0</span>/200</div>
                        </div>
                    </div>
                </div>
                <div class="weui-cells__title bfc">医生介绍</div>
                <div class="weui-cells weui-cells_form">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
                            <div class="weui-textarea-counter"><span>0</span>/200</div>
                        </div>
                    </div>
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
                click:true
            })
        },
        methods:{
            save(){
                this.$weui.alert('保存成功');
                this.$router.push({
                    name:'docCard'
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
    .page{
        display: flex;
        height: 100%;
        flex-direction: column;
    }
    .wrapper{
        flex: 1;
        overflow: auto;
    }
    .step {
        padding-right: 5px;
        color: #3CC51F;
        box-sizing: border-box;
    }
    .weui-cell__ft{
        margin-right: 20px;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50px;
            margin-right: 20px;
        }
    }
    .weui-cells__title{
        padding: 10px 20px;
        margin: 0;
    }
</style>
