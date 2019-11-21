
let routes = require('./routes.json');

export default function () {

    // Avoid the changing in the mutable object (deep copy)
    let args = Array.prototype.slice.call(arguments);

    // Get the first argument witch is the "route name"
    let param_name = args.shift();

    // Throw an Exception to log on absent name, otherwise
    // Parse and substantiate params accordingly by "name"
    if(routes[param_name] === undefined) {
        console.log('Error ( there is not such a route )');
    } else {
        return '/'
            + routes[param_name]
            .split('/')
            .map( str => str[0] === "{" ? args.shift() : str )
            .join('/');
    }
}

/*
return '/' + routes[param]
.split('/')
.map( function(str) {
    if(str[0] === '{') {
        return args.shift();
    } else {
        return str;
    }
}).join('/');
*/





