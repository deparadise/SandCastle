//  This is an angular filter that I used to verify if an image requested was available to server requests. (Ln:48)
//  It fails due to the fact that angular filters du not suport async programing (at least I don't think they do.)

(function(){
	'use strict';

	/// REPLACE MISSING IMAGES FOR PLACE HOLDER IMAGES

	angular.module('rumi.emulator').filter('confirmAsset', 
		function() {
			return function(input) {
				
				console.log('confirmAsset checking: >>>:\n', input);

				//var imageIsNotInResources = false;
				var imageIsNotDeclared = input.lastIndexOf('/') == input.length - 1;
				var isBackground_ph_Request = input.search('ph-background');
				var isMenu_ph_Request = input.search('ph-menu');

				var determineResponse = function(imageIsNotInResources) {

					if (imageIsNotDeclared || imageIsNotInResources) {
						console.log('No Image was assignend OR not in the resouces directory!');
						return "assets/images/noImage_1920x1080.png";
					}

					else if (isBackground_ph_Request != -1) {
						//console.log('confirmAsset filter on >>>:\n', input);
						console.log('I need a background replace!');
						return "assets/images/ph-background_1920x1080.png";
					}

					else if (isMenu_ph_Request != -1) {
						console.log('confirmAsset filter on >>>:\n', input);
						return "assets/images/ph-menu_1920x1080.png";
					}

					// else if (true) {

					// }

					else{
						// No place holder required, pass the input back
						return input;
					}
				}; // END determineResponse

				// TEST: If image is available by requested URL
				var testImageURL = function (testingURL, callBack) {
					var tested = new Image();
					tested.onload = function(res) {
						console.log('The image exists!\n', res);
						return callBack(false);
					};
					tested.onerror = function(res) {
						console.log('No image exists!!!\n', res);
						return callBack(true);
					};
					tested.src = testingURL;
				}; // END testImageURL
				
				testImageURL(input, determineResponse);
			};
		}
	);

})();

//// CORRECT IMPLEMENTATION ///

(function(){
	'use strict';

	/// REPLACE MISSING IMAGES FOR PLACE HOLDER IMAGES

	// ph = place holder

	angular.module('rumi.emulator').filter('confirmAsset', 
		function() {
			return function(input) {
				console.log('confirmAsset checking: >>>:\n', input);

				var imageNameNotDeclared = input.lastIndexOf('/') == input.length - 1;
				var isBackground_ph_Request = input.search('ph-background');
				var isMenu_ph_Request = input.search('ph-menu');
				
				if (imageNameNotDeclared) {
					console.log('No Image was assignend!');
					return "assets/images/noImage_1920x1080.png";
				}

				else if (isBackground_ph_Request != -1) {
					//console.log('confirmAsset filter on >>>:\n', input);
					console.log('I need a background replace!');
					return "assets/images/ph-background_1920x1080.png";
				}

				else if (isMenu_ph_Request != -1) {
					console.log('confirmAsset filter on >>>:\n', input);
					return "assets/images/ph-menu_1920x1080.png";
				}

				else{
					// No place holder required, pass the input back
					return input;
				}
			
			};
		}
	);

})();