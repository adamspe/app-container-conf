var nconf = require('nconf');

nconf.env();

if(process.env.APP_CONTAINER_CONF) {
    nconf.file({file: process.env.APP_CONTAINER_CONF});
}

module.exports = nconf;
