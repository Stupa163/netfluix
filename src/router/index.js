import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";
import Latest from "../views/Latest";
import Details from "../views/Details";
import Search from "../views/Search";
import store from '../store/index';

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
        component: Latest,
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/movie/:id',
        name: 'Details',
        component: Details,
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: {
            requiredAuth: true
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    console.log(`📍 De ${from.name} vers ${to.name}`);
    if(to.matched.some(record => record.meta.requiredAuth)){
        if(!store.getters.isLogged){
            next({name: 'Home'})
        } else {
            next()
        }
    }else{
        next()
    }
})

export default router
