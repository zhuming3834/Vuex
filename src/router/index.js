import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
   		{
            path: '/',
            redirect: '/page1'
        },
         {
            path: '/page1', // 页面1
            component: resolve => require(['../components/Page1.vue'], resolve)
        },
        {
        		path: '/page2',// 页面2
			component: resolve => require(['../components/Page2.vue'], resolve)
        }
  ]
})
