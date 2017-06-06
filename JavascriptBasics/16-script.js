//Javascript Object Methods

var comments = {
	data: [
		"Good Job",
		"Bye",
		"Lame"
	],
	print: function() {
		this.data.forEach(function(el){
			console.log(el);
		});
	}
};

comments.print();


