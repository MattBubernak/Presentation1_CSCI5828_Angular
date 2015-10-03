# Basic AngularJS Directives
* ng-app:<a name="ngapp"></a> ngApp is the root element of an application. There can only be one ng-app per HTML document, and all directives will be declared to define behavior for the app. 
* ng-bind: This attribute tells Angular that part of the HTML content is bound to a value from the ngApp. The content on the HTML page will be updated whenver the value of the ng-bind changes. An example is: `<span ng-bind="expression"></span>` This can be replaced by `{{ expression}}` , but ngBind is preferred. 
* ng-model: <a name="ngmodel"></a> An ng-model directly binds some input in the view to a property within the scope of the current controller. this is used for two way data binding. 
* ng-repeat:<a name="ngrepeat"></a> This directive createa  new html template for every item in a collection that exists in the scope of the controller. It is very useful for displaying a collection of elements easily. 
* ng-view: <a name="ngview"></a> is a directive that is part of the angular routing service, and allows a template to be rendered within the main layout of the page. 
* ngRoute: <a name="ngroute"></a> Provides both routing and deeplinking services, especially useful for single-page applications

[previous](Slide4_basicTerm.md)    [next](Slide6_Demonstration.md)
