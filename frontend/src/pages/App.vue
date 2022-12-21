<template>
	<div id="app">
		<NavBar></NavBar>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue';
export default {
	components: { NavBar },
	data() {
		return {};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
