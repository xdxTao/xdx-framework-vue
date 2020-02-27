<template>
  <div class="main">
    <div class="content">
      <div class="top">
        <div class="up">
          <h4>登录</h4>
        </div>
        <div class="down">
          <dir class="box">
            <img src="../../static/icon/google.png" width="100%">
          </dir>
          <dir class="box">
            <img src="../../static/icon/twitter.png" width="100%">
          </dir>
          <dir class="box">
            <img src="../../static/icon/facebook.png" width="100%">
          </dir>
        </div>
      </div>
      <div class="botton">
        <div class="placeholder" />
        <div class="title">
          <span>小道仙框架</span>
        </div>
        <div class="action">
          <div class="box">
            <img src="../../static/icon/user.png">
            <input v-model="user.userName" placeholder="请输入用户名...">
          </div>
          <div class="box">
            <img src="../../static/icon/password.png">
            <input v-model="user.userPassword" type="password" placeholder="请输入密码...">
          </div>
          <div class="box_1">
            <div class="remenberMe">
              <div class="checkbox">
                <input placeholder="请输入密码..." type="checkbox">
              </div>
              <div>
                <span>保持登录</span>
              </div>

            </div>
            <div>
              <span>忘记密码？</span>
            </div>
          </div>
          <div class="login_botton" @click="login">
            <div>SIGN IN</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
// 引入Cookies持久化 js-cookies
import { setToken } from '@/utils/auth'
import { login } from '@/api/usermgmt'
export default {
    data() {
        return {
            user: {
                userName: '',
                userPassword: ''
            }
        }
    },
    methods: {
        login() {
            if (this.user.userName === '' || this.user.userPassword === '') {
                return this.$message.error('请填写完整信息')
            }
            login(this.user).then(resp => {
                setToken(resp.xdxToken)
                window.location.href = '/'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
	.main{
		// border: 1px red solid;
		width: 100%;
		height:100%;
		position:fixed;
		// position:relative;
		background-image: url('../../static/img/bg-3.jpg');
		// filter:brightness(0.8);//设置亮度值，范围：0-1
		display: flex;
		justify-content: center ;
		z-index: 10;
		.content{
			position:absolute;
			z-index: 9999;
			width: 360px;
			height: 450px;
			margin-top: 160px;
			// border: 1px black solid;
			.top{
				width: 330px;
				height: 150px;
				// border: 1px blue solid;
				border-radius: 3px;
				float: left;
				margin-left: 15px;
				// background: linear-gradient(60deg, #ec407a, #d81b60);
				// box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);
				background: linear-gradient(to right, #536976, #292e49);
				box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px #536976;
				.up{
					height: 50px;
					// border: 1px red solid;
					margin-top: 25px;
					text-align: center;
					h4{
						color: #fff;
						margin-top: 10px;
						margin-bottom: 10px;
						font-weight: 700;
						font-size: 1.3em;
					}
				}
				.down{
					height: 20px;
					// border: 1px red solid;
					margin-top: 10px;
					width: 170px;
					margin-left: 80px;
					text-align: center;
					margin-top: 10px;
					display: flex;
					justify-content: space-around;;
					.box{
						width: 20px;
						height: 20px;
					}
					.box:hover{
						cursor: pointer;
					}
				}
			}
			.botton{
				width: 360px;
				height: 400px;
				background-color: #fff;
				margin-top: 40px;
				box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
				border-radius: 6px;
				// padding-bottom: 20px;
				.placeholder{
					// margin-top: 80px;
					// border: 1px red solid;
					padding-top: 20px;
					height: 100px;

				}
				.title{
					// border: 1px red solid;
					// padding-top: 20px;
					font-family: title-speed;
					font-size: 1.1rem;
					font-weight: 400;
					height: 30px;
					padding-top: 8px;
					text-align: center;
				}
				.action{
					// border: 1px red solid;
					height: 150px;
					.box{
						width: 315px;
						height: 30px;
						// border: 1px blue solid;
						margin-top: 25px;
						display: flex;
						justify-content: flex-start;
						margin-left: 20px;
						img{
							width: 25px;
							height: 25px;
							margin-left: 10px;
						}
						input{
							margin-left: 15px;
							width: 255px;
							border: none;
							border-bottom: 1px #536976 solid;

						}
						input:focus {
							outline: none;
							border-bottom: 1.5px #292e49 solid;
						}
					}
					.box_1{
						width: 302px;
						height: 20px;
						// border: 1px blue solid;
						margin-top: 20px;
						margin-left: 32px;
						display: flex;
						justify-content: space-between;
						font-size: 14px;
						line-height: 1.428571429;
						color: #AAAAAA;
						font-weight: 400;
						.remenberMe{
							width: 100px;
							height: 20px;
							// border: 1px green solid;
							display: flex;
							justify-content: flex-start;
							.checkbox{
								width: 18px;
								height: 16px;
								// border: 1px red solid;
								margin-top: 2px;
								input{
									width: 16px;
									height: 16px;
									// margin-top: 10px;
								}
							}

						}
					}
					.login_botton{
						width: 105px;
						height: 41px;
						margin-top: 20px;
						margin-left: 128px;
						border-radius: 500px;
						background: linear-gradient(to right, #536976, #292e49);
						transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
						text-align: center;
						div{
							color: #fff;
							font-size: 12px;
							margin: 10px 1px;
							padding-top: 12px;
						}

					}
					.login_botton:hover{
						cursor: pointer;
						box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px #536976;
					}
				}
			}

		}
	}
</style>
