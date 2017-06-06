//Dom Manipulation 2 - DOM Selectors


//////********getElementById***********/////////

//getElementById takes a string argument and
//returns the one element with a matching ID

var tag = document.getElementById("highlight");
tag.style.background = "yellow";




//////****getElementsByClassName******/////////

//getElementsByClassName takes a string argument and
//returns a node list of indexed elements that have a matching class
//These are not arrays, some array methods such as forEach will not work

//They can be selected one by one using a specific index
var tags = document.getElementsByClassName("bolded")[0];
tags.style.fontWeight = "bold";

//Or you can iterate over the list with a loop
var tags1 = document.getElementsByClassName("bolded");

for(var i = 0; i < tags1.length; i++) {
	tags1[i].style.color = "red";
}




//////*****getElementsByTagName*******/////////

//getElementsByTagName returns a node list of indexed elements 
//that have a matching tag name, like <li>, <h1> or <p>
var paragraphs = document.getElementsByTagName("p");

//They can be selected one by one using a specific index
//or you can iterate over the list with a loop
for(var i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = "orange";
}




//////*********querySelector***********/////////

//querySelector returns the first element that matches
//a given css style selector. Similar to selecting elements with jQuery
//You can pass a classname an ID or a tagname
//You can also make more specific selections ex. querySelector("li a.someClass");
var crazy = document.querySelector(".crazy");
crazy.style.color = "gray";

var nuts = document.querySelector("#nuts");
nuts.style.color = "green";




//////*******querySelectorAll********/////////

//querySelectorAll returns a list of elements that matches
//a given css style selector. Similar to selecting elements with jQuery
//You can pass a classname an ID or a tagname
var myClass = document.querySelectorAll(".myClass");

//They can be selected one by one using a specific index
//or you can iterate over the list with a loop
for(var i = 0; i < myClass.length; i++) {
	myClass[i].style.color = "indigo";
}
