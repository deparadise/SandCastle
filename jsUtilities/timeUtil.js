// requires moment.js... or will

timeUtil.addTimeToISO_date = function(dateWas, plusTime) {
	var time = dateWas.split(':');
	var date = "";
	var hh = time[0];
	var mm = time[1];
	var ss = time[2];
	var ms = ss.split('.')[1];
	date = hh.split('T')[0];
	hh = hh.split('T')[1];
	
	ss = ss.split('.')[0];
	try {
		ms = ms.substring(0,2);
	} catch(e){
		ms = .01;
		console.log('ms is reset',ms);
	}

	var add = plusTime + "";
	add = add.split('.');

	var addDD = 0;
	var addHH = 0;
	var addMM = 0;
	var addSS = parseInt(add[0]);
	var addMS = parseInt(add[1]);
	addMS = (addMS.length === 1)? addMS + '0' : addMS;

	// TODO: IF addSS is > 60 coming in
	ms = (ms == NaN)? 0 : ms;
	ms = parseInt(ms) + addMS;
	if (ms > 100) {
		ms = ms - 100;
		addSS++;
	}
	ms = (ms < 10)? '0' + ms : ms;

	ss = parseInt(ss) + addSS;
	if (ss > 60) {
		var minutes = ss / 60;
		addMM = addMM + Math.floor(minutes);
		ss = ss%60;
	}
	ss = (ss < 10)? '0' + ss : ss;

	mm = parseInt(mm) + addMM;
	if (mm > 60) {
		var hours = mm / 60;
		addHH = addHH + Math.floor(hours);
		mm = mm%60;
	}
	mm = (mm < 10)? '0' + mm : mm;

	hh = parseInt(hh) + addHH;
	if (hh > 24) {
		var days = hh / 24;
		addDD = addDD + Math.floor(days);
		hh = hh%24;
	}
	hh = (hh < 10)? '0' + hh : hh;

	var compiledDate = date + 'T' + hh + ':' + mm + ':' + ss + '.' + ms;
	compiledDate = compiledDate.replace('.NaN', '');

	console.log(
		'\n dateWas:', dateWas,
		// '\n plusTime:', plusTime,
		// '\n date:', date,
		// '\n hours:', hh,
		// '\n minutes:', mm,
		// '\n seconds:', ss,
		// '\n milliseconds:', ms,
		// '\n add:', add,
		// '\n addDD', addDD,
		// '\n addHH', addHH,
		// '\n addMM', addMM,
		// '\n addSS', addSS,
		// '\n addMS', addMS,
		'\n compiledDate', compiledDate
	);
	return compiledDate;
}; // END