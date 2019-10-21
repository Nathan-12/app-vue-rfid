import Vue from 'vue';
import Router from 'vue-router';
import paths from '././paths';

Vue.use(Router);

const router = new Router({
    base: '/',
    mode: 'history',
    linkActiveClass: 'active',
    routes: paths
});

export default router;
