<template>
  <div id="body">
  <div id="area">
  <div id="container">
		<div class="box">
			<input type="text" class="input" v-model="email" placeholder="您的邮箱地址"/>
		</div>
		<div class="box">
			<input type="text" class="input" v-model="account" placeholder="您的帐号"/>
		</div>
		<div class="box">
			<input type="password" class="input" v-model="password" placeholder="您的密码"/>
		</div>
		<div class="box">
			<input type="password" class="input" v-model="passwords" placeholder="确认密码"/>
		</div>    
    <div class=button v-if="account===''||email===''||password===''||passwords===''">
      <button>注册2</button>
    </div>
		<div class="button" v-else>
			<button >注册</button>
		</div>
	</div>
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
      }
    },
  }
</script>

<style>
	#body {
    display: flex;
    justify-content: center;
    align-content: center
  }
  
  #area {
    width: 3.75rem;
    height: 6.67rem;
  }
  
  #container {
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
				
		padding-top: 2rem;
	}
			
	.box {
		display: flex;
		justify-content: center;
				
		margin: 0.04rem;
		padding-top: 0.07rem;
		border: #000000 1px solid;
		border-radius: .17rem;
		width: 2.2rem;
		height: .32rem;
				
		font-size: .15rem;
	}
			
  .button {
    display: flex;
		justify-content: center;
				
		margin: 0.04rem;
		padding-top: 0.07rem;
		width: 2.2rem;
		height: .32rem;
				
		font-size: .15rem;
	}
			
	button {
		border-radius: 2rem;
		width: 1rem;
		height: 0.5rem;
				
		font-size: .2rem;
		color: white;
				
		background: saddlebrown;
	}
			
	.input {
		border: none;
		outline: none;
		width: 1.7rem;
		height: 0.22rem;
				
		font-size: .15rem;
	}
			
</style>
