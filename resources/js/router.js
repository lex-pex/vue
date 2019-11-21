

import VueRouter from 'vue-router';
import Users from './components/Users.vue';

export default new VueRouter({
    routes: [
        {
            path: '/vue_js',
            component: Users
        }
    ],
    mode: 'history'
});

