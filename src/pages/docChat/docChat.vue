<template>
    <div class="page">
        <top >
            <span slot="left" @click="over">&#xe600;</span>
            <div class="middle big">李冰</div>
            <span slot="right" class="step" @click="detail">患者详情</span>
        </top>
        <div class="wraps">
            <chat></chat>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import top from '../../components/app-header.vue'
    import chat from '../../components/chat.vue'
    export default{
        components: {
            top,
            chat
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
.page{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    flex: 1;
}
    .wraps{
        display: flex;
        flex: 1;
        overflow: scroll;
    }
    .step {
        padding-right: 5px;
        color: #3CC51F;
        box-sizing: border-box;
    }
</style>
