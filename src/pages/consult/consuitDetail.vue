<template>
    <div class="page">
        <top>
            <div class="middle big">咨询详情</div>
            <span slot="right" class="step" @click="over">结束咨询</span>
        </top>
        <div class="wrapper" ref="Scroll" @click="closeCheckList">
            <div>
                <div class="weui-cells">
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>
                                <span  class="bf">患者资料： 男 25岁</span>
                            </p>
                        </div>
                        <div class="weui-cell__ft bfc"></div>
                    </a>
                    <a class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p>
                            <span class="bf">
                                疾病名称：不孕不育啊
                            </span>
                            </p>
                        </div>
                        <div class="weui-cell__ft bfc"></div>
                    </a>

                </div>
                <div class="contain">
                    <div>
                        <span class="bf">最近有点腿疼，前俩天爬山回来，就发现了这个问题了，不知道怎么回事？</span>
                    </div>
                    <div class="patImg">
                        <img  src="../../../static/img/4.jpg" alt="">
                        <img  src="../../../static/img/5.jpg" alt="">
                    </div>
                    <div>
                        <span class="mfc">李康飞 回答</span>
                        <span class="date">一小时前创建 &nbsp;&nbsp;|&nbsp;&nbsp; 3条回复</span>
                    </div>
                </div>
                <div class="answerList">
                    <div class="patAnswer">
                        <div class="docImg">
                            <img src="../../../static/img/3.jpg" alt="">
                        </div>
                        <div class="docMsg">
                            <p>
                                <span class="mf">李康飞</span>
                                <span class="mfc">&nbsp;&nbsp;&nbsp;中国名医</span>
                            </p>
                            <p>
                                <span class="mfc">1小时前</span>
                            </p>
                        </div>
                    </div>
                    <div>
                    <span class="bf">
                        长时间没运动的话不能剧烈运动，稍微休息几天就好了......
                    </span>
                    </div>
                </div>
                <div class="answerList">
                    <div class="patAnswer">
                        <div class="docImg">
                            <img src="../../../static/img/2.png" alt="">
                        </div>
                        <div class="docMsg">
                            <p>
                                <span class="mf">李明卫</span>
                                <span class="mfc">&nbsp;&nbsp;&nbsp;中国名医</span>
                            </p>
                            <p>
                                <span class="mfc">1小时前</span>
                            </p>
                        </div>
                    </div>
                    <div>

                        <audio ref="music" id="music" src="./static/music/test.mp3" controls="controls">
                            Your browser does not support the audio element.
                        </audio>
                        <div class="patMusic" @click="playMusic">
                            <img src="../../../static/img/music.png" alt="" >
                            <p class="musicImg">
                                <img src="../../../static/img/broadcast.png" alt="">
                            </p>
                            <p class="musicDate bf">{{currentTime}} / {{allTime}}  </p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div class="answerList" v-for="item of arr">
                    <div class="patAnswer">
                        <div class="docImg">
                            <img src="../../../static/img/1.jpg" alt="">
                        </div>
                        <div class="docMsg">
                            <p>
                                <span class="mf">李康飞</span>
                                <span class="mfc">&nbsp;&nbsp;&nbsp;中国名医</span>
                            </p>
                            <p>
                                <span class="mfc">1小时前</span>
                            </p>
                        </div>
                    </div>
                    <div>
                    <span class="bf">
                        {{item}}
                    </span>
                    </div>
                </div>
            </div>
        </div>
        <div  class="bottom">
                <div class="robot-room-wirte yk-box yk-cell">
                    <div class="talkImg">
                        <img src="../../../static/img/talk.png" alt="" @click="setType">
                    </div>
                    <div class="audioInput mfc" v-show="type=='audio'" ref="recordButton">
                       {{msg}}
                    </div>
                    <div class="yk-cell-bd mr10" v-show="type=='text'">
                        <edit-div :message="clean" v-model="text" id="inputArea" class="input-text" ></edit-div>
                    </div>
                    <div v-show="!text.length" class="showJia" @click="showCheckList"><span class="jia">+</span></div>
                    <button v-show="text.length" class="send-btn" @click="send">发送</button>
                </div>
                <div  class="checkList" v-show="checkList">
                    <div class="upload">
                        <label for="upload_img" class="label_img">图片</label>
                        <input  type="file" id="upload_img" >
                    </div>
                </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import BScroll from 'better-scroll'
    import editDiv from '../../components/editDiv.vue'
    export default{
        components: {
            top,
            editDiv
        },
        data(){
            return {
                flag:true,
                allTime:'',
                currentTime:'',
                text:'',
                clean:false,
                checkList:false,
                type:"text",
                time:'',
                msg:'按住说话',
                arr:[]
            }
        },
        mounted(){
            this.$refs.recordButton.addEventListener("touchstart",this.startRecord);
            this.$refs.recordButton.addEventListener("touchend",this.stopRecord);
            this.scroll = new BScroll(this.$refs.Scroll,{
                click:true,
                probeType: 1,
                bounce: true
            });
            var audio = this.$refs.music;
            audio.addEventListener("loadeddata",()=>{
                console.log(audio.duration,666666);
                var allTime = audio.duration;
                this.timeChange(allTime,'allTime');
               var currentTime = audio.currentTime;
                this.timeChange(currentTime,'currentTime');

            })
        },
        methods:{
            over(){
              this.$router.push({
                  name:'myPatient'
              })
            },
            send(){
              this.arr.push(this.text)
              this.$set(this.$data,'clean',!this.clean);
                setTimeout(()=>{
                    this.scroll = new BScroll(this.$refs.Scroll,{
                        click:true,
                        probeType: 1,
                        bounce: true
                    });
                },500)

            },
            startRecord(){
                this.time= new Date();
                this.$set(this.$data,'msg','松开结束')
                this.$refs.recordButton.style.background = 'gainsboro'

            },
            stopRecord(){
                this.$set(this.$data,'msg','按住录音');
                this.$refs.recordButton.style.background = 'white'
                var interval = new Date()-this.time  ;
                if (interval<500){
                   alert("录制时间过短");
                    return;
                }

            },
            setType(event){
                console.log(event.target,9999);
                if(this.type=='text'){
                    this.type='audio';
                    event.target.src=' ./static/img/chat.png'
                }else {
                    this.type='text';
                    event.target.src='./static/img/talk.png'
                }

            },
            showCheckList(){
                this.$set(this.$data,'checkList',true)
            },
            closeCheckList(){
                this.$set(this.$data,'checkList',false)
            },
            timeChange(time,type) {//默认获取的时间是时间戳改成我们常见的时间格式
                var minute = time / 60;
                var minutes = parseInt(minute);
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                //秒
                var second = time % 60;
                var seconds = parseInt(second);
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                var allTime = "" + minutes + "" + ":" + "" + seconds + "";
                console.log(allTime,6666)
                if(type=='allTime'){
                    this.allTime=allTime;
                }else {
                    this.currentTime=allTime;
                }

            },
            playMusic(){
                var music = this.$refs.music;
                if(this.flag){
                    music.play();
                    setInterval(()=>{
                        var currentTime = music.currentTime;
                        this.timeChange(currentTime,'currentTime');
                    },1000)
                    this.$set(this.$data,'flag',false)
                }else {
                    music.pause();
                    this.$set(this.$data,'flag',true)
                }
            },
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
        right: 0;
        top: 88px;
        bottom:100px;

    }
    .step {
        padding-right: 5px;
        color: #3CC51F;
        box-sizing: border-box;
        font-size: 16px;/*no*/
    }
    .weui-cells{
        margin-top: 0;
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
    .answerList{
        padding: 20px;
        box-sizing: border-box;
        background: white;
        border-bottom: 1px solid gainsboro;
        margin-top: 30px;
    }
    .patAnswer{
        display: flex;
        align-items: center;

    }
    .docImg{
        img{
            display: inline-block;
            width: 80px;
            height: 80px;
            border-radius: 40px;
            margin: 0 20px 0 0;

        }
    }
    .patMusic{
        position: relative;
        margin-left: 80px;
        margin-top: 20px;
        width: 400px;
        height: 80px;
        img{
            display: inline-block;
            width: 400px;
            height: 80px;
        }
    }
    #music{
        display: none;
    }
    .musicDate{
        color: white;
        position: absolute;
        top:0;
        right: 30px;
        height: 80px;
        line-height: 80px;
    }
    .musicImg{
        position: absolute;
        top:12px;
        left: 30px;
        height: 80px;
        line-height: 80px;
        img{
            height: 48px;
            width: 40px;
        }
    }


.bottom{
    height: auto;
    position: fixed;
    width: 100%;
    z-index: 998;
    left: 0;
    bottom: 0;
    background: white;
}
    .mr10 {
        margin-right: 20px;
        width: 100%;
    }
    .audioInput{
        margin-right: 20px;
        width: 100%;
        text-align: center;
        border: 1px solid gainsboro;
        padding: 8px 10px;
        line-height: 42px;
        background: white;
        box-shadow: inset 0 0 18px #ddd;
    }
    .yk-cell {
        display: flex;
        align-items: center;
    }
    .yk-box {
        padding: 20px 30px
    }
    .robot-room-wirte {
        background: #eee;
        box-sizing: border-box;
        border-top: 1px solid #dedede;
    }
    .talkImg{
        width: 60px;
        height: 60px;
        margin-right: 15px;
        img{
            display: inline-block;
            width: 60px;
            height: 60px;
            margin-right: 15px;
        }
    }
    .robot-room-wirte .input-text {
        display: block;
        border: none;
        outline: none;
        width: 100%;
        border: 1px solid #ddd;
        box-shadow: inset 0 0 18px #ddd;
        border-radius: 6px;
        resize: none;
        background: #fff;
        word-break: break-all;
        max-height: 180px;
        overflow-y: scroll;
        box-sizing: border-box;
        padding: 8px 10px;
        line-height: 42px;
        font-size: 28px;
    }
    .robot-room-wirte .input-text::-webkit-scrollbar {
        /*width: 0;*/
        /*opacity: 0;*/
        display: none;
    }
    .robot-room-wirte .showJia{
        width: 64px;
        height: 64px;
        line-height: 54px;
        box-sizing: border-box;
        text-align: center;
        text-decoration: none;
        border-radius: 32px;
        color: #454545;
        display: block;
        font-size: 32px;
        min-width: 64px;
        max-width: 64px;
        background: white;
        border: 1px solid #ddd;
        outline: none;

    }
    .robot-room-wirte .send-btn {
        width: 76px;
        height: 64px;
        line-height: 64px;
        box-sizing: border-box;
        background: greenyellow;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-appearance: none;
        text-align: center;
        text-decoration: none;
        border-radius: 10px;
        color: #454545;
        display: block;
        font-size: 28px;
        min-width: 100px;
        max-width: 100px;
        background: greenyellow;
        border: 1px solid #ddd;
        box-sizing: border-box;
        outline: none;
        align-self: flex-end
    }
    .robot-room-wirte .send-btn:active {
        opacity: 0.6;
    }

    .checkList{
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 20px 40px;
    }
    .upload{
        display: flex;
        align-items: center;
    }
    #upload_img{
        display: none;
    }
    .label_img{
        width: 100px;
        height: 100px;
        border-radius: 10px;
        line-height: 100px;
        text-align: center;
        border: 1px solid darkgray;
    }




</style>
