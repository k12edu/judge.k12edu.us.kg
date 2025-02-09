import { createRouter, createWebHistory } from 'vue-router'
import home_page from '@/components/home_page.vue'
import announcement_page from '@/components/announcement/announcement_page.vue'
import problem_list_page from '@/components/problem_list/problem_list_page.vue'
import message_board_page from '@/components/message_board/message_board_page.vue'
import rank_board_page from '@/components/rank_board/rank_board_page.vue'
import profile_page from '@/components/profile/profile_page.vue'
import login_page from '@/components/login/login_page.vue'
import problem_page from '@/components/problem_list/problem_page.vue'
import chat_page from '@/components/message_board/chat_page.vue'
import problem_article_page from '@/components/message_board/problem_article_page.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home_page
  },
  {
    path: '/announcement',
    name: 'announcement',
    component: announcement_page
  },
  {
    path: '/problem_article_list',
    name: 'problem_article_plist',
    component: problem_article_page
  },
  {
    path: '/problem_list',
    name: 'problem_list',
    component: problem_list_page
  },
  {
    path: '/problem',
    name: 'problem_page',
    component: problem_page
  },
  {
    path: '/forum',
    name: 'forum',
    component: message_board_page
  },
  {
    path: '/forum/disscussion',
    name: 'disscussion',
    component: chat_page
  },
  {
    path: '/rank',
    name: 'rank',
    component: rank_board_page
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile_page
  },
  {
    path: '/login',
    name: 'login',
    component: login_page
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
