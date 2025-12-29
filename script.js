console.log("External JS");
/*
Token : smallest unit of every programming lang
- token are of 4 types:
! 1) keywords: 
- reserved words which has specific meaning. ex: if, for, var, let, const
- all keywords must be in lowercase

! 2) identifiers:
- names given to class, methods , variables, functions etc are identifiers
- rules:
- keywords cannot be identifiers
- cannot start with no. but can contain a no.
- cannot accept special character expect $ and _
- cannot appect empty space

! 3) literals:
- literals means values stored in a variable

! 4) operators
- symbols used to perform some operation between two or more operands

! Example
var a = 10;

here,
keyword is var
identifier is a
operator is =
literal is 10
*/

/*
! DATA TYPES
There are 2 types of datatype
1) Primitive
- In primitive there are 7 types
1) number
2) string
3) boolean
4) undefined
5) null
6) bigInt
7) symbol

2) Non-Primitive
- In Non-primitive there are 3 types
1) array
2) object
3) function
*/

// var a1 = 10.907654323456;
// console.log(a1);
// console.log(typeof a1);

// var a2 = "Hello World";
// console.log(a2);
// console.log(typeof a2);

// var a3 = true;
// console.log(a3);
// console.log(typeof a3);

// var a4 ;
// console.log(a4);
// console.log(typeof a4);

// var a5 = null;
// console.log(a5);
// console.log(typeof a5);

// var a6 = 1n;
// console.log(a6);
// console.log(typeof a6);

// var a7 = Symbol("Hello");
// var a8 = Symbol("Hello");

// console.log(a7);
// console.log(a8);

// console.log(a7 === a8);
// console.log(typeof a7);

// var x = 10
// var y = "10"
// console.log(x === y);

// //! loose comparision : it will check data, not datatype
// console.log(10 == "10"); // true

// //! strict comparision : it will check data and datatype
// console.log(10 === "10"); // false

//! HOISTING : moving declaration part at the top of the original code internally
// // var a1 = UD <-- Due to hoisting
// console.log(a1);
// var a1 = 10;
// console.log(a1); // 10

//! 3 WAYS OF DECLARING A VARIABLE
// 1) var

var a; // declare
console.log(a); // ud

a = 10 // initialize
console.log(a); // 10

var a ; //re-declare
console.log(a); // 10

a = 20 // re-initialize
console.log(a); // 20

var b = 30 // declare and initialize
console.log(b); // 30

var b = 40 // re-declare and re-initialize
console.log(b); // 40





// 2) let 
// 3) const
