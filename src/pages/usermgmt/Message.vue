<template>
  <div class="main">
    <div class="unread">
      未读消息: {{ unreadCount }}
    </div>
    <div v-for="(item,i) in list" :key="i" class="box">
      <div class="top">
        <div :class="item.msgSts === 0 ? 'unreadLable' : 'unreadLable_1'" />
        <b v-if="item.msgSts === 0" class="alreadyRead" @click="alreadyRead(item.msgId)">{{ item.senderName }}</b>
        <b v-else>{{ item.senderName }}</b>
        <span>给你发送了一条消息</span>
        <span class="message_time">{{ item.gmtCreate }}</span>
      </div>
      <div class="bottom">
        {{ item.msgContent }}
      </div>
    </div>
  </div>
</template>
<script>
import { getUnreadCount, list, alreadyRead } from '@/api/message'
export default {
    data() {
        return {
            unreadCount: 0,
            list: []
        }
    },
    created() {
        this.getList()
        this.getUnreadCount()
    },
    methods: {
        // 列表数据
        getList() {
            list().then(resp => {
                console.log(resp.data)

                this.list = resp.data
            })
        },
        // 获取未处理消息数
        getUnreadCount() {
            getUnreadCount().then(resp => {
                this.unreadCount = resp.data
            })
        },
        // 消息已读操作
        alreadyRead(msgId) {
            const query = {
                msgId: msgId
            }
            alreadyRead(query).then(resp => {
                if (resp.success === true) {
                    this.$message.success(resp.msg)
                    this.getList()
                    this.getUnreadCount()
                }
            })
        }

    }
}
</script>
<style lang="scss" scoped>
    .main{
        width: 100%;
        .unread{
            margin-bottom: 10px;
        }
        .box{
            margin-top: 20px;
            width: 99%;
            margin-left: 1%;
            border-bottom: 1px gainsboro solid;
            .top{
                height: 25px;
                display: flex;
                justify-content: flex-start;
                .unreadLable{
                    width: 6px;
                    height: 6px;
                    background-color: #ca0c16;
                    margin-top: 8px;
                    border-radius: 50%;
                    margin-right: 4px;
                }
				.unreadLable_1{
					width: 6px;
                    height: 6px;
                    background-color: white;
                    margin-top: 8px;
                    border-radius: 50%;
                    margin-right: 4px;
				}
				.alreadyRead:hover{
					cursor: pointer;
				}
                span{
                    padding-left: 10px;
                    font-size: 15px;
                    color: gray;
                }
                padding-bottom: 5px;
            }
            .bottom{
                margin-left: 10px;
                padding-bottom: 20px;
            }
        }
    }
</style>
