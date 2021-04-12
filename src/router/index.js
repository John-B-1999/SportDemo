import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import rate from '@/components/module/Rate.vue'
import mainPage from '@/components/page/mainPage.vue'
import myHomePage from '@/components/page/myHomePage.vue'
import trainPage from '@/components/page/trainPage.vue'
import planPage from '@/components/page/planPage.vue'
import Amap from '@/components/base/map.vue'
import video from '@/components/module/plan/video.vue'
import loginPage from '@/components/page/loginPage.vue'
import registerPage from '@/components/page/registerPage.vue'

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
      name: 'planPage',
      component: planPage,
      children:[
          {
            path:"video",
            name:"video",
            component:video
          }
      ]
    },
    {
      path: '/main',
      name: 'mainPage',
      component: mainPage
    },
    {
      path:'/login',
      name:'login',
      component:loginPage
    },
    {
      path:'/register',
      name:'register',
      component:registerPage
    }
  ]
})
