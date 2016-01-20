// MY OBJECT NAVIGATION UTILITIES

// Searches through given array of objects for all with matching key
// Returns array of objects
var checkArrForObj = function(arr, lookingFor) {
	var foundObj = [];
	checkIndex = 0;

	do {
		var key = Object.keys(arr[checkIndex]);
		//console.log('key:', key);
		if (key[0] === lookingFor) {
			foundObj.push(arr[checkIndex]);
		}
		checkIndex++;
	} while (checkIndex < arr.length);

	return foundObj;
};

// ""
// Returns array of index positions
var checkArrForObjPos = function(arr, lookingFor) {
	foundObjPos = [];
	checkIndex = 0;

	do {
		var key = Object.keys(arr[checkIndex]);
		//console.log('key:', key);
		if (key[0] === lookingFor) {
			foundObjPos.push(checkIndex);
		}
		checkIndex++;
	} while (checkIndex < arr.length);

	return foundObjPos;
};