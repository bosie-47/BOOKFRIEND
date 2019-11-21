<template>
	<div id="login">
    <div id="container">
      <div id="logobox">
        <img src=""  >
			</div>
      <div id="login_item">
				<span class="login span">
					<div class="align_tool_1">
						帐号:<input type="text" class="account" name="" id="" value="" />
					</div>
				</span>
				<span class="login span">
					<div class="align_tool_2">
						密码:<input type="password" class="password" name="" />
					</div>
				</span>
				<span class="span">
          <div class="align_tool_3">
            <a href="#">忘记密码</a>
          </div>
          </span>
			<div id="button_container">
				<span><button type="button">登录</button></span>
			</div>
				<div class="registry">还没有帐号？赶紧<a href="#">注册</a>一个吧！</div>
			</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login'
  }
</script>
		<style>
			img {
				width: 1.06rem;
				height: 1.03rem;
			}
			#logobox {
				width: 100%;
				height: 1.03rem;
				display: flex;
				justify-content: center;
				}
			#login_item {
				display: flex;
				width: 3rem;
				height: 2.0rem;
				flex-wrap: wrap;
				align-content: flex-end;
				justify-content: center;
			}
			#container {
				display: flex;
				align-content: center;
				justify-content: center;
				/*flex-direction: column;*/
				flex-wrap: wrap;
				margin-top: 1.03rem;
			}
			.span {
				width: 3rem;
				/*width: 300px;*/
				height: 0.3rem;
			}
			.account, .password {
				padding: 0.03rem;
				width: 1.8rem;
				font-size: 0.18rem;
				border: none;
				outline: 0;
				border-bottom:0.01rem black solid ;
			}

			a {
				color: aqua;
				text-decoration: none;
			}
			a:hover {
				color: red;
			}
			.align_tool_1, .align_tool_2 {
				margin-left: 0.1rem;
			}
			
			.align_tool_3 {
				margin-left: 2.2rem;
				font-size: 0.15rem;
			}
			#button_container {
				/*margin-left: 10rem;*/
				height: 0.44rem;
				margin-left: 0.9rem;
			}
			button {
				background-color: white;
				border: solid gray 0.01rem;
				border-radius: 20% 20%;
				height: 0.44rem;
				width: 0.9rem;
				font-size: 0.2rem;
			}
			
			.login{
				font-weight: bold;
				font-size: 0.18rem;
			}
			.registry {
				width: 0.7rem;
				height: 0.4rem;
				font-size: 0.1rem;
				padding-left:0.2rem;
			}
		</style>