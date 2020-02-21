<template>
  <div class="main">
    <div class="top">
      <span @click="openAdd('',1)">添加一级菜单</span>
    </div>
    <div class="bottom">
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
      >
        <!-- 内敛子表格 -->
        <el-table-column
          type="expand"
          align="center"
        >
          <template slot-scope="props">
            <el-table :data="props.row.lists" :show-header="false">
              <el-table-column
                prop="menuName"
                width="220"
                label="菜单名"
              />
              <el-table-column
                prop="menuAddr"
                width="220"
                label="访问地址"
              />
              <el-table-column
                prop="menuSts"
                label="状态"
                width="220"
              >
                <template slot-scope="scope">
                  <el-switch
                    v-model="scope.row.menuStsBoolean"
                    active-color="#13ce66"
                    inactive-color="#536976"
                    @change="updateMenu(scope.row, 4)"
                  />
                </template>
              </el-table-column>
              <el-table-column
                prop="menuSort"
                label="排序"
                width="220"
              >
                <template slot-scope="scope">
                  <el-input v-model="scope.row.menuSort" size="mini" style="width:50px;" placeholder="请输入内容" @change="updateMenu(scope.row, 3)" />
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <span @click="openEdit(scope.row, 2)">编辑</span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <el-table-column
          prop="menuName"
          label="菜单名"
          width="220"
        >
          <template slot-scope="scope">
            <i :class="scope.row.menuImg" />
            <span style="margin-left: 10px">{{ scope.row.menuName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="menuAddr"
          label="访问地址"
          width="220"
        />
        <el-table-column
          prop="menuSts"
          label="状态"
          width="220"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.menuStsBoolean"
              active-color="#13ce66"
              inactive-color="#536976"
              @change="updateMenu(scope.row, 4)"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="menuSort"
          label="排序"
          width="220"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.menuSort" size="mini" style="width:50px;" placeholder="请输入内容" @change="updateMenu(scope.row, 3)" />
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <span @click="openEdit(scope.row, 1)">编辑</span>
			&nbsp;&nbsp;&nbsp;&nbsp;
            <span @click="openAdd(scope.row,2)">添加子菜单</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-drawer
      style=" border: none;"
      :title="drawerTitle"
      :visible.sync="drawer"
      direction="rtl"
      :wrapper-closable="false"
      :before-close="handleClose"
    >
      <div class="box">
        <div class="left">
          <span style="color:white;">*&nbsp;</span>
          <span>上级菜单：</span>
        </div>
        <div class="right">
          <el-input v-model="menuData.supMenuName" :disabled="true" size="small" placeholder="" />
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span style="color:red;">*&nbsp;</span>
          <span>菜单名称：</span>
        </div>
        <div class="right">
          <el-input v-model="menuData.menuName" size="small" placeholder="请输入内容" />
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span style="color:red;">*&nbsp;</span>
          <span>菜单地址：</span>
        </div>
        <div class="right">
          <el-input v-model="menuData.menuAddr" size="small" placeholder="请输入内容" />
        </div>
      </div>
      <div v-if="drawerTitle == '添加菜单' || drawerTitle == '编辑菜单'" class="box">
        <div class="left">
          <span style="color:red;">*&nbsp;</span>
          <span>菜单图标：</span>
        </div>
        <div class="right">
          <el-input v-model="menuData.menuImg" size="small" placeholder="请输入内容" />
        </div>
      </div>
      <div class="submit">
        <el-button v-if="drawerTitle == '添加菜单' || drawerTitle == '添加子菜单'" @click="addMenu">添加</el-button>
        <el-button v-else @click="updateMenu">保存</el-button>
      </div>

    </el-drawer>
  </div>
</template>
<script>
import { addMenu, menuList, menuUpdate } from '@/api/authority'
export default {
    data() {
        return {
            drawer: false,
            drawerTitle: '添加菜单',
            menuData: {
                menuName: '', // 菜单名称
                menuAddr: '', // 菜单地址
                menuImg: '', // 菜单图标
                menuId: '', // 菜单Id
                supMenuId: '', // 父菜单Id
                supMenuName: '' // 父菜单名称
            },
            tableData: []
        }
    },
    created() {
        this.getList()
    },
    methods: {
        handleClose(done) {
            this.drawer = false
            this.menuData = {
                menuName: '', // 菜单名称
                menuAddr: '', // 菜单地址
                menuImg: '', // 菜单图标
                menuId: '', // 菜单Id
                supMenuId: '', // 父菜单Id
                supMenuName: '' // 父菜单名称
            }
        },
        // 打开添加
        openAdd(row, flag) {
            if (flag !== 1) {
                this.menuData.supMenuId = row.menuId
                this.menuData.supMenuName = row.menuName
                this.menuData.menuAddr = row.menuAddr
                this.drawerTitle = '添加子菜单'
            } else {
                this.drawerTitle = '添加菜单'
            }

            this.drawer = true
        },
        // 打开更新
        openEdit(row, flag) {
            if (flag !== 1) {
                this.drawerTitle = '编辑子菜单'
                this.menuData.supMenuId = row.supMenuId
                this.menuData.supMenuName = row.supMenuId
            } else {
                this.drawerTitle = '编辑菜单'
            }
            this.menuData.menuImg = row.menuImg
            this.menuData.menuAddr = row.menuAddr
            this.menuData.menuName = row.menuName
            this.menuData.menuId = row.menuId
            this.drawer = true
        },
        addMenu() {
            addMenu(this.menuData).then(resp => {
                this.drawer = false
                this.$message.success(resp.msg)
                this.getList()
                this.handleClose()
            })
        },
        updateMenu(row, flag) {
            if (flag === 3) {
                if (row.menuSort >= 100) {
                    return this.$message.error('排序最高不能超过100!')
                }
                this.menuData = {
                    menuId: row.menuId,
                    menuSort: row.menuSort
                }
            }
            if (flag === 4) {
                this.menuData = {
                    menuId: row.menuId,
                    menuSts: row.menuSts === 1 ? 0 : 1
                }
                // return console.log(this.menuData)
            }
            menuUpdate(this.menuData).then(resp => {
                this.drawer = false
                this.$message.success(resp.msg)
                this.getList()
                this.handleClose()
            })
        },
        // 获取菜单列表数据
        getList() {
            const param = {
                flag: 1
            }
            menuList(param).then(resp => {
                console.log(resp)

                this.tableData = resp.data
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .top{
        height: 20px;
        margin-top: 20px;
        padding-left: 20px;
        span{
            color: #536976;
        }
        span:hover{
            color: #292e49;
            cursor: pointer;
        }
    }
    .bottom{
        margin-top: 10px;
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
    .submit{
        margin-top: 30px;
        margin-left: 100px;
        button{
            background: linear-gradient(to right, #536976, #292e49);
            color: white;

        }

    }
</style>
