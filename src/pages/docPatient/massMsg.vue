<template>
    <div class="page">
        <top>
            <div class="middle big">患者管理</div>
            <!--<span slot="right" class="step" @click="over" style="color: #3CC51F">确定</span>-->
        </top>
        <div ref="wrapper" class="wrap">

            <div  class="newApply">
                <div v-for="item of list">
                    <div class="newPatient">
                        {{item.name}}
                    </div>

                    <div class="weui-cells weui-cells_checkbox">
                        <label   ref="patDetails"  v-for="(name,index) of item.cities" class="weui-cell weui-check__label" :for="name.name">
                            <div class="weui-cell__hd">
                                <input type="checkbox" @change="change" ref="items" class="weui-check " :name="name" :id="name.name"/>
                                <i class="weui-icon-checked" ></i>
                            </div>
                            <div class="weui-cell__bd">
                                <p>
                                    <span class="bf">{{name.name}}</span>
                                    &nbsp; &nbsp;
                                    <span class="mfc">男 27</span>
                                    &nbsp; &nbsp;
                                    <span v-show="name.sign"  class="sign sf">{{name.sign}}</span>
                                    &nbsp; &nbsp;
                                    <span v-show="name.date" class="sf" style="color: red">{{name.date}}</span>
                                </p>
                            </div>
                        </label>

                    </div>

                </div>

            </div>

        </div>
        <div class="bars" ref="bar">
            <li v-for="item of barList" style="padding: 0;margin: 0;font-size: 14px">{{item}}</li>
        </div>
        <div class="btn" >
            <div class="weui-cells weui-cells_checkbox">
                <label class="weui-cell weui-check__label" for="s11">
                    <div class="weui-cell__hd">
                        <input type="checkbox" v-model="test" class="weui-check" @change="getAll" ref="all" name="checkbox1" id="s11" checked="checked"/>
                        <i class="weui-icon-checked"></i>
                    </div>
                    <div class="weui-cell__bd">
                        <span class="bfc" style="margin-left: 60px">已选{{this.num}}人</span>
                        <span @click="over" style="color: #3CC51F;display: inline-block;float: right;padding-right: 30px">确定</span>
                    </div>
                </label>
            </div>


        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import pinyin from 'tiny-pinyin'
    import BScroll from 'better-scroll'
    export default{
        components: {
            top
        },
        data(){
            return {
                test:true,
                flag:"",
                num:0,
                anchorMap:{},
                nameList:[],
                barList:[],
                arr:[],
                list:[
                    {
                        name: "A",
                        cities: [
                            {
                                name: "艾文静",
                                tags: "ANSHAN,鞍山市",
                                cityid: 1111
                            }, {
                                name: "艾文采",
                                tags: "ANSHAN,鞍山市",
                                cityid: 1112,
                                sign:'签约',
                            }, {
                                name: "艾文乐",
                                tags: "ANSHAN,鞍山市",
                                cityid: 1164,
                                sign:'签约',
                                date:'即将到期'
                            }, {
                                name: "艾文飞",
                                tags: "ANSHAN,鞍山市",
                                cityid: 1113
                            }
                        ]
                    },
                    {
                        name: "B",
                        cities: [
                            {
                                name: "贝林峰",
                                tags: "BEIJING,北京市",
                                cityid: 1114,
                                sign:'签约',
                            }, {
                                name: "贝林月",
                                tags: "BEIJING,北京市",
                                cityid: 1115,
                            }, {
                                name: "贝林林",
                                tags: "BEIJING,北京市",
                                cityid: 1116,
                                sign:'签约',
                            }, {
                                name: "贝林山",
                                tags: "BEIJING,北京市",
                                cityid: 1117,
                            }
                        ]
                    },
                    {
                        name: "C",
                        cities: [
                            {
                                name: "成晨光",
                                tags: "CHENGDU,成都市",
                                cityid: 1118,
                                sign:'签约',
                            }, {
                                name: "成晨熙",
                                tags: "CHENGDU,成都市",
                                cityid: 1119,
                                sign:'签约',
                                date:'即将到期'
                            }, {
                                name: "成晨阳",
                                tags: "CHENGDU,成都市",
                                cityid: 1110,

                            }, {
                                name: "成晨飞",
                                tags: "CHENGDU,成都市",
                                cityid: 1211,
                                sign:'签约',
                            }, {
                                name: "成晨早",
                                tags: "CHENGDU,成都市",
                                cityid: 1212,
                                sign:'签约',
                                date:'即将到期'
                            },

                        ]
                    },

                    {
                        name: "P",
                        cities: [
                            {
                                name: "潘小玉",
                                tags: "PINGDINGSHAN,平顶山市",
                                cityid: 103
                            }
                        ]
                    },
                    {
                        name: "Q",
                        cities: [
                            {
                                name: "青琳",
                                tags: "QINGDAO,青岛市",
                                cityid: 13
                            }
                        ]
                    },
                    {
                        name: "R",
                        cities: [
                            {
                                name: "阮一峰",
                                tags: "RIZHAO,日照市",
                                cityid: 167
                            }

                        ]
                    },

                    {
                        name: "T",
                        cities: [
                            {
                                name: "涂飞",
                                tags: "TIANJIN,天津市",
                                cityid: 7
                            }
                        ]
                    },
                    {
                        name: "W",
                        cities: [
                            {
                                name: "王小亚",
                                tags: "WUHAN,武汉市",
                                cityid: 6
                            },
                            {
                                name: "王子轩",
                                tags: "WEIHAI,威海市",
                                cityid: 42
                            }
                        ]
                    },
                    {
                        name: "X",
                        cities: [
                            {
                                name: "薛为浙",
                                tags: "XIAN,西安市",
                                cityid: 10
                            }
                        ]
                    },
                    {
                        name: "Y",
                        cities: [
                            {
                                name: "元尘",
                                tags: "YANTAI,烟台市",
                                cityid: 29
                            }
                        ]
                    },
                    {
                        name: "Z",
                        cities: [
                            {
                                name: "钟华妍",
                                tags: "ZHENGZHOU,郑州市",
                                cityid: 9
                            },
                            {
                                name: "张晓飞",
                                tags: "ZHANJIANG,湛江市",
                                cityid: 159
                            }
                        ]
                    }
                ]
            }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrapper,{
                probeType: 3,
                click:true
            });
            this.initShortCut();
            this.bindEvent();
            setTimeout(()=>{
                var lists = this.$refs.items;
                for(var i=0;i<lists.length;i++){
                    lists[i].checked = true;
                }
                this.num = lists.length;
            },50)
        },

        methods:{
            getAll(){
                var lists = this.$refs.items;

                console.log(this.$refs.all,99999)
              if(this.$refs.all.checked){
                  for(var i=0;i<lists.length;i++){
                     lists[i].checked = true;
                  }
                  this.num = lists.length;
              }else {
                  console.log(212121)
                  for(var i=0;i<lists.length;i++){
                      lists[i].checked = false;
                  }
                  this.num = 0;
              }

            },
            change(){
               this.num=0
                var lists = this.$refs.items;
                for(var i=0;i<lists.length;i++){
                    if(lists[i].checked){
                        this.num++;
                    }
                }

              console.log(this.num,66666)
            },

            over(){
              this.$router.push({
                  name:'sendMass'
              })
            },
            patDetail(){
                console.log(21212)
                this.$router.push({
                    name:'patDetail'
                })
            },
            initShortCut() {
                var y = 0;
                var titleHeight = 37;
                var itemHeight = this.$refs.patDetails[0].offsetHeight;
                this.list.forEach((group)=> {
                    var name = group.name.substr(0, 1);
                    var len = group.cities.length;

                    this.barList.push(name);
                    this.anchorMap[name] = y;
                    y -= titleHeight + len * itemHeight;
                });
                console.log(this.anchorMap,99999)
                setTimeout(()=>{
                    this.$refs.bar.style.top = (this.$refs.wrapper.clientHeight - this.$refs.bar.clientHeight) / 2+44 + 'px';
                },50)


            },
            bindEvent() {
                var touch = {};
                var firstTouch;
                var self = this;
                this.$refs.bar.addEventListener('touchstart', function (e) {
                    console.log(e.target.innerText,77777)
                    var anchor = e.target.innerText;
//                        firstTouch = e.touches[0];
//                        touch.y1 = firstTouch.pageY;

                    touch.anchor = anchor;
                    self.scrollTo(anchor);
                });
            },
            scrollTo(anchor) {
                var applyPatY = this.$refs.applyPat.scrollHeight;
                var maxScrollY = this.$refs.wrapper.clientHeight - this.$refs.bar.clientHeight;
                console.log(applyPatY,maxScrollY,this.anchorMap[anchor],5555)
                console.log(applyPatY,maxScrollY,this.anchorMap[anchor]-applyPatY,5555)
                var y = Math.min(0, Math.min(maxScrollY, this.anchorMap[anchor]-applyPatY));
                console.log(y)
                if (typeof y !== 'undefined') {
                    this.scroll.scrollTo(0, y);
                }
            },
            applyDetail(){
                this.$router.push({
                    name:'signApply'
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
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
    .btn{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 80px;
        background: white;
        line-height: 80px;
    }
    .page{
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
    }
    .wrap{
        position: fixed;
        left: 0;
        top: 88px;
        right: 0;
        bottom:0;
    }
    .bars{
        width: 40px;
        position: absolute;
        right: 0px;
        top: 0;
        /*height: 100%;*/
        /*background: yellowgreen;*/
    }
    .weui-cells{
        margin-top: 0;
    }
    .newPatient{
        font-size: 34px;
        color: blue;
        padding: 20px;
        box-sizing: border-box;
    }
</style>
