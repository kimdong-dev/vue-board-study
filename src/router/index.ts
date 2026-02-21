import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardListView from '../views/BoardListView.vue' // 주석1
import BoardDetailView from '../views/BoardDetailView.vue'
import BoardCreateView from '../views/BoardCreateView.vue'
import BoardEditView from '../views/BoardEditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/board',
      name: 'board-list',
      component: BoardListView,
    },
    {
      path: '/board/create',
      name: 'board-create',
      component: BoardCreateView,
    },
    {
      path: '/board/:id',
      name: 'board-detail',
      component: BoardDetailView,
    },
    {
      path: '/board/:id/edit',
      name: 'board-edit',
      component: BoardEditView,
    },
  ],
})

export default router
