# AngularJS - Expressions and Filters
* Expressions: AngularJS expressions are written inside double i.e. **{{expression}}**. AngularJS will display the data in the view where the expressions are written. AngularJS will bind the data from the model to the HTML elements. Expressions in AngularJS can be literals, operators, and variables. Expressions used in the 'Tea Master' example are:
```
<div class="panel-body">
			<h3>{{x.name}}</h3>
			<img src="img/ingredient/{{x.img}}" alt="..." height="100" width="100">
		</div>
		<div class="panel-footer"><p>{{x.description}}</p></div>
```
`{{x.name}}`, `{{x.img}}` and `{{x.description}}` are expressions used in 'Ingredients.html' to display the name, image and he description for each ingredients.

* Filters: Filters can be added to the expressions to transform the data as needed. Filters can be used to format data into a currency format, format strings to uppercase or lowercase, etc. Filters are represented by pipe character (|). 
* In the 'Ingredients.html' file, filters are used as:

```<div class="panel panel-default" ng-repeat="x in ingredients | filter:{name:nameSearchInput} | orderBy: 'name'" style="width:50%">```

In the code snippet above, the input in the search box is used to filter the list of ingredients displayed.

[previous](Slide10_DataBinding.md)    [next](Slide12_MVCarchitecture.md)
