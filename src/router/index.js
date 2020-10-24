import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import Latest from "../views/Latest";
import Details from "../views/Details";
import Search from "../views/Search";

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
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
