import Vue from 'vue'
import Router from 'vue-router'
import mhead from '@/components/mhead'
import bodyr from '@/components/bodyr'
import fd from '@/components/fd'
import home from '@/components/childv/home'
import music from '@/components/childv/music'
import videor from '@/components/childv/videor'
import mv from '@/components/childv/mv'
import login from '@/components/childv/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
                
    },{
      path:'/music',
      component: music
    },
    {
      path:'/videor',
       component:videor

    },{
      path:'/mv',
      component: mv
    },{
      path:'/login',
      component: login
    }

  ]
})
