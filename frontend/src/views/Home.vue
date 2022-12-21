<template>
	<div>
		home
		<div>
			Board List :
			<div v-if="loading">Loading...</div>
			<div v-else>
				API Result :
				<pre>{{ apiRes }}</pre>
			</div>

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
import axios from 'axios';

export default {
	components: {},
	data() {
		return {
			loading: false,
			apiRes: '',
			error: '',
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
			axios
				.get('http://localhost:3000/health')
				.then(res => {
					console.log(res);
					this.apiRes = res.data;
				})
				.catch(err => {
					console.log(err);
					this.error = err.response.data;
				})
				.finally(() => {
					this.loading = false;
				});
		},
	},
};
</script>
