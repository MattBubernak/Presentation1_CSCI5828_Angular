var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider 
	.when('/', {
		templateUrl: 'pages/recipes.html',
		controller: 'recipesController'

	})
	.when('/Recipes',{
		templateUrl: 'pages/recipes.html',
		controller: 'recipesController'

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

myApp.controller('recipesController',function($scope,$http) {
  $scope.nameSearchInput = ""
	//Load data from the db
  $http.get('data/recipes_db.json')
    .success(function(data) {
        $scope.recipes=data;
    })
    .error(function(data,status,error,config){
        $scope.recipes = [{heading:"Error",description:"Could not load json   data"}];
    });
  $http.get('data/ingredients_db.json')
    .success(function(data) {
        $scope.ingredients=data;
    })
    .error(function(data,status,error,config){
        $scope.ingredients = [{heading:"Error",description:"Could not load json   data"}];
    });
	//$scope.ingredients = [{"name" : "peppermint","description" : "just nud"}]
});
myApp.controller('createController', ['$scope','$log',
function($scope,$location,$log) {

}]);

myApp.controller('ingredientsController', function($scope,$http) {
  $scope.nameSearchInput = ""
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
