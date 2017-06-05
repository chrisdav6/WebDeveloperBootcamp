//Push & Pop
//Push - Use push() to add to the end of an array
var colors = [
	"red",
	"orange",
	"yellow"
];

colors.push("green");
console.log(colors); //"red", "orange", "yellow", "green"

//Push returns the length of the array after the method has been used


//Pop - Use pop() to remove the last item in an array
colors.pop();
console.log(colors); //"red", "orange", "yellow"

//Pop returns the removed element
var myColor = colors.pop();
console.log(myColor); //"yellow"





//Shift & Unshift
//Unshift - Use unshift() to add to the front of an array
var colors = [
	"red",
	"orange",
	"yellow"
];

colors.unshift("blue");
console.log(colors); //"blue", red", "orange", "yellow"

//Unshift returns the length of the array after the method has been used


//Shift - Use shift() to remove the first item in an array
colors.shift();
console.log(colors); //"red", "orange", "yellow"

//Shift returns the removed element
var myColor = colors.shift();
console.log(myColor); //"red"





//IndexOf
//Use indexOf() to find the index of an item in an array
var friends = [
	"Jon",
	"Dave",
	"Scott",
	"Colleen",
	"Doug",
	"Jon"
];

//Return the first index at which a given element can be found
console.log(friends.indexOf("Scott")); //2
console.log(friends.indexOf("Jon")); //0, not 5

//Returns -1 if the element is not present
console.log(friends.indexOf("Doug Prishpreed")); //-1





//Slice
//Use slice() to copy parts of an array
var fruits = [
	"Banana",
	"Orange",
	"Lemon",
	"Apple",
	"Mango"
];

//Use slice() to copy the 2nd and 3rd fruits
//Specify index where the new array starts (1) and ends (3)
var citrus = fruits.slice(1, 3);
console.log(citrus) //"Orange", "Lemon"

//slice does not alter the original array
console.log(fruits); //"Banana", "Orange", "Lemon", "Apple", "Mango"

//You can also use slice() to copy an entire array
var nums = [1, 2, 3];
var otherNums = nums.slice();

console.log(nums); //1, 2, 3
console.log(otherNums); //1, 2, 3