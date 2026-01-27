// console.log("External JS");
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
// function getFullName(fname = "", lname = "") {
//   let fullName = `${fname} ${lname}`;
//   return fullName;
// }

// function displayName() {
//   let value = getFullName("John", "Doe");
//   document.writeln(`<h2><em>${value}</em></h2>`);
// }
// displayName();

//! 7) NESTED FUNCTION

//? EXAMPLE 1
// function parent() {
//   console.log("I Am Parent");

//   function child() {
//     console.log("I Am Child");
//   }

//   child();
// }
// parent();

//? EXAMPLE 2
// function parent() {
//   let money = 80000;
//   console.log(money);

//   function child() {
//     let savings = 1000;
//     console.log(savings);
//   }

//   child();
// }
// parent();

//! CLOSURE : its a memory which is created whenever we try to access parent functions property inside child function

//! LEXICAL SCOPING : the ability of js engine to search a variable outside its current scope

//? EXAMPLE 3
// function parent() {
//   let money = 80000;
//   console.log(money);

//   function child() {
//     let savings = 1000;
//     console.log(savings + money); // money can be accessed due to closure
//   }

//   child();
// }
// parent();

//? EXAMPLE 4
// function parent() {
//   let money = 80000;
//   console.log(money);

//   function child() {
//     let savings = 1000;
//     console.log(savings + money); // money can be accessed due to closure
//   }

//   return child;

// }
// let val = parent();
// console.log(val);
// val()

//! 8) HIGHER ORDER FUNCTION : A function which can perform atleast one of these task
//! 1) it can accepts another function as arguement
//! 2) returns a function

// calculate is HOF
// function calculate(a, b, operation) {
//   return operation(a, b);
// }

// function add(n1, n2) {
//   return n1 + n2;
// }

// function substract(n1, n2) {
//   return n1 - n2;
// }

// let val1 = calculate(10, 20, add);
// console.log(val1);

// let val2 = calculate(100, 50, substract);
// console.log(val2);

// //! HOF : returning a function
// function greet(message) {
//   return function (name) {
//     return `${message} ${name}`;
//   };
// }

// let val3 = greet("Welcome");
// console.log(val3("John"));

//! 9) CALLBACK FUNCTION : function passes as an arguements to another function

// function callback() {
//   console.log("Welcome");
// }

// function greet(cb) {
//   cb();
// }
// greet(callback);

// //! EXAMPLE
// let arr1 = [10, 20, 30];
// arr1.forEach(function (ele, idx, arr) {
//   console.log(ele, idx, arr);
// });

//! 10) ARROW FUNCTION : Intoduced in ES6, to declare function in shorter syntax

// // WAY 1
// let a1 = () => {
//   console.log("Arrow func 1");
// };
// a1();

// // WAY 2 : can replace () with _
// let a2 = _ => {
//   console.log("Arrow func 2");
// };
// a2();

// // WAY 3 : if one parameter, () not required
// let a3 = x => {
//   console.log("Arrow Func 3", x);
// };
// a3(10);

// // WAY 4 : if multiple parameter, () required
// let a4 = (x,y) => {
//   console.log("Arrow Func 4", x,y);
// };
// a4(10,20);

// // WAY 5 : if having single line of code, {} not required
// let a5 = () => console.log("Arrow Func 5");
// a5();

// // WAY 6 : Explicit return, "return" keyword and {} is mandatory
// let a6 = () => {
//     return "Arrow Func 6"
// }
// console.log(a6());

// // WAY 7 : Implicit return , "return" keyword and {} not required
// let a7 = (n1,n2) =>  n1+n2;
// console.log(a7(5,2));

//! ARRAYS

// //! 1) array litrals
// let arr1 = [10];
// console.log(arr1);

// //! 2) array constructor
// let arr2 = new Array(10);
// arr2[15] = "Hello"
// console.log(arr2);

// //! ARRAY METHODS
// let arr1 = [10, 20, 30, 40, 50];
// console.log(arr1);
// console.log("length is ", arr1.length);

// //! array.push() : Appends new elements to the end of an array, and returns the new length of the array
// let newLength = arr1.push(60, 70, 80);
// console.log(arr1); // [10,20,30,40,50,60,70,80]
// console.log("new length is ", newLength);

// //! array.pop() : Removes last element from array and returns it
// let lastEl = arr1.pop();
// console.log(arr1); // [10,20,30,40,50,60,70]
// console.log("Last element was", lastEl);

// //! array.unshift() : Appends new elements to the first of an array, and returns the new length of the array
// let newLength1 = arr1.unshift(100, 200, 300);
// console.log(arr1); // [100,200,300,10,20,30,40,50,60,70]
// console.log("new length is", newLength1);

// // //! NON-PRIMITIVE (MUTABLE) VS PRIMITIVE (IMMUTABLE)
// // let str1 = "Hello";
// // console.log(str1); // Hello
// // str1[0] = "X";
// // console.log(str1); // Hello -> immutable

// // let arr = [1, 2, 3, 4, 5];
// // console.log(arr); // [1,2,3,4,5]
// // arr[0] = "Hiii";
// // console.log(arr); // ["Hiii",2,3,4,5] -> mutable

// //! array.shift() :  Removes first element from array and returns it
// let firstEl = arr1.shift();
// console.log(arr1); //  [200,300,10,20,30,40,50,60,70]
// console.log("First Element was", firstEl);

// //! array.splice( startIndex , deleteCount , newElements )

// let arr2 = [100, 200, 300, 400, 500];

// // only remove
// let deletedEle1 = arr2.splice(2, 1);
// console.log(arr2); // [100, 200, 400, 500]
// console.log(deletedEle1); // [300]

// // only add
// let deletedEle2 = arr2.splice(3, 0, "Hii");
// console.log(arr2); //  [100, 200, 400, 'Hii', 500]
// console.log(deletedEle2); // []

// // add and remove
// let deletedEle3 = arr2.splice(1, 2, true);
// console.log(arr2); //  [100, true, 'Hii', 500]
// console.log(deletedEle3); // [200,400]

// //! array.slice( startIndex , endIndex )
// // NOTE : endIndex always gets ignored

// let arr3 = [100, 200, 300, 400, 500];

// let slicedArr1 = arr3.slice(1, 4);
// console.log("Sliced Array 1 is", slicedArr1); // [200, 300, 400]

// let slicedArr2 = arr3.slice(3);
// console.log("Sliced Array 2 is", slicedArr2); // [400, 500]

// console.log("Original Array is", arr3);

// //! array.sort()
// let arr4 = [10, 2, 60, 3, 78, 9];

// // lexographical sorting : number get converted into string
// let sortedArr1 = arr4.sort();
// console.log(sortedArr1); // [10, 2, 3, 60, 78, 9]

// let sortedArr2 = arr4.sort((a, b) => a - b);
// /*
// if number > 0 ===> swap
// if number < 0 ===> no swap
// if number = 0 ===> no swap
// */
// console.log(sortedArr2); // [2, 3, 9, 10, 60, 78]

// let sortedArr3 = arr4.sort((a, b) => b - a);
// console.log(sortedArr3); // [78, 60, 10, 9, 3, 2]

// //! array.reverse()
// let arr5 = [1, 2, 3, 4, 5];
// console.log(arr5); // [1,2,3,4,5]

// let revArr = arr5.reverse();
// console.log("Revesed Arr", revArr); // [5, 4, 3, 2, 1]
// console.log(arr5); // [5, 4, 3, 2, 1]

//! ADVANCE ARRAY METHODS

// //! array.forEach() : do not return anything , Undefined
// let arr1 = [10, 20, 30, 40, 50];

// let val1 = arr1.forEach((ele, idx, array) => {
//   console.log(ele, idx, array);
//   return ele + 5;
// });
// console.log(val1);

// console.log("------------------------------");

// //! array.map() :it returns a new array
// let val2 = arr1.map((ele, idx, array) => {
//   console.log(ele, idx, array);
//   return ele + 5;
// });
// console.log(val2);

// //! array.filter() : returns new array of filtered elements
// let val3 = arr1.filter((ele) => ele >= 30);
// console.log(val3);

// //! array.find() : Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// let val4 = arr1.find((ele) => {
//   return ele === 30;
// });
// console.log(val4); // 30

// //! array.findIndex() : Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// let val5 = arr1.findIndex((ele) => {
//   return ele === 30;
// });
// console.log(val5); // 2

// //! array.reduce()
// let arr2 = [10, 20, 30, 40];

// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//   sum = sum + arr2[i];
// }
// console.log("sum is", sum);

// let val6 = arr2.reduce((acc, ele, idx, array) => {
//   console.log(acc, ele);
//   return acc + ele;
// }, 25);
// console.log("Sum is ---->", val6);

//! REST AND SPREAD OPERATOR : used to pack and unpack array elements
// let arr1 = [10, 20, 30, 40, 50];
// console.log(...arr1); // spread

// let arr2 = ["Hello", true, 100, null, ...arr1];
// console.log(arr2); // rest

// //! ARRAY DESTRUCTRING
// let arr1 = [10, 20, 30, 40, 50, 60, 70];
// let [a, b, c, d, ...e] = arr1;

// console.log(a); // 10
// console.log(d); // 40
// console.log(e); // [50,60,70] <--- rest

// //! skipping elements while destructuring
// let arr2 = [100, 200, 300, 400, 500, 600];
// let [n1, , n2, , , n3] = arr2;
// console.log(n1, n2, n3);

// //! nested array destructuring
// let arr3 = [1000, 2000, [10, 20, 30, 40, [54, 80, 500], 50, 60]];
// let [x1, , [, x2, , x3, [, x4], , x5]] = arr3;
// console.log(x1, x2, x3, x4, x5); // 1000,20,40,80,60

// //! EXAMPLE OF REACT
// function useState(initialState) {
//   return [initialState, () => {}];
// }
// let [state , setState] = useState()

//! OBJECTS

// //! object literal
// let obj1 = {
//   id: 1,
//   name: "John Doe",
//   isLoggedIn: true,
//   salary: 50000,
// };
// obj1.company = "HCL";
// console.log(obj1);

// //! object constructor
// let obj2 = new Object({ id: 2, name: "Jane Doe" });
// obj2.company = "TCS";
// console.log(obj2);

//! CRUD
// let student1 = {
//   id: "123AX",
//   fname: "Clark",
//   lname: "Kent",
//   age: 15,
//   city: "Delhi",
//   class: "8",
// };
// //! READ
// // there are 2 ways

// let x = "city";

// // 1) using dot operator
// console.log(student1.id);
// console.log(student1.x);

// // 2) using square brackets
// console.log(student1["fname"]);
// console.log(student1[x]);

// let arr = [10, 20, 30];
// //! for of loop
// for (let i of arr) {
//   console.log(i);
// }

// //! for in loop
// for (let i in arr) {
//   console.log(i);
// }

// //! ONLY WAY TO ITERATE AN OBJECT
// for (let i in student1) {
//   console.log(student1[i]);
// }

//! UPDATE

// add new key
// student1.course = "Mern Stack"

// // update existing key
// student1.age = 20

// //! DELETE
// delete student1.class

// console.log(student1);

//! HOW TO CREATE YOUR OWN METHODS

// let emp1 = {
//   id: 1,
//   fname: "John",
//   lname: "Doe",
//   getFullName: function () {
//     console.log(this.fname, this.lname);
//   },
// };
// emp1.getFullName();

//! "this" keyword
// console.log(window);
// console.log(this);

// let arr1 = [this];
// console.log(arr1[0]);

// function demo(){
//   console.log(this);
// }
// demo()

// let obj1 = {
//   x: this,
// };

// console.log(obj1.x);

// function getEmail() {
//   console.log(`${this.fname}.${this.lname}@gmail.com`);
// }

// function greet(city, state) {
//   console.log(`${this.fname} is from ${city}, ${state}`);
// }

// const emp1 = {
//   id: 1,
//   fname: "Jane",
//   lname: "Doe",
//   company: "TCS",
// };

// const emp2 = {
//   id: 2,
//   fname: "Clark",
//   lname: "Kent",
//   company: "HCL",
// };

// const emp3 = {
//   id: 3,
//   fname: "Bruce",
//   lname: "Wayne",
//   company: "Wipro",
// };

// //! call(), apply() and bind()
// console.log(emp1);

// // ! call() : calls a function immediately with a specified "this" and accepts multiple arguements

// getEmail.call(emp1);
// greet.call(emp1, "Noida", "UP");

// //! apply() : calls a function immediately with a specified "this" and accepts 2 arguements , 1st is object reference and 2nd is []

// getEmail.apply(emp2);
// greet.apply(emp2, ["Noida", "UP"]);

// //! bind() : it do not call function immediately, returns a bounded function that can be called later on

// let boundedGetEmail = getEmail.bind(emp3)
// boundedGetEmail()

// let boundedGreet = greet.bind(emp3)
// boundedGreet("Noida" , "Up")

// //! OBJECT METHODS

// let obj = { id: 1, ename: "John" };

// //! Object.keys()
// let keys = Object.keys(obj);
// console.log(keys); // ["id" , "ename"]

// //! Object.values()
// let values = Object.values(obj);
// console.log(values); // [ 1 , "John" ]

// //! Object.entries()
// let keyAndValue = Object.entries(obj);
// console.log(keyAndValue); //  [  ["id",1]  , ["ename","John"]  ]

// //! Object.fromEntries()
// let obj2 = Object.fromEntries(keyAndValue)
// console.log(obj2); // { id: 1, ename: "John" }

// ! OBJECT DESTRUCTURING
// let employee1 = {
//   id: 1,
//   fname: "John",
//   lname: "Doe",
//   address: {
//     pincode: 890761,
//     city: "Noida",
//     state: "UP",
//   },
//   hobbies: ["Coding", "Gaming", "Travelling"],
//   // company: "HCL",
//   sal: 60000,
// };

// // let { fname: firstName, company = "NA", sal: salary = 0 } = employee1;
// // console.log(firstName, company, salary);

// let { address:{city } , hobbies:[ , , h1]} = employee1;
// console.log(city , h1);

//! JSON , LOCAL STORAGE AND SESSION STORAGE
let user1 = {
  id: 1,
  fname: "John",
  lname: "Doe",
  sal: 50000,
  company: "Qspider",
};

//! ---> store data in localStorage OR sessionStorage
// let jsonObject = JSON.stringify(user1); // converts JS to JSON
// localStorage.setItem("users", jsonObject);

//! ---> get data from localStorage OR sessionStorage
// let storageData = localStorage.getItem("users");
// let jsObject = JSON.parse(storageData); // converts JSON to JS
// console.log(jsObject);

//! ---> remove single key from localStorage OR sessionStorage
// localStorage.removeItem("demo2")

//! ---> remove all keys from localStorage OR sessionStorage
// localStorage.clear()

// let p1 = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(p1);

// p1.then((response) => {
//   console.log("Promise Fullfilled 🚀");

//   let p2 = response.json();
//   console.log(p2);

//   p2.then((data) => {
//     console.log(data);
//   });

//   p2.catch(() => {
//     console.log("Something went wrong ❌");
//   });
// });

// p1.catch(() => {
//   console.log("Promise Rejected ❌");
// });

// let promise1 = fetch("https://jsonplaceholder.typicode.com/todos");
// console.log(promise1);

// promise1.then((response) => {
//   let promise2 = response.json();
//   console.log(promise2);

//   promise2.then((data) => {
//     console.log(data);
//   });

//   promise2.catch((err) => {
//     console.log(err);
//   });
// });

// promise1.catch((err) => {
//   console.log(err);
// });

// promise1.finally(()=>{
//   console.log("API CALL DONE ⭐", );
// })

//! ASYNC AND AWAIT
// async function getTodos() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();
//     displayTodos(data);
//   } catch (err) {
//     console.log("API Call Failed..", err);
//   }
// }
// getTodos();

// function displayTodos(allTodos) {
//   console.log(allTodos);

//   allTodos.forEach((todo) => {
//     let { id, userId, title, completed } = todo;

//     document.writeln(`
//       <div>
//         <h3>TODO : ${title}</h3>
//          ${
//            completed
//              ? `<span style='background-color:green'>Completed</span>`
//              : `<span style='background-color:red'>Pending</span>`
//           }
//       </div>

//       `);
//   });
// }

//! setInterval and setTimeout

// console.log("5 sec Timer started");

// setTimeout(() => {
//   console.log("5 sec Completed");
// }, 5000);

// let intervalID = setInterval(() => {
//   console.log("hiii");
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log("Interval Stopped");
// }, 10000);

//! EVENT LOOP EXAMPLE CODE : https://www.jsv9000.app/
// console.log("Start");

// setTimeout(function timeout1() {
//   console.log("Timeout 1");
// }, 4000);

// console.log("Hello World");

// Promise.resolve("Success").then(function promiseFunc(res) {
//   console.log(res);
// });

// setTimeout(function timeout2() {
//   console.log("Timeout 2");
// }, 0);

// console.log("End");

// ! DOM - DOCUMENT OBJECT MODEL

//! DOM SELECTORS: to target html elements and apply functionality to it. there are 5 types of DOM Selectors

// //! 1) document.getElementById()
// const h2Tag = document.getElementById("subheading");
// console.log(h2Tag); // <h2></h2>
// console.log(h2Tag.textContent); // text of h2 tag
// h2Tag.style.backgroundColor = "red";

// //! 2) document.getElementsByClassName()
// const elements = document.getElementsByClassName("content");
// console.log(elements); // HTMLCollection(3) [h3.content, div.content, h6.content]
// console.log(elements[0].textContent);

// let arr = [10, 20, 30];
// console.log(arr);

// // Array.isArray() is used to check weather array is pure or not, returns boolean
// console.log(Array.isArray(elements)); // false
// console.log(Array.isArray(arr)); // true

// // NOTE : HTMLCollection is a Array-Like Object. its not a pure array because it does not have array prototype object

// //! 3) document.getElementsByTagName()
// let sections = document.getElementsByTagName("section");
// console.log(sections); // HTMLCollection(3) [section, section, section]
// console.log(sections[2]);

// //! 4) document.querySelector("id , class ,tagname")

// const ele1 = document.querySelector("#subheading")
// console.log(ele1);

// const ele2 = document.querySelector(".content")
// console.log(ele2);

// const ele3 = document.querySelector("section")
// console.log(ele3);

// const ele4 = document.querySelector("section , #subheading , .content")
// console.log(ele4);

// //! 5) document.querySelectorAll(" #id, .class ,tagname ")

// const lists1 = document.querySelectorAll("section")
// console.log(lists1); // NodeList(3) [section, section, section]

// const lists2 = document.querySelectorAll(".content")
// console.log(lists2); // NodeList(3) [h3.content, div.content, h6.content]

// const lists3 = document.querySelectorAll("#subheading")
// console.log(lists3); // NodeList [h2#subheading]

// const lists4 = document.querySelectorAll("section , .content, #subheading")
// console.log(lists4); // NodeList(7) [h2#subheading, h3.content, div.content, h6.content, section, section, section]

//! HTMLCollection VS NodeList
// const collection = document.getElementsByTagName("section");
// const lists = document.querySelectorAll("section");

// // --> SIMILARITY : both are impure array
// console.log(Array.isArray(collection)); // false
// console.log(Array.isArray(lists)); // false

// // --> DIFFRENCE :
// // 1) We cannot use any of the array methods in HTMLCollection, but we can use forEach() method in NodeList
// console.log(collection);

// console.log(lists);
// lists.forEach((el) => console.log(el));

// // 2) HTMLCollection are known as Live Collection whereas NodeList is known as Static Collection

// console.log("HTMLCollection ---> ", collection.length); // 3
// console.log("NodeList ---> ", lists.length); // 3

// const sectionTag = document.createElement("section");
// sectionTag.textContent = "Hello World";
// console.log(sectionTag);
// document.body.appendChild(sectionTag);

// console.log("HTMLCollection ---> ", collection.length); // 4 Live Collection
// console.log("NodeList ---> ", lists.length); // 3 Static Collection

//! EVENTS : actions performed by the user

// //! MOUSE EVENTS
// function singleClick() {
//   console.log("single clicked");
// }

// function doubleClick() {
//   console.log("double clicked");
// }

// function cursorEnter() {
//   console.log("cursor entered");
// }

// function cursorExit() {
//   console.log("cursor exit");
// }

// function cursorMove() {
//   console.log("cursor moved");
// }

// //! KEYBOARD EVENTS

// function keyPress() {
//   console.log("key is pressed");
// }

// function keyRelease() {
//   console.log("Key is released");
// }

// function focusChange() {
//   console.log("input changed");
// }

// //! FORM EVENT

// function formHandle(e) {
//   e.preventDefault(); // stops page-reload
//   console.log("Form Submitted");
//   console.log(e);

//   let user = {
//     email: e.target[0].value,
//     password: e.target[1].value,
//   };

//   console.log(user);
//   alert(`Welcome ${user.email}`);
// }

// //! DOM MANIPULATION

// // How to create an HTML element :- document.createElement()

// const pTag = document.createElement("p"); // <p></p>
// const divTag = document.createElement("div");
// const imgTag = document.createElement("img");

// //! How to add text
// pTag.textContent = "hello i am Paragraph";
// divTag.innerHTML = "<em>Hello i am div</em>"; // <--- it will create em tag

// //! How to add attributes : there are 2 ways
// // 1) using property
// imgTag.src =
//   "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80";
// imgTag.height = 200;

// // 2) using method
// imgTag.setAttribute("alt", "bird");

// // document.body.appendChild(imgTag ) //<-- it can append only 1 node as a child
// document.body.append(imgTag, divTag, pTag); //<-- can append multiple node as a child

// //! element.addEventListener( "event" , callback , useCapture )

// const btnTag = document.createElement("button");

// btnTag.textContent = "Login";

// btnTag.addEventListener("dblclick", () => {
//   alert("Logged in Successfully");
// });

// document.body.append(btnTag);



// const signupBtn = document.getElementById("signup-btn");

// signupBtn.addEventListener("click", () => {
//   console.log("Signup success");
// });

//! EVENT PROPAGATION : the process how event travels in DOM tree. it travels in 2 phases 
// 1)BUBBLING PHASE 0 (default) : event travels from target element to root element
// 2)CAPTURING PHASE 1 : event travels from root element to target element

// const section = document.querySelector("section")
// const article = document.querySelector("article")
// const div = document.querySelector("div")

// section.addEventListener("click",(e)=>{
//   e.stopPropagation()
//   section.style.backgroundColor="yellow"
//   console.log("section");
// },0)

// article.addEventListener("click",(e)=>{
//   e.stopPropagation()
//   article.style.backgroundColor="red"
//   console.log("article");
// },0)

// //! stopPropagtion() : 
// // prevents further propagation of the current event in the capturing and bubbling phases.

// //! stopImmediatePropagation() : 
// // stops event to propagate either in bubbling or capturing phase and it also prevents several listeners that are attached to the same element for the same event type to get called

// div.addEventListener("click",(e)=>{
//   e.stopImmediatePropagation()
//   div.style.backgroundColor="orange"
//   console.log("div");
// },0)

// div.addEventListener("click",(e)=>{
//   console.log("click 2");
// },0)

// div.addEventListener("click",(e)=>{
//   console.log("click 3");
// },0)


