//jQuery Intro 06 - jQuery Manipulating Classes

$(function() {

	//addClass() - Adds the specified class(es) to each element in the set of matched elements

	//add the class of .correct to the paragraph with a class of p1 when clicked
	$(".p1").on("click", function() {
		$(this).addClass("correct");
	});

	//removeClass() - Remove a single class, multiple classes, or all
	//classes from each element in the set of matched elements.

	//Remove the class of .wrong from the paragraph with a class of p2 when clicked
	$(".p2").on("click", function() {
		$(this).removeClass("wrong");
	});

	//toggleClass() - Add or remove one or more classes from each element in the set of matched
	//elements, depending on either the class's presence or the value of the state argument.

	//Toggle the class of .done on the paragraph with a class of p3 when clicked
	$(".p3").on("click", function() {
		$(this).toggleClass("done");
	});

});