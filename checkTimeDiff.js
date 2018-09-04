// var moment = require('moment');
// var request = require('request');

// request.get({ url: 'http://localhost:3050/getTime' }, function (err, response) {
//     if(response.body){
//         var resJson = JSON.parse(response.body);
//         var remoteServerTime = resJson.serverTime;
//         var networkDelay = resJson.networkDelay;
//         calculateTimeDiff(remoteServerTime,networkDelay);
//     }
// });

// function calculateTimeDiff(remoteServerTime, networkDelay){
//     //the network delay should be added to the remote server time since the current time 
//     //is now and the remote server time is the delay plus the remote server time
//     var localServerTime = new Date(Date.now()).toLocaleString();
//     var timeDiff = moment.utc(moment(localServerTime,"MM/DD/YYYY HH:mm:ss.SSSZ").diff(moment(remoteServerTime,"MM/DD/YYYY HH:mm:ss.SSSZ"))).format("HH:mm:ss."+networkDelay+"")
//     console.log(timeDiff)
// };


// HOW TO CREATE NEW OBJECT IN JS

//Factory function
function createCircle(redius){
    return {
        redius,
        draw: function(){
            console.log('draw');
        }
    }
} 

const circle = createCircle(1)
circle.draw()

//constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('constr draw');
    }
}

// 'new' word creates empty object - {} and sets 'this' point to the particular object, and finally it will return the object
// if new is not used - 'this' will reference to the global object in the browser and create a variable in the global object which will be available everywhere which is bad practice
// return is not needed because we are using the 'new' operator
const another = new Circle(1)
//below is the same as line 48
const thirdTry = Circle({}, 1)

//every object has a constructor property
/**
 * primitives (value types) are copied by value and objects (reference types) are copied by reference
 * let x = 10;
 * let y = x;
 * 
 * x = 20;
 * 
 * output - x = 20, y = 10;
 * 
 * let x = { value: 10 };
 * let y=x;
 * 
 * x.value = 20;
 * 
 * output - x = 20, y = 20;
 * the object is not stored in the variable x, but some place in memory and the address of this memory location is stored in the variable
 */

 /**
  * Abstraction - hide the details, show the essentials
  * 
  * function Circle(radius){
    this.radius = radius;
    this.locatnio = { x: 2, y: 4};
    this. computeSomething = function (){
        /.....
    }
    this.draw = function(){
        this.computeLocation();
        console.log('constr draw');
    }
    }

    const circle = new Circle(10)

    If the method computeSomething is not accessible form the outside we would not have to modify all the times we have written 
    circles.computeSomtehing(param), buit only the method draw which calls it. So we use private properties and methods
    To achive it instead of this.<propertyname> we make it to a local variable with 'let' so that it is not accessible from the outside
    this.location becomes let location. we do the same for the method to make it private - this.computeSomething becomes 'let computeSomething'
    in the draw finction we remove the 'this.' and call the private method by just 'computeSomething(param)'
    Because of that the computeSomething will continue to be in the memory because they are part of the closure of the draw functnio
    if in draw functnio we declare 'let x,y;' the scope of these variables is limited to the scope of this functnio and when the execution of the functnio finishes the x and y will go out of the scope.
    a closure determines what variables will be accessible to an inner function

  */

   /**
  * Getters and setters
  * 
  * function Circle(radius){
    this.radius = radius;
    this.locatnio = { x: 2, y: 4};
    this. computeSomething = function (){
        /.....
    }
        this.draw = function(){
            this.computeLocation();
            console.log('constr draw');
        }

        Object.defineProperty(this, 'defaultLocation', 
            get: function(){
                return defaultLocation;
            },
            set: function(value){
                defaultLocatnio = value;
            }
        })
    }

    const circle = new Circle(10)

    If we want to only read but not modify dome property we add Object.defineProperty() - the Object is the one referenced by 'this'
    after the changes we can get the property by 'circle.defaultLocation' and this will call the get method.
    A getter is a function used to read a property. I we want to modify the value we use setters - add the 'set' function
    */