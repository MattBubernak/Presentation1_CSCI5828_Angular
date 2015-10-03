#AngularJS - Directives
* In each of the Create.html, Ingredients.html or recipes.html files, AngularJS [directives](#directives) are used in conjunction with HTML elements to make the layouts more dynamic.
* In the 'Tea Master' demonstration, if the option 'ingredients' is clicked on the top right corner, it displays
    1. the list of ingredients.
    2. the ingredients search box.
* The list of ingredients is displayed using the AngularJS directive [`ng-repeat`](#ngrepeat). The directive iterates through the list of ingredients stored in the model (i.e. ingredients_db.json) file and displays them.
* The ingredients search box uses the directive [`ng-model`](#ngmodel). `ng-model` establishes a two-way data binding. It shows data binding between the 'index.html' page and the scope of 'ingredientsController' i.e. ingredients_db.json file (also called the model).
* Graphical representation of interaction between 'Ingredients.html', 'ingredientsController' and 'ingredients_db.json':
![Two-way Data Binding](https://github.com/MattBubernak/Presentation1_CSCI5828_Angular/blob/master/presentation/presentationImages/DataBinding.png)

NOTE: The picture also shows the MVC architecture in AngularJS.

[previous](Slide8_Routing2.md)    [next](Slide10_DataBinding.md)