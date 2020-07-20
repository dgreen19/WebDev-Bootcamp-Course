//Practice exercises for learning Control Flow with if-else statements and loops in JS

/*
yourAge = prompt('How old are you?');
//ageCalculation = yourAge * 365
//console.log("You've been alive for " + ageCalculation + " days");
if (yourAge < 18) {
  console.log("You are not old enough to enter.");
} else if (yourAge < 21) {
  console.log("You can come in, but you are not old enough to drink.");

} else {
  console.log("Come on in. Enjoy your stay.");
}

if (yourAge === 21) {
  console.log("HAPPY 21ST BIRTHDAY!!!!");
}

if (yourAge < 0) {
  console.log("Come back once your out of the womb.");
}

if (age % 2 !== 0) {
  console.log("Your age is odd!");
}

// If age is a perfect square
if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
} */

/*console.log("Prinnt all number between -10 and 19");
var num = -10;

while (num <= 19) {
  console.log(num);
  num++;
}

console.log("Print all even number between 10 and 40");
var num = 10;

while (num <= 40) {
  console.log(num);
  num+=2;

}


console.log("Print all numbers divisible by both 5 and 3, between 5 and 50");
var num = 5;

while (num <= 50) {

  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num+=1;

}

console.log("Print all odd numbers between 300 and 333");
var num = 300;

while (num <= 333) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num+=1;
}*/


alert('CONNECTED!');


console.log("Prinnt all number between -10 and 19");
for (var count = -10; count < 20; count++)
{
  console.log(count);
}

console.log("Print all numbers divisible by both 5 and 3, between 5 and 50");
for (var count = 5; count <= 50; count+=1)
{
  if (count % 5 === 0 && count % 3 === 0) {
    console.log(count);
  }
}

console.log("Print all even number between 10 and 40");
for (var count = 10; count < 40; count+=2)
{
  console.log(count);
}

console.log("Print all odd numbers between 300 and 333");
for (var count = 300; count <= 333; count++)
{
	if (count % 2 !== 0) {
    console.log(count);
  }
}
