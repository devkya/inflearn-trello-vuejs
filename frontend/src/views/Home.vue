<template>
	<div>
		home
		<div>
			Board List :
			<div v-if="loading">Loading...</div>
			<div v-else>
				API Result :
				<div v-for="board in boards" :key="board.id">{{ board }}</div>
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
import { board } from '@/api';

export default {
	components: {},
	data() {
		return {
			loading: false,
			boards: [],
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
			board
				.fetch()
				.then(data => {
					this.boards = data;
				})
				.finally(() => {
					this.loading = false;
				});
		},
	},
};
</script>
