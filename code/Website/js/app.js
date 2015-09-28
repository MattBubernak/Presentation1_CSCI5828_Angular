var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider 
	.when('/', {
		templateUrl: 'pages/Search.html',
		controller: 'searchController'

	})
	.when('/Search',{
		templateUrl: 'pages/Search.html',
		controller: 'searchController'

	})
	.when('/Ingredients',{
		templateUrl: 'pages/Ingredients.html',
		controller: 'ingredientsController'

	})
	.when('/Create',{
		templateUrl: 'pages/Create.html',
		controller: 'createController'

	})
});

myApp.controller('searchController', ['$scope','$log',
function($scope,$location,$log) {

}]);
myApp.controller('createController', ['$scope','$log',
function($scope,$location,$log) {

}]);

myApp.controller('ingredientsController', function($scope,$http) {
	//Load data from the db
  $http.get('data/ingredients_db.json')
    .success(function(data) {
        $scope.ingredients=data;
    })
    .error(function(data,status,error,config){
        $scope.ingredients = [{heading:"Error",description:"Could not load json   data"}];
    });
	//$scope.ingredients = [{"name" : "peppermint","description" : "just nud"}]

});
/*
myApp.factory("ingredientFactory", function()) 
{
	// define the ingredient function
	var ingredientThing = function(ingredient)

	// return a reference to the function
	return (ingredientThing);
});
*/

myApp.controller('formController', function($scope) {
    $scope.master = {name: "Name it", description: "Describe the blend..."};
    $scope.reset = function() {
        $scope.newRecip = angular.copy($scope.master);
    };
    $scope.submit = function() {
    	// add it to the db
        $scope.newRecip = angular.copy($scope.master);
    };
    $scope.reset();
});
