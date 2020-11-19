import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import  music from '@/components/music'
import  seek from '@/components/seek'
import  musicok from '@/components/musicok'
import  plaza from '@/components/plaza'
import  bf from '@/components/bf'
import  zuijin from '@/components/zuijin'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/seek',
      name: 'seek',
      component: seek
    },
    {
      path: '/musicok',
      name: 'musicok',
      component: musicok
    },
    {
      path: '/plaza',
      name: 'plaza',
      component: plaza
    },
    {
      path: '/bf',
      name: 'bf',
      component: bf
    },
    {
      path: '/zuijin',
      name: 'zuijin',
      component: zuijin
    },

  ]
})
