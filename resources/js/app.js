

// require('./bootstrap');

/**
 * Parsing and Substantiation Object for paths
 * Object returns the path with the parameters by name
 * Arguments are the route "name" and its "parameter"
 */
import route from './route.js'; // import some module into script

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
fifth: "fifth/form/{parameter?}" }

*/


