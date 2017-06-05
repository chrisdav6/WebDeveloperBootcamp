//Array To Do List App Part 2

var todos = ["Buy some stuff"];

var input = prompt("What would you like to do?", "");


while(input !== "quit") {

	if(input === "list") {
		list();
	} else if(input === "new") {
		newToDo();
	} else if(input === "delete") {
		deleteToDo();
	}

	//ask again for new input
	input = prompt("What would you like to do?", "");

}

console.log("OK, you quit the app");

function list() {
	console.log("*************");
	todos.forEach(function(todo, index) {
		console.log(index + ": " + todo);
	});
	console.log("*************");
}

function newToDo() {
	//ask for new todo
	var newToDo = prompt("Enter a new ToDo", "");
	//add to todos array
	todos.push(newToDo);
	console.log("Added ToDo!");
}

function deleteToDo() {
	//ask for index of item to be deleted
	var askDelete = prompt("Which would you like to delete?", "");
	//delete that todo
	todos.splice(askDelete, 1);
	console.log("Deleted ToDo!");
}