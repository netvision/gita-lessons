import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import LessonView from './views/LessonView.vue'
import './style.css'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/lesson/:id', component: LessonView, name: 'lesson' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
