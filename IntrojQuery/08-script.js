//jQuery Intro 08 - jQuery Effects

$(function() {

	//fadeOut() - Hide the matched element by fading them to transparent
	//takes number in milliseconds to determine the length of the fade

	//Select the button with a class of .btn1 and fade it out over 3 seconds when clicked
	$(".btn1").on("click", function() {
		$(this).fadeOut(3000);
	});

	//fadeOut() can also accept a callback when complete

	//Select the button with a class of .btn2 and fade it out over 2 seconds when clicked
	//then fadeIn() over 2 seconds as a callback
	$(".btn2").on("click", function() {
		$(this).fadeOut(3000, function() {
			$(this).fadeIn(3000);
		});
	});

	//Select the button with a class of .btn3 and fadeOut the divs 1 by 1 when clicked,
	//then console.log "complete", the fade the divs back in
	$(".btn3").on("click", function() {
		$(".div1").fadeOut(2000, function() {
			$(".div2").fadeOut(2000, function() {
				$(".div3").fadeOut(2000, function() {
					console.log("All Divs Faded Out!");
					$(".div1, .div2, .div3").fadeIn(2000);
				});
			});
		});
	});

	//fadeOut() will not remove the element, only set the display to none
	//If you want to remove the element you have to use the remove() method

	//FadeOut the button with a class of .btn4 then remove it from the document when clicked
	$(".btn4").on("click", function() {
		$(this).fadeOut(2000, function() {
			$(this).remove();
			console.log(".btn4 removed from document");
		});
	});



	//fadeIn() - Works just like fadeOut() - Display the matched element by fading them to opaque
	//takes number in milliseconds to determine the length of the fade

	//Select the button with a class of .btn5 and fadeIn the div with a class of .div4 when clicked
	$(".btn5").on("click", function() {
		$(".div4").fadeIn(3000, function() {
			console.log("Div 4 Faded In!");
		});
	});


	//fadeToggle() - Display or hide the matched elements by animating their opacity.
	//takes number in milliseconds to determine the length of the fade

	//Select the button with a class of .btn6 and fadeToggle the div with a class of .div5 when clicked
	$(".btn6").on("click", function() {
		$(".div5").fadeToggle(3000, function() {
			console.log("Div 5 Toggled!");
		});
	});


	//sildeDown() - Display the matched elements with a sliding motion.
	//takes number in milliseconds to determine the length of the slide

	//Select the button with a class of .btn7 and slideDown the div with a class of .div6 when clicked
	$(".btn7").on("click", function() {
		$(".div6").slideDown(3000, function() {
			console.log("Div 6 SlideDown!");
		});
	});


	//sildeUp() - Similar to slideDown() - Hide the matched elements with a sliding motion.
	//takes number in milliseconds to determine the length of the slide

	//Select the button with a class of .btn8 and slideUp the div with a class of .div7 when clicked
	$(".btn8").on("click", function() {
		$(".div7").slideUp(3000, function() {
			console.log("Div 7 SlideUp!");
		});
	});



	//sildeToggle() - Display or hide the matched elements with a sliding motion.
	//takes number in milliseconds to determine the length of the slide

	//Select the button with a class of .btn9 and slideToggle the div with a class of .div8 when clicked
	$(".btn9").on("click", function() {
		$(".div8").slideToggle(3000, function() {
			console.log("Div 8 SlideToggled!");
		});
	});

});