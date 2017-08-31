<template>
    <div class="page">
        <top>
            <div class="middle big">我的患者</div>
        </top>
        <div>
            <div class="titles">
                <div class="patAdmin" @click="patAdmin">
                    <div>
                        <img src="../../../static/img/msg.png" alt="">
                    </div>
                    <div>
                        <span class="bf" :class="{active:current=='admin'}">患者管理</span>
                    </div>
                </div>
                <div class="patAdmin" @click="massMsg">
                    <div>
                        <img src="../../../static/img/msg.png" alt="">
                    </div>
                    <div>
                        <span class="bf" :class="{active:current=='msg'}">群发消息</span>
                    </div>
                </div>
            </div>
            <div class="recentlyMsg">
                <span class="bfc">最近消息</span>
            </div>
            <div class="msgList" @click="goChat">
                <div class="msgImg">
                    <img src="../../../static/img/1.jpg" alt="">
                </div>
                <div class="msgDetail">
                    <p>
                        <span class="bf">李明卫</span>&nbsp;&nbsp;&nbsp;
                        <span  class="sign sf">签约</span>
                        <span class="msgDate bfc">   2017-06-23</span>
                    </p>
                    <p>
                        <span class="bf">您好，我有个问题想咨询您......</span>
                    </p>
                </div>
            </div>
            <div class="msgList" @click="goChat">
                <div class="msgImg">
                    <img src="../../../static/img/2.png" alt="">
                </div>
                <div class="msgDetail">
                    <p>
                        <span class="bf">董克武</span>&nbsp;&nbsp;&nbsp;
                        <span  class="sign sf" v-show="false">签约</span>
                        <span class="msgDate bfc">   2017-06-23</span>
                    </p>
                    <p>
                        <span class="bf">最近脖子比较疼......</span>
                    </p>
                </div>
            </div>
            <div class="msgList" @click="goChat">
                <div class="msgImg">
                    <img src="../../../static/img/3.jpg" alt="">
                </div>
                <div class="msgDetail">
                    <p>
                        <span class="bf">丁克峰</span>&nbsp;&nbsp;&nbsp;
                        <span  class="sign sf">签约</span>
                        <span class="msgDate bfc">   2017-06-23</span>
                    </p>
                    <p>
                        <span class="bf">您好，我关注了您......</span>
                    </p>
                </div>
            </div>
        </div>
        <footers index="0"></footers>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import footers from '../../components/app-footer.vue'
    export default{
        components: {
            top,
            footers
        },
        data(){
            return {
                current:''
            }
        },
        mounted(){

        },
        methods:{
            massMsg(){
                this.$set(this.$data,'current','msg');
                this.$router.push({
                    name:'massMsg'
                })

            },
            patAdmin(){
                this.$set(this.$data,'current','admin');
                this.$router.push({
                    name:'patientList'
                })
            },
            goChat(){
                console.log(21212121)
                this.$router.push({
                    name:'docChat'
                })
            }
        }
    }
</script>
<style scoped  lang='scss'>
    @import '../../common/public.scss';
    .page{
        display: flex;
        height: 100%;
        flex-direction: column;
    }
    .titles{
        width: 100%;
        display: flex;
        border-bottom: 1px solid gainsboro;
        border-top: 1px solid gainsboro;
        background: white;
    }
    .patAdmin{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        box-sizing: border-box;
        border-right: 1px solid gainsboro;
    }
    .active{
        color: #3CC51F;
    }
    .recentlyMsg{
        padding: 20px 20px;
        box-sizing: border-box;
    }
    .msgList{
        display: flex;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid gainsboro;
        background: white;
    }
    .msgImg{
        width: 80px;
        height: 80px;
        border-radius: 40px;
        margin-right: 20px;
        img{
            width: 80px;
            height: 80px;
            border-radius: 40px;
            margin-right: 20px;
        }
    }
    .msgDate{
        display: inline-block;
        float: right;
    }
    .msgDetail{
        flex: 1;
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
    }
</style>
