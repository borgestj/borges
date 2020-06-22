import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Home},
  { path: '/projects', name: 'Projects', component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue') },
  { path: '/resume', name: 'Resume', component: () => import(/* webpackChunkName: "projects" */ '../views/Resume.vue') },
  { path: "*", redirect: "/" },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
