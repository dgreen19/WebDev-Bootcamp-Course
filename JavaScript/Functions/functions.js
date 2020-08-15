alert('CONNECTED!');

function singSong() {
	console.log('Twinkle, twinkle, little star,');
	console.log('How I wonder what you are!');
	console.log('Up above the world so high,');
	console.log('Like a diamond in the sky.');
	console.log('When the blazing sun is gone,');
	console.log('When he nothing shines upon,');
	console.log('Then you show your little light,');
	console.log('Twinkle, twinkle, all the night.');
	console.log('Twinkle, twinkle, little star,');
	console.log('How I wonder what you are!');
}

function square(num) {
	console.log(num * num);
}

function helloThere() {
	// body...
	console.log('Hello There!');
	console.log('General Kenobi! You are a bold one!');
}

function theSenate() {
	console.log("In the name of the Galatic Senate of the Republic, you're under arrest Chancellor.");
	console.log('Are you threatening me Master Jedi?');
	console.log('The Senate will decide your fate.');
	console.log('I am the Senate.');
	console.log('Not yet.');
	console.log("It's treason then...");
}

function square(x) {
	return x * x;
}

'4 squared is: ' + square(4);

function capitalize(str) {
	if (typeof str === 'number') {
		return "That's not a string!";
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = 'paris';
var capital = capitalize(city);

var num = 37;
var capital = capitalize(num); //this is not a string!
