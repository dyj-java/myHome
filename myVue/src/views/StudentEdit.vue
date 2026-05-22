<template>
  <div class="student-edit-page">
    <!-- 固定头部 -->
    <div class="page-top">
      <div class="page-title">学生信息维护</div>

      <!-- 查询区域 -->
      <div class="search-bar">
        <div class="search-item">
          <label>学生姓名：</label>
          <input v-model="searchName" placeholder="请输入姓名" />
        </div>
        <div class="search-item">
          <label>班级：</label>
          <input v-model="searchClass" placeholder="请输入班级" />
        </div>
        <button class="search-btn" @click="handleSearch">查询</button>
        <button class="add-btn" @click="openAdd">新增学生</button>
      </div>
    </div>

    <!-- 表格区域 -->
    <div class="table-wrap">
      <table class="stu-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>头像</th>
            <th>中文姓名</th>
            <th>英文姓名</th>
            <th>性别</th>
            <th>爱好</th>
            <th>班级</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filterList" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <img class="table-avatar" :src="item.avatar" alt="" />
            </td>
            <td>{{ item.chineseName }}</td>
            <td>{{ item.englishName }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.hobby }}</td>
            <td>{{ item.className }}</td>
            <td>
              <button class="edit-btn" @click="openEdit(item)">编辑</button>
              <button class="del-btn" @click="handleDel(item.id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 新增/编辑弹窗 -->
    <div class="dialog-mask" v-if="showDialog">
      <div class="dialog">
        <div class="dialog-title">{{ isEdit ? '编辑学生' : '新增' }}学生</div>
        <div class="form-item">
          <label>中文姓名</label>
          <input v-model="form.chineseName" />
        </div>
        <div class="form-item">
          <label>英文姓名</label>
          <input v-model="form.englishName" />
        </div>
        <div class="form-item">
          <label>性别</label>
          <select v-model="form.gender">
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div class="form-item">
          <label>爱好</label>
          <input v-model="form.hobby" />
        </div>
        <div class="form-item">
          <label>班级</label>
          <input v-model="form.className" />
        </div>

        <div class="dialog-btn">
          <button class="save-btn" @click="saveForm">保存</button>
          <button class="cancel-btn" @click="closeDialog">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 查询条件
const searchName = ref('')
const searchClass = ref('')

// 弹窗
const showDialog = ref(false)
const isEdit = ref(false)
const editId = ref(null)

// 表单
const form = ref({
  chineseName: '',
  englishName: '',
  gender: '男',
  hobby: '',
  className: '中一班',
  avatar: ''
})

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
  }
])

// 过滤查询
const filterList = computed(() => {
  return studentList.value.filter(item => {
    const nameMatch = item.chineseName.includes(searchName.value)
    const classMatch = item.className.includes(searchClass.value)
    return nameMatch && classMatch
  })
})

// 查询
const handleSearch = () => {}

// 打开新增
const openAdd = () => {
  isEdit.value = false
  form.value = {
    chineseName: '',
    englishName: '',
    gender: '男',
    hobby: '',
    className: '中一班',
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=default"
  }
  showDialog.value = true
}

// 打开编辑
const openEdit = (row) => {
  isEdit.value = true
  editId.value = row.id
  form.value = { ...row }
  showDialog.value = true
}

// 关闭弹窗
const closeDialog = () => {
  showDialog.value = false
}

// 保存
const saveForm = () => {
  if (isEdit.value) {
    // 编辑
    const index = studentList.value.findIndex(item => item.id === editId.value)
    if (index > -1) {
      studentList.value[index] = { ...form.value, id: editId.value }
    }
  } else {
    // 新增
    const newId = Math.max(...studentList.value.map(x => x.id)) + 1
    studentList.value.unshift({ ...form.value, id: newId })
  }
  showDialog.value = false
}

// 删除
const handleDel = (id) => {
  if (confirm('确定要删除该学生吗？')) {
    studentList.value = studentList.value.filter(item => item.id !== id)
  }
}
</script>

<style scoped>
.student-edit-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
}

.page-top {
  flex-shrink: 0;
  margin-bottom: 20px;
}

.page-title {
  padding: 18px 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  font-size: 20px;
  color: #0f3867;
  margin-bottom: 20px;
  margin-top:10px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 16px;
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
  font-size: 14px;
  color: #333;
}

.search-item input {
  width: 200px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #dde2eb;
  border-radius: 8px;
  font-size: 14px;
}

.search-btn {
  padding: 6px 16px;
  background: #4096ee;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.add-btn {
  padding: 6px 16px;
  background: #67c23a;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* 表格区域 */
.table-wrap {
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
/* 纤细滚动条 */
.table-wrap::-webkit-scrollbar {
  width: 5px;
}
.table-wrap::-webkit-scrollbar-thumb {
  background: #c1cddb;
  border-radius: 5px;
}
.table-wrap::-webkit-scrollbar-track {
  background: transparent;
}

.stu-table {
  width: 100%;
  border-collapse: collapse;
}

.stu-table th,
.stu-table td {
  border-bottom: 1px solid #eee;
  text-align: center;
  padding: 12px;
  font-size: 14px;
}

.stu-table th {
  background: #f5f7fa;
  color: #333;
}

.table-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #b8e8ff;
}

.edit-btn {
  padding: 4px 10px;
  background: #4096ee;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-right: 6px;
  cursor: pointer;
}

.del-btn {
  padding: 4px 10px;
  background: #f56c6c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* 弹窗 */
.dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.dialog {
  width: 460px;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
}

.dialog-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #0f3867;
  text-align: center;
}

.form-item {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}

.form-item label {
  width: 90px;
  font-size: 14px;
}

.form-item input,
.form-item select {
  flex: 1;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #dde2eb;
  border-radius: 8px;
}

.dialog-btn {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.save-btn {
  padding: 8px 24px;
  background: #4096ee;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.cancel-btn {
  padding: 8px 24px;
  background: #ccc;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
