import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import Latest from "../views/Latest";
import Details from "../views/Details";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/latest',
        name: 'Latest',
        component: Latest
    },
    {
        path: '/movie/:id',
        name: 'Details',
        component: Details
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
