<template>
    <div>
        <top>
            <div class="middle big">账户相关</div>
        </top>
      <div class="wrap">
        <div>
          <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;" @click="goChangePhone">
              <div class="weui-cell__bd">
                <p class="bf">修改绑定手机号</p>
              </div>
              <div class="weui-cell__ft">
              </div>
            </a>
            <a class="weui-cell weui-cell_access" href="javascript:;" @click="changePassword">
              <div class="weui-cell__bd">
                <p class="bf">修改密码</p>
              </div>
              <div class="weui-cell__ft">
              </div>
            </a>

          </div>
        </div>
        <div class="btn" @click="quit">
          <a style="background: rgb(48, 207, 208);" href="javascript:;" class="weui-btn weui-btn_primary">退出登录</a>
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

            }
        },
        mounted(){

        },
      methods:{

          quit(){
              this.$router.push({
                  name:"myPatient"
              })
          }

      }
    }
</script>
<style scoped lang="scss">
  @import '../../common/public.scss';
.btn{
  box-sizing: border-box;
  text-align: center;
  margin: 142px auto 0 auto;
  width: 670px;
}
  .weui-cells{
    margin-top: 0px;
  }
  .weui-btn_primary{
    background: #0aace9;
  }
</style>
