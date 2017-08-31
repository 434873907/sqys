<template>
    <div>
        <top>
            <div class="middle big">我的</div>
        </top>
        <div>
            <div class="weui-cells">
                <a @click="myMsg" class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img class="titleImg" src="../../../static/img/2.png" alt="" style="display:block"></div>
                    <div class="weui-cell__bd">
                        <p>
                            <span class="bf">丁克峰</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span class="mfc">主治医师</span>
                        </p>
                        <p>
                            <span class="mfc">景城花园社区服务中心</span>
                        </p>
                        <p>
                            <span class="mfc">全科医生</span>
                        </p>
                    </div>
                    <div class="weui-cell__ft bfc"></div>
                </a>
            </div>
            <div class="weui-cells setMargin">
                <a @click="goService" class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    &nbsp; &nbsp;
                    <div class="weui-cell__bd">
                        <p class="bf">签约服务包</p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </a>
            </div>
            <div class="weui-cells setMargin">
                <a @click="goDocCard" class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    &nbsp; &nbsp;
                    <div class="weui-cell__bd">
                        <p class="bf">我的名片</p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </a>
                <a @click="docArticle" class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    &nbsp; &nbsp;
                    <div class="weui-cell__bd">
                        <p class="bf">我的文章</p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </a>
                <a @click="goSign" class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    &nbsp; &nbsp;
                    <div class="weui-cell__bd">
                        <p class="bf">签约信息</p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </a>
            </div>
            <div class="weui-cells setMargin">
                <a @click="accountAbout"  class="weui-cell weui-cell_access" href="javascript:;">
                    <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width:20px;margin-right:5px;display:block"></div>
                    &nbsp; &nbsp;
                    <div class="weui-cell__bd">
                        <p class="bf">账户相关</p>
                    </div>
                    <div class="weui-cell__ft"></div>
                </a>
            </div>

        </div>
        <footers index="3"></footers>
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
            return {}
        },
        mounted(){

        },
        methods:{
            goSign(){
                this.$router.push({
                    name:'signDetail'
                })
            },
            docArticle(){
                this.$router.push({
                    name:'docArticle'
                })
            },
            accountAbout(){
                this.$router.push({
                    name:'accountAbout'
                })
            },
            myMsg(){
                this.$router.push({
                    name:'myMsg'
                })
            },
            goDocCard(){
                this.$router.push({
                    name:'docCard'
                })
            },
            goService(){
                this.$router.push({
                    name:'serviceHistory'
                })
            }
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
    .titleImg{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin-right: 40px;
    }
    .weui-cells{
        margin-top: 0;
        border-bottom: 1px solid gainsboro;
    }
    .setMargin{
        margin-top: 20px;
    }
</style>
