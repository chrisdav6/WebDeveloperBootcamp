//jQuery Intro 04 - jQuery Common Methods

$(function() {

	//text() - Get the combined text contents of each element in the set of matched elements,
	//including their descendants, or set the text contents of the matched elements.

	//Get the text of the ul
	console.log($("ul").text());

	//Get the text of the li's
	console.log($("li").text());

	//Get text using text()
	console.log($("h1").text());

	//Update text
	$("h1").text("Some New Text for the H1");

	//Get updated text using text()
	console.log($("h1").text());


	//html() - Get the HTML contents of the first element in the set of matched elements or set
	//the HTML contents of every matched element.

	//Get the html of the ul
	console.log($("ul").html());

	//Update the ul
	$("ul").html("<li>Hacked UL</li><li>Cinco Boy</li><li>D-Pants</li><li>MyEggs</li>");


});