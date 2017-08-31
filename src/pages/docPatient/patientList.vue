<template>
    <div class="page">
        <top>
            <div class="middle big">患者管理</div>
        </top>
        <div ref="wrapper" class="wrap">
            <div class="newApply">
                <div ref="applyPat">
                    <div class="weui-cells">
                        <a @click="applyDetail" class="weui-cell weui-cell_access" href="javascript:;">
                            <div class="weui-cell__hd"><img src="../../../static/img/zz.jpg" alt="" style="width:20px;margin-right:5px;display:block"></div>
                            <div class="weui-cell__bd">
                                <p class="bf">新的签约申请</p>
                            </div>
                            <div class="weui-cell__ft"> <span class="weui-badge" style="margin-left: 5px;">8</span>
                            </div>
                        </a>
                    </div>
                    <div class="newPatient">
                        签约患者
                    </div>
                    <div class="weui-cells" >
                        <a  @click="patDetail" class="weui-cell weui-cell_access" href="javascript:;" v-for="item of 3">
                            <div class="weui-cell__hd"><img src="../../../static/img/test.jpg" alt="" style="width:20px;margin-right:5px;display:block"></div>
                            <div class="weui-cell__bd">
                                <p>
                                    <span class="bf">李冰</span>
                                    <span class="mfc">男 27</span>
                                </p>
                            </div>
                        </a>
                        <a  @click="patDetail" class="weui-cell weui-cell_access" href="javascript:;" v-for="item of 1">
                            <div class="weui-cell__hd"><img src="../../../static/img/zz.jpg" alt="" style="width:20px;margin-right:5px;display:block"></div>
                            <div class="weui-cell__bd">
                                <p>
                                    <span class="bf">李慕梓</span>
                                    <span class="mfc">女 17</span>
                                </p>
                            </div>
                        </a>
                        <a  @click="patDetail" class="weui-cell weui-cell_access" href="javascript:;" v-for="item of 1">
                            <div class="weui-cell__hd"><img src="../../../static/img/test.jpg" alt="" style="width:20px;margin-right:5px;display:block"></div>
                            <div class="weui-cell__bd">
                                <p>
                                    <span class="bf">李慕梓</span>
                                    <span class="mfc">女 17</span>
                                    &nbsp; &nbsp;
                                    <span class="sf" style="color: red">即将到期</span>
                                </p>
                            </div>
                        </a>

                    </div>
                </div>

                <div v-for="item of list">
                    <div class="newPatient">
                       {{item.name}}
                    </div>
                    <div class="weui-cells" >
                        <a ref="patDetails"  v-for="name of item.cities" class="weui-cell weui-cell_access" href="javascript:;">
                            <div class="weui-cell__hd"><img src="../../../static/img/zz.jpg" alt="" style="width:20px;margin-right:5px;display:block"></div>
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
                        </a>
                    </div>
                </div>

            </div>

        </div>
        <div class="bars" ref="bar">
            <li v-for="item of barList" style="padding: 0;margin: 0;font-size: 14px">{{item}}</li>
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
                anchorMap:{},
                nameList:[],
                barList:[],
                list:[
                    {
                        name: "A",
                        cities: [
                            {
                                name: "艾文静",
                                tags: "ANSHAN,鞍山市",
                                cityid: 64
                            }, {
                                name: "艾文静",
                                tags: "ANSHAN,鞍山市",
                                cityid: 64,
                                sign:'签约',
                            }, {
                                name: "艾文静",
                                tags: "ANSHAN,鞍山市",
                                cityid: 64,
                                sign:'签约',
                                date:'即将到期'
                            }, {
                                name: "艾文静",
                                tags: "ANSHAN,鞍山市",
                                cityid: 64
                            }
                        ]
                    },
                    {
                        name: "B",
                        cities: [
                            {
                                name: "贝林峰",
                                tags: "BEIJING,北京市",
                                cityid: 1,
                                sign:'签约',
                            }, {
                                name: "贝林峰",
                                tags: "BEIJING,北京市",
                                cityid: 1,
                            }, {
                                name: "贝林峰",
                                tags: "BEIJING,北京市",
                                cityid: 1,
                                sign:'签约',
                            }, {
                                name: "贝林峰",
                                tags: "BEIJING,北京市",
                                cityid: 1,
                            }
                        ]
                    },
                    {
                        name: "C",
                        cities: [
                            {
                                name: "成晨光",
                                tags: "CHENGDU,成都市",
                                cityid: 17,
                                sign:'签约',
                            }, {
                                name: "成晨光",
                                tags: "CHENGDU,成都市",
                                cityid: 17,
                                sign:'签约',
                                date:'即将到期'
                            }, {
                                name: "成晨光",
                                tags: "CHENGDU,成都市",
                                cityid: 17,

                            }, {
                                name: "成晨光",
                                tags: "CHENGDU,成都市",
                                cityid: 17,
                                sign:'签约',
                            }, {
                                name: "成晨光",
                                tags: "CHENGDU,成都市",
                                cityid: 17,
                                sign:'签约',
                                date:'即将到期'
                            },

                        ]
                    },

                    {
                        name: "E",
                        cities: [
                            {
                                name: "娥常月",
                                tags: "EERDUOSI,鄂尔多斯市",
                                cityid: 43
                            }
                        ]
                    },

                    {
                        name: "G",
                        cities: [
                            {
                                name: "光广元",
                                tags: "GUANGZHOU,广州市",
                                cityid: 3
                            }, {
                                name: "光广元",
                                tags: "GUANGZHOU,广州市",
                                cityid: 3
                            }, {
                                name: "光广元",
                                tags: "GUANGZHOU,广州市",
                                cityid: 3
                            },
                        ]
                    },
                    {
                        name: "H",
                        cities: [
                            {
                                name: "华省峰",
                                tags: "HANGZHOU,杭州市",
                                cityid: 5
                            },  {
                                name: "华省峰",
                                tags: "HANGZHOU,杭州市",
                                cityid: 5
                            },
                        ]
                    },

                    {
                        name: "K",
                        cities: [
                            {
                                name: "凯文金",
                                tags: "KUNMING,昆明市",
                                cityid: 19
                            },  {
                                name: "凯文金",
                                tags: "KUNMING,昆明市",
                                cityid: 19
                            },  {
                                name: "凯文金",
                                tags: "KUNMING,昆明市",
                                cityid: 19
                            },  {
                                name: "凯文金",
                                tags: "KUNMING,昆明市",
                                cityid: 19
                            },

                        ]
                    },
                    {
                        name: "L",
                        cities: [
                            {
                                name: "李青琳",
                                tags: "LUOYANG,洛阳市",
                                cityid: 27
                            }, {
                                name: "李青琳",
                                tags: "LUOYANG,洛阳市",
                                cityid: 27
                            }, {
                                name: "李青琳",
                                tags: "LUOYANG,洛阳市",
                                cityid: 27
                            }, {
                                name: "李青琳",
                                tags: "LUOYANG,洛阳市",
                                cityid: 27
                            },

                        ]
                    },


                    {
                        name: "P",
                        cities: [
                            {
                                name: "萍水缘",
                                tags: "PINGDINGSHAN,平顶山市",
                                cityid: 103
                            }, {
                                name: "萍水缘",
                                tags: "PINGDINGSHAN,平顶山市",
                                cityid: 103
                            },
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
                        name: "S",
                        cities: [
                            {
                                name: "孙亚兵",
                                tags: "SHENZHEN,深圳市",
                                cityid: 2
                            }, {
                                name: "孙亚兵",
                                tags: "SHENZHEN,深圳市",
                                cityid: 2
                            }, {
                                name: "孙亚兵",
                                tags: "SHENZHEN,深圳市",
                                cityid: 2
                            },
                        ]
                    },
                    {
                        name: "W",
                        cities: [
                            {
                                name: "魏静静",
                                tags: "WUHAN,武汉市",
                                cityid: 6
                            },   {
                                name: "魏静静",
                                tags: "WUHAN,武汉市",
                                cityid: 6
                            },

                        ]
                    },

                    {
                        name: "Y",
                        cities: [
                            {
                                name: "应无声",
                                tags: "YANTAI,烟台市",
                                cityid: 29
                            }
                        ]
                    },
                    {
                        name: "Z",
                        cities: [
                            {
                                name: "张晓飞",
                                tags: "ZHENGZHOU,郑州市",
                                cityid: 9
                            },  {
                                name: "张晓飞",
                                tags: "ZHENGZHOU,郑州市",
                                cityid: 9
                            },  {
                                name: "张晓飞",
                                tags: "ZHENGZHOU,郑州市",
                                cityid: 9
                            },

                        ]
                    }
                ]
            }
        },
        mounted(){
//            let arr=[],py=[];
//            this.data.forEach((city)=>{
//                let f=pinyin.convertToPinyin(city.name.substr(0,1))
//                let p=f.substr(0,1);
////                city.pinyin=p;
//                if(py.indexOf(p)<0){
//                    py.push(p)
//                    arr.push({
//                        pinyin:p,
//                        data:[city]
//                    })
//                }else{
//                    arr[py.indexOf(p)].data.push(city)
//                }
//            })
//            arr.sort((a,b)=>{
//                return a.pinyin<b.pinyin?-1:1
//            })
//            console.log(arr)

        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType: 3,
            click:true
        })
//        this.list.forEach((item)=>{
//            this.barList.push(item.name)
//        });
//            console.log(this.barList)

                this.initShortCut()
                this.bindEvent()


        },

        methods:{
            patDetail(){
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
                setTimeout(()=>{
                    this.$refs.bar.style.top = (this.$refs.wrapper.clientHeight - this.$refs.bar.clientHeight) / 2+44 + 'px';
                },50)


                },
            bindEvent() {
                    var touch = {};
                    var firstTouch;
                var self = this;
                    this.$refs.bar.addEventListener('touchstart', function (e) {
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
    .weui-cell__hd{
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }



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
