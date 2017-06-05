//Build a ForEach Loop

var colors = ["red", "orange", "yellow"];

function myForEach(arr, func) {
	for(var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

myForEach(colors, function(color) {
	alert(color);
});

