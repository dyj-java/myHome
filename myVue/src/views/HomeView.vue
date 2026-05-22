<template>
  <div class="layout-container">
    <aside class="sidebar">
      <div class="sidebar-top">
        <h3>中一班后台管理</h3>
      </div>

      <div class="menu-wrap">
        <div class="menu-group">
          <div class="menu-group-title">常用功能</div>
          <div
            class="menu-item"
            :class="{ active: route.path === '/home/student' }"
            @click="$router.push('/home/student')"
          >
            学生信息列表
          </div>
        </div>

        <div class="menu-group">
          <div class="menu-group-title">系统设置</div>
          <div
            class="menu-item"
            :class="{ active: route.path === '/home/account' }"
            @click="$router.push('/home/account')"
          >
            账号管理
          </div>
          <div
            class="menu-item"
            :class="{ active: route.path === '/home/classSet' }"
            @click="$router.push('/home/classSet')"
          >
            班级设置
          </div>
          <div
            class="menu-item"
            :class="{ active: route.path === '/home/studentEdit' }"
            @click="$router.push('/home/studentEdit')"
          >
            学生信息维护
          </div>
        </div>
      </div>

      <div class="sidebar-bottom">
        <button class="logout-btn" @click="$router.push('/login')">退出登录</button>
      </div>
    </aside>

    <main class="main-box">
      <!-- 子页面只在这里内部切换，外层Home布局永远固定 -->
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Microsoft YaHei", sans-serif;
}

.layout-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

.sidebar {
  width: 220px;
  height: 100vh;
  background: #0f3867;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.sidebar-top {
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid rgba(255,255,255,0.15);
}

.menu-wrap {
  flex: 1;
  padding: 20px 0;
  overflow-y: auto;
}
.menu-wrap::-webkit-scrollbar {
  width: 4px;
}
.menu-wrap::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.3);
  border-radius: 4px;
}
.menu-wrap::-webkit-scrollbar-track {
  background: transparent;
}

.menu-group-title {
  padding: 0 24px;
  font-size: 13px;
  color: #a0c8f0;
  margin-bottom: 10px;
}

.menu-item {
  padding: 12px 24px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.25s;
  border-left: 3px solid transparent;
}
.menu-item:hover {
  background: rgba(255,255,255,0.08);
}
.menu-item.active {
  background: rgba(64,150,238,0.25);
  border-left: 3px solid #4096ee;
  color: #fff;
}

.sidebar-bottom {
  padding: 20px;
  border-top: 1px solid rgba(255,255,255,0.15);
}
.logout-btn {
width: 70%;
    height: 35px;
    background: #4096ee;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 15px;
}
.logout-btn:hover {
  background: #2d80d8;
}

.main-box {
  flex: 1;
  height: 100vh;
  background: #f0f5fa;
  overflow: hidden;
}
</style>
