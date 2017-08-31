<template>
    <div>
        <top>
            <div class="middle big">安排服务</div>
        </top>
        <div>
            <div class="weui-cells__title mfc" style="padding-bottom: 0">请为患者安排服务时间</div>
            <div class="weui-cells"  style="margin-top: 0">
                <a @click="selectDate" class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__bd">
                        <p class="bf">选择预约时间</p>
                    </div>
                    <div class="weui-cell__ft">{{msg}}</div>
                </a>
            </div>
            <div class="weui-cells__title" style="padding-bottom: 0">备注</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea" placeholder="例如怎么服务，去哪里服务(可不填)" rows="3"></textarea>
                        <div class="weui-textarea-counter"><span>0</span>/200</div>
                    </div>
                </div>
            </div>
            <div class="btn" @click="arrangeDetail">
                <a href="javascript:;" class="weui-btn weui-btn_primary">确定安排</a>
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
                msg:""
            }
        },
        mounted(){

        },
        methods:{
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
            arrangeDetail(){
                this.$router.push({
                    name:'arrangeDetail'
                })
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '../../common/public.scss';
.btn{
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    margin-top: 200px;
}
</style>
