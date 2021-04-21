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
import running from '@/components/module/train/running.vue'
import mapA from '@/components/module/train/map.vue'

Vue.use(Router)


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
      component: trainPage,
      children:[
        {
          path:"running",
          name:"running",
          component:running
        },
        {
          path:"mapA",
          name:"mapA",
          component:mapA
        }
      ]
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
