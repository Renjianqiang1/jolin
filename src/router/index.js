import Vue from 'vue'
import Router from 'vue-router'
import mhead from '@/components/mhead'
import bodyr from '@/components/bodyr'
import fd from '@/components/fd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'body',
      components: 
                { 'mhead':mhead,
                   'bodyr':bodyr,
                  'fd':fd,
                }
    }
  ]
})
