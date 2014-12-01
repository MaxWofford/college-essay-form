function submit() {
	// Grab user input from our input boxes' values
	var prompt = document.getElementById('prompt').value;
	var paragraph = document.getElementById('paragraph').value;
	// Make a timestamp
	var dateTime = new Date();
	// Validate that our form was filled in
	if ('' != (prompt && paragraph)) {
		pushToFirebase(prompt, paragraph, dateTime);
		clearForm();
		notify('success','Essay successfully submitted. Thank you for your time!');
	} else{
		notify('danger','Form was not filled in');
	};
}

// Notification 'type' argument can be 'danger', 'success', 'info', 'warning'
function notify(type, message) {
	// Set the notify div class
	document.getElementById('notify').className = 'alert alert-' + type;
	// Fill in our notification with a message
	document.getElementById('notify').innerHTML = message;
}

// Triggered by notification click
function clearNotification() {
	// Clear our notification's class and content
	document.getElementById('notify').className = '';
	document.getElementById('notify').innerHTML = '';	
}

// Run when user successfully submits form
function clearForm() {
	// Clear our text boxes' content so the user doesn't submit twice
	document.getElementById('prompt').value = '';
	document.getElementById('paragraph').value = '';
}

function pushToFirebase(prompt, paragraph, dateTime) {
	var fb = new Firebase('https://college-essays.firebaseio.com/essays/');
	fb.push({prompt: prompt, paragraph: paragraph, timeStamp: dateTime});
}