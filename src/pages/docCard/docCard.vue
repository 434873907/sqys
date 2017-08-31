<template>
    <div class="parent">
        <top class="title" ref="title">
            <div class="middle big">医生名片</div>
        </top>

        <div class="wrapContain" ref="wrapContain">
            <div class="docDetail">
                <div class="docHeader">
                    <div class="card" >
                        <span @click="goBack" class="arrow">&#xe600;</span>
                        <span>我的名片</span>
                        <span class="editCard" @click="editCard">编辑名片</span>
                    </div>
                    <div class="docImg docTitle">
                        <img src="../../../static/img/test.jpg" alt="">
                    </div>
                    <div class="docName docTitle bf">华佗 &nbsp;&nbsp;<span class="famous">首席</span></div>
                    <div class="docOffice docTitle bf">全科 &nbsp;&nbsp;主治大夫</div>
                    <div class="docHospital docTitle bf">杭州市西湖区景城社区服务中心</div>
                    <div class="docXing docTitle">
                         <span class="bf">签约患者</span>&nbsp;
                        <span style="color: blue" class="bf"> 196</span>
                        &nbsp;&nbsp;
                        <span class="bf">评价</span>&nbsp;
                        <span style="color: orange" class="bf"> 9.5</span>
                    </div>
                </div>
            </div>
            <div class="weui-cells" style="margin-bottom: 10px">
                <a @click="signService" class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p class="bf">所属团队</p>
                    </div>
                    <div class="weui-cell__ft bfc">陈志敏全科团队</div>
                </a>
            </div>
            <div class="strong">
                <div class="docStrong bf">医生公告</div>
                <div   class="bfc">
                    主任医师,教授,博士生导师,国家级名老中医药专家,全国优秀中医临床研修老师,北京市中医住院医师规范化培训师承指导...
                </div>
            </div>
            <div class="strong">
                <div class="docStrong bf">医生擅长</div>
                <div  :class="{strongContain:showHeight,autoHeight:!showHeight}" class="bfc">
                    擅长于各种大小不同面积、不同深度烧伤的早、中、晚期及合并症的治疗
                    普外科、骨伤科以及各种常见病、多发病及疑难杂症的诊治                </div>
                <div class="arrows" @click="spread"><span class="arrowLt">&lt;</span></div>
            </div>
            <div class="introduce">
                <div class="docStrong bf">医生介绍</div>
                <div  :class="{docIntroduce:docIntroduce,autoIntroduce:!docIntroduce}" class="bfc">
                    心胸外科 安阳市人民医院 我要推荐Ta(...尤其擅长室间隔缺损、房间隔缺损、动脉导管专闭、擅长内儿科常见病、多发病及部份疑难杂症的诊治。 李增康,男,副主任中医师,出生中医世家。精通脾胃学说、三焦学说、瘀血学说对痰论有
                </div>
                <div class="arrows" @click="introduceSpread"><span class="arrowLt">&lt;</span></div>
            </div>
            <div style="box-sizing: border-box;padding-left: 10px;padding-bottom: 10px" class="docStrong bf">精选文章  <div class="more" @click="goEssay(docObj.docId)">{{essayList?'更多':'无'}}</div></div>
            <div class="docEssay" v-for="item of 3">
                <div class="essayList">
                    <p>
                        <span class="bf">
                            标题一:
                        </span>
                        <span class="mf">
                            如何养成好习惯的重要性
                        </span>
                    </p>
                    <p>
                        <span class="mfc">
                            好孩子学习好很重要，听妈妈的话也很重要，但是也要有开心的童年啊
                        </span>
                    </p>
                    <div class="readNum">
                        <span class="mfc">
                            235 阅读
                        </span>
                    </div>
                </div>
            </div>
            <div class="code">
                <p>扫二维码，关注我</p>
                <p class="codeImg">
                    <img src="../../../static/img/8.png" alt="">
                </p>
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
            return {
                id:null,
                showHeight:true,
                docIntroduce:true,
                essayHeight:true,
                docObj:{},
                essayList:{}
            }
        },
        filters:{

        },
        mounted(){


//            this.scroll = new BScroll(this.$refs.wrapContain,{
//                click:true,
//                probeType: 1,
//                bounce: true
//            })
            var wrapper = this.$refs.wrapContain;
            wrapper.addEventListener('touchstart',(e)=>{
            });
            wrapper.addEventListener('touchmove',()=>{
                if(wrapper.scrollTop>50){
                    this.$refs.title.$el.style.display = 'block'
                    this.$refs.title.$el.style.opacity =(wrapper.scrollTop-50)*0.01;
                }else {
                    this.$refs.title.$el.style.display = 'none'
                    this.$refs.title.$el.style.opacity = 0
                }
            });
            wrapper.addEventListener('scroll', ()=>{
                if(wrapper.scrollTop<50){
                    this.$refs.title.$el.style.display = 'none'
                    this.$refs.title.$el.style.opacity = 0
                }
            })

        },
        methods:{
            spread(){
                this.$set(this.$data,'showHeight',!this.showHeight)
            },
            introduceSpread(){
                this.$set(this.$data,'docIntroduce',!this.docIntroduce)
            },
            essaySpread(){
                this.$set(this.$data,'essayHeight',!this.essayHeight)
            },
            editCard(){
                this.$router.push({
                    name:'editCard'
                })
            },
            goBack(){
                console.log(2121)
                this.$router.go(-1)
            },
            signService(){
                this.$router.push({
                    name:'signService'
                })
            }


        }
    }
</script>
<style lang="scss">
    @import "../../common/public.scss";
    @font-face {
        font-family: 'iconfont';
        src: url('//at.alicdn.com/t/font_33qiq29sp5y7gb9.woff') format('woff'),
    }
    span{
        font-family: 'iconfont';
        font-size: 18px; /*no*/
    }
    .editCard{
        display: inline-block;
        position: absolute;
        right: 10px;
        top:0;
        font-size: 32px;
        color: lawngreen;
    }
    .title{
        opacity: 0;
        display: none;
    }
    .active {
        color: #eeba1b;
    }
    .parent{
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .wrapContain{
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        position: fixed;
        left: 0;
        right: 0;
        top:0;
        bottom: 0;
    }
    .docHeader{
        padding: 20px 0;
    }
    .docDetail{
        background-image: url('../../../static/img/background.png');
        background-size: cover;
        border-top: 1px solid gainsboro;
        margin-bottom: 30px;
        background-color: white;
        height: 500px;

    }
    .docTitle{
        padding: 4px 0;
    }
    .docHospital{
        display: flex;
        justify-content: center;
    }
    .docImg{
        display: flex;
        justify-content: center;
        margin: 10px 0;

    }
    .docImg img{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin: 10px 0;
    }
    .docName{
        display: flex;
        justify-content: center;

    }
    .docOffice{
        display: flex;
        justify-content: center;
    }
    .docXing{
        display: flex;
        justify-content: center;
    }
    .docFeature{
        display: flex;
        justify-content: space-around;
    }
    .docFeature li{
        text-align: center;
    }
    .strong{
        background: white;
        margin-bottom: 40px;
        padding: 20px;
    }
    .strongContain{
        height: 100px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        word-break: break-all;
        transition: height 1s;
        font-size: 32px;
    }
    .autoHeight{
        height: auto;
        transition: height 1s;
        font-size: 32px;
    }
    .arrows{
        color: gainsboro;
        text-align: center;
    }
    .arrowLt{
        display: inline-block;
        transform:rotate(270deg);
    }

    .introduce{
        background: white;
        margin-bottom: 40px;
        padding: 20px;
    }
    .docEssay{
        background: white;
        margin-bottom: 40px;
        padding: 20px;
    }
    .essay{
        display: flex;
        justify-content: space-between;
    }
    .essay span{
        display: inline-block;
    }
    .essayTitle{
        flex: 5;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .essayNum{
        flex: 2;
    }
    .essayDate{
        flex: 3;
    }
    .code{
        text-align: center;
        margin-top: 20px;
    }
    .codeImg{
        width: 100%;
        text-align: center;
    }
    .codeImg img{
        width: 300px;
        height: 260px;
    }
    .more{
        float: right;
        padding-right: 30px;
        color: royalblue;
    }
    .card{
        width: 100%;
        font-size: 32px;
        text-align: center;
        color: white;
        box-sizing: border-box;
        position: relative;
    }
    .arrow{
        display: inline-block;
        position: absolute;
        left: 20px;
        top:0;
    }

    .famous{
        display: inline-block;
        width: 60px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #f2c613;
        font-size: 24px;
        color: white;
        text-align: center;
        background: #f2c613;
    }
    .docIntroduce{
        height: 100px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        word-break: break-all;
        transition: height 1s;
        font-size: 32px;
    }
    .autoIntroduce{
        height: auto;
        transition: height 1s;
        word-break: break-all;
        font-size: 32px;
    }
    .essayList{
        /*border-bottom: 1px solid gainsboro;*/
    }
    .readNum{
        overflow: hidden;
        span{
            display: inline-block;
            float: right;
            margin-right: 30px;
        }
    }
</style>
