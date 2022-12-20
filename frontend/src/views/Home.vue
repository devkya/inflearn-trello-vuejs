<template>
	<div>
		home
		<div>
			Board List :
			<ul>
				<li>
					<router-link to="/b/1">Board 1</router-link>
				</li>
				<li>
					<router-link to="/b/2">Board 2</router-link>
				</li>
				<li>
					<router-link to="/b/3">Board 3</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			sampleData: '',
		};
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {},
};
</script>
