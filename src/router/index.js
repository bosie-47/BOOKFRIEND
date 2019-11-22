import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('../components/login')
const register = () => import('../components/register')
const PublishPage = () => import('../components/PublishPage')
const Myself = () => import('../components/Myself')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/publish',
    component: PublishPage
  },
  {
    path:'/myself',
    component:Myself
  },
]

const router =new VueRouter({
  mode: 'history',
  routes
})

export default router