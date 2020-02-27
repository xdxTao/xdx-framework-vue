<!-- 权限管理 -->
<template>
  <div class="main">
    <div class="left">
      <div class="top">
        <el-input v-model="roleData.roleName" placeholder="请输入角色名..." size="small" />
        <div style="width:15px;" />
        <el-button v-if="roleAddEdit" type="primary" size="small" @click="addRole">添加</el-button>
        <el-button v-else type="primary" size="small" @click="editUpdate">保存</el-button>
      </div>
      <div v-for="(item,i) in roleLists" :key="i" :class="roleActive == i ? 'box box_active' : 'box'" @click="roleActiveFun(item.roleId,i)">
        <span>{{ item.roleName }}</span>
        <span v-if="roleActive == i" class="editRole" @click="editRole(item)">编辑</span>
      </div>
      <div class="save">
        <el-button type="primary" size="small" @click="saveAuthority">保存</el-button>
      </div>
    </div>
    <div class="right">

      <div v-for="(item,i) in checkList" :key="i" :class="i == 0 ? 'box_right' : 'box_right_2'">
        <el-divider content-position="left">{{ item.groupName }}</el-divider>
        <el-checkbox-group v-model="authority.selectList">
          <el-checkbox v-for="(iten,j) in item.menuNames" :key="j" :label="iten" />
        </el-checkbox-group>
      </div>

    </div>
  </div>
</template>
<script>
import { addRole, roleList, roleUpdate, authorityList, authoritySave, listByRoleId } from '@/api/authority'
export default {
    data() {
        return {
            roleData: {
                roleName: '' // 角色名
            },
            roleLists: [],
            roleActive: '', // 当前选中的权限
            roleAddEdit: true, // 当前是编辑还是保存
            checkList: [],
            authority: {
                roleId: '',
                selectList: []
            }
        }
    },
    created() {
        this.getRoleList()
        this.getAuthorityList()
    },
    methods: {
        addRole() {
            if (this.roleData.roleName === '') {
                return this.$message.error('请填写角色名')
            }
            addRole(this.roleData).then(resp => {
                this.$message.success(resp.msg)
                this.getRoleList()
                this.roleData.roleName = ''
            })
        },
        getRoleList() {
            roleList().then(resp => {
                this.roleLists = resp.data
                this.authority.roleId = this.roleLists[0].roleId
                this.getListByRoleId(this.authority.roleId)
            })
        },
        roleActiveFun(roleId, i) {
            this.authority.roleId = roleId
            this.roleActive = i
            this.getListByRoleId(roleId)
        },
        // 编辑权限
        editRole(row) {
            this.roleAddEdit = false
            this.roleData.roleName = row.roleName
            this.roleData.roleId = row.roleId
        },
        // 角色 编辑保存
        editUpdate() {
            if (this.roleData.roleName === '') {
                return this.$message.error('请填写角色名')
            }
            roleUpdate(this.roleData).then(resp => {
                this.$message.success(resp.msg)
                this.getRoleList()
                this.roleAddEdit = true
                this.roleData = {
                    roleName: '' // 角色名
                }
            })
        },
        // 权限列表
        getAuthorityList() {
            authorityList().then(resp => {
                this.checkList = resp.data
            })
        },
        // 权限保存
        saveAuthority() {
            authoritySave(this.authority).then(resp => {
                this.$message.success(resp.msg)
            })
        },
        // 根据roleId获取权限
        getListByRoleId(roleId) {
            const query = {
                roleId: roleId
            }
            listByRoleId(query).then(resp => {
                this.authority.selectList = resp.data
            })
        }

    }
}
</script>
<style lang="scss" scoped>
    .main{
        height: 91vh;
        width: 98%;
        margin-left: 1%;
        margin-top: 20px;
        border: 1px gainsboro solid;
        display: flex;
        justify-content: flex-start;

        .left{
            width: 13%;
            padding-right: 10px;
            padding-left: 10px;
            border-right: 1px gainsboro solid;
            .top{
                padding-top: 10px;
                height: 40px;
                border-bottom: 1px gainsboro solid;
                display: flex;
                justify-content: flex-start;
                button{
                    height: 32px;
                    background-color: #536976;
                    border: none;
                }
                margin-bottom: 10px;
            }
            .box{
                // border: 1px red solid;
                height: 28px;
                padding-top: 6px;
                padding-left: 10px;
                padding-right: 10px;
                font-size: 14px;
                display: flex;
                justify-content:  space-between ;
                .editRole{
                    color:green;
                }
                .editRole{
                    cursor: pointer;
                }
            }
            .box:hover{
                background: rgb(248, 248, 248);
                padding-left: 20px;
                // cursor: pointer;
                transition: 0.3ms;
            }
            .box_active{
                background: rgb(248, 248, 248);
                padding-left: 20px;
            }
             position:relative;
            .save{
                height: 50px;
                margin-top: 10px;
                position:absolute;
                width: 91%;
                bottom:0;
                button{
                    height: 32px;
                    background: linear-gradient(to right, #536976, #292e49);
                    border: none;
                    width: 100%;
                }
            }

        }
        .right{
            width: 87%;
             margin-left: 20px;
             margin-right: 20px;
            .box_right{
                margin-top: 10px;
            }
            .box_right_2{
                margin-top: 50px;
            }
        }
    }
</style>
<style scoped>
    .is-checked{
        /* color: #536976 !important; */
    }
</style>
