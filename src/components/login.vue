<template>
  <div id="container">
    <div id="login_item">
      <span class="login span">
        <div class="align_tool_1">
          学号
          <span class="input_account">
            <input type="text" class="account" name id value />
          </span>
        </div>
      </span>
      <span class="login span">
        <div class="align_tool_2">
          密码
          <span class="input_password">
            <input type="password" class="password" name />
          </span>
        </div>
      </span>
      <span class="options">
        <div class="align_tool_3">
          <a href="./register">注册</a>
          <a href="#">忘记密码</a>
        </div>
      </span>
      <div id="button_container">
        <span>
          <button type="button">登录</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>
<style>
#login_item {
  display: flex;

  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;

  margin-top: 0.6rem;
  width: 3rem;
  height: 2rem;
}

#container {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 1.03rem;
}

.span {
  width: 3rem;
  height: 0.5rem;
}

.account,
.password {
  border: none;
  padding: 0.03rem;
  width: 1.6rem;

  font-size: 0.18rem;

  outline: 0;
}

a {
  color: aqua;
  text-decoration: none;
}

a:hover {
  color: red;
}

.input_account,
.input_password {
  margin-left: 0.05rem;
}

.align_tool_1,
.align_tool_2 {
  margin-left: 0.3rem;
  border: black 1px solid;
  border-radius: 0.1rem;
  padding: 0.08rem;
  width: 2.2rem;
  height: 0.25rem;
  color: aqua;

  background-color: white;
}

.align_tool_3 {
  display: flex;
  justify-content: space-between;

  margin-top: -0.08rem;
  margin-left: 0.4rem;
  width: 75%;

  font-size: 0.12rem;
}

.options {
  width: 3rem;
  height: 0.2rem;
}

#button_container {
  margin-left: 0.02rem;
  height: 0.44rem;
}

button {
  margin-top: -0.08rem;
  border: solid gray 0.01rem;
  border-radius: 0.25rem;
  height: 0.52rem;
  width: 1rem;

  font-size: 0.15rem;

  background-color: white;
}

button:active {
  background-color: gray;
  box-shadow: 0 3px grey;
  transform: translateY(2px);
}

.login {
  font-size: 0.12rem;
}

body {
  background-image: url("..\img\background.png");
  background-size: 3.75rem 7.67rem;
}
</style>