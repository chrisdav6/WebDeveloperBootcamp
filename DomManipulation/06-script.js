//Dom Manipulation 6 - Manipulating Attributes

//Use getAttribute() and setAttribute() to read and write
//attributes like src or href

//Select link
var link = document.querySelector("a");

//view link href attribute
console.log(link.getAttribute("href"));

//change link href attribute
link.setAttribute("href", "http://www.s2ki.com/");

//view updated link href attribute
console.log(link.getAttribute("href"));





//Select Img
var img = document.querySelector("img");

//view img src attribute
console.log(img.getAttribute("src"));

//change img src attribute
img.setAttribute("src", "06Images/s2k2.jpg");

//view updated img src attribute
console.log(img.getAttribute("src"));

