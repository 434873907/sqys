<template>
    <div class="page">
        <top>
            <div class="middle big">登记服务</div>
            <div slot="right" style="color: blue" @click="save">保存</div>
        </top>
        <div class="wrapper" ref="wrap">
            <div>
                <div class="weui-cells textMargin">
                    <a @click="getServiceObj" class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p class="bf">服务对象</p>
                        </div>
                        <div class="weui-cell__ft bfc">
                            {{obj?obj:'请选择'}}
                        </div>
                    </a>
                    <a @click="getPat" class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p class="bf">服务类型</p>
                        </div>
                        <div class="weui-cell__ft bfc">
                            {{pat?pat:'请选择'}}
                        </div>
                    </a>
                </div>
                <div class="weui-cells textMargin">
                    <a @click="getDate" class="weui-cell weui-cell_access" href="javascript:;">
                        <div class="weui-cell__bd">
                            <p class="bf">开始时间</p>
                        </div>
                        <div class="weui-cell__ft bfc">
                            {{date?date:'请选择'}}
                        </div>
                    </a>
                    <div class="weui-cell" @click="showMaps">
                        <div class="weui-cell__bd">
                            <p>
                                <span class="bf">定位</span>&nbsp;&nbsp;&nbsp;
                                <span class="mfc">{{msg}}</span>
                            </p>
                        </div>
                        <div class="weui-cell__ft bf"></div>
                    </div>
                </div>
                <upload></upload>
            </div>

        </div>
        <map-position :showMap="showMap" @getMsg="getMsg"></map-position>

    </div>
</template>

<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import BScroll from 'better-scroll'
    import mapPosition from '../../components/map.vue'
    import upload from '../../components/upload.vue'
    export default{
        components: {
            top,
            mapPosition,
            upload
        },
        data(){
            return {
                showMap:false,
                msg:"",
                obj:'',
                pat:'',
                date:""
            }
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrap,{
                click:true,
                bounce:true
            });

        },
        methods:{
            save(){
              this.$weui.alert('保存成功');
                this.$router.push({
                    name:'myDetail'
                })
            },
            showMaps(){
                this.$set(this.$data,'showMap',true)
            },
            getMsg(value){
                this.$set(this.$data,'msg',value)
                this.$set(this.$data,'showMap',false)
            },
            getServiceObj(){
                var self = this;
                this.$weui.picker([
                    {
                        label: '李云飞',
                        value: 1
                    },
                    {
                        label: '兰凯',
                        value: 3
                    },
                    {
                        label: '罗佳廷',
                        value: 4,
                    }
                ], {

                    onConfirm: function (result) {
                        console.log(result,88888);
                        self.$set(self.$data,'obj',result[0].label)
                    },
                });
            },
            getPat(){
                var self = this;
                this.$weui.picker([
                    {
                        label: '上门服务',
                        value: 5
                    },
                    {
                        label: '电话咨询',
                        value: 6
                    },
                    {
                        label: '图文咨询',
                        value: 7
                    }
                ], {

                    onConfirm: function (result) {
                        console.log(result,88888);
                        self.$set(self.$data,'pat',result[0].label)
                    },
                });
            },
            getDate(){
                var self = this;
                this.$weui.datePicker({
                    start: 2015,
                    end: 2020,
                    defaultValue: [2017, 8, 19],
                    onConfirm: function(result){
                        var date = result[0].label+result[1].label+result[2].label;
                        self.$set(self.$data,'date',date)
                    }

                });
            }
        },
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
        bottom:0
    }
    .titleImg{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin-right: 40px;
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
        margin-left: 20px;
    }
    .weui-cells{
        margin-top: 0;
    }
    .textMargin{
        margin-top: 20px;
    }


</style>
