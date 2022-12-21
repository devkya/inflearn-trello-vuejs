<template>
	<div>
		Board

		<div v-if="loading">loading board ...</div>
		<div v-else>
			<div>BID : {{ bid }}</div>
			<router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
			<router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
		</div>

		<hr />
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			bid: 0,
			loading: false,
		};
	},
	setup() {},
	created() {
		this.fetchData();
	},
	mounted() {},
	unmounted() {},
	methods: {
		fetchData() {
			this.loading = true;
			setTimeout(() => {
				this.bid = this.$route.params.bid;
				this.loading = false;
			}, 1000);
		},
	},
};
</script>
