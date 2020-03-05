<template>
  <div class="main">
    <div class="unread">
      未读消息: 0
    </div>
    <div class="box">
      <div class="top">
        <div class="unreadLable" />
        <b>小道仙</b>
        <span>给你发送了一条消息</span>
      </div>
      <div class="bottom">
        你好，我是小道仙，我给你发送了一条消息。
      </div>
    </div>
  </div>
</template>
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
