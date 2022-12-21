import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Board from '@/views/Board';
import Card from '@/views/Card';
import NotFound from '@/views/NotFound';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/b/:bid',
		name: 'board',
		component: Board,
		children: [
			{
				path: 'c/:cid',
				component: Card,
			},
		],
	},
	{
		path: '/*',
		name: 'not-found',
		component: NotFound,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
