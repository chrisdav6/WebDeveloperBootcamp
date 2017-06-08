$(function() {

	$("h1").on("click", function() {
		//Alert
		alert("Don't be a hunk, ya dingus!");
		//Change body bg color
		$("body").css("background", "yellow");
		//Change H1 text
		$(this).text("Don't be a hunk!");
		//Fade out the ul
		$("ul").fadeOut(3000, function() {
			//Append H2 to body
			$("body").append("<h2>HA HA!</h2>");
		});
	});

});