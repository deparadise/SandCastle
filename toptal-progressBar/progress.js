//console.log('My starting Js progress!');

//console.log('', asdf);




var app = angular.module('progress', []);

app.controller ('progresser', ['$scope', function ($scope){
	$scope.progressApply = {
		'width' : '0%'// '25%' //
	};

	$scope.checkModel = function () {
		$scope.progressApply = {
			'width' : $scope.progressEntered+'%'// '25%' //
		};
		console.log('asdf',$scope.progressApply, $scope.progressEntered);
	};
	
}]);