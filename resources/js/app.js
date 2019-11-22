
// require('./bootstrap');


/* * * * * * Route Passing Mechanism * * * * * * */
/**
 * Parsing and Substantiation Object for paths
 * Object returns the path with the parameters by name
 * Arguments are the route "name" and its "parameter"
 */
import route from './route.js'; // import some module into script

if (window.location.href.split('/').pop() === 'front_routing') {
    /**
     * Json Object of all routes (completed after "php artisan route:json")
     */
    var routes = require('./routes.json'); // import the file content

    // Check the Exception to be throwing on "fake" route name
    console.log(route('fake', ['PARAM_FAKE']));

    // Check GET with parameter
    console.log(route('third', ['PARAM_GET']));

    // Check POST with parameter
    console.log(route('fourth', ['PARAM_POST']));

    // Show the Json Object-list of all
    console.log(routes);
    /*
    Object {
        "": "api/user",
        welcome: "/",
        first: "first/path/method/get",
        second: "second/path/method/post",
        third: "third/path/{param?}/get/method",
        fourth: "fourth/path/{param?}/post/method",
        fifth: "fifth/form/{parameter?}"
    }
    */
}

/* * * * * * * Front-End Scripts Localization * * * * * * */
/**
 *  The Laravel-JS-Localization extension with Land.js module usage
 */
import Lang from './lang';

if (window.location.href.split('/').pop() === 'localization') {
    console.log(Lang);
    console.log(Lang.get('auth.failed'));
    console.log(Lang.get('testing.greeting'));
    console.log(Lang.get('testing.warning'));
    console.log(Lang.get('testing.wildcard', {name: 'Joe'}));
    console.log(Lang.get('testing.email', {email: 'address@mail.com'}));
    console.log(Lang.get('testing.email')); // missed wildcard will have return :wildcard
    console.log(Lang.setLocale('es')); // change the current location
    console.log(Lang.get('testing.greeting')); // still reachable key
    console.log(Lang.has('testing.foo')); // check if key exists
    console.log(Lang.choice('testing.plural', 1, {name: 'Report'})); // plural transition
    console.log(Lang.choice('testing.plural', 10)); // plural transition
}


/* * * * * * * VueJS Framework usage * * * * * * */

// Examples from Laravel 5.*
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

window.Vue = require('vue');

// Router Library "VueRouter"
import VueRouter from 'vue-router';

// Concrete VueRouter Instance (Own Router)
import UsersRouter from './UsersRouter';

// App Root Component ( Widget ) for this Route
import Users from './components/Users.vue';

// Apply the Router Library
Vue.use(VueRouter);

if (window.location.href.split('/').pop() === 'vue_js') {

    // Vue Logic Launcher
    let app = new Vue({
        el: '#app',
        render: widget => widget( Users ),
        UsersRouter
    });

}



