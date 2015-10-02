#Introduction
* AngularJS is a Javascript web framework aimed at making web applications easy to build and maintain.
* It is an open source Google Web Application Framework.
* AngularJS is a MVC or MVVC based framework.
* It is built for single web page applications.
  1. The application page never reloads or transfers to other pages. 
  2. Makes use of dynamic communication with the server.


# Why AngularJS?
* It is a bridge that helps convert static documents like HTML into dynamic applications. It does so by teaching the browers new syntax through a construct called **directives**.
* AngularJS eliminates the following approaches to making static documents dynamic:
  1. **Libraries**: Using libraries, the code writted by developers call the library functions. Example: jQuery, etc. 
  2. **Frameworks**: Using Frameworks, the framework controls the code written by the developer. Example: ember, durandal, etc. 
* AngularJS provides reusable code components. 
* AngularJS code is unit testable. Thus aiding in the development and testing processes.

# Unique feature(s) of AngularJS
* It extends HTML to present dynamic content through **2-way data binding**. 
    1. Unlike traditional MVC architecture where the one way data binding occurs, in AngularJS there is automatic synchronization of data between Model and View in the MVC architecture. Changes to the View is reflected in the Model and vice versa.


![2-way data binding. Source: https://docs.angularjs.org/guide/databinding](https://github.com/MattBubernak/Presentation1_CSCI5828_Angular/blob/master/presentation/presentationImages/Two_Way_Data_Binding.png)

Image source: https://docs.angularjs.org/guide/databinding

# Basic Terminology - AngularJS
* Template: HMTL file with additional markup
* Directives:<a name="directives"></a> extend HTML elements with custom elements and attributes making it dynamic.
* View: what is seen by the user.
* Model: data that is displayed in the View
* Controller: the business logic behind the View
* Scope: context where the Model is stores

# Basic AngularJS Directives
* ng-app:<a name="ngapp"></a> Declares the root element of an AngularJS application, under which directives can be used to declare bindings and define behavior.
* ng-bind: Sets the text of a DOM element to the value of an expression. For example, `<span ng-bind="name"></span>` will display the value of ‘name’ inside the span element.
* ng-model: <a name="ngmodel"></a> Similar to ng-bind but establishes a two-way data binding between the view and the scope.
* ng-repeat:<a name="ngrepeat"></a> Instantiate an element once per item from a collection.
* ng-view: <a name="ngview"></a> Helps routing the program to different pages without the need to refresh the displayed page.
* ngRoute: <a name="ngroute"></a> Provides routing and deeplinking services and directives for AngularJS applications.


#AngularJS - Demonstration using 'Tea Master' application
* Before delving further in AngularJS introduction, let's look at the following AngularJS implementation that was created for the purpose of this tuturial.
* Demo link: 

# AngularJS - Routing (I)
* In the 'Tea Master' index.html page, when clicking the different pages like Recipes, Ingredients, etc., the page **does not** reload. It is achieved by using AngularJS's ability to perform routing.
* Routing allows AngularJS to manage different pages (or view) without the need to reload the page.
* In our application 'Tea Master', routing works in the following way:
![Routing](https://github.com/MattBubernak/Presentation1_CSCI5828_Angular/blob/master/presentation/presentationImages/Routing.png)

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

#AngularJS - Directives
* In each of the Create.html, Ingredients.html or recipes.html files, AngularJS [directives](#directives) are used in conjunction with HTML elements to make the layouts more dynamic.
* In the 'Tea Master' demonstration, if the option 'ingredients' is clicked on the top right corner, it displays
    1. the list of ingredients.
    2. the ingredients search box.
* The list of ingredients is displayed using the AngularJS directive [`ng-repeat`](#ngrepeat). The directive iterates through the list of ingredients stored in the model (i.e. ingredients_db.json) file and displays them.
* The ingredients search box is uses the directive [`ng-model`](#ngmodel). `ng-model` establishes a two-way data binding between the view and the scope using the 'ingredientsController'. 

# AngularJS - Data binding
* Two way data binding is the **unique** feature of AngularJS. 
* The search box in the 'Ingredient.html' page successfully demonstrates the two-way data binding. It shows data binding between the 'index.html' page and the scope of 'ingredientsController' i.e. ingredients_db.json file (also called the model).
* Let's look at the 'ingredientsController' code that controls the interation between the view (ingredients.html) and the model (ingredients_db.json).

```$scope.nameSearchInput = "" ```

From the code, it is evident that by default, the search box will be empty. Therefore, when we load the ingredients.html file, all the ingredients are listed. However, as we start typing the ingredients, the list of ingredients displayed gets filtered. 

#AngularJS -How is MVC architecture implemented?
* To facili
* In the demonstration application, MVC architecture is implemented in the following way:
    1. Model: Generally, model components in AngularJS store the data. The data is manipulated by the business logic in the controller and displayed in the view. In the 'Tea Master' application, Model is the 
    
    2. View:
    3. Controller:
    4. 
#Using Project code demonstrate AngularJS double data binding here... 


#Using Project code demonstrate the use of MVC architecture in AngularJS here ... 

#Using code explain filters here
In AngularJS, the filter formats the value of an expression to display to the user. Filters can be used in controllers or services. 

#Use code to explain the ease of unit testing using AngularJS

#If any directives are custom defined in the code, use that example

#If any services are used in the code, use that example here
