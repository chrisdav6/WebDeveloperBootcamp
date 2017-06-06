//Dom Manipulation 5 - Manipulating Text and Content


//textContent returns a string of all the text contained in a given element
//textContent will overwrite any html within the selected tag

//Select the p tag
var tag = document.querySelector(".p1");

//view the text content
console.log(tag.textContent);

//alter the textContent
tag.textContent = "Updated Text Content, Blah!";

//view updated text content
console.log(tag.textContent);





//innerHTML, similar to textContent, except it returns a string of
//all the HTML contained in a given element
//innerHTML will overwrite whatever is currently assigned to the element

//Select the 2nd p tag
var tag2 = document.querySelector(".p2");

//view the innerHTML
console.log(tag2.innerHTML);

//alter the innerHTML
tag2.innerHTML = "This is the new <strong>text</strong> in the p2";

//view the updated innerHTML
console.log(tag2.innerHTML);




