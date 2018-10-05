import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import Coupons from '@/components/pages/Coupons'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    routes: [{
            path: '*',
            redirect: 'login'

        },
        // {
        //     path: '/',
        //     name: 'HelloWorld',
        //     component: HelloWorld,
        //     meta: { requiresAuth: true }
        // },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/admin',
            name: 'Dashboard',
            component: Dashboard,
            children: [{
                path: 'Products',
                name: 'Products',
                component: Products,
                meta: { requiresAuth: true }
            }, {
                path: 'coupons',
                name: 'Coupons',
                component: Coupons,
                meta: { requiresAuth: true }
            }]
        }
    ]
})