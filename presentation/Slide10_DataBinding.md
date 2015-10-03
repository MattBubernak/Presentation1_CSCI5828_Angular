# AngularJS - Data binding
* Two way data binding is the **unique** feature of AngularJS. Two directions of data-binding in the 'Tea Master' can be viewed as:
* When ingredeints view is displayed and the search box is empty, the data travels from the model 'ingredients_db.json'. All the ingredients from the json file are displayed in the i'index.html' file. Hence, data travels from model to view.
* When a search entry is entered in the search box, the `ng-model` associated with the search box uses the search term as the input and updates the list of ingredients displayed. In this case, the data is travelling from the view and to the model and eventually, the model is updating the view displayed to the user.
* Code snippet from 'Ingredients.html' binding the input element to `ng-model`:
```
Search: <input ng-model="nameSearchInput" style="margin-bottom:20px">```
```
* Code snippet in 'ingredientsController' connecting the `ng-model` named nameSearchInput to 'databaseService':
```
myApp.controller('ingredientsController', function($scope,$http,databaseService) {
  $scope.nameSearchInput = ""
  var promise = databaseService.getIngredients(); 
  promise.then(function (data)
  {
  	$scope.ingredients = data.data;
  })

});
```
* Cod snippet in 'databaseService' connecting the controller to 'ingredients_db.json':
```
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
```
[previous](Slide9_Directives.md)    [next](Slide11_ExpressionsFilters.md)