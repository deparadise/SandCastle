console.log('My Generator Study!');


// "function*" is the syntax to declare a generator
var myGenerator = function* () {
	yield;
};

// Calling the function does not run the generator
// an iterator is produced