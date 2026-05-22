<template>
  <div class="login-container">
    <div class="left-panel">
      <div class="decor cloud cloud1">☁️</div>
      <div class="decor cloud cloud2">☁️</div>
      <div class="decor cloud cloud3">☁️</div>
      <div class="decor sun">☀️</div>
      <div class="decor grass grass1">🌱</div>
      <div class="decor grass grass2">🌿</div>
      <div class="decor tree">🌳</div>

      <div class="main-cloud">☁️</div>
      <h1>南京江宁滨江外国语学校</h1>
      <h2>中一班 · 后台管理系统</h2>
      <p>用心呵护 · 快乐成长</p>
    </div>

    <div class="right-panel">
      <div class="login-title">
        <h3>管理员登录</h3>
        <p>欢迎进入中一班管理后台</p>
      </div>
      <div class="input-item">
        <input v-model="form.username" type="text" placeholder="请输入账号" />
      </div>
      <div class="input-item">
        <input v-model="form.password" type="password" placeholder="请输入密码" />
      </div>
      <button class="login-btn" @click="handleLogin">进入后台</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const form = ref({
  username: '',
  password: ''
})

// 登录逻辑
const handleLogin = () => {
  // 简单校验：账号密码不为空就登录
  if (form.value.username && form.value.password) {
   if(form.value.username==='admin' && form.value.password==='admin'){
       // 登录成功 → 跳转到带左侧菜单的主页
       router.push('/home')
   }else{
   alert('请输入正确的账号和密码')
   }
  } else {
    alert('请输入账号和密码')
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Microsoft YaHei", sans-serif;
}
.login-container {
  display: flex;
  width: 98vw;
  height: 98vh;
  overflow: hidden;
}
.left-panel {
  width: 58%;
  background: linear-gradient(180deg, #b8e8ff 0%, #e0f7ff 100%);
  background-image: url("https://img0.baidu.com/it/u=3862423419,3044472229&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500");
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #004080;
  position: relative;
}
.decor {
  position: absolute;
  opacity: 0.7;
  pointer-events: none;
}
.cloud1 { top: 15%; left: 20%; font-size: 40px; }
.cloud2 { top: 30%; right: 15%; font-size: 50px; }
.cloud3 { bottom: 25%; left: 25%; font-size: 35px; }
.sun { top: 10%; right: 10%; font-size: 60px; }
.grass1 { bottom: 8%; left: 15%; font-size: 32px; }
.grass2 { bottom: 12%; right: 20%; font-size: 36px; }
.tree { bottom: 10%; left: 45%; font-size: 55px; }
.main-cloud {
  font-size: 65px;
  margin-bottom: 20px;
  opacity: 0.85;
}
.left-panel h1 {
  font-size: 28px;
  margin-bottom: 12px;
  z-index: 2;
}
.left-panel h2 {
  font-size: 22px;
  font-weight: normal;
  margin-bottom: 20px;
  z-index: 2;
}
.left-panel p {
  font-size: 16px;
  opacity: 0.9;
  z-index: 2;
}
.right-panel {
  width: 42%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 80px;
  background: #ffffff;
}
.login-title {
  margin-bottom: 35px;
}
.login-title h3 {
  font-size: 26px;
  color: #222;
  margin-bottom: 8px;
}
.login-title p {
  color: #777;
  font-size: 14px;
}
.input-item {
  margin-bottom: 22px;
}
.input-item input {
  width: 100%;
  height: 50px;
  padding: 0 18px;
  border: 1px solid #dde2eb;
  border-radius: 12px;
  font-size: 15px;
  background: #f8fbff;
  transition: all 0.3s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}
.input-item input:focus {
  outline: none;
  border-color: #4096ee;
  box-shadow: 0 0 0 4px rgba(64, 150, 238, 0.18);
  background: #fff;
}
.login-btn {
  width: 100%;
  height: 50px;
  background: #4096ee;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 14px rgba(64, 150, 238, 0.28);
}
.login-btn:hover {
  background: #2d80d8;
  box-shadow: 0 6px 18px rgba(64, 150, 238, 0.32);
}
</style>
