'use strict';

// get username so we can greet them
let username = prompt('What is your name?');

// greet user
alert('Hello ' + username);

let numCorr = 0;

// question one
let answerOne = prompt('Do I like sports? Answer \'yes\' or \'no\'').toLowerCase();

// console.log('user entered to question 1: ' + answerOne);

// check if the answer is correct.
if (answerOne === 'yes' || answerOne === 'y') {
  alert('You are correct, I definitely like sports.');
  numCorr++;
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
  numCorr++;
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
  numCorr++;
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
  numCorr++;
} else {
  alert('Please answer \'yes\' or \'no\'.');
}

// question five
let answerFive = prompt('Do I have animals? Answer \'yes\' or \'no\'').toLowerCase();

// console.log('user entered to question 5: ' + answerFive);

// check if the answer is correct.
if (answerFive === 'yes' || answerFive === 'y') {
  alert('For sure ' + username + '! Two dogs. Thank you for playing!');
  numCorr++;
} else if (answerFive === 'no' || answerFive === 'n') {
  alert('I have two dogs ' + username + ' but thank you for playing.');
} else {
  alert('Please answer \'yes\' or \'no\'.');
}

// question six

let attempts = 4;

for (let i = 0; i < attempts; i++) {
  console.log('i is '+ i);
  let myNumber = prompt ('What is my favorite number?');
  myNumber = parseInt(myNumber);
  if (myNumber === 27) {
    alert('Congratulations, you got it!');
    numCorr++;
    break;
  } else if (myNumber < 27) {
    alert(`Sorry but you are too low, you have ${attempts - i - 1} attempts remaining.`);
  } else if (myNumber > 27) {
    alert(`Sorry but you are too high, you have ${attempts - i - 1} attempts remaining.`);
  }
  if (i === 3){
    alert('Sorry but the answer is 27.');
  }
}

// question 7


// let myFavSports = ['soccer', 'football', 'rugby', 'baseball'];
// console.log(myFavSports);
// let tries = 6;

// for (let i = 0; i < tries; i++) {
//   console.log('i is '+ i);
//   for (let j = 0; j < myFavSports.length; j++) {
//     let userResponse = prompt('Name one of my favorite sports.');
//     console.log(userResponse);
//     if (userResponse === myFavSports[i]) {
//       alert('Nice! You must really know me!');
//       numCorr++;
//       break;
//     } else if (userResponse !== myFavSports[i]){
//       alert(`Sorry but that is incorrect, you have ${tries - i - 1} tries remaining. Keep Thinking!!`);
//     }
//   }
//   if (i === 5){
//     alert(`Sorry but the answer is ${myFavSports}.`);
//   }
// }

alert(`Congratulations! You got ${numCorr} correct!!`);

