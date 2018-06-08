import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import login from '@/components/login'
import register from '@/components/register'
import Profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
