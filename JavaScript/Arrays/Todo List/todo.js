alert("CONNECTED");

var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");

while (input !== "quit") {
  //handle input
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
  }
  //ask for input again
  var input = prompt("What would you like to do?");
}

console.log("Closing application.");

var color = ["red", "blue", "green", "yellow", "orange"];

color.forEach(function (color) {
  console.log(color);
});
