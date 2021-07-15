'use strict';

// get username so we can greet them
let username = prompt('What is your name?');

// greet user
alert('Hello ' + username);

// question one
let answerOne = prompt('Do I like sports? Answer \'yes\' or \'no\'').toLowerCase();

// console.log('user entered to question 1: ' + answerOne);

// check if the answer is correct.
if (answerOne === 'yes' || answerOne === 'y') {
  alert('You are correct, I definitely like sports.');
} else if (answerOne === 'no' || answerOne === 'n') {
  alert('Incorrect, I definitely like sports.');
} else {
  alert('Please answer \'yes\' or \'no\'.');
}

// question two
let answerTwo = prompt('Do I prefer rum? Answer \'yes\' or \'no\'').toLowerCase();

// console.log('user entered to question 2: ' + answerTwo);

// check if the answer is correct.
if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('For sure, and make it a double!');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Wrong, do you even know me at all?');
} else {
  alert('Please answer \'yes\' or \'no\'.');
}

// question three
let answerThree = prompt('Do I like mustard? Answer \'yes\' or \'no\'').toLowerCase();

// console.log('user entered to question 3: ' + answerThree);

// check if the answer is correct.
if (answerThree === 'yes' || answerThree === 'y') {
  alert('Yuck.');
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Right, keep that stuff away from me.');
} else {
  alert('Please answer \'yes\' or \'no\'.');
}

// question four
let answerFour = prompt('Do I currently work? Answer \'yes\' or \'no\'').toLowerCase();

// console.log('user entered to question 4: ' + answerFour);

// check if the answer is correct.
if (answerFour === 'yes' || answerFour === 'y') {
  alert('Decided to give it up to focus on coding');
} else if (answerFour === 'no' || answerFour === 'n') {
  alert('Exactly! Who wants to work when you can just learn code.');
} else {
  alert('Please answer \'yes\' or \'no\'.');
}

// question five
let answerFive = prompt('Do I have animals? Answer \'yes\' or \'no\'').toLowerCase();

// console.log('user entered to question 5: ' + answerFive);

// check if the answer is correct.
if (answerFive === 'yes' || answerFive === 'y') {
  alert('For sure ' + username + '! Two dogs. Thank you for playing!');
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('I have two dogs ' + username + ' but thank you for playing.');
} else {
  alert('Please answer \'yes\' or \'no\'.'); 
}
