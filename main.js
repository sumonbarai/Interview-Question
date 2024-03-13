/* //question:38
localStorage.setItem("isActive", false);

const isActive = localStorage.getItem("isActive");
if (isActive) {
  console.log("your answer is true");
} else {
  console.log("your answer is false");
}
 */
/* //question:37

city = "khulna";
console.log(city); */

/* //question:36

const obj = {
  names: null,
  city: undefined,
  age: false,
  country: 0,
};

const {
  names = "Sumon",
  city = "Khulna",
  age = 30,
  country = "Bangladesh",
} = obj;

console.log(names);
console.log(city);
console.log(age);
console.log(country); */

/* //question:35
const person = {
  val: 1,
  get a() {
    return this.val++;
  },
};

console.log(person.a);
console.log(person.a);
console.log(person.a); */

/* //question:34
console.log(~5);
console.log(~-6);
console.log(~~7.5);
console.log(~~-8.5); */

/* //question:33
console.log("hello");
var abc = "var variable print";

function abc() {
  console.log("print function");
}

console.log(abc()); */

/* //question:32

console.log([] == "");
console.log(undefined == null);
console.log(false == "");
console.log(10 == "10"); */

/* //question:31

const arr = new Array(5);
console.log(arr.length); // 5
console.log(arr[2]); // undefined;

arr.forEach((item) => {
  console.log(item);
}); */

/* //question:30
// 4 way to create IIFE (Immediately Invoked Function Expression)
// =======one=========
(function func() {
  console.log("way 1");
}());

// =======two=========
(function func() {
  console.log("way 2");
})();

// =======three=========
!function func() {
  console.log("way 3");
}();

// =======four=========
+function func() {
  console.log("way 4");
}();


 */

/* //question:29

// using non strict mode
const obj = {
  age: 30,
  ageCalculate: function (num) {
    return this.age + num;
  },
};

{
  const result = obj.ageCalculate(20);
  console.log(result);
}

{
  const { ageCalculate } = obj;
  const result = ageCalculate(20);
  console.log(result);
}
 */
/* //question:28

const arr = [5, 4, 3, 2, 1, 0, -1, -2, -3];

arr.forEach((number) => {
  if (number >= 0) {
    console.log("Number:", number);
    return; // You might think this would stop it, but nope!
  } else {
    arr.length = 0;
    return;
  }
  console.log("Stopping? Nope! Number:", number);
}); */

/* //question:27

async function getValue() {
  return "i love JavaScript";
}

const result = getValue();
console.log(result);
 */
/* //question:26

function add(item, arr) {
  return arr.push(item);
}
const result = add("c", ["a", "b"]);
console.log(result); */

/* //question:25

setTimeout(() => {
  console.log(1);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
  Promise.resolve().then(() => {
    console.log(10);
  });
});

queueMicrotask(() => {
  console.log(2);
  queueMicrotask(() => {
    console.log(12);
  });
});

console.log(4); */

/* //question:24
const obj = {
  x: 10,
  y: 20,
};

Object.freeze(obj);
const newObj = obj;
newObj.x = 50;
newObj.y = 60;

console.log(newObj.x);
console.log(newObj.y); */

/* //question:23

const obj1 = {
  name: "sumon",
  address: {
    country: "Bangladesh",
    city: "Khulna",
    ["post office"]: {
      one: "Rupsha",
    },
  },
};
const obj2 = structuredClone(obj1);
// const obj2 = { ...obj1 };

obj2.address["post office"].one = "Sadar";

console.log(obj1.address["post office"].one); */

/* //question:22

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 4, c: 5 };

const newObj = Object.assign(obj1, obj2);

console.log(newObj);
console.log(obj1 === newObj); */

/* //question:21
function test(a, a) {
  console.log(a);
}

test(10); */

/* //question:20

function regularFn(a, a) {}
const arrowFn = (b, b) => {};

regularFn(10, 100);
arrowFn(20, 200); */

/* //question:19
function run() {
  try {
    return 100;
  } finally {
    return 200;
  }
}

const output = run();
console.log(output); */

/* // question:18
const arr = [5, 6, 9];
arr.reduceRight((acc, cur) => {
  console.log(acc);
  console.log(cur);
}); */

/* // question:17

(function programmer() {
  const x = (y = 100);
})();

console.log(typeof x);
console.log(typeof y); */

/* // question:16
function getInfo(obj, year) {
  obj.name = "Sumon";
  year = 2023;
}

const person = { name: "Rahim", year: 2022 };
const year = 2000;
getInfo(person, year);

console.log(person.name);
console.log(year); */

/* // question:15
const arr = [1, 2, 3, 4];
console.log(1 in arr);
console.log(2 in arr);
console.log(3 in arr);
console.log(4 in arr); */

/* // question:14
function getMessage() {
  throw "hello world";
}

function sayHello() {
  try {
    const data = getMessage();
    console.log(data);
  } catch (error) {
    console.log(`an error : ${error}`);
  }
}

sayHello(); */

/* //question:13

const data = [..."Hello"];
console.log(data); */

/* //question:12

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    x = 1;
    y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
})(); */

/* //question:11

console.log(typeof typeof 1); */

/* //question:10
function say() {
  return (
    () => () =>
      0
  )();
}

console.log(typeof say()()); */

/* //question:09
var language = "Bangla";
const obj = {
  language: "English",
};

function hello() {
  console.log(this.language);
}

hello();
hello.call(obj); */

/* //question:08
String.prototype.city = () => {
  return "our city name is Khulna";
};

const name = "our city name is Dhaka";
console.log(name.city()); */

//question:07
const obj = {
  1: "hello programmer",
};

console.log(obj);
console.log(obj.hasOwnProperty(1));
console.log("1" in obj);

/* //question:06
function getName() {
  "use strict";
  myName = "sumon";
  console.log(myName);
}

getName(); */

/* //question:05
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are adult");
  } else if (data == { age: 18 }) {
    console.log("You are still adult");
  } else {
    console.log("You are not an adult");
  }
}

checkAge({ age: 18 }); */

/* // question:04
function getSummary(first, second, third) {
  console.log(first);
  console.log(second);
  console.log(third);
}

const names = "sumon";
const age = 30;

getSummary`${names} age is ${age}`; */

/* // question:03
function show() {
  console.log(show.age);
}

show();
show.age = 200;
show.age = 100;
show(); */

/* // question:02
console.log(+true);
console.log(!"javascript is single threaded language");
console.log(!!"php is single single threaded language"); */

/* // question:01
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

console.log(i); */
