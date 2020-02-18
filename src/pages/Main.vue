<!-- 主页面 -->
<template>
  <div class="main">
    <div :class="isCollapse == false ? 'left left_width_1' : 'left left_width_2'">
      <el-menu
        :class="isCollapse == false ? 'left_width_1' : 'left_width_2'"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :collapse-transition="false"
        text-color="#fff"
        active-text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <router-link to="/">
          <el-menu-item index="1">
            <i class="el-icon-s-home" />
            <span slot="title">首页</span>
          </el-menu-item>
        </router-link>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user-solid" />
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/userlist">
              <el-menu-item index="2-1">用户列表</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-tools" />
            <span slot="title">工具测试</span>
          </template>
          <el-menu-item-group>
            <router-link to="/pay/payment">
              <el-menu-item index="3-1">支付测试</el-menu-item>
            </router-link>
            <router-link to="/">
              <el-menu-item index="3-2">邮件测试</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right">
      <div class="top">
        <div class="left">
          <div class="switch">
            <i v-if="isCollapse" class="el-icon-s-unfold" @click="isCollapse = !isCollapse" />
            <i v-else class="el-icon-s-fold" @click="isCollapse = !isCollapse" />
          </div>

        </div>
        <div class="right" />
      </div>
      <div class="bottom">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        handleOpen(key, keyPath) {

        },
        handleClose(key, keyPath) {

        }
    }
}
</script>
<style lang="scss" scoped>
    .main{
		a{
			text-decoration: none;
		}
        .left_width_1{
            width: 210px;
             background: linear-gradient(to right, #536976, #292e49);
        }
        .left_width_2{
            width: 65px;
              background: linear-gradient(to right, #536976, #292e49);
        }
        .left {
            float: left;
            height: 100vh;
        }
        .right{
            overflow:hidden;
            .top{
                width: 100%;
                border-bottom: 1px gainsboro solid;
                height: 45px;
                display: flex;
                justify-content: flex-start;
                .left{
                    width: 50%;
                    height: 45px;
                    .switch{
                        width: 25px;
                        margin-left: 10px;
                        line-height: 50px;
                        i{
                            font-size: 25px;
                        }
                        i:hover{
                            cursor: pointer;
                        }
                    }
                }
                .right{
                    width: 50%;
                    height: 45px;
                    border-left: 1px blue solid;
                }
            }
            .bottom{
                // height: 200px;
                margin-top: 10px;
                width: 99%;
                margin-left: 0.5%;
                margin-right: 0.5%;
                // border: 1px red solid;
            }

        }
    }

</style>

<style>
    .el-menu-vertical-demo{
        background: linear-gradient(to right, #536976, #292e49);
        width: 210px;
        width: 65px;
    }
    .el-menu--inline{
        background: #292e49;
    }
    .el-menu--vertical{
        background: linear-gradient(to right, #536976, #292e49);
    }
    .el-menu{
        background: linear-gradient(to right, #536976, #292e49);
    }
    .is-active{
        background: #292e49;
    }
    .el-menu-item:hover {
        outline: none;
        background-color: #292e49 !important;
    }
    .el-menu-item:focus {
        outline: none;
        background-color: #292e49 !important;
    }

    .el-submenu__title:hover {
        outline: none;
        background-color: #292e49 !important;
    }
    .el-submenu__title:focus {
        outline: none;
        background-color: #292e49 !important;
    }

</style>
