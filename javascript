



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
