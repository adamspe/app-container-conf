var should = require('should');

describe('Configuration',function(){
    var conf = require('../index');

    describe('app-container-conf',function(){
        it('database',function(done){
            var dbconf = conf.get('database');
            dbconf.should.have.property('host').and.equal('localhost');
            dbconf.should.have.property('port').and.equal(27017);
            dbconf.should.have.property('db').and.equal('my-db');
            dbconf.should.have.property('options');
            dbconf.options.should.have.property('user').and.equal('joe');
            dbconf.options.should.have.property('pass').and.equal('sesame');
            done();
        });
        it('api',function(done){
            var apiRoot = conf.get('resources:$apiRoot');
            apiRoot.should.equal('/api/v1');
            done();
        });
        it('env',function(done) {
            conf.get('APP_CONTAINER_CONF').should.equal('test/config.json');
            done();
        });
    });
});
