// Function to show an alert when called

function showAlert() {
  alert("You clicked the alert button!");
}

// Get the first element with the class name "click-button" and assign
// it to alertButton

const alertButton = document.getElementsByClassName("click-button")[0];

// Add an event listener to alertButton that calls showAlert when the
// button is clicked

alertButton.addEventListener("Click", showAlert);

// Function to log a message to the console when called

function showConsole() {
  console.log("You clicked the console button!");
}

// Get the second element with the class name "click-button" and
// assign it to consoleButton

const consoleButton = Document.getElementsByClassName("click-button")[1];

// Add an event listener to consoleButton that calls showConsole
// when the button is clicked

consoleButton.addEventListener("click", showConsole);

// Get the element with the id "show-button" and assign it to showButton

const showButton = document.getElementById("show-button");

// Get the element with the id "hide-button" and assign it to hideButton

const hideButton = document.getElementById("hide-button");

// Add an event listener to showButton that changes the innerHTML of the
// element with the id "text" to "Hello, World!" when the button is clicked

showButton.addEventListener("click", function () {
  document.getElementById("text").innerHTML = "Hello, World!";
});

// Add an event listener to hideButton that clears the innerHTML of the
// element with the id "text" when the button is clicked

hideButton.addEventListener("click", function () {
  document.getElementById("text").innerHTML = "";
});

const taskuud = [];
let task = "";

const toDoInput = document.getElementById("to-do-input");
toDoInput.addEventListener("input", function () {
  task = event.target.value;
});

const toDoButton = document.getElementById("to-do-button");
toDoButton.addEventListener("click", addTask);

function addTask() {
  // Шинэ үүргийг массив руу нэмнэ
  taskuud.push(task);

  // Оруулах талбарыг хоослоно
  toDoInput.value = "";

  // task хувьсагчийг хоослоно
  task = "";

  // Үүргүүдийг шинэчлэх функцуудыг дуудна
  clearTasks();
  displayTasks();
}

function clearTasks() {
  const toDoList = document.getElementById("to-do-list");
  toDoList.innerHTML = "";
}

function displayTasks() {
  for (let i = 0; i < taskuud.length; i++) {
    const taskItem = document.createElement("li"); //<li></li>
    taskItem.innerHTML = taskuud[i]; // <li>wash</li>
    document.getElementById("to-do-list").appendChild(taskItem);
    // <ul><li>wash</li></ul>
  }
}
