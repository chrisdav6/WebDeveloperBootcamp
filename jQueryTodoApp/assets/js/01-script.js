//jQuery Todo Projects 01 - jQuery ToDo App

$(function() {

	//Check off specific todos by clicking
	$("li").on("click", function() {
		$(this).toggleClass("completed");
	});

});