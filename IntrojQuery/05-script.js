//jQuery Intro 05 - jQuery Common Methods Part2

$(function() {

	//attr() - Get the value of an attribute for the first element in the set of
	//matched elements or set one or more attributes for every matched element.

	//Get the image title attribute
	console.log($("img").attr("title"));

	//Set a single attribute on the image
	$("img").attr("longdesc", "A long description!");

	//Get added longdesc attribute
	console.log($("img").attr("longdesc"));

	//create multiple attributes using an object
	var myImgAttrs = {
		src : "05Images/MNP2.jpg",
		alt : "My New Pep Pep Updated!",
		title : "My New Pep Pep HAHA!"
	};

	//Set multiple attributes on the image using an object when clicked
	$("img").on("click", function() {
		$(this).attr(myImgAttrs);
	});


	//val() - Get the current value of the first element in the set of matched
	//elements or set the value of every matched element.

	//Get the value of the text input, since its empty it will return an empty string
	console.log($("input").val());

	//Set the value of the input passing an argument to val()
	$("input").val("Samphia Dangus");

	//Then get the updated value
	console.log($("input").val());

	//Click the input to erase the value
	$("input").on("click", function() {
		$(this).val("");
	});

});