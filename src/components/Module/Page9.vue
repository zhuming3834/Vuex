<template>
	<div>
		<h2>Module</h2>
		<ul class="ul_list">
			<li v-for="item in moduleA">
				<p class="name">商品：{{item.name}}</p>
				<p class="price">价格：￥{{item.price}}</p>
			</li>
		</ul>
		<ul class="ul_list page2">
			<li v-for="item in moduleB">
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
      	// 调用模块A中的状态
		 moduleA() {
			return this.$store.state.a.moduleAList;
		 },
		 // 调用模块B中的getters
		 moduleB() {
			return this.$store.getters.moduleBgoodsPriceDiscount;
	  	}
      }
   }
</script>