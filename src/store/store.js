// 安装 Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
	state: {
		goodsList: [
			{
    				name: '赣州橙子',
    				price: '8.8'
    			},
    			{
    				name: '新疆哈密瓜',
    				price: '2.0'
    			},
    			{
    				name: '山东大枣',
    				price: '3.2'
    			},
    			{
    				name: '阳澄湖大闸蟹',
    				price: '10.0'
    			}
		]
	}
})
