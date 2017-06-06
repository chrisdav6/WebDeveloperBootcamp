//Javascript Objects Movie Database

var movies = [
	{
		title: "Napolean Dynamite",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Despicable Me 3",
		rating: 5,
		hasWatched: false
	},
	{
		title: "Heat",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Halloween 42",
		rating: 1.5,
		hasWatched: false
	}
];


//For Loop
console.log("For Loop");

for(var i = 0; i < movies.length; i++) {
	var result = "You have ";

	if(movies[i].hasWatched) {
		result += "watched ";
	}else {
		result += "NOT watched ";
	}

	result += "\"" + movies[i].title + "\" - " + movies[i].rating + " stars";
	console.log(result);
}

//ForEach Loop with a function buildString()
console.log("ForEach Loop with a function buildString()");

movies.forEach(function(movie) {
	console.log(buildString(movie));
});

function buildString(movie) {
	var result2 = "You have ";

	if(movie.hasWatched) {
		result2 += "watched ";
	}else {
		result2 += "NOT watched ";
	}

	result2 += "\"" + movie.title + "\" - " + movie.rating + " stars";
	return result2;
}