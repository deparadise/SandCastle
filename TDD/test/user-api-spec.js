// LYNDA.COM: https://www.lynda.com/Node-js-tutorials/Test-Driven-Development-Node-js/383527-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3amocha.js%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2

/*jshint esversion: 6 */ //   http://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const

require('co-mocha');
var should = require('should');
var fs = require('co-fs');
var api = require('../user-web.js');
var request = require('co-supertest').agent(api.listen());

// DATA TESTS
var data = require('../user-data.js');

before(function *(){
	yield fs.writeFile('./users.json', '[]');
});


describe('user data', function() {
	it('should have +1 user count after saving', function* () {
		var users = yield data.users.get();

		console.log('users stands @', users.length);

		yield data.users.save({
			name: 'John'
		});

		var newUsers = yield data.users.get();

		newUsers.length.should.equal(users.length + 1);
	});
});


// WEB TESTS


describe('user web', function(){
	it('should have +1 user count after saving', function* () {
		var users = (yield request.get('/user').expect(200).end()).body;

		yield data.users.save({name:'John'});

		var newUsers = (yield request.get('/user').expect(200).end()).body;

		newUsers.length.should.equal(users.length + 1);
	});
});