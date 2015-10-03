#AngularJS - Basic Services

It is unrealistic to expect that all controllers deal with data in completely isolated ways. In fact, in most cases there needs to be some persistent data outside of controllers, that can be accessed, or even shared, by multiple controllers. Angular JS provides three types of "services"

* Factory
	- Factories can be used to create objects, store properties with it, and return the object. When passed to a controller, these properties are available to the controller. 
* Service
	- Unlike factories, Services are instantiated as "new" objects and defined using the "this" keyword. When passed to a controller, all properties defined on "this" will be available to the controller. 
* Provider
	- Only properties on the object contained in a "$get" attribute are available to a controller. A provider also, uniquely, can be passed to the app.config module. These are used for module-wide configuration. 

[previous](Slide12_MVCarchitecture.md)    [next](Slide14_ServiceExample.md)
