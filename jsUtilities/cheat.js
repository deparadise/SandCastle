// My cheat utils

// Test if given object is an array and returns same arr, if not the object placed in a new arr and returned
var confirmArray = function(testObject) {
	if (testObject.length === undefined) {
		testObject = [testObject];
		return testObject;
	}else{
		return testObject;
	}
};