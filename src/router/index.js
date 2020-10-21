import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import rate from '@/components/module/Rate.vue'
import mainPage from '@/components/page/mainPage.vue'
import loginPage from '@/components/page/loginPage.vue'
import registerPage from '@/components/page/registerPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/myhome',
      name: 'registerPage',
      component: registerPage
    },
    {
      path: '/main',
      name: 'mainPage',
      component: mainPage
    }
  ]
})
