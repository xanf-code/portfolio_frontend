import { createRouter, createWebHistory } from 'vue-router'
//Changed View
import Intro from '../views/Intro.vue'

const routes = [
    {
        path: '/',
        name: 'Intro',
        component: Intro,
        meta: {
            title: "Portfolio | Darshan Aswath"
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router