var routes = require('routes.json');

export default function () {

    var args = Array.prototype.slice.call(arguments);
    var name = args.shift();

    if(routes['name'] === undefined) {
        console.log('Error ( there is not such a route )');
    } else {
        return '/' + routes['name']
            .splice('/')
            .map(function(str) {
                if(str[0] == '{') {
                    return args.shift();
                } else {
                    return str;
                }
            }).join('/');
    }

}

