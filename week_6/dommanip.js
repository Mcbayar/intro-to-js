// DOM Manipulation

// Create a div element
// Add a class to the div element
// Add text to the div element
// Append the div element to the body

// Create a new div element
// const newDiv = document.createElement("div");

// Add a class to the div element
// newDiv.classList.add("container");

// Add text to the div element
// newDiv.innerHTML = "Hello, World!";

// Append the div element to the body
// document.body.appendChild(newDiv);

function sayHello() {
  document.getElementById("container").innerHTML = "Sain baina uu!";
}

function clear() {
  document.getElementById("container").innerHTML = "";
}

const sayHelloButton = document.getElementById("greeting-button");

sayHelloButton.style.backgroundColor = "blue";
sayHelloButton.style.color = "white";
sayHelloButton.style.border = "none";
sayHelloButton.style.padding = "10px 20px";
sayHelloButton.style.borderRadius = "5px";

sayHelloButton.addEventListener("click", sayHello);
sayHelloButton.addEventListener("mouseover", function () {
  sayHelloButton.style.backgroundColor = "green";
  sayHelloButton.style.cursor = "pointer";
});

sayHelloButton.addEventListener("mouseout", function () {
  sayHelloButton.style.backgroundColor = "blue";
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
