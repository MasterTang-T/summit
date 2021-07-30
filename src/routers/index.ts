import { createRouter, createWebHistory, } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('views/Home.vue')
	},
	{
		path: '/form',
		name: 'AppForm',
		component: () => import('views/AppForm.vue')
	},

	// 所有未定义路由，全部重定向到404页
	{
		path: "/:catchAll(.*)",
		name: "404",
		component: import('views/NotFound.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router