<template>
	<div>
		<h2>我是第二个页面</h2>
		<ul class="ul_list page2">
			<li v-for="item in list">
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
      	list() {
      		return this.$store.state.goodsList;
      	}
      },
   }
</script>

<style>
</style>