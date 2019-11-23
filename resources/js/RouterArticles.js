
// Router Library
import VueRouter from 'vue-router';
// Widget Component Users
import Articles from './components/Articles.vue';

export default new VueRouter({
    routes: [
        {
            path: '/spa',
            component: Articles
        }
    ],
    mode: 'history'
});

