// Array of todos
const todos = [];

// Ask for input
let input = prompt("What would you like to do?");

while (input !== "quit" && input !== "q") {
  if(input.toLowerCase() === "new") {
    newTodo();
    input = prompt("What would you like to do?");
  } else if (input.toLowerCase() === "list") {
    listTodo();
    input = prompt("What would you like to do?");
  } else if (input.toLowerCase() === "delete") {
    deleteTodo();
    input = prompt("What would you like to do?");
  } else {
    input = prompt("Enter a valid command!");
  }
}
console.log("Ok, quit  the app!");

function newTodo() {
  const newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  console.log(`${newTodo} added to the list`);
}
function listTodo() {
  console.log("**********");
  for (const [i, todo] of todos.entries()) {
    console.log(`${i}: ${todo}`);
  }
  console.log("**********");
}
function deleteTodo() {
  const removeIndex = prompt("Enter index of todo to delete");
  if (!Number.isNaN(parseInt(removeIndex))) {
    todos.splice(removeIndex, 1);
    console.log(`Todo removed`);
  } else {
    console.log("Unknown index");
  }
}