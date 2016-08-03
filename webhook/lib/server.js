'use strict'

const Hapi = require('hapi');
const PORT = require('../../const').PORT;

module.exports = (webhook) => {
    
    const server = new Hapi.Server();
    server.connection({port: PORT});

    server.route({
        method: 'POST',
        path:'/',
        handler: (request, reply) => {
            reply().code(204);
            webhook(request);
        }
    });

    server.route({
        method: 'POST',
        path:'/botstudio',
        handler: (request, reply) => {
            reply().code(204);
            webhook(request);
        }
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, reply) => {
            reply().code(204);
            webhook(request);
        }
    });

    server.start(() => {
        console.log('Server running at:', server.info.uri);
    });
}