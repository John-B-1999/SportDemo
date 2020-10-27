import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import rate from '@/components/module/Rate.vue'
import mainPage from '@/components/page/mainPage.vue'
import loginPage from '@/components/page/loginPage.vue'
import registerPage from '@/components/page/registerPage.vue'
import myHomePage from '@/components/page/myHomePage.vue'
import trainPage from '@/components/page/trainPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/'
    },
    {
      path: '/',
      name: 'mainPage',
      component: mainPage,
      children:[
            {
              path: "rrrr",
              name: "rate",
              component: rate
            },
            {
              path: "hhhh",
              name: "HelloWorld",
              component: HelloWorld
            }
          ]
    },
    {
      path: '/myhome',
      name: 'myHomePage',
      component: myHomePage
    },
    {
      path: '/travel',
      name: 'trainPage',
      component: trainPage
    },
    {
      path: '/plan',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'mainPage',
      component: mainPage
    }
  ]
})
