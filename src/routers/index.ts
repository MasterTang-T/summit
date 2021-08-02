import { createRouter, createWebHistory, } from 'vue-router'

const routes = [

	{
		path: '/',
		redirect: '/geos'
	},
	{
		path: '/geos/',
		name: 'Home',
		component: () => import('views/Home.vue'),
	},
	{
		path: '/geos/form',
		name: 'AppForm',
		component: () => import('views/AppForm.vue')
	},
	{
		path: '/geos/MeetingIntroduction',
		name: 'MeetingIntroduction',
		component: () => import('views/MeetingIntroduction.vue')
	},
	{
		path: '/geos/MeetingSchedule',
		name: 'MeetingSchedule',
		component: () => import('views/MeetingSchedule.vue')
	},
	{
		path: '/geos/GuestIntroduction',
		name: 'GuestIntroduction',
		component: () => import('views/GuestIntroduction.vue')
	},
	{
		path: '/geos/TrafficPlan',
		name: 'TrafficPlan',
		component: () => import('views/TrafficPlan.vue')
	},
	{
		path: '/geos/MeetingGuide',
		name: 'MeetingGuide',
		component: () => import('views/MeetingGuide.vue')
	},
	{
		path: '/geos/ContactUs',
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