//Javascript Objects


//Suppose i wanted to model a single person: name, and and city
//I could use an array like this:
var person = ["Cindy", 32, "Troy"];

//to retrieve the persons hometown:
person[2]; //this is not very meaningful code

//What if i accidentally reveresed the order?
var person2 = ["Travis", "los Angeles", 21];




//This is a perfect use case for an object!
//Objects store data in key-value pairs
//Unlike arrays, objects have no order
var person = {
	name: "Cindy",
	age: 32,
	city: "Troy",
	"home town": "Memphis",
	"9lives": "Dang!"
};



//Retrieving data from objects is so dang easy ya dingus! You have 2 options

//Dot notation
console.log(person.name); //Popular option

//Bracket notation
//Use this method if the key is more than one word or starts with a number
console.log(person["home town"]);
console.log(person["9lives"]);

//or if a variable is being used for the key
var myPersonData = "city";
console.log(person[myPersonData]);