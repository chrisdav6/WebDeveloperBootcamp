//jQuery Todo Projects 01 - jQuery ToDo App

$(function() {

	//Check off specific todos by clicking
	$("li").on("click", function() {
		$(this).toggleClass("completed");
	});

	//Click on X to delete specific todo - fadeOut then remove
	//Stop propagation from bubbling up to the li click event handler
	$("span").on("click", function(event) {
		event.stopPropagation();
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
	});

	//Add new todo
	$("input[type='text']").on("keypress", function(event){
		if(event.which === 13) {
			//Grab new todo text from input
			var todoText = $(this).val();
			//Create new li with todo text and append to ul
			$("ul").append("<li><span>X</span> " + todoText + "</li>");
			//Clear text within the text input
			$(this).val("");
		}
	});

});