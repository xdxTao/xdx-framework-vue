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

        <el-submenu v-for="(item,i) in menus" :key="i" :index="item.menuAddr">
          <template slot="title">
            <i :class="item.menuImg" />
            <span>{{ item.menuName }}</span>
          </template>
          <el-menu-item-group>
            <router-link v-for="(iten,j) in item.lists" :key="j" :to="iten.menuAddr">
              <el-menu-item :index="iten.menuAddr">{{ iten.menuName }}</el-menu-item>
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
        <div class="right">
          <el-popover
            placement="bottom"
            width="80"
            trigger="click"
          >
            <div>
              <div class="user-box">
                首页
              </div>
              <div class="user-box">
                个人信息
              </div>
              <div class="user-box" @click="loginOut">
                退出登录
              </div>
            </div>
            <div slot="reference" class="userImg">
              <img src="https://s2.ax1x.com/2020/02/26/3aZoa8.png">
            </div>
          </el-popover>

        </div>
      </div>
      <div class="bottom">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

import { menuList } from '@/api/authority'
import { loginOut } from '@/api/usermgmt'
import { removeToken } from '@/utils/auth'
export default {
    data() {
        return {
            isCollapse: false,
            menus: []
        }
    },
    created() {
        this.getList()
    },
    methods: {
        handleOpen(key, keyPath) {

        },
        handleClose(key, keyPath) {

        },
        // 获取菜单列表数据
        getList() {
            const param = {
                flag: 2
            }
            menuList(param).then(resp => {
                this.menus = resp.data
            })
        },
        // 退出登录
        loginOut() {
            loginOut().then(resp => {
                removeToken()
                window.location.href = '/login'
            })
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
					// 头像部分
					.userImg{
						width: 35px;
						height: 35px;
						float: right;
						margin-right: 20px;
						border-radius: 100px;
						margin-top: 5px;
						img{
							width: 35px;
							height: 35px;

						}
					}
					.userImg:hover{
						cursor: pointer;
					}
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
	.el-popover{
		min-width: 80px !important;
	}
	.user-box{
		height: 30px;
		line-height: 30px;
		text-align: center;
	}
	.user-box:hover{
		cursor: pointer;
		border-bottom: 1px gainsboro solid;
		border-top: 1px gainsboro solid;
	}
</style>
