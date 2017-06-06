//Dom Manipulation 3 - Excercise

//Come up with 4 different ways to select the first <p> tag
var p1 = document.getElementById("first");
var p1 = document.getElementsByTagName("p")[0];
var p1 = document.getElementsByClassName("special")[0];
var p1 = document.querySelector(".special");
var p1 = document.querySelectorAll("#first")[0];
p1.style.color = "red";