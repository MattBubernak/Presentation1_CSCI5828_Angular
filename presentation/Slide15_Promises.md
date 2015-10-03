#AngularJS - Promises

Promises are an extremely important feature of angular, one that greatly assists the handling of asynchronous calls. The core concept behind a promise is sometimes you may need to request data, and plan to do something with that data, on the assumption it will eventually be returned. Howler, depending on how it is returned, you may need to handle it in different ways. Promises are accessed by injected the "$q" service. There are a few key components to a promise: 

## Deferred
When you declare a variable as deferred, you are exposing the methods related to promises. 

```var defer = $q.defer```

## Promise
When you actually return a "deferred" object as a promise, you append promise to indicate you are returning a promise for that object. 

``` return defer.promise ```

## Deferred Methods
A promise can actually be fulfilled in multiple ways, including the following: 

* resolve()
	- Resolve indicates that a promise was "successful" and the parameter for resolve is the data that should be returned. 
	
	- ```defer.resolve('promise was succesful')```
* reject()
	- Reject indicates that the asynchronous function required to return this promise has failed, so a reject parameter may be some sort of error information. 
	
	- ```defer.reject('there was an error')```
* notify()
	- A promise can only be resolved or rejected once, but sometimes it is useful to return progress updates. Notify can be used to return updates about long-running asynchronous calls. 
	
	- ```defer.notify('halfway loaded...')```

## Then
* keyword used for chaining a callback function to a promise object
The below call creates a promise, and requests data. Once the data is recieved, it will either print the data or print the error message. 

```
var promise = service.getData()
.then(function (data))
{console.log("got:" + data)}, function(error) {console.log("Error:" + error)}
```

[previous](Slide14_ServiceExample.md)    [next](Slide16_PromiseExample.md)