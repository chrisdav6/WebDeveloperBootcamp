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

});