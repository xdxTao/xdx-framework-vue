<template>
  <div class="mian">
    <div class="top">
      <div class="left">
        <el-input v-model="search.userName" style="width:200px;" size="medium" placeholder="用户名 \ 电话" />
        <el-select v-model="search.roleId" :clearable="true" size="medium" placeholder="角色选择..." style="width:200px;margin-left:10px;">
          <el-option
            v-for="item in roles"
            :key="item.roleId"
            :label="item.roleName"
            :value="item.roleId"
          />
        </el-select>
        <el-button style="margin-left:20px;" size="medium" @click="getUserList">搜索</el-button>
      </div>
      <div class="right">
        <div class="add_user" @click="drawer = !drawer">添加用户</div>
      </div>
    </div>
    <div class="botton">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="headImgPath"
          label="头像"
          width="180"
        >
          <template slot-scope="scope">
            <img :src="scope.row.headImgPath">
          </template>
        </el-table-column>
        <el-table-column
          prop="userName"
          label="用户名"
          width="180"
        />
        <el-table-column
          prop="userPhone"
          label="电话"
          width="180"
        />
        <el-table-column
          prop="roleName"
          label="角色名"
        />
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <span class="edit" @click="openEdit(scope.row)">编辑</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 分页部分 -->
    <div class="pagination">
      <el-pagination
        :current-page.sync="search.page"
        layout="prev, pager, next"
        :total="total"
        @current-change="changePage"
      />
    </div>

    <!-- 添加/编辑 弹窗 -->
    <el-drawer
      :title="drawerTitke"
      :visible.sync="drawer"
      direction="rtl"
      :wrapper-closable="false"
      :before-close="handleClose"
      size="25%"
    >
      <div class="box">
        <div class="left">
          <span style="color:red;">*&nbsp;</span>
          <span>用户昵称：</span>
        </div>
        <div class="right">
          <el-input v-model="userData.userName" size="small" placeholder="" />
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span style="color:red;">*&nbsp;</span>
          <span>用户手机：</span>
        </div>
        <div class="right">
          <el-input v-model="userData.userPhone" size="small" placeholder="" />
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span style="color:red;">*&nbsp;</span>
          <span>用户角色：</span>
        </div>
        <div class="right">
          <el-select v-model="userData.roleId" size="small" placeholder="角色选择..." style="width:100%">
            <el-option
              v-for="item in roles"
              :key="item.roleId"
              :label="item.roleName"
              :value="item.roleId"
            />
          </el-select>
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span style="color:red;">*&nbsp;</span>
          <span>用户头像：</span>
        </div>
        <div class="right">
          <el-input v-model="userData.headImgPath" size="small" placeholder="" />
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span style="color:red;">*&nbsp;</span>
          <span>用户状态：</span>
        </div>
        <div class="right box_radio">
          <el-radio v-model="userData.userStatus" :label="1">启用</el-radio>
          <el-radio v-model="userData.userStatus" :label="2">停用</el-radio>
        </div>
      </div>
      <div class="submit">
        <el-button v-if="drawerTitke == '添加用户'" @click="userSave">添加</el-button>
        <el-button v-else @click="userUpdate">保存</el-button>
      </div>
    </el-drawer>

  </div>
</template>
<script>
import { userlist, userSave, userUpdate } from '@/api/usermgmt'
import { roleList } from '@/api/authority'
export default {
    data() {
        return {
            tableData: [],
            drawer: false,
            roles: [], // 角色列表
            drawerTitke: '添加用户',
            userData: {
                userName: '', 		// 用户名
                userPhone: '', 		// 手机号
                roleId: '', 		// 角色Id
                headImgPath: '', 	// 用户头像
                userStatus: '', 	// 用户状态
                userId: ''			// 用户ID编辑的时候用
            },
            search: {		// 条件搜索
                page: 1,	// 当前页
                userName: '', // 用户名/电话号码
                roleId: '' // 角色id
            },
            total: 1 		// 总条数
        }
    },
    created() {
        this.getUserList()
        this.getRoleList()
    },
    methods: {
        getUserList() {
            userlist(this.search).then(resp => {
                this.total = resp.total
                this.tableData = resp.data
            })
        },
        handleClose(done) {
            this.drawer = false
            this.userData = {
                userName: '',
                userPhone: '',
                roleId: '',
                headImgPath: '',
                userStatus: '',
                userId: ''
            }
        },
        userSave() {
            if (this.userData.userName === '' || this.userData.userPhone === '' || this.userData.roleId === '' ||
            this.userData.headImgPath === '' || this.userData.userStatus === '') {
                return this.$message.info('请完善信息!')
            }
            userSave(this.userData).then(resp => {
                if (resp.success === true) {
                    this.$message.success(resp.msg)
                    this.getUserList()
                    this.handleClose()
                }
            })
        },
        getRoleList() {
            roleList().then(resp => {
                if (resp.success === true) {
                    this.roles = resp.data
                }
            })
        },
        // 编辑
        openEdit(row) {
            this.userData = {
                userName: row.userName,
                userPhone: row.userPhone,
                roleId: row.roleId,
                headImgPath: row.headImgPath,
                userStatus: row.userStatus,
                userId: row.userId
            }
            this.drawer = true
            this.drawerTitke = '编辑用户'
        },
        // 更新用户
        userUpdate() {
            userUpdate(this.userData)
                .then(resp => {
                    if (resp.success === true) {
                        this.$message.success(resp.msg)
                        this.getUserList()
                        this.handleClose()
                    }
                })
        },
        // 换页
        changePage(page) {
            this.getUserList()
        }

    }
}

</script>

<style lang="scss" scoped>
    .mian{
        .top{
			height: 46px;
			// border: 1px red solid;
			border-bottom: 1px solid #EBEEF5;
			display: flex;
			justify-content: flex-end;
			.left{
				width: 80%;
				// border-right: 1px solid #EBEEF5;
			}
			.right{
				width: 20%;
				.add_user{
					width: 70px;
					height: 20xp;
					// border: 1px red solid;
					float: right;
					margin-top: 20px;
					margin-right: 10px;
					font-size: 15px;
					color: #536976;
				}
				.add_user:hover{
					cursor: pointer;
					color: #292e49;
				}
			}
        }
		.botton{

		}
		.box{
			height: 30px;
			display: flex;
			justify-content: flex-start;
			margin-top: 20px;
			.left{
				width: 95px;
				height: 25px;
				margin-top: 5px;
				// border: 1px red solid;
				padding-left: 30px;
			}
			.right{
				height: 30px;
				width: 65%;
				// border: 1px blue solid;
			}
		}
        .box_radio{
            height: 30px;
            width: 80%;
            margin-top: 5px;
        }
		.submit{
			margin-top: 30px;
			margin-left: 100px;
			button{
				background: linear-gradient(to right, #536976, #292e49);
				color: white;
			}
		}
		// 分页
		.pagination{
			display: flex;
			justify-content: flex-end;
			margin-top: 20px;
		}
    }

	.edit:hover{
		cursor: pointer;
		color: green;
	}
</style>
