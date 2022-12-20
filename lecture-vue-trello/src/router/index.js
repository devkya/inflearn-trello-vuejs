import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/pages/App.vue'

Vue.use(VueRouter)

const Login = { template : '<div>Login Page</div>'}
const NotFound = { template : '<div>Page Not Found</div>'}

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/login',
    name: 'login',
    component : Login
  },
  {
    path: '/*',
    name: 'Page Not Found',
    component : NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
