// add: http://jsbeautifier.org/

console.log('JSON printer loaded!');
var getCoreContentFromTRANSPORTER = function(processCalls) {
		//console.log('I will go get some data from Jolpatx!');
		var x2js = new X2JS();
		var jolpatxService = "https://rss-srvr-jolpat:9090/extras2.0/quickbase/lookup?format=xML";

		// Get request parameters from open project
		var reqParams = {
			provider: project.handler.provider,
			vendor_id: project.handler.content_id
		};
		//console.log('reqParams:\n', reqParams);

		var coreContentRequest =
			jolpatxService+
			"&provider="+reqParams.provider+
			"&vendor_id="+reqParams.vendor_id
		;

		// Activate workingScreen
		workingScreen.css('display', 'block');
		console.log('RUMI is requesting from iTunes Transporter:\n', coreContentRequest);

		$.ajax({
			url: coreContentRequest,
			crossDomain: true,
			dataType: 'xml',
			success: function (response) {
				workingScreen.css('display', 'none');
				var xmlObject = x2js.xml2json(response);
				console.log('iTunes Transporter has delivered:\n', xmlObject['package']['video']['vendor_id']);
				//console.log('xmlObject:\n', xmlObject);

				// Assign xml to project for reference
				project.retrievedCoreContent = xmlObject;

				// Apply retrieved CC with these process
				processCalls.forEach(function (process, i, calls) {
					//console.log('CC assignment running:\n', process);
					process();
				});
			},
			error: function (err) {
				workingScreen.css('display', 'none');
				console.log('ERROR!:\n', err);
				// END OF LINE
			}
		});
}; // END getCoreContentFromTRANSPORTER


var getFromURL = function (reqURL) {
	var x2js = new X2JS();

	$.ajax({
		url: reqURL,
		crossDomain: true,
		dataType: 'xml',
		success: function (response) {
			var xmlObject = x2js.xml2json(response);
			console.log('res success:\n', xmlObject);
			xmlObject = JSON.stringify(xmlObject);
			document.write(xmlObject);
			//$('.output').append(response)
		},
		error: function (err) {
			console.log('res fail:\n', err);
			var xmlObject = x2js.xml2json(err);
			document.write(xmlObject);
		}
	});
}; // END getFromURL

var testObj = {asdf:'asdf'};

var objectWrite = function (testObj) {
	testObj = JSON.stringify(testObj);
	//document.write(testObj);
	$('.output').text(testObj);
}; // END testObj

var myJSON = function () {
	var x2js = new X2JS();

	$.ajax({
		dataType: "json",
		url: 'http://localhost:8000/JSONprinter/tSample.json',
		//data: data,
		success: function (response) {
			//var xmlObject = x2js.xml2json(response);
			console.log('res success:\n', response);
			target = JSON.stringify(response);
			$('.output').text(target);
			//$('.output').append(response)
		}
	});

	// $.getJSON('tSample.json', function (res) {
	// 	console.log('res:\n', res);
	// 	$('.output').text(res);
	// });
} // END myJSON