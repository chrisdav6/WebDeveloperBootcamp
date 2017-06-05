//Array Problem Set

//Problem 1 - Print Reverse
//Write a function printReverse() that takes an array as an argument and prints out
//the elements in the array in reverse order
function printReverse(arr) {
	var reversed = arr.reverse();
	reversed.forEach(function(item) {
		console.log(item);
	});
}

var myNums = [1, 2, 3, 4, 5];
var myLetters = ["A", "B", "C", "D", "E"];

printReverse(myNums);
printReverse(myLetters);




//Problem 2 - Is Uniform
//Write a function isUniform() that takes an array as an argument and returns
//true if all elements in the array are identical
function isUniform(arr) {
	var first = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if(first !== arr[i]) {
			return false;
		}
	}
	return true;
}

console.log(isUniform([1,1,1]));
console.log(isUniform(["b", "b", "b"]));
console.log(isUniform([2,1,1]));
console.log(isUniform(["a", "b", "b"]));
console.log(isUniform([1,1,2]));
console.log(isUniform(["b", "b", "a"]));






//Problem 3 - Sum Array
//Write a function sunArray() that takes an array of numbers and returns
//the sum of all numbers in the array
function sumArray(arr) {
	var result = 0;
	for(var i = 0; i < arr.length; i++) {
		if(isNaN(parseInt(arr[i]))) {
			return "Only use numbers dingus!";
		} else {
			result += arr[i];
		}
	}
	return result;
}

console.log(sumArray([1,2,3]));
console.log(sumArray([10,3,10,4]));
console.log(sumArray([-5,100]));
console.log(sumArray(["hi",100]));
console.log(sumArray([100,100,"hi"]));








//Problem 4 - Max
//Write a function max() that takes an array of numbers and returns
//the maximum number in the array
function max(arr) {
	var max = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if(isNaN(parseInt(arr[i]))) {
			return "Only use numbers dingus!";
		} else if(max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}

console.log(max([1,2,3]));
console.log(max([10,3,10,4]));
console.log(max([-5,100]));
console.log(max([100,1000,10000,5,6,200000]));
console.log(max(["hi",100]));
console.log(max([100,"hi"]));

