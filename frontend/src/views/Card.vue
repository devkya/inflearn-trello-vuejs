<template>
	<div>
		Card
		<div v-if="loading">loading card ...</div>
		<div v-else>cid : {{ cid }}</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			cid: 0,
			loading: false,
		};
	},
	setup() {},
	created() {},
	watch: {
		$route: {
			handler: 'fetchData',
			immediate: true,
		},
	},
	mounted() {},
	unmounted() {},
	methods: {
		fetchData() {
			this.loading = true;
			setTimeout(() => {
				this.cid = this.$route.params.cid;
				this.loading = false;
			}, 1000);
		},
	},
};
</script>
