var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ port: 3002 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (req, reply) {
        reply("Echo!");
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
