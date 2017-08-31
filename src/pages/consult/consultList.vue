<template>
    <div class="page">
        <top>
            <div class="middle big">咨询大厅</div>
        </top>
        <div class="weui-tab">
            <div class="weui-navbar">
                <div class="weui-navbar__item" :class="{active:current=='all'}" @click="allConsult">
                    全部咨询
                </div>
                <div class="weui-navbar__item" :class="{active:current=='team'}" @click="teamConsult">
                    团队咨询
                </div>
                <div class="weui-navbar__item" :class="{active:current=='my'}" @click="myConsult">
                    我回答的
                </div>
            </div>
            <div class="weui-tab__panel">

            </div>
        </div>
        <div v-show="current=='all'" class="wrapper" ref="Bscroll">
            <div>
                <div class="contain"   @click="consuitDetail">
                    <div class="patMsg">
                        <span class="bf">李林羽 男 25</span>
                        <span class="print ">￥50</span>
                    </div>
                    <div>
                        <span class="bf">我25岁，患高血压多年药物治疗前血压105/160，现在90/140这种情况能停药吗？</span>
                    </div>
                    <div class="patImg">
                        <img  src="../../../static/img/4.jpg" alt="">
                        <img  src="../../../static/img/5.jpg" alt="">
                        <img  src="../../../static/img/6.jpg" alt="">
                    </div>
                    <div>
                        <span class="mfc">张三 回答</span>
                        <span class="date">一小时前创建 &nbsp;&nbsp;|&nbsp;&nbsp; 3条回复</span>
                    </div>
                </div>
                <div class="contain"  v-for="item of 1" @click="consuitDetail">
                    <div class="patMsg">
                        <span class="bf">李秋蝉 女 28</span>
                        <span class="print ">￥50</span>
                    </div>
                    <div>
                        <span class="bf">我今年28岁，女，最近晚上老是失眠多梦......</span>
                    </div>
                    <div class="patImg">
                        <img  src="../../../static/img/5.jpg" alt="">
                        <img  src="../../../static/img/6.jpg" alt="">
                    </div>
                    <div>
                        <span class="mfc">张三 回答</span>
                        <span class="date">一小时前创建 &nbsp;&nbsp;|&nbsp;&nbsp; 3条回复</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="current=='team'" class="wrapper" ref="Bscroll">
            <div>
                <div class="contain"   @click="consuitDetail">
                    <div class="patMsg">
                        <span class="bf">宋玉琪 男 25</span>
                        <span class="print ">￥50</span>
                    </div>
                    <div>
                        <span class="bf">我25岁，左边头部疼痛持续2星期，疼痛的厉害</span>
                    </div>
                    <div class="patImg">
                        <img  src="../../../static/img/5.jpg" alt="">
                        <img  src="../../../static/img/6.jpg" alt="">
                    </div>
                    <div>
                        <span class="mfc">罗家庭 回答</span>
                        <span class="date">一小时前创建 &nbsp;&nbsp;|&nbsp;&nbsp; 3条回复</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="current=='my'" class="wrapper" ref="Bscroll">
            <div>
                <div class="contain"   @click="consuitDetail">
                    <div class="patMsg">
                        <span class="bf">广元 男 50</span>
                        <span class="print ">￥50</span>
                    </div>
                    <div>
                        <span class="bf">天热，胸闷，有咳嗽双手麻，脸麻，严重点就胃收缩一起，舌头麻，脚不麻，</span>
                    </div>
                    <div class="patImg">
                        <img  src="../../../static/img/4.jpg" alt="">
                    </div>
                    <div>
                        <span class="mfc">李云飞 回答</span>
                        <span class="date">一小时前创建 &nbsp;&nbsp;|&nbsp;&nbsp; 3条回复</span>
                    </div>
                </div>
                <div class="contain"  v-for="item of 1" @click="consuitDetail">
                    <div class="patMsg">
                        <span class="bf">高文君 女 28</span>
                        <span class="print ">￥50</span>
                    </div>
                    <div>
                        <span class="bf">在空调冷风下就会好，感觉和正常一样，心电图，化验血，都正常，求专家看下咋回事</span>
                    </div>
                    <div class="patImg">
                        <img  src="../../../static/img/5.jpg" alt="">
                        <img  src="../../../static/img/6.jpg" alt="">
                    </div>
                    <div>
                        <span class="mfc">兰凯 回答</span>
                        <span class="date">一小时前创建 &nbsp;&nbsp;|&nbsp;&nbsp; 3条回复</span>
                    </div>
                </div>
            </div>
        </div>
        <footers index="1"></footers>

    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import BScroll from 'better-scroll'
    import footers from '../../components/app-footer.vue'
    export default{
        components: {
            top,
            footers
        },
        data(){
            return {
                current:'all'
            }
        },
        mounted(){
            setTimeout(()=>{
                this.scroll = new BScroll(this.$refs.Bscroll,{
                    click:true,
                    probeType: 1,
                    bounce: true
                })
            },100)

        },
        methods:{
            allConsult(){
                this.$set(this.$data,'current','all');

            },
            teamConsult(){
                this.$set(this.$data,'current','team')
            },
            myConsult(){
                this.$set(this.$data,'current','my')
            },
            consuitDetail(){
                this.$router.push({
                    name:'consuitDetail'
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
    .active{
        color: blue;
        font-size: 18px;/*no*/
    }
    .page{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .wrapper{
        position: fixed;
        left:0;
        top:188px;
        right: 0;
        bottom:0;
    }
    .weui-navbar{
        background: white;
        height: 100px;
    }
    .contain{
        background: white;
        box-sizing: border-box;
        padding: 20px;
        border-radius: 20px;
        border-bottom: 1px solid gainsboro;
    }
    .print{
        float: right;
        color: orange;
        font-size: 28px;
    }
    .patImg{
        img{
            display: inline-block;
            width: 160px;
            height: 160px;
            margin-right: 10px;
            margin-top: 10px;
        }
    }
    .date{
        display: inline-block;
        float: right;
        font-size: 14px; /*no*/
        color: grey;
    }

</style>
