var fb = new Firebase('https://college-essays.firebaseio.com');

function submit() {
	var fb = new Firebase('https://college-essays.firebaseio.com/essays/');
	var prompt = document.getElementById('prompt').value;
	var paragraph = document.getElementById('paragraph').value;
	var dateTime = new Date();
	fb.push({prompt: prompt, paragraph: paragraph, timeStamp: dateTime});
}