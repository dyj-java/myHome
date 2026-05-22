<template>
  <div class="page-wrap">
    <!-- 固定头部 -->
    <div class="page-top">
      <div class="page-title">账号管理</div>
      <!-- 查询条件 -->
      <div class="search-bar">
        <div class="search-item">
          <label>账号名称：</label>
          <input v-model="searchAccount" placeholder="请输入账号名称" />
        </div>
        <div class="search-item">
          <label>角色：</label>
          <input v-model="searchRole" placeholder="请输入角色" />
        </div>
      </div>
    </div>

    <!-- 内容滚动区 -->
    <div class="content-wrap">
      <div class="table-card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>账号</th>
              <th>用户名</th>
              <th>角色</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in accountList" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.account }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.role }}</td>
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

const searchAccount = ref('')
const searchRole = ref('')

const accountList = ref([
  { id: 1, account: 'admin', name: '超级管理员', role: '管理员', status: '正常' },
  { id: 2, account: 'teacher1', name: '王老师', role: '教师', status: '正常' },
  { id: 3, account: 'teacher2', name: '李老师', role: '教师', status: '禁用' },
  { id: 4, account: 'user1', name: '家长用户', role: '家长', status: '正常' },
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
/* 纤细滚动条 */
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
