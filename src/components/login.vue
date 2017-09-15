<template>
  <div class="hello">
    <mt-header title="" class="tb">
      <router-link to="/" slot="left">
        <mt-button >关闭</mt-button>
      </router-link>
      <mt-button  slot="right">注册</mt-button>
    </mt-header>

    <div class="photo">
      <img src="../assets/weibo.png" alt="无法加载">
    </div>

    <div class="loginDialoge">
      <mt-field  placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field  placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button type="primary" size="large" class="login-button">登录</mt-button>
      <a href="#">登陆遇到问题？</a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tb{
  background-color: white;
  color: black;
  font-size: 20px;
  font-weight: 900;
}

.loginDialoge a{
  float: left;
  text-decoration: none;
  color: #0066CC;
}
.login-button{
  background-color: #FF6633;
  color: rgba(232,231,231,0.3);

}


</style>
