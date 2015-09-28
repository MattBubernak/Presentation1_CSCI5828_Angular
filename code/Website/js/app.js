var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider 
	.when('/', {
		templateUrl: 'pages/Search.html',
		controller: 'mainController'

	})
	.when('/Search',{
		templateUrl: 'pages/Search.html',
		controller: 'mainController'

	})
	.when('/Ingredients',{
		templateUrl: 'pages/Ingredients.html',
		controller: 'mainController'

	})
	.when('/Create',{
		templateUrl: 'pages/Create.html',
		controller: 'mainController'

	})
});

myApp.controller('mainController', ['$scope','$log',
function($scope,$location,$log) {

}]);