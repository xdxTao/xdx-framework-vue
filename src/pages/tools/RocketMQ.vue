<template>
  <div class="main">
    <el-input
      v-model="messageInfo.message"
      type="textarea"
      :rows="3"
      placeholder="请输入内容"
    />
    <el-transfer
      v-model="value"
      :titles="['全部用户', '发送用户']"
      :data="data"
      :props="{
        key: 'userId',
        label: 'userName'
      }"
    />
    <el-button style="background-color: #536976;  color: white; margin-top:20px;" @click="submit">发送消息</el-button>
  </div>
</template>

<script>
import { userDtoList } from '@/api/usermgmt'
import { send } from '@/api/message'
export default {
    data() {
        return {
            data: [],
            value: [],
            messageInfo: {
                message: '',
                userIds: []
            }
        }
    },
    created() {
        this.userDtoList()
    },
    methods: {
        userDtoList() {
            userDtoList().then(resp => {
                this.data = resp.data
            })
        },
        submit() {
            if (this.messageInfo.message == null || this.messageInfo.message === '') {
                return this.$message.error('请填写要发送的消息!')
            }
            if (this.value == null || this.value.length <= 0) {
                return this.$message.error('请选择消息接收者!')
            }
            this.messageInfo.userIds = this.value
            send(this.messageInfo).then(resp => {
                if (resp.success === true) {
                    this.$message.success(resp.msg)
                    this.data = []
                    this.value = []
                    this.messageInfo = {
                        message: '',
                        userIds: []
                    }
                    this.userDtoList()
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .main{
        width: 583px;
    }
</style>
