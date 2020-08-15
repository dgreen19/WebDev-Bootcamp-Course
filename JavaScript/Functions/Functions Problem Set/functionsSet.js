alert('CONNECTED!');

function isEven() {
	var num = prompt('Enter a number: ');
	return num % 2 === 0;
	/*if (num % 2 == 0) {
		return true;
	} else {
		return false;
	}*/
}

/*function isEven(num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}*/

function factorial(num) {
	//define the result
	var result = 1;
	//calculate factorial and store value in result
	for (var i = 2; i <= num; i++) {
		result = result * i;
	}
	//return the resulting value
	return result;
}

function kebabToSnake(str) {
	var newStr = str.replace(/-/g, '_');
	return newStr;
}
