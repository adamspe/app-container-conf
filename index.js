var nconf = require('nconf');

nconf.env();

if(process.env.APP_CONTAINER_CONF) {
    nconf.file({file: process.env.APP_CONTAINER_CONF});
}

nconf.defaults({
    tmp: 'tmp/'
});

module.exports = nconf;
