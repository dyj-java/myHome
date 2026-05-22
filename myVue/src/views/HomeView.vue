<template>
  <div class="layout-container">
    <!-- 左侧固定侧边栏 -->
    <aside class="sidebar">
      <div class="sidebar-top">
        <h3>中一班后台管理</h3>
      </div>

      <div class="menu-wrap">
        <div class="menu-group">
          <div class="menu-group-title">常用功能</div>
          <div
            class="menu-item"
            :class="{ active: activeMenu === 'studentList' }"
            @click="activeMenu = 'studentList'"
          >
            学生信息列表
          </div>
        </div>

        <div class="menu-group">
          <div class="menu-group-title">系统设置</div>
          <div class="menu-item">账号管理</div>
          <div class="menu-item">班级设置</div>
        </div>
      </div>

      <div class="sidebar-bottom">
        <button class="logout-btn" @click="$router.push('/login')">退出登录</button>
      </div>
    </aside>

    <!-- 右侧主内容区 -->
    <main class="main-box">
      <!-- 固定顶部区域：标题 + 查询条件 -->
      <div class="fixed-header">
        <div class="page-header">
          <h2>学生信息列表</h2>
        </div>

        <!-- 两个查询条件 -->
        <div class="search-form">
          <div class="search-item">
            <label>学生姓名：</label>
            <input v-model="searchName" type="text" placeholder="请输入学生姓名" />
          </div>
          <div class="search-item">
            <label>学生爱好：</label>
            <input v-model="searchHobby" type="text" placeholder="请输入爱好" />
          </div>
        </div>
      </div>

      <!-- 滚动区域：只有卡片列表滚动 -->
      <div class="card-scroll-wrap">
        <div class="card-list" v-if="activeMenu === 'studentList'">
          <div class="student-card" v-for="stu in filterStudentList" :key="stu.id">
            <div class="avatar">
              <img :src="stu.avatar" alt="头像" />
            </div>
            <div class="info">
              <div class="cn-name">{{ stu.chineseName }}</div>
              <div class="en-name">{{ stu.englishName }}</div>
              <div class="row"><span>性别：</span>{{ stu.gender }}</div>
              <div class="row"><span>爱好：</span>{{ stu.hobby }}</div>
              <div class="row"><span>班级：</span>{{ stu.className }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeMenu = ref('studentList')
// 查询条件
const searchName = ref('')
const searchHobby = ref('')

// 原始学生数据
const studentList = ref([
  {
    id: 1,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=girl1",
    chineseName: "王梓涵",
    englishName: "Amy",
    gender: "女",
    hobby: "画画、唱歌、手工",
    className: "中一班"
  },
  {
    id: 2,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=boy1",
    chineseName: "李浩宇",
    englishName: "Leo",
    gender: "男",
    hobby: "运动、积木、小汽车",
    className: "中一班"
  },
  {
    id: 3,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=girl2",
    chineseName: "陈雨桐",
    englishName: "Lucy",
    gender: "女",
    hobby: "阅读、跳舞、绘本",
    className: "中一班"
  },
  {
    id: 4,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=boy2",
    chineseName: "张泽轩",
    englishName: "Jack",
    gender: "男",
    hobby: "足球、拼乐高、奥特曼",
    className: "中一班"
  },
  {
    id: 5,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=boy3",
    chineseName: "刘浩然",
    englishName: "Tom",
    gender: "男",
    hobby: "篮球、画画",
    className: "中一班"
  },
  {
    id: 7,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=girl3",
    chineseName: "夏雨晴",
    englishName: "Lily",
    gender: "女",
    hobby: "跳舞、弹琴",
    className: "中一班"
  },
  {
      id: 8,
      avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=girl3",
      chineseName: "夏雨晴",
      englishName: "Lily",
      gender: "女",
      hobby: "跳舞、弹琴",
      className: "中一班"
    },
    {
        id: 9,
        avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=girl3",
        chineseName: "夏雨晴",
        englishName: "Lily",
        gender: "女",
        hobby: "跳舞、弹琴",
        className: "中一班"
      },{
            id: 10,
            avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=girl3",
            chineseName: "夏雨晴",
            englishName: "Lily",
            gender: "女",
            hobby: "跳舞、弹琴",
            className: "中一班"
          }
])

// 筛选过滤
const filterStudentList = computed(() => {
  return studentList.value.filter(item => {
    const nameMatch = item.chineseName.includes(searchName.value)
    const hobbyMatch = item.hobby.includes(searchHobby.value)
    return nameMatch && hobbyMatch
  })
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Microsoft YaHei", sans-serif;
}

.layout-container {
  width: 98vw;
  height: 98vh;
  display: flex;
  overflow: hidden;
}

/* 左侧侧边栏固定 */
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
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
  letter-spacing: 1px;
}
.menu-item {
  padding: 12px 24px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.25s;
  border-left: 3px solid transparent;
}
.menu-item:hover {
  background: rgba(255, 255, 255, 0.08);
}
.menu-item.active {
  background: rgba(64, 150, 238, 0.25);
  border-left: 3px solid #4096ee;
  color: #fff;
}
.sidebar-bottom {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}
.logout-btn {
  width: 100%;
  height: 40px;
  background: #4096ee;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}
.logout-btn:hover {
  background: #2d80d8;
}

/* 右侧主区域 */
.main-box {
  flex: 1;
  height: 100vh;
  background: #f0f5fa;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 固定头部：标题 + 查询栏 永远固定 */
.fixed-header {
  padding: 20px 20px 0;
  flex-shrink: 0;
}
.page-header {
  padding: 18px 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}
.page-header h2 {
  color: #0f3867;
  font-size: 20px;
}

/* 查询条件行 */
.search-form {
  display: flex;
  gap: 30px;
  padding: 8px 12px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}
.search-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.search-item label {
  color: #333;
  font-size: 14px;
  white-space: nowrap;
}
.search-item input {
  width: 220px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #dde2eb;
  border-radius: 8px;
  font-size: 14px;
}
.search-item input:focus {
  outline: none;
  border-color: #4096ee;
}

/* 卡片滚动区域：只有这里滚动 */
.card-scroll-wrap {
  flex: 1;
  padding: 0 30px 30px;
  overflow-y: auto;
}
/* 自定义纤细滚动条 */
.card-scroll-wrap::-webkit-scrollbar {
  width: 5px;
}
.card-scroll-wrap::-webkit-scrollbar-thumb {
  background: #c1cddb;
  border-radius: 5px;
}
.card-scroll-wrap::-webkit-scrollbar-track {
  background: transparent;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 24px;
}
.student-card {
  background: #fff;
  border-radius: 18px;
  padding: 22px;
  text-align: center;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
  transition: all 0.3s;
}
.student-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(64,150,238,0.18);
}
.avatar {
  width: 90px;
  height: 90px;
  margin: 0 auto 14px;
}
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid #b8e8ff;
  object-fit: cover;
}
.cn-name {
  font-size: 18px;
  font-weight: bold;
  color: #222;
  margin-bottom: 4px;
}
.en-name {
  font-size: 14px;
  color: #4096ee;
  margin-bottom: 12px;
}
.row {
  font-size: 14px;
  color: #555;
  margin: 6px 0;
}
.row span {
  color: #888;
}
</style>
