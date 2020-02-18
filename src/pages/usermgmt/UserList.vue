<template>
  <div class="mian">
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="userName"
        label="姓名"
        width="180"
      />
      <el-table-column
        prop="userPhone"
        label="电话"
      />
    </el-table>
  </div>
</template>
<script>
import { userlist } from '@/api/usermgmt'
export default {
    data() {
        return {
            tableData: []
        }
    },
    created() {
        this.getUserList()
    },
    methods: {
        getUserList() {
            userlist().then(resp => {
                console.log(resp)
                this.tableData = resp.data
            })
        }
    }
}

</script>

<style lang="scss" scoped>
    .mian{
        // height: 100px;
    }
</style>
