<template>
    <div style="height: 100%">
        <top >
            <span slot="left" @click="over">&#xe600;</span>
            <div class="middle big">群发消息</div>
            <!--<span slot="right" class="step" @click="detail">患者详情</span>-->
        </top>
        <div style="height: 100%;">
            <chat-one></chat-one>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import chatOne from '../../components/chatOne.vue'
    export default{
        components: {
            top,
            chatOne
        },
        data(){
            return {}
        },
        mounted(){

        },
        methods:{
            over(){
                this.$router.push({
                    name:'myPatient'
                })
            },
            detail(){
                this.$router.push({
                    name:'patDetail'
                })
            }
        }
    }
</script>
<style  lang='scss'>
    @import '../../common/public.scss';

    .step {
        padding-right: 5px;
        color: #3CC51F;
        box-sizing: border-box;
    }
</style>
