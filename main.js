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
