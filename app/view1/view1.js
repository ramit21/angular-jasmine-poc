'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {
		$scope.var=100;
		
		$http({
	        method : "GET",
	        url : 'http://localhost:8000/'
	    }).then(function mySucces(response) {
	        $scope.myWelcome = response.statusText;
	    }, function myError(response) {
	        $scope.myWelcome = response.statusText;
	    });
}]);