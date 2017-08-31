<template>
    <div>
        <top>
            <div class="middle big">预约服务</div>
        </top>
        <div>
            <div class="weui-cells__title bf" style="padding-bottom: 0">申请服务</div>
            <div class="weui-cells" style="margin-top: 0">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p>
                            <span class="bf">上门服务</span>&nbsp;&nbsp;
                            <span class="mfc">共12次 剩8次</span>
                        </p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-cells__title bf" style="padding-bottom: 0">预约信息</div>
            <div class="weui-cells"  style="margin-top: 0">
                <a @click="selectDate" class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p class="bf">选择预约时间</p>
                    </div>
                    <div class="weui-cell__ft">{{msg}}</div>
                </a>
            </div>
            <div class="weui-cells" style="margin-top: 0">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p>
                            <span class="bf">备注</span>&nbsp;&nbsp;
                        </p>
                        <p>
                            <span class="mfc">
                                晚上吃什么好呢？今天发工资了，得好好奖励自己一下，虽然钱不多，但可以去小菜馆点几个菜和对象一起吃，她也好久没吃过好吃的了！
                            </span>
                        </p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="bottom">
                <div class="refuse" @click="refuse">
                    拒绝申请
                </div>
                <div class="agree" @click="arrangeService">
                    安排服务
                </div>
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
                msg:''
            }
        },
        mounted(){

        },
        methods:{
            refuse(){
              this.$weui.alert('拒绝成功');
                this.$router.push({
                    name:"myPatient"
                })
            },
            selectDate(){
                var self = this;
                this.$weui.datePicker({
                    start: 2015,
                    end: 2020,
                    defaultValue: [2017, 9, 6],
                    onConfirm: function(result){
                        console.log(result);
                        var date = result[0].label+result[1].label+result[2].label
                        self.$set(self.$data,'msg',date)
                    },
                });
            },
            arrangeService(){
                this.$router.push({
                    name:'arrangeService'
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
    .refuse{
        width: 50%;
        line-height: 90px;
        height: 90px;
        color: red;
        text-align: center;
        border-right: 1px solid gainsboro;
    }
    .bottom{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        display: flex;
        border-top: 1px solid gainsboro;
        border-bottom: 1px solid gainsboro;
    }
    .agree{
        width: 50%;
        line-height: 90px;
        height: 90px;
        color: green;
        text-align: center;
    }
</style>
