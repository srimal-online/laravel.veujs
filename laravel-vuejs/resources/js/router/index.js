import { createRouter, createWebHistory } from 'vue-router';

import productIndex from '../components/products/index.vue';

const router = [
    {
        path:'/',
        component: productIndex
    },
    {
        path: '/:pathMatch(.*)*',
        component:notFound

    }
]

const routers = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
