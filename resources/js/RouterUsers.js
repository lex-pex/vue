
// Router Library
import VueRouter from 'vue-router';
// Widget Component Users
import Users from './components/Users.vue';

export default new VueRouter({
    routes: [
        {
            path: '/vue',
            component: Users
        }
    ],
    mode: 'history'
});

