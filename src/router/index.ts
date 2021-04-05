import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from 'vue-auto-routing'
import { createRouterLayout } from 'vue-router-layout'

Vue.use(VueRouter)

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

// routes.push({
//   path: '*',
//   redirect: '/'
// })

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})
