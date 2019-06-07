
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
/* 
require('./bootstrap');

window.Vue = require('vue');
 */
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/* Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
 */
require('./bootstrap');

 import Vue from 'vue'
 import VueRouter from 'vue-router'
 import Homepage from './components/Homepage'
 import Read from './components/Read'
 import Create from './components/Create'
 import Update from './components/Update'

 Vue.use(VueRouter)

 const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/admin/dashboard',
            name: 'read',
            component: Read,
            props: true
        },
        {
            path: '/admin/create',
            name: 'create',
            component: Create,
            props: true
        },
        {
            path: '/admin/update',
            name: 'update',
            component: Update,
            props: true
        }
    ],
 });

 const app = new Vue({
    el: '#app',
    router,
    components: { Homepage },
 });