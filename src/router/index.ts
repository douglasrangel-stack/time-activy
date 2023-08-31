import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Activity from '../views/Activity.vue';
import Projects from '../views/Projects.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Activity',
        component: Activity
    },
    {
        path: '/projetos',
        name: 'Projects',
        component: Projects
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;