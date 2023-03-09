"use strict";
//document.body.innerHTML += "Hello JavaScript!";
console.log("app.js virker");

// function sayHello() {
//   document.querySelector("p").textContent =
//     "Hej " + document.querySelector("input").value;
// }

// document.querySelector("button").addEventListener("click", sayHello);

function lol() {
  let theName = document.querySelector("#fullName").value;
  console.log(theName);
  let age = document.querySelector("#alder").value;
  let email = document.querySelector("#mail").value;
  document.querySelector("h3").textContent =
    "Hej " + theName + " som er " + age + " år gammel med email " + email;
}

document.querySelector("button").addEventListener("click", lol);

console.log(Number("   123  "));
console.log(Number("123z"));
console.log(Number(true));
console.log(Number(false));

const bool = true;
const num = 41;
const str = "Peter";
const obj = {
  cats: 2,
  cars: 1,
};

// datatyper
const nothing = null;
let undf;
const symbol = Symbol("symbol");

console.log(bool);
console.log(num);
console.log(str);
console.log(obj);
console.log(nothing);
console.log(undf);
console.log(symbol);

// strings
let single = "single-quoted";
let double = "double-qouted";
let backtics = `backtics`;

console.log(single);
console.log(double);
console.log(backtics);

let string = "1234";
console.log(string);

let number = 1234;
console.log(number);

// concatenation
const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

console.log(n1 + n2);
console.log(s1 + s2);
console.log(n1 + s2);
console.log(s1 + n2);
