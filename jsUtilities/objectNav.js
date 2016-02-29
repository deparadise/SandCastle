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

// GET PARAMETERS FROM URL QUERY STRING, ANONYMOUSLY (From QB updater)
var QueryString = function() {
	// This function is anonymous, is executed immediately and 
	// the return value is assigned to QueryString!
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		// If first entry with this name
		if (typeof query_string[pair[0]] === "undefined") {
			query_string[pair[0]] = pair[1];
			// If second entry with this name
		} else if (typeof query_string[pair[0]] === "string") {
			var arr = [query_string[pair[0]], pair[1]];
			query_string[pair[0]] = arr;
			// If third or later entry with this name
		} else {
			query_string[pair[0]].push(pair[1]);
		}
	}
	return query_string;
}();


