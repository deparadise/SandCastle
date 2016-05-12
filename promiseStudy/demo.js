console.log('My play with Promises!');

if (jQuery) {
	console.log('jQuery is Loaded!');
}

// An ajax helper
var pullSomeData = function (fileName, resolve, reject) {
	$.ajax({
		method: 'GET',
		url: '../JSONprinter/generatedJSON/' + fileName,
		dataType: 'json',
		success: function(response) {
			//console.log('ajax success!:\n',response);
			console.log('AJAX response bang!: ', response.package.video.title);
			return resolve(response);
		},
		error: function(err) {
			console.log('ajax error!:\n',err);
			return reject(err);
		}
	});
};

// Actions
var extractTitle = function(data) {
	console.log('Title: ', data.package.video.title);
	return {
		vid: data.package.video.vendor_id
	};
};


// Construct a promise by constructor. This is a "Lifting" promise pattern

var makePromise = function(fileName) {
	// ES6 standard spec
	return new Promise(function executor(resolve, reject){
		pullSomeData(fileName, resolve, reject);
	});
};


//chappie_904_genTrans.json
//cloverfield_1651_genTrans.json
//danceCamp_1483_genTrans.json
//rhps_1151_genTrans.json

// Promise requests order
var f1 = makePromise('chappie_904_genTrans.json');
var f2 = makePromise('cloverfield_1651_genTrans.json');
var f3 = makePromise('danceCamp_1483_genTrans.json');
var f4 = makePromise('rhps_1151_genTrans.json');


// Flow Control (Keep readable!)
f1
.then(extractTitle)
.then(function(prevPromise){
	console.log('first prevPromise', prevPromise);
	return f2;
})
.then(extractTitle)
.then(function(prevPromise){
	console.log('second prevPromise', prevPromise);
	return f3;
})
.then(extractTitle)
.then(function(prevPromise){
	console.log('third prevPromise', prevPromise);
	return f4;
})
.then(extractTitle)
.then(function(prevPromise){
	console.log('forth prevPromise', prevPromise);
	console.log('COMPLETE!!!');
});

/// Watch console for event fire order!  wow!









