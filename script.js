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

// //! 3 WAYS OF DECLARING A VARIABLE
// // 1) var

// var a; // declare
// console.log(a); // ud

// a = 10; // initialize
// console.log(a); // 10

// var a; //re-declare
// console.log(a); // 10

// a = 20; // re-initialize
// console.log(a); // 20

// var b = 30; // declare and initialize
// console.log(b); // 30

// var b = 40; // re-declare and re-initialize
// console.log(b); // 40

// // 2) let
// let c;
// console.log(c); // ud

// c = 100;
// console.log(c); // 100

// // let c ;//! cannot re-declare

// c = 200;
// console.log(c); //200

// let d = 300;
// console.log(d); // 300

// // let d = 400 //! cannot re-declare and re-initialize

// // 3) const
// const e = 1000
// console.log(e); // 1000
//! TEMPORAL DEAD ZONE : Time period between accessing a let/const variable before declaration

// let x //! HOISTED BUT VARIABLE IS EMPTY
// console.log(x);// ! NOT POSSIBLE DUE TO TDZ

// let x = 100;
// console.log(x);

//! GEC - GLOBAL EXECUTION CONTEXT
// debugger;
// console.log("start");
// console.log(a);
// var x;
// console.log(x);
// x = 100;
// var a;
// console.log(b);
// a = x;
// var b = 800
// console.log(b);
// console.log("End");
// // console.log(c);

// debugger;
// console.log("Start");
// console.log(x);
// var z = 100;
// console.log(x, z);
// z = 500;
// console.log(b, x);
// var x;
// console.log(x);
// var z;
// console.log(z);
// z = 700;
// console.log(b, x, z);
// var b = 800;
// console.log("End");

//! THERE ARE 2 TYPES OF VARIABLES
//! 1) GLOBAL VARIABLE : a variable that can be accessed globally throughout the code

// var a1 = 10; // GLOBAL SCOPE <---- due to hoisting
// let b1 = 20; // SCRIPT SCOPE <---- due to TDZ
// const c1 = 30; // SCRIPT SCOPE <---- due to TDZ

// if (10 > 2) {
//   console.log(a1, b1, c1);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(a1, b1, c1);
// }

// function demo1() {
//   console.log(a1, b1, c1);
// }
// demo1();

//! 2) LOCAL VARIABLE

// if (100 > 2) {
//   var x1 = 100; // GLOBAL VARIABLE - GLOBAL SCOPE
//   let x2 = 200; // LOCAL VARIABLE - BLOCK SCOPE
//   const x3 = 300; // LOCAL VARIABLE - BLOCK SCOPE
//   console.log(x1, x2, x3);
// }
// console.log(x1); // 100
// // console.log(x2);//! x2 is not defined

// function demo2() {
//   var a1 = 1000; // LOCAL VARIABLE - LOCAL SCOPE
//   let a2 = 2000; // LOCAL VARIABLE - LOCAL SCOPE
//   const a3 = 3000; // LOCAL VARIABLE - LOCAL SCOPE
//   console.log(a1, a2, a3);
// }
// demo2();

// console.log("Start");
// console.log(a);
// let b = 100;
// var a = 200;
// console.log(a, b);
// const c = b + a;
// console.log(c, b, a);
// let d;
// console.log(d);
// d = c;
// console.log(c, d);
// console.log("End");

//! FUNCTIONS

//! 1) NAMED FUNCTION : function which has name
// NOTE: Function hoisting is possible only in named function

//! internally hoisted
// function greet() {
//   console.log("Welcome");
// }
// greet(); // due to hoisting
// function greet() {
//   console.log("Welcome");
// }
// greet(); // function call

//! 2) ANONYMOUS FUNCTION : function without name
// function(){}

//! 3) FUNCTION EXPRESSION : used to call anonymous function
// console.log(a1);
// a1();

// var a1 = function () {
//   console.log("Function Expression");
// };

// console.log(a1);
// a1();

//! GEC
// console.log("Start");
// var a = 10;
// console.log(a, b);
// let c;
// console.log(c, b);
// demo1();
// var b = function () {
//   console.log("Welcome");
// };
// console.log(b);
// b();
// function demo1() {
//   console.log("Demo 1");
// }
// console.log(demo1);
// console.log("End");

//! 4) PARAMETRIZED FUNCTION
// function sum(n1 = 0, n2 = 0, n3 = 0) {
//   let res = n1 + n2 + n3;
//   console.log(res);
// }
// sum(10, 20, 30);
// sum(100, 200);
// sum();

//! 5) REST-PARAMETRIZED FUNCTION
// function demo3(n1, n2, ...rest) {
//   console.log(n1, n2); // 10 20
//   console.log(rest); // [30,40,50] <--- pure array
//   console.log(arguments); // [10,20,30,40,50,....] <--- array-like object (impure)
// }
// demo3(10, 20, 30, 40, 50);

//! 6) RETURN-TYPE FUNCTION
function getFullName(fname = "", lname = "") {
  let fullName = `${fname} ${lname}`;
  return fullName;
}

function displayName() {
  let value = getFullName("John", "Doe");
  document.writeln(`<h2><em>${value}</em></h2>`);
}
displayName();
