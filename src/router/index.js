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
            component: resolve => require(['../components/No_Vuex/Page1.vue'], resolve)
        },
        {
        		path: '/page2',// 页面2
			component: resolve => require(['../components/No_Vuex/Page2.vue'], resolve)
        },
        // 有使用vuex  State
         {
            path: '/page3', // 页面1
            component: resolve => require(['../components/State_Getter/Page3.vue'], resolve)
        },
        {
        	path: '/page4',// 页面2  Getter
			component: resolve => require(['../components/State_Getter/Page4.vue'], resolve)
        },
        // 有使用vuex  Mutation
        {
            path: '/page5', // 页面1 Mutation
            component: resolve => require(['../components/Mutation/Page5.vue'], resolve)
        },
        {
            path: '/page6', // 页面2 Mutation
            component: resolve => require(['../components/Mutation/Page6.vue'], resolve)
        },
  ]
})
