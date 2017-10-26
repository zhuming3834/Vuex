// 安装 Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleA = {
	state: {
		moduleAList: [
			{
    				name: 'A赣州橙子',
    				price: '8.8'
    			},
    			{
    				name: 'A新疆哈密瓜',
    				price: '2.0'
    			},
    			{
    				name: 'A山东大枣',
    				price: '3.2'
    			},
    			{
    				name: 'A阳澄湖大闸蟹',
    				price: '10.0'
    			}
		]
	},
	// 每个模块里面都可以自己的 state， getters，mutations，actions
//	getters: { ... },
//	mutations: { ... },
//	actions: { ... }
}
const moduleB = {
	state: {
		moduleBList: [
			{
    				name: 'B赣州橙子',
    				price: '8.8'
    			},
    			{
    				name: 'B新疆哈密瓜',
    				price: '2.0'
    			},
    			{
    				name: 'B山东大枣',
    				price: '3.2'
    			},
    			{
    				name: 'B阳澄湖大闸蟹',
    				price: '10.0'
    			}
		]
	},
	getters: {
		// 商品价格减半
		moduleBgoodsPriceDiscount: state => {
			var moduleBgoodsPriceDiscount = state.moduleBList.map(function(item){
				return {
					price: item.price / 2,
					name: item.name
				}
			})
			return moduleBgoodsPriceDiscount;
		}
	}
}


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
	},
	getters: {
		// 商品价格加倍
		goodsPriceDoubble: state => {
			var goodsPriceDoubble = state.goodsList.map(function(item){
				return {
					price: item.price * 2,
					name: item.name
				}
			})
			return goodsPriceDoubble;
		}
	},
	mutations: {
		// 商品价格减半  
		goodsPriceDiscount: state => {
			var goodsPriceDiscount = state.goodsList.map(function(item){
				return {
					price: item.price / 2,
					name: item.name
				}
			})
			state.goodsList = goodsPriceDiscount;
		},
		// 统一修改商品名字
		changeName: (state,payload) => {
			var changeName = state.goodsList.map(function(item){
				return {
					price: item.price,
					name: payload // 接收参数
				}
			})
			state.goodsList = changeName;
		}
	},
	actions: {
		// 商品半价
		disCount (context) {
			context.commit('goodsPriceDiscount');
		},
		// 异步的商品半价
		disCountAsync ({ commit }) {
			setTimeout(() => {
			  commit('goodsPriceDiscount');
			}, 2000)
		},
		// 统一修改商品名字
		actionsChangeName (context,payload){
			// 载荷形式
			// context.commit('changeName',payload);
			
			// 对象形式
			context.commit('changeName',payload.payload);
		}
	},
	modules: {
		a: moduleA,
		b: moduleB
	}
})
