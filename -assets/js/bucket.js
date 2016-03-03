//console.log('bucket.js');

var myBucket = angular.module('myBucket', []);

myBucket.controller('benchCtrlr', ['$scope', function ($scope) {
	$scope.msgOfTheDay = 'Howdy!';
}]); // END benchCtrlr