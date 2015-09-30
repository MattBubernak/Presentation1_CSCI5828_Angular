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

myApp.controller('recipesController',function($scope,$http,databaseService) {
  $scope.nameSearchInput = ""
	//Load data from the db
  var promise1 = databaseService.getIngredients(); 
  var promise2 = databaseService.getRecipes()
  promise1.then(function (data)
  {
  	$scope.ingredients = data.data;
  })
  promise2.then(function (data)
  {
  	$scope.recipes = data.data;
  })
	//$scope.ingredients = [{"name" : "peppermint","description" : "just nud"}]
});
myApp.controller('createController', ['$scope','$log',
function($scope,$location,$log) {

}]);

myApp.controller('ingredientsController', function($scope,$http,databaseService) {
  $scope.nameSearchInput = ""
  var promise = databaseService.getIngredients(); 
  promise.then(function (data)
  {
  	$scope.ingredients = data.data;
  })

});

myApp.controller('formController', function($scope,databaseService) {
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
    	// add it to the db
        //$scope.newRecip = angular.copy($scope.master);

        $scope.recipes.push({ 
			"name" : $scope.newRecip.name,
			"id" : $scope.ingredients.length,
			"description" : $scope.newRecip.description,
			"img" : "placeholder.png"
		})
    	console.log('lol');
    };
    $scope.reset();
});



