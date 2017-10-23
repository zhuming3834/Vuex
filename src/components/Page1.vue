<template>
	<div>
		<h2>我是第一个页面</h2>
		<ul class="ul_list">
			<li v-for="item in items">
				<p class="name">商品：{{item.name}}</p>
				<p class="price">价格：￥{{item.price}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
  export default {
   	 data() {
        return {
        		items: [
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
      },
//    computed: {
//    	list() {
//    		return this.$store.state.goodsList;
//    	}
//    },
   }
</script>

<style>
</style>