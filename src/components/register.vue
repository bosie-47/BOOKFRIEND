<template>
  <div id="body">
	<div id="container">
		<div class="box">
			<input type="text" class="input" @input="checkem(email)" v-model="email" placeholder="您的邮箱地址"/>
		</div>
		<p :class="{active:em}">邮箱地址不能为空</p>
		<div class="box">
			<input type="text" class="input" @input="checksc(account)" v-model="account" placeholder="您的学号"/>
		</div>
		<p :class="{active:sc}">学号不为空</p>
		<div class="box">
			<input type="password" class="input" @input="checkpw1(password)" v-model="password" placeholder="您的密码"/>
		</div>
		<p :class="{active:pw1}">密码不为空</p>
		<div class="box">
			<input type="password" class="input" @input="checkpassword(password,passwords)" v-model="passwords" placeholder="确认密码"/>
		</div>
		<p :class="{active: checkpw2}">前后密码需一致！</p>    
    <div class=button v-if="account===''||email===''||password===''||passwords===''||checkpw2">
      <button class="btn2">注册</button>
    </div>
		<div class="button" v-else>
			<button class="btn1">注册</button>
		</div>
		<div class="return"><a href="/">返回登录</a></div>
	</div>
  </div>
</template>
	
<script>
  export default {
    name: 'register',
    data() {
      return {
        account: '',
        email: '',
        password: '',
				passwords: '',
				checkpw2: false,
				em: false,
				sc: false,
				pw1: false
      }
		},
		methods: {
			checkpassword: function(password,passwords){
				if (password != passwords)
				this.checkpw2 = true;
				if (password === passwords)
				this.checkpw2 = false;
			},
			checkpw1: function(password){
				if (password === '')
				this.pw1 = true;
				if (password != '')
				this.pw1 = false;
			},
			checksc: function(account){
				if (account === '')
				this.sc = true;
				if (account != '')
				this.sc = false;
			},
			checkem: function(email){
				if (email === '')
				this.em = true;
				if (email != '')
				this.em = false;
			}
			
		}
  }
</script>

<style>
	#body {
    display: flex;
    justify-content: center;
    align-content: center;
		
  }
  
  #container {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
				
		margin-top: -1.2rem;
		width: 3.75rem;
    height: 7.67rem;
		
		background-image:url('..\img\background.png');
		background-size: 3.75rem 7.67rem;
	}
			
	.box {
		display: flex;
		justify-content: center;
				
		margin: rem;
		padding-top: .07rem;
		border: #000000 1px solid;
		border-radius: .17rem;
		width: 2.2rem;
		height: .32rem;
				
		font-size: .15rem;

		background-color: white;
	}

		.return {
		display: flex;
		justify-content: center;
				
		margin: rem;
		padding-top: .2rem;
		border-radius: .17rem;
		width: 2.2rem;
		height: .32rem;
				
		font-size: .15rem;
	}
			
  .button {
    display: flex;
		justify-content: center;
				
		margin: .04rem;
		padding-top: .07rem;
		width: 2.2rem;
		height: .32rem;
	}

	.btn1, .btn2 {
		border-radius: 2rem;
		width: 1rem;
		height: .5rem;

		font-size: .18rem;}

	.btn1	{
		color: white;
		background: saddlebrown;
	}
			
	.input {
		border: none;
		outline: none;
		width: 1.7rem;
		height: .22rem;
				
		font-size: .15rem;
	}

	p {
		line-height: .12rem;
		margin: .01rem;
		width: 3rem;

		font-size: .14rem;
		color: red; 
		
		visibility: hidden;
	}
	.active {
		visibility: visible;
	}

	a {
	color: aqua;
	text-decoration: none;
	}

	a:hover {
		color: red;
	}		
</style>
