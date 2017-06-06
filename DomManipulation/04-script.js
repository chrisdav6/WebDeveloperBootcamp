//Dom Manipulation 4 - DOM Manipulation


//////*************Style***************//////
//The style property is one way to manipulate an element's style



//One way to manipulate an element is to do it manually adding one propery at a time

//SELECT
var highlight = document.querySelector(".highlight");

//MANIPULATE
highlight.style.color = "blue";
highlight.style.border = "5px solid red";
highlight.style.fontSize = "20px";
highlight.style.background = "yellow";
highlight.style.display = "inline-block";
highlight.style.padding = "50px";
highlight.style.textAlign = "center";




//A better way to manipulate style is to add a CSS class

//SELECT
var highlight2 = document.querySelector(".highlight2");

//MANIPULATE (Add Class)
highlight2.classList.add("highlight2");



//classList can add classes, remove classes and toggle clases

//SELECT
var removeMe = document.querySelector(".removeMe");

//MANIPULATE (Remove Class)
removeMe.classList.remove("removeMe");



//SELECT
var toggleMe = document.querySelector(".toggleMe");

//MANIPULATE (Toggle Class)
setInterval(function() {
	toggleMe.classList.toggle("toggleMe");
},5000);
