<template>
  <div class="student-page">
    <!-- 固定头部+查询 -->
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

    <!-- 只有卡片区域滚动 -->
    <div class="card-scroll-wrap">
      <div class="card-list">
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 查询条件
const searchName = ref('')
const searchHobby = ref('')

// 你原来完整学生数据
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
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=boy2",
    chineseName: "张泽轩",
    englishName: "Jack",
    gender: "男",
    hobby: "足球、拼乐高、奥特曼",
    className: "中一班"
  },
  {
    id: 6,
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=boy2",
    chineseName: "张泽轩",
    englishName: "Jack",
    gender: "男",
    hobby: "足球、拼乐高、奥特曼",
    className: "中一班"
  }
])

// 筛选
const filterStudentList = computed(() => {
  return studentList.value.filter(item => {
    return item.chineseName.includes(searchName.value) &&
           item.hobby.includes(searchHobby.value)
  })
})
</script>

<style scoped>
/* 页面整体占满父容器 */
.student-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
}

/* 固定头部区域 */
.fixed-header {
  flex-shrink: 0;
  margin-bottom: 20px;
}
.page-header {
  padding: 2px 10px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 10px;
}
.page-header h2 {
  color: #0f3867;
  font-size: 20px;
}

/* 查询栏样式 */
.search-form {
  display: flex;
  gap: 30px;
  padding: 16px 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
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

/* 卡片滚动区域 */
.card-scroll-wrap {
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
}
/* 纤细滚动条 */
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
