
var assert = require('chai').assert,
	request = require('supertest'),
	expect = require('chai').expect,
	chai = require('chai'),
	chaiHttp = require('chai-http');

chai.use(chaiHttp);

var url = 'http://pokeapi.co';


describe('Teste - Contest types', function () {

	it('/Contest types ', function (done) {

		chai.request(url)
//  .get('/')
//		request(url)


			.get('/api/v2/move/1')

			.end(function (err, res) {
				assert.isNull(err);
				assert.equal(res.status, 200);
				assert.isNotNull(res.body);
				assert.equal(res.body.id, 1);
				assert.equal(res.body.name, 'pound');
				
				done();
			});

	});


});