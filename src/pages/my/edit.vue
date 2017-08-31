<template>
    <div>
        <top>
            <div class="middle big">写文章</div>
            <span slot="right" class="step"></span>
        </top>
        <div>
            <div>
                <div class="weui-cells__title">文章标题</div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd mf">
                            <input class="weui-input" v-model="str" type="text" placeholder="请输入标题"/>
                        </div>
                    </div>
                </div>
                <div class="weui-cells__title">文章内容</div>


            </div>
            <div id="editor" style="font-size: 16px" >
                <p  class="bf">
                    长期从事青少年运动员生长发育规律研究和科学选材。1985年5月参加全国首届骨龄学习班获得骨龄鉴定A级资格证。骨龄评估和身高准确预测方面，经过长期的纵向跟踪总结
                </p>
                <p><br></p>
                <p><br></p>
                <p><br></p>
                <p><br></p>
            </div>
            <div class="btn">
                <a @click="articleText" href="javascript:;" class="weui-btn weui-btn_primary">
                    <span>发布</span>
                </a>

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
            return {
                str:'如何测骨龄'
            }
        },
        mounted(){
            setTimeout(()=>{
                var quill = new Quill('#editor', {
                    theme: 'snow',
                });
            },1)

        },
        methods:{
            articleText(){
                this.$router.push({
                    name:"articleText"
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
    .ql-container{
        font-size: .4rem !important;
    }
    #editor{
        background: white;
    }
    .btn{
        margin: 100px 30px;
    }
    .step {
        padding-right: 5px;
        color: #3CC51F;
        box-sizing: border-box;
    }
</style>
