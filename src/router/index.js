import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
   		{
            path: '/',
            redirect: '/page1'
        },
        // 没有使用vuex
         {
            path: '/page1', // 页面1
            component: resolve => require(['../components/Page1.vue'], resolve)
        },
        {
        		path: '/page2',// 页面2
			component: resolve => require(['../components/Page2.vue'], resolve)
        },
        // 有使用vuex  State
         {
            path: '/page3', // 页面1
            component: resolve => require(['../components/Page3.vue'], resolve)
        },
        {
        		path: '/page4',// 页面2
			component: resolve => require(['../components/Page4.vue'], resolve)
        }
  ]
})
