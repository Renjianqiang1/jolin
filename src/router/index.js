import Vue from 'vue'
import Router from 'vue-router'
import head from '@/components/head'
import bodyr from '@/components/bodyr'
import fd from '@/components/fd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'body',
      components: 
                { 'mhead':head,
                   'bodyr':bodyr,
                  'fd':fd,
                }
    }
  ]
})
