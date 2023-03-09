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
