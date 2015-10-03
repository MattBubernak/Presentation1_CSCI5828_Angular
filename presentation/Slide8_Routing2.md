#AngularJS - Routing (II)
* In the 'Tea Master' demonstration, at the beginning of the `index.html` file, [`ng-app`](#ngapp) directive is used to bootstrap the use of AngularJS.
* Following the bootstrapping directive, routing is achieved by using the [`ng-view`](#ngview) directive in the body of `index.html` file, and including [`ngRoute`](#ngroute) as a dependent module when declaring the angular module in a javascript file.
```
var myApp = angular.module('myApp',['ngRoute']);
```
In the code above, the angular module declared is 'myApp' with the 'ngRoute' dependency.
* The [`ng-view`](#ngview) directive is used in conjunction with the `$routeProvider` service to assist with the routing process.
* The following code displays the use of `$routeProvider` service in order to route to the pages - Create.html, Recipe.html and Ingredients.html.
```
myApp.config(function ($routeProvider) {
	$routeProvider 
	.when('/', {
		templateUrl: 'pages/recipes.html',
		controller: 'recipePageController'

	})
	.when('/Recipes',{
		templateUrl: 'pages/recipes.html',
		controller: 'recipePageController'

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
```
[previous](Slide7_Routing1.md)    [next](Slide9_Directives.md)