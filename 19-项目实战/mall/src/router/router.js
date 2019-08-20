import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
  {
    path: '/home',
    component: () => import ('views/home/Home.vue')
  },
  {
    path: '/category',
    component: () => import ('views/category/Category.vue')
  },
  {
    path: '/shop',
    component: () => import ('views/shop/Shop.vue')
  },
  {
    path: '/me',
    component: () => import ('views/me/Me.vue')
  },
]

export default new Router({
  routes,
  // linkActiveClass:"active"
})
