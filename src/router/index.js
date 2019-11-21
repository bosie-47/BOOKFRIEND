import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('../components/login')
const register = () => import('../components/register')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/register',
    component: register
  }
]

const router =new VueRouter({
  mode: 'history',
  routes
})

export default router