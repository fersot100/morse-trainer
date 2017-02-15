var morseApp = angular.module('morse-app', []);

morseApp.controller('tablectrl' , function($scope, $http){
	$http.get('morseTable.json').success(function (res) {
		$scope.translations = res; // Pipe the 
	});
});