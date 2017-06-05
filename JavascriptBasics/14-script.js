//Javascript Nested Objects & Arrays

var posts = [
	{
		title: "Cats Suck!",
		author: "Chris",
		comments: [
			"Awesome",
			"The Worst"
		]
	},
	{
		title: "Cats are Assholes!",
		author: "Chris",
		comments: [
			"Yay",
			"Cats are lame!"
		]
	}
];

console.log(posts[0].title + " by " + posts[0].author);
console.log("Comments - " + posts[0].comments[0] + ", " + posts[0].comments[1]);