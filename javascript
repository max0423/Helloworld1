


The Object.assign() method is used to copy the values of all enumerable own properties from one 
or more source objects to a target object. It will return the target object.


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);


For deep cloning, we need to use other alternatives because Object.assign() copies property values. 
If the source value is a reference to an object, it only copies that reference value.




foreach is an method that is available only in Array objects.

for in is used to loop through properties of an object.

var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x] + " ";
}

for of is a new way for iterating collections. 

The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList),
TypedArray, Map, Set, and user-defined iterables.


const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}

const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
