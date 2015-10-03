# AngularJS - Data binding
* Two way data binding is the **unique** feature of AngularJS. Two directions of data-binding in the 'Tea Master' can be viewed as:
* When ingredeints view is displayed and the search box is empty, the data travels from the model 'ingredients_db.json'. All the ingredients from the json file are displayed in the i'index.html' file. Hence, data travels from model to view.
* When a search entry is entered in the search box, the `ng-model` associated with the search box uses the search term as the input and updates the list of ingredients displayed. In this case, the data is travelling from the view and to the model and eventually, the model is updating the view displayed to the user.
* Code snippet from 'Ingredients.html' binding the input element to `ng-model`:
```
Search: <input ng-model="nameSearchInput" style="margin-bottom:20px">```
```
* The below code snippet(reduced to show only important lines) in 'ingredientsController' shows the existance of the `ng-model` "nameSearchInput", a variable modifiable through the view, and "$scope.ingredients", which is a reference to the model:
```
myApp.controller('ingredientsController', function($scope,$http,databaseService) {
  $scope.nameSearchInput = ""
  ...
  	$scope.ingredients = data.data;
  ...
});
```
* The below code snippet from the ingredients page shows two way data binding occuring. The entire list is being bound to the model, via `ng-repeat` , and the list is actually being directly filtered/modified using the view `ng-model` nameSearchInput. 
```
Search: <input ng-model="nameSearchInput" style="margin-bottom:20px">
<div>
    <div class="panel panel-default" ng-repeat="x in ingredients | filter:{name:nameSearchInput} | orderBy: 'name'" style="width:50%">
```

[previous](Slide9_Directives.md)    [next](Slide11_ExpressionsFilters.md)
