//jQuery Intro 02 - jQuery Selectors

//Selecting with jQuery ex. $("selectorGoesHere");
//Selecting witg jQuery is similar to querySelectorAll()

//You can pass an object to the jQuery css method
var h3styles = {
	color : "green",
	background : "lightblue",
	border : "2px solid orange",
	padding : "20px"
};


$(function() {

	//Select the body
	$("body").css("background", "lightgrey");

	//Select the h2
	$("h2").css("background", "steelblue");

	//Select the first li
	$("li").eq(1).css("background", "green");

	//Select all of the li's
	$("li").css("color", "orange");

	//Select the link inside of the li
	$("li a").css({
		color : "black",
		background : "white"
	});

	//Select the li with a class of hunks
	$(".hunks").css("background", "yellow");

	//Select the li with an ID of gas
	$("#gas").css("background", "red");

	//Select the H3 apply styles using object defined above
	$("h3").css(h3styles);

});