const hapi = require('hapi');
const inert = require('inert');
const server = new hapi.Server();
const env = require('env2')('./config.env');
const wreck = require('wreck');
const qs = require('querystring');
server.connection({
    port: '3000'
});
server.register(inert, (err) => {
    if (err)
        throw err

})
server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {

        reply.file("./views/index.html");
    }
});
server.route({
    method: 'GET',
    path: '/welcome',
    handler: (request, reply) => {
        wreck.post('https://github.com/login/oauth/access_token', {
            payload: {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                code: request.url.query.code
            }
        }, (err, res, payload) => {

            const full = qs.parse(payload.toString())
            const access_token = full.access_token;
            wreck.get('https://api.github.com/user?access_token=' + access_token, {
                headers: {'user-agent': 'node.js'}
            }, (err, res, payload) => {
            console.log(qs.parse(payload.toString()));

            });
        });

    }
});
server.route({
    method: 'GET',
    path: '/login',
    handler: (request, reply) => {

        reply.redirect('https://github.com/login/oauth/authorize?client_id=' + process.env.CLIENT_ID + '&redirect_uri=http://localhost:3000/welcome');
    }
});
server.start((err) => {
    if (err)
        throw err;
    console.log(`Server running at: ${server.info.uri}`);


});
