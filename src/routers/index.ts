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
	{
		path: '/MeetingIntroduction',
		name: 'MeetingIntroduction',
		component: () => import('views/MeetingIntroduction.vue')
	},
	{
		path: '/MeetingSchedule',
		name: 'MeetingSchedule',
		component: () => import('views/MeetingSchedule.vue')
	},
	{
		path: '/GuestIntroduction',
		name: 'GuestIntroduction',
		component: () => import('views/GuestIntroduction.vue')
	},
	{
		path: '/TrafficPlan',
		name: 'TrafficPlan',
		component: () => import('views/TrafficPlan.vue')
	},
	{
		path: '/MeetingGuide',
		name: 'MeetingGuide',
		component: () => import('views/MeetingGuide.vue')
	},
	{
		path: '/ContactUs',
		name: 'ContactUs',
		component: () => import('views/ContactUs.vue')
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