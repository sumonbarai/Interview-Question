//question:21

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 4, c: 5 };

const newObj = Object.assign(obj1, obj2);

console.log(newObj);
console.log(obj1 === newObj);

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

/* //question:07
const obj = {
  1: "hello programmer",
};

console.log(obj);
console.log(obj.hasOwnProperty(1));
console.log("1" in obj); */

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
