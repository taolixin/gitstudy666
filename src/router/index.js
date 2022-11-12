import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FoodView from '../views/FoodView.vue'
import LoginView from '../views/LoginView.vue'
import ManageView from '../views/ManageView.vue'
import OrderView from '../views/OrderView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/food',
    name: 'food',
    component: FoodView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/manage',
    name: 'manage',
    component: ManageView
  },
  {
    path: '/order',
    name: 'order',
    component: OrderView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
