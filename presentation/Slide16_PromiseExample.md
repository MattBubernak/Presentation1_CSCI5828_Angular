#AngularJS - Promise Example

In our application, the service returns a promise to data it recieves from an asynchronous database call. 

```
myApp.service('databaseService', function ($http,$q) {
	
  var ingredientsData = $q.defer(); 
  var recipesData = $q.defer(); 
 
  // Init reads all the data from the DB to be stored in this service. 
  this.initData = function()
  {
    console.log('inited...')
    $http.get('data/ingredients_db.json').then(function (data)
    {
      //ingredientsData = data.data;
      for (i = 0; i < data.data.length; i++)
      {
        data.data[i].owned = false; 
      }
      ingredientsData.resolve(data.data);
    })
    $http.get('data/recipes_db.json').then(function (data)
    {
      recipesData.resolve(data.data); 
    })
  }
  this.initData();

  this.getIngredients = function ()
  {
    return ingredientsData.promise
  }
  this.getRecipes = function ()
  {
    return recipesData.promise
  }

})
```
Our service creates two deferred objects, one for ingredients(ingredientsData), and one for recipes(recipeData). Notice that initData() method makes an async call to the data, does some post processing on it, and then resolves both the deferred objects. The "getIngredients" and "getRecipes" methods return both of these deferred objects as promises. These promises are fulfilled once the initData method has read all of the data from the json files. 

The next snippet of code, our ingredient controller, shows how a promise cna be received. 
```
myApp.controller('ingredientsController', function($scope,$http,databaseService) {
  $scope.nameSearchInput = ""
  var promise = databaseService.getIngredients(); 
  promise.then(function (data)
  {
  	$scope.ingredients = data;
  },function(error)
  {
  	$scope.ingredients = []
  })

});
```
A promise is created, and set to the retun of databaseSErvice.getIngredients(). We then use the "then" keyword to evaluate the promise once it is returned, which sets our "ingredients" attribute of this scope to be the data that is returned. In the case of an error, the ingredients is set to an empty set. 



[previous](Slide15_Promises.md)    [next](Slide16_.md)
