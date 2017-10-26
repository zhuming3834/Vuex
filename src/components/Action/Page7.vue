<template>
	<div>
		<h2>我是第一个页面</h2>
		<p>
			<button v-on:click="discountPrice">同步商品价格减半</button>
		</p>
        <p>
			<button v-on:click="discountPriceAsync">异步商品价格减半</button>
		</p>
		<ul class="ul_list">
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
        }
      },
      computed: {
		dataList() {
			return this.$store.state.goodsList;
	  }
      },
      methods: {
      	// 同步商品价格减半
		discountPrice: function(){
            this.$store.dispatch('disCount');
        },
        // 异步商品价格减半
        discountPriceAsync: function(){
            this.$store.dispatch('disCountAsync');
        }
      }
   }
</script>

<style>
</style>