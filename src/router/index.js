import Vue from 'vue'
import Router from 'vue-router'
import mhead from '@/components/mhead'
import bodyr from '@/components/bodyr'
import fd from '@/components/fd'
import home from '@/components/childv/home'
import music from '@/components/childv/music'
import video from '@/components/childv/video'
import mv from '@/components/childv/mv'
import login from '@/components/childv/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
                
    },{
      path:'/music',
      component: music
    },
    {
      path:'/video',
       component:video

    },{
      path:'/mv',
      component: mv
    },{
      path:'/login',
      component: login
    }

  ]
})
