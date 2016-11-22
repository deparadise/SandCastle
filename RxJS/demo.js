// Learning from...
// https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/creating_and_subscribing_to_simple_observable_sequences.html

console.log('My RxJS Sand Castle!');


// https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/creating_and_subscribing_to_simple_observable_sequences.html#creating-a-sequence-from-scratch
// var source = Rx.Observable.create(function (observer) {
// 	// Yield a single value and complete
// 	observer.onNext(42);
// 	observer.onCompleted();

// 	// Any cleanup logic might go here
// 	return function() {
// 		console.log('disposed');
// 	};
// });


// var subscription = source.subscribe(
// 	// on next
// 	function(x) {
// 		console.log('onNext: %s', x);
// 	},
// 	// on Error
// 	function(e) {
// 		console.log('onError: %s', e);
// 	},
// 	// on completed
// 	function() {
// 		console.log('COMPLETED');
// 	}
// );

// subscription.dispose();

/// My take

var source = Rx.Observable.create(function (observer) {
	// Yield a single value and complete
	//observer.onNext(42);
	//observer.onCompleted();

	// Any cleanup logic might go here
	// return function() {
	// 	console.log('disposed');
	// };
});


var subscription = source.subscribe(
	// on next
	function(x) {
		console.log('onNext: %s', x);
	},
	// on Error
	function(e) {
		console.log('onError: %s', e);
	},
	// on completed
	function() {
		console.log('COMPLETED');
	}
);

subscription.dispose();
