<template>
  <div id="login">
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt />
    </div>
    <div class="front"></div>
    <div class="loginToHome">
      <el-form ref="form" :model="form" status-icon label-width="80px" class="loginForm">
        <h3>登陆</h3>
        <el-form-item label="用户名" prop="name">
          <el-input type="text" v-model="form.username" auto-complete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            auto-complete="off"
            placeholder="请输入密码"
            @keyup.enter.native="onSubmit()"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="homeBut" type="primary" plain @click="onSubmit">登录</el-button>
          <el-button class="loginBut" type="primary" plain @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      imgSrc: require("../../assets/images/capacitors-5367873.jpg"),
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("/login", {
          username: this.form.username,
          password: this.form.password
        })
        .then(res => {
          console.log(res);
          if (res.data.message === "success") {
            let token = res.data.data;
            localStorage.token = token;
            this.$router.push("home");
          } else {
            alert("登录失败");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.loginToHome {
  position: absolute;
  left: 0px;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 400px;
  height: 260px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.3);
}
.loginForm {
  text-align: center;
  padding-top: 15px;
  padding-right: 30px;
  top: 10px;
}
.homeBut {
  position: absolute;
  left: 0px;
}
.loginBut {
  position: absolute;
  right: 0px;
}
.background {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
}

.front {
  z-index: 1;
  position: absolute;
}
#login {
  width: 100%;
  height: 100%;
}
</style>