var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider 
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'mainController'

	})
	.when('/search',{
		templateUrl: 'pages/search.html',
		controller: 'mainController'

	})
	.when('/create',{
		templateUrl: 'pages/create.html',
		controller: 'mainController'

	})
});

myApp.controller('mainController', ['$scope','$log',
function($scope,$location,$log) {

}]);