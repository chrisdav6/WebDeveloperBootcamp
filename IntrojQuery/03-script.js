//jQuery Intro 03 - jQuery Selectors Exercise

$(function() {

	//Select all divs and give them a purple background and white text
	$("div").css({
		background : "purple",
		color : "white",
		marginBottom : "20px"
	});

	//Select the divs with a class of "highlight" and make them 200px wide
	$(".highlight").width("200px");

	//Select the div with the ID "third" and give it an orange border
	$("#third").css("border", "3px solid orange");

	//Bonus - Select the first div only and change its font color to pink
	$("div").first().css("color", "pink");
	$("div").eq(0).css("color", "pink");
	$("div:contains('You')").css("color", "pink");
	$("div:first-of-type").css("color", "pink");

});