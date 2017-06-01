var userName = prompt("What is your dang name ya dingus!", "");

while(userName === "") {
	userName = prompt("Enter your dang name ya dingus!", "");
}

alert("Nice to meet you " + userName);