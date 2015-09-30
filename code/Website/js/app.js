var myApp = angular.module('myApp',['ngRoute']);

// This is the routing configuring for our application. We have 3 pages, a main recipes/search page, an
// ingredient listing page, and a page for creating recipes. 
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

// This service reads the data from our "database"(json files), and provides our controllers
// access to it. When they access it, they are accessing a shared copy. 
myApp.service('databaseService', function ($http,$q) {
	var deferred1 = $q.defer();
	var deferred2 = $q.defer(); 
 
	$http.get('data/ingredients_db.json').then(function (data)
	{
		deferred1.resolve(data); 
	})
	$http.get('data/recipes_db.json').then(function (data)
	{
		deferred2.resolve(data); 
	})

	this.getIngredients = function ()
	{
		return deferred1.promise
	}
	this.getRecipes = function ()
	{
		return deferred2.promise
	}


})

// Our controller for the main recipes/search page. 
myApp.controller('recipesController',function($scope,$http,databaseService) {
  $scope.nameSearchInput = ""
  var promise1 = databaseService.getIngredients(); 
  var promise2 = databaseService.getRecipes()

  $scope.getIngrById = function (inID)
  {
  	for (var i = 0; i < $scope.ingredients.length; i++)
  	{
  		if ($scope.ingredients[i].id == inID)
  			return $scope.ingredients[i];
  	}
	// should never hit this.
	console.log(inId);
	return -1; 
  }

  // Grab ingredient data
  promise1.then(function (data)
  {
  	$scope.ingredients = data.data;
  	console.log("hi");
  })

  // Grab recipe data
  promise2.then(function (data)
  {
  	$scope.recipes = data.data;
  	// Modify recipe data to instead instances of the ingredients. 
	for (var i = 0; i < $scope.recipes.length; i++)
	{
		for (var j = 0; j < $scope.recipes[i].ingredients.length; j++)
		{
			// Add an array of actual ingredient objects. 
			$scope.recipes[i].ingredients[j] = $scope.getIngrById($scope.recipes[i].ingredients[j]);
		}
	}
  })

});

// Our controller for the create page. 
myApp.controller('createController', ['$scope','$log',
function($scope,$location,$log) {

}]);

// Our controller for the ingredients page. 
myApp.controller('ingredientsController', function($scope,$http,databaseService) {
  $scope.nameSearchInput = ""
  var promise = databaseService.getIngredients(); 
  promise.then(function (data)
  {
  	$scope.ingredients = data.data;
  })

});

// Our controller for the form on the create page. 
myApp.controller('formController', function($scope,databaseService) {
	$scope.showSuccess = false;
	$scope.newRecip = {name: "Name it", description: "Describe the blend..."}
	var promise1 = databaseService.getIngredients(); 

	promise1.then(function (data)
	{
		$scope.ingredients = data.data;
	})
	var promise2 = databaseService.getRecipes(); 
	promise2.then(function (data)
	{
		$scope.recipes = data.data;
	})	
    $scope.master = {name: "Name it", description: "Describe the blend..."};
    $scope.reset = function() {
        $scope.newRecip = angular.copy($scope.master);
    };
    $scope.submit = function() {
        $scope.recipes.push({ 
			"name" : $scope.newRecip.name,
			"id" : $scope.ingredients.length,
			"description" : $scope.newRecip.description,
			"img" : "placeholder.png"
		})
    	$scope.showSuccess = true;
    };
    $scope.reset();
});



