import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Privacy from './views/Privacy.vue'
import Term from './views/Term.vue'
import Privacys from './views/En/Privacys.vue'
import Terms from './views/En/Terms.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/term',
      name: 'term',
      component: Term
    },
    {
      path: '/En/privacy',
      name: 'privacys',
      component: Privacys
    },
    {
      path: '/En/Term',
      name: 'terms',
      component: Terms
    },
  ]
})
