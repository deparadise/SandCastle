
// TIME CODE CONVERSION: to and from frames vs. video time code
// <DEV> accept param settings (fps)
var transferToFromTC = function(val) {
	var fpsRate = 24;
	var testVal = val.toString();

	if (testVal.includes(':')) { // change to a frame count. val should be a tc string: 00:59:30:00
		//console.log('I am a timecode! I need to be a frame count!');
		var tcCount = testVal.split(':');
		//console.log('tcCount: ', tcCount);
		if (tcCount.length === 4) { // This is a propperly formatted timecode, count the frames
			//var frames = 0;
			var tcIndex = 0;
			do {
				switch (tcIndex) {
					case 0:
						hrFrames = Number(tcCount[tcIndex])*60*60*fpsRate;
						//console.log(hrFrames);
					break;
					case 1:
						minFrames = Number(tcCount[tcIndex])*60*fpsRate;
						//console.log(minFrames);
					break;
					case 2:
						secFrames = Number(tcCount[tcIndex])*fpsRate;
						//console.log(secFrames);
					break;
					default:
						remFrames = Number(tcCount[tcIndex]);
						//console.log(remFrames);
				}

				tcIndex++;
			} while (tcIndex < tcCount.length);

			var frames = hrFrames + minFrames + secFrames + remFrames;

			return frames.toString();
		}else{ // ERROR!: tcCount is not the proper format of a Timecode!
			return 'ERROR!: N/A timecode';
		}

	}else{ // change to timecode string. val should be a frame count number: 85680

		// val to fps
			var fps = Math.round(testVal % fpsRate);
			//.log('fps: ', fps);
		// val to sec
			var seconds = Math.floor((testVal / fpsRate) % 60);
			//console.log('seconds: ', seconds);
		// val to min
			var minutes = Math.floor(((testVal / fpsRate) / 60) % 60);
			//console.log('minutes: ', minutes);
		// val to hrs
			var hours = Math.floor(((testVal / fpsRate) / 60) / 60);
			//console.log('hours: ', hours);

		// format and string time input
		var formatTime = function (val) {
			var formatVal = val.toString();

			if (formatVal.length === 1) {
				formatVal = '0'+formatVal;
				return formatVal;
			}else{
				return formatVal;
			}
		};

		// Concat timecode
			var generatedTC = formatTime(hours)+':'+formatTime(minutes)+':'+formatTime(seconds)+':'+formatTime(fps);

		return generatedTC.toString();
	}

	//return requestedFormat;
}; // END transferToFromTC

// EXAMPLE HANDLER FOR: transferToFromTC
var getTimeCodePositions = function(i, processObj, callBack) {
	//console.log('getTimeCodePositions receives: \n', processObj);//, projectUtil.transferToFromTC);
	var timeCodeSets = [];
	var seqStartTC = processObj['sequenceStart'];
	var TPresources = processObj['trackPositions'];
	var tcPass = 0;

	do {
		if (tcPass === 0) { // First set
			timeCodeSets.push({
				'tcString': seqStartTC,
				'tcFrame': projectUtil.transferToFromTC(seqStartTC)
			});
		}else{ // subsequent sets
			var nextTcFrames = Number(timeCodeSets[tcPass-1]['tcFrame']) + Number(TPresources[tcPass-1]['sourceDuration']);
			var nextTC = projectUtil.transferToFromTC(nextTcFrames);
			timeCodeSets.push({
				'tcString': nextTC,
				'tcFrame': nextTcFrames
			});
		}
		tcPass++;
	} while (tcPass < TPresources.length);

	processObj['TCPositions'] = timeCodeSets;

	//console.log('getTimeCodePositions sends out processObj with:\n', processObj);
	return callBack(null, processObj);
}; // END getTimeCodePositions