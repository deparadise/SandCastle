// Simple random string generator substring() controls string length
var randomIDGen = function () {
	return Math.random().toString(36).substring(2, 4).toUpperCase();
};


// Random string generator with sequence specification <DEV>
// Params (sequence list, break character)
var uuidGenerate = function() {
	// target uuid format: A830DC1B-35BC-448A-9117-606DD359A415
	// sequenceCall: 8,4,4,4,12
	var uuidTargetString = '';
	var sequenceCall = [8,4,4,4,12];

	var randomStrGen = function (strLength) {
		return Math.random().toString(36).substring(2, 2+strLength).toUpperCase();
	};

	var i = 0;
	do {
		if (i === 0) {
			uuidTargetString += randomStrGen(sequenceCall[i]);
		}else{
			uuidTargetString += '-' + randomStrGen(sequenceCall[i]);
		}
		
		i++;
	} while (i < sequenceCall.length);

	return uuidTargetString;
};