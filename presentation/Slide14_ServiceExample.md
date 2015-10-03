#AngularJS - Service Example

In Tea Master, we chose to use the "service" variation of a service. We needed a service that could read the data from our database, and store it in one centralized location that all controllers could access. Most importantly, the data would be **shared** across all controllers. Because Services/Factories share a lot of similarities, either could have been used for our purpose. 

```
myApp.service('databaseService', function ($http,$q) {
	
  var ingredientsData = $q.defer(); 
  var recipesData = $q.defer(); 
 
  this.initData = function()
  {
	...
  }
  this.initData();

  this.getIngredients = function ()
  {
    	...
  }
  this.getRecipes = function ()
  {
   	...
  }

})
```

We have omitted some of the implementation details of the code above, but this is the format of the service used in this website. When a controller is "injected" with this service, it has access to "databaseService" and can use the "geIngredients" and "getRecipes" to get references to the data stored in this service. The important thing is, that because these are references, any modifications to this data will be reflected across all templates/controllers. 

```
myApp.controller('ingredientsController', function($scope,$http,databaseService) {
  $scope.nameSearchInput = ""
  var promise = databaseService.getIngredients(); 
  promise.then(function (data)
  {
  	$scope.ingredients = data;
  })

});
```
The above code demonstrates how our ingredientsController is "injected" with the databaseService. It is then able to put the ingredients data into it's own scope, as $scope.ingredients. This may prompt some question about the "promise" syntax. This will be answered in the upcoming slide. 

[previous](Slide13_BasicServices.md)    [next](Slide15_Promises.md)
