import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/MainPage';

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/gallery',
        component: () => import('./pages/Gallery')
    }
    
]

export default new Router({
    mode: 'history',
    routes
})