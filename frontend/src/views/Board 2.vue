<template>
	<div>
		Board
		<div>BID : {{ bid }}</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			bid: 0,
		};
	},
	setup() {},
	created() {
		this.bid = this.$route.params.bid;
	},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
