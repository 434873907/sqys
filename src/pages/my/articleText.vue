<template>
    <div class="total">
        <top>
            <div class="middle big">文章正文</div>
            <span slot="right" class="step" @click="showText">
                <label>&#xe631;</label>
            </span>
        </top>
        <div class="btnTop" v-show="del">
            <ul>
                <li style="width: 100%" @click="deletes">
                    <span>&#xe609;</span>
                    删除</li>
                <li style="width: 100%" @click="edit">
                    <span >&#xe609;</span>
                    编辑</li>
            </ul>
        </div>
        <div @click="cancel" class="page">
            <div class="page__bd">
                <article class="weui-article">
                    <h1 class="textTitle" style="margin-bottom: 0">教你如何给孩子测骨龄最好的方法</h1>
                    <div class="read">
                        <span class="recommend sf">推荐</span>
                        <span class="sfc">1314人阅读 2017-06-09</span>
                    </div>
                    <section>

                        <section>

                            <p class="mf">
                                &nbsp;&nbsp;  &nbsp;&nbsp;春天来了，病毒君、过敏君纷纷来袭，小孩子中招最快，患上呼吸道感染的概率大大提高。

                                扁桃体是抵抗呼吸道疾病的“第一道防线”，它们就像是人体的前站哨兵，执行着机体第一道防御保护任务。一旦遭到病毒攻击，扁桃体就是第一个“躺着中枪”的器官。它也成为很多家长重点关心的对象。

                                这两天，在钱江晚报妇儿微信“宝宝好孕”后台，就有很多家长向浙江大学医学院附属儿童医院呼吸科主任、主任医师陈志敏团队咨询扁桃体的事儿，其中疑问最多的是，扁桃体要不要割？
                            </p>
                        </section>
                        <section>
                            <p class="mf">
                                &nbsp;&nbsp;  &nbsp;&nbsp;长期从事青少年运动员生长发育规律研究和科学选材。1985年5月参加全国首届骨龄学习班获得骨龄鉴定A级资格证。骨龄评估和身高准确预测方面，经过长期的纵向跟踪总结，结合当前中国儿童的生长发育趋势和生长发育异常的变化值修正后作出了TW3余氏修正法，积累了丰富的经验，在国内享有一定知名度。同时，将骨龄和遗传学应用于运动员的科学选材中，长期进行运动员生理生化机能监控及研究，为国家队选拔输送了如周苏红、吕林、叶诗文、傅园慧等一大批世界顶级高水平的优秀运动员。

                            </p>
                        </section>
                        <section>
                            <p class="mf">
                                &nbsp;&nbsp;  &nbsp;&nbsp;曾在卫生部核心期刊《中国优生与遗传》，《中国体育科学》和各省级刊物中发表多篇论文。主持制定《浙江省运动员体检标准》，负责浙江省科技厅课题《优秀运动员人体健康管理系统研究》。获“浙江省体育后备人材训练先进工作者”、“浙江省级机关抗非典优秀党员”荣誉称号。曾被多家省市级媒体专访报道。

                            </p>
                        </section>
                    </section>
                </article>
            </div>
            <div class="page__ft">
                <p class="mfc" style="margin-bottom: 10px">长按二维码关注我</p>
                <img src="../../../static/img/aa.jpg" alt="">
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
                del:false
            }
        },
        mounted(){

        },
        methods:{
            showText(){
                this.del = true
            },
            cancel(){
                this.del = false
            },
            deletes(){
                var self = this;
                this.$weui.confirm('确定要删除这篇文章么？',function () {
                    console.log('确定要删除这篇文章么？');
                    self.cancel();
                    self.$weui.toast('操作成功');
                    self.$router.push({
                        name:'myDetail'
                    })
                });
            },
            edit(){
                this.$router.push({
                    name:'edit'
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
    .btnTop{
        position: fixed;
        top: 90px;
        right: 20px;
        background: black;
        width: 300px;
        box-sizing: border-box;
        padding: 30px;
        opacity: .9;
        color: white;
        font-size: 32px;
    }
    .page__ft{
        width: 100%;
        text-align: center;
        margin-bottom: 40px;
        img{
            width: 200px;
            height: 200px;

        }
    }

    @font-face {
        font-family: 'iconfont';  /* project id 326803 */
        src: url('//at.alicdn.com/t/font_326803_z3n2q3hshh0k9.eot');
        src: url('//at.alicdn.com/t/font_326803_z3n2q3hshh0k9.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_326803_z3n2q3hshh0k9.woff') format('woff'),
        url('//at.alicdn.com/t/font_326803_z3n2q3hshh0k9.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_326803_z3n2q3hshh0k9.svg#iconfont') format('svg');
    }
    label {
        font-family: 'iconfont';
        font-size: 64px;
        color: grey;
    }
    span {
        font-family: 'iconfont';
        font-size: 40px;
        color: white;
    }
    .recommend{
        display: inline-block;
        width: 80px;
        border: 1px solid orange;
        border-radius: 8px;
        color: orange;
    }
    .read{
        width: 100%;
        text-align: center;
        margin: 10px 0;
    }
    .total{
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow: hidden;
    }
    .page{
        background: white;
        flex: 1;
        overflow: scroll;
    }
    .textTitle{
        width: 100%;
        text-align: center;
    }
    .step {
        padding-right: 5px;
        color: #3CC51F;
        box-sizing: border-box;
    }
</style>
