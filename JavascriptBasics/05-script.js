//Suppose you want to make a group of friends
//This is a lot of code and does not let us group the friends together
var friend1 = "Jon";
var friend2 = "Dave";
var friend3 = "Colleen";
var friend4 = "Scott";

//This is a perfect use case for an array
//Arrays let us group data together is lists
var friends = [
	"Jon",
	"Dave",
	"Colleen",
	"Scott"
];

//Arrays are indexed starting at 0.
console.log(friends[0]); //"Jon"
console.log(friends[1]); //"Dave"
console.log(friends[2]); //"Colleen"
console.log(friends[3]); //"Scott"

//Arrays can hold any type of data
var random = [34, true, "Chris", null];

//Arrays have a length property
console.log(friends.length) //4