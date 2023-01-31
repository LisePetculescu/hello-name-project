//document.body.innerHTML += "Hello JavaScript!";
console.log("app.js virker");

function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("input").value;
}

document.querySelector("button").addEventListener("click", sayHello);
