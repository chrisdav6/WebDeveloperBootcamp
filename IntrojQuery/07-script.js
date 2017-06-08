//jQuery Intro 07 - jQuery Events

$(function() {

	//click - Attach a click event handler function for one or more events to the selected elements.

	//Attach a click event handler to the button with the class of btn1 that alerts "clicked" when clicked
	$(".btn1").on("click", function() {
		alert("Clicked!");
	});

	//Attach a click event handler to all of the paragraphs on the page that changes the color 
	//and console.logs the text when clicked
	$("p").on("click", function() {
		$(this).css("color", "red");
		console.log($(this).text());
	});


	//keypress - Attach an event handler to the "keypress" JavaScript event, or trigger that event on an element.

	//Attach a keypress event handler on the input and console.log "key pressed"
	$("input[type='text']").on("keypress", function() {
		console.log("Key Pressed inside the input!");
	});

	//Use the event object to listen for a key press on the enter key
	$(document).on("keypress", function(event) {
		if(event.which === 13) {
			console.log("Enter button pressed!");
		}
	});


});