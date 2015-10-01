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
* Directives: extend HTML elements with custom elements and attributes
* View: what is seen by the user.
* Model: data that is displayed in the View
* Controller: the business logic behind the View
* Scope: context where the Model is stores

# Basic AngularJS Directives
* ng-app: Declares the root element of an AngularJS application, under which directives can be used to declare bindings and define behavior.
* ng-bind: Sets the text of a DOM element to the value of an expression. For example, `<span ng-bind="name"></span>` will display the value of ‘name’ inside the span element.
* ng-model: Similar to ng-bind but establishes a two-way data binding between the view and the scope.
* ng-repeat: Instantiate an element once per item from a collection.
* ng-view: <a name="ngview"></a> Helps routing the program to different pages without the need to refresh the displayed page.
 <Can add more directives depending on what is used in the code...>

# AngularJS - Routing (I)
* Routing provies AngularJS the ability to display different HTML files (also called templates) without the need to refresh the currently displayed page.
* In our application 'The Tea Master', routing works in the following way:
![Routing](https://github.com/MattBubernak/Presentation1_CSCI5828_Angular/blob/master/presentation/presentationImages/Routing.png)

#AngularJS - Routing (II)
* In 'The Tea Master' project, the routing service is used in conjunction to the directive [ng-view] (#ngview).
* 'ng-view' is a directive used in the main template (index.html).
* 
#Using Project code demonstrate AngularJS double data binding here... 


#Using Project code demonstrate the use of MVC architecture in AngularJS here ... 

#Using code explain filters here
In AngularJS, the filter formats the value of an expression to display to the user. Filters can be used in controllers or services. 

#Use code to explain the ease of unit testing using AngularJS

#If any directives are custom defined in the code, use that example

#If any services are used in the code, use that example here
