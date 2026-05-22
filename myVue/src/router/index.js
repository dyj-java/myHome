import { createRouter, createWebHistory } from 'vue-router'

import Login from '../login.vue'
import HomeView from '../views/HomeView.vue'
import StudentList from '../views/StudentList.vue'
import Account from '../views/Account.vue'
import ClassSet from '../views/ClassSet.vue'
import StudentEdit from '../views/StudentEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: HomeView,
      // 进到home，默认加载子页面：学生列表
      redirect: '/home/student',
      // 嵌套子路由，只在Home右侧router-view里渲染
      children: [
        { path: 'student', component: StudentList },
        { path: 'account', component: Account },
        { path: 'classSet', component: ClassSet },
        { path: 'studentEdit', component: StudentEdit }
      ]
    }
  ]
})

export default router
