
var routes = require('./routes.json');

export default function () {

    // Avoid the changing in the mutable object (deep copy)
    var args = Array.prototype.slice.call(arguments);

    // Get the first argument witch is the "route name"
    var param = args.shift();

    // Throw an Exception to log on absent name, otherwise
    // Parse and substantiate params accordingly by "name"
    if(routes[param] === undefined) {

        console.log('Error ( there is not such a route )');

    } else {

        return '/' + routes[param]

            .split('/')

            .map( function(str) {

                if(str[0] === '{') {

                    return args.shift();

                } else {

                    return str;

                }

            }).join('/');

    }

}






