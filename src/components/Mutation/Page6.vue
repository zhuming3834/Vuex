<template id="template6">
	<div>
		<h2>我是第二个页面</h2>
		<p>
			<input placeholder="请输入新的名字" v-model="input_value" class="input_name" />
			<button v-on:click="changeGoodsName">修改商品名字</button>
		</p>
		<ul class="ul_list page2">
			<li v-for="item in dataList">
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
        		input_value: ''
        }
      },
      computed: {
		dataList() {
			return this.$store.state.goodsList;
		}
      },
      methods: {
      	// 修改商品名字
		changeGoodsName: function(){
			this.$store.commit('changeName',this.input_value);
		},
      }
   }
</script>

<style>
</style>