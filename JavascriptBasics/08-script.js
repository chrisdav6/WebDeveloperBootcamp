//Array To Do List App

var todos = ["Buy some stuff"];

var input = prompt("What would you like to do?", "");

while(input !== "quit") {

	if(input === "list") {
		console.log(todos);
	} else if(input === "new") {
		//ask for new todo
		var newToDo = prompt("Enter a new ToDo", "");
		//add to todos array
		todos.push(newToDo);
	}

	//ask again for new input
	input = prompt("What would you like to do?", "");

}

console.log("OK, you quit the app");