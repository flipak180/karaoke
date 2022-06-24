import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/player',
            name: 'player',
            component: () => import('../pages/PlayerPage.vue')
        },
        {
            path: '/record',
            name: 'record',
            component: () => import('../pages/RecorderPage.vue')
        }
    ]
})

export default router
