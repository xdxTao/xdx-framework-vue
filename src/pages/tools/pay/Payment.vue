<template>
  <div class="main">
    <div class="desc" />
    <div class="content">
      <div class="box">
        <div class="left">
          <span style=" color: red;">*&nbsp;</span>
          <span>订单号</span>
        </div>
        <div class="right">
          <el-input v-model="payInfo.outTradeNo" size="small" placeholder="商品名称..." />
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span style=" color: red;">*&nbsp;</span>
          <span>商品名称</span>
        </div>
        <div class="right">
          <el-input v-model="payInfo.subject" size="small" placeholder="商品名称..." />
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span style=" color: red;">*&nbsp;</span>
          <span>商品价格</span>
        </div>
        <div class="right">
          <el-input v-model="payInfo.totalAmount" size="small" placeholder="1-99之间" />
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span style=" color: red;">*&nbsp;</span>
          <span>商品描述</span>
        </div>
        <div class="right">
          <el-input
            v-model="payInfo.body"
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 4}"
            placeholder="请输入内容"
            maxlength="200"
            show-word-limit
          />
        </div>
      </div>
      <div style=" margin-top: 20px; margin-left: 85px;">
        <el-button style="background-color: #536976;  color: white;" @click="submit">去支付</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchList } from '@/api/payment'
export default {
    data() {
        return {
            payInfo: {
                outTradeNo: '',
                subject: '',
                totalAmount: 1,
                body: ''
            }
        }
    },
    methods: {
        submit() {
            fetchList(this.payInfo).then(resp => {
                // 添加之前先删除一下，如果单页面，页面不刷新，添加进去的内容会一直保留在页面中，二次调用form表单会出错
                const divForm = document.getElementsByTagName('divform')
                if (divForm.length) {
                    document.body.removeChild(divForm[0])
                }
                const div = document.createElement('divform')
                div.innerHTML = resp.data // data就是接口返回的form 表单字符串
                document.body.appendChild(div)
                document.forms[0].setAttribute('target', '_blank') // 新开窗口跳转
                document.forms[0].submit()
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.main {
  .content {
    .box {
      width: 500px;
      display: flex;
      justify-content: flex-start;
      margin-top: 20px;
      .left {
        width: 85px;
        padding-top: 5px;
        font-size: 15px;
      }
      .right {
        width: 400px;
      }
    }
  }
}
</style>
