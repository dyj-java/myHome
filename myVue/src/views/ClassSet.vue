<template>
  <div class="page-wrap">
    <div class="page-top">
      <div class="page-title">班级设置</div>
      <div class="search-bar">
        <div class="search-item">
          <label>班级名称：</label>
          <input v-model="searchClassName" placeholder="请输入班级名称" />
        </div>
        <div class="search-item">
          <label>负责老师：</label>
          <input v-model="searchTeacher" placeholder="请输入老师姓名" />
        </div>
      </div>
    </div>

    <div class="content-wrap">
      <div class="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>班级名称</th>
              <th>年级</th>
              <th>负责老师</th>
              <th>人数</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in classList" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.className }}</td>
              <td>{{ item.grade }}</td>
              <td>{{ item.teacher }}</td>
              <td>{{ item.stuNum }}</td>
              <td :class="item.status === '正常' ? 'ok' : 'disable'">{{ item.status }}</td>
              <td class="btn-box">
                <button class="edit-btn">编辑</button>
                <button class="del-btn">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchClassName = ref('')
const searchTeacher = ref('')

const classList = ref([
  { id: 1, className: '中一班', grade: '中班', teacher: '王老师', stuNum: 28, status: '正常' },
  { id: 2, className: '中二班', grade: '中班', teacher: '李老师', stuNum: 30, status: '正常' },
  { id: 3, className: '大一班', grade: '大班', teacher: '张老师', stuNum: 32, status: '正常' },
  { id: 4, className: '小一班', grade: '小班', teacher: '刘老师', stuNum: 25, status: '禁用' },
])
</script>

<style scoped>
.page-wrap {
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
  font-size: 14px;
  color: #333;
}
.search-item input {
  width: 220px;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #dde2eb;
  border-radius: 8px;
  font-size: 14px;
}
.content-wrap {
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
}
.content-wrap::-webkit-scrollbar {
  width: 5px;
}
.content-wrap::-webkit-scrollbar-thumb {
  background: #c1cddb;
  border-radius: 5px;
}
.content-wrap::-webkit-scrollbar-track {
  background: transparent;
}
.table-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}
th {
  background: #f5f7fa;
  font-weight: 600;
  color: #333;
}
.ok {
  color: #67c23a;
}
.disable {
  color: #f56c6c;
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
</style>
