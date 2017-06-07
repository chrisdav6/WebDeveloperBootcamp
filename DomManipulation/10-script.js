//Dom Manipulation 10 - Events ToDo List

//Select all li's
var lis = document.querySelectorAll("li");

//Loop over all li's
for(var i = 0; i < lis.length; i++) {

	//Add click event listener
	lis[i].addEventListener("click", function() {
		this.classList.toggle("strike");
		// console.log(this.localName + " clicked!");
		console.log(this.localName + " : " + this.textContent + " clicked!");
	});

	//Add mouseover event listener
	lis[i].addEventListener("mouseover", function() {
		this.classList.add("highlight");
		console.log(this.localName + " : " + this.textContent + " hovered!");
	});

	//Add mouseout event listener
	lis[i].addEventListener("mouseout", function() {
		this.classList.remove("highlight");
	});

}