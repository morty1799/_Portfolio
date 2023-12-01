/* comment
multiline */

///alert('Hello, World');

const FIRSTNAME = "Carmen";
let lastName = "Lau"; // E56
// var lastName = "Yiu"; // E55
console.log(FIRSTNAME, lastName);
let age = 21;
console.log(typeof age, age);
console.log(FIRSTNAME, lastName);
age = "twenty";
age = 21.5;
age = true;
// console.log(typeof age, age);
// console.log(FIRSTNAME, lastName);

let drink = "Black tea";
// global defining what "drink" is

const fullName = (first, last) => {
  // console.log(first, last);
  // console.log(first + "'s favourite drink is " + drink);
  console.log(`${first}'s favourite drink is ${drink}`);
  let veggie = "cucumber"; // local scope
  console.log(veggie);
};

let nameList = ["Carmen Lau","Joey Yiu", "Kayla Bensing"];
// square brackets = Array
nameList.push("Tiana Lewis");
nameList.push("Yang Yang");
console.log(nameList);
//nameList.pop();
console.log(nameList);

fullName("Carmen", "Lau");
fullName("Joey", "Yiu");
fullName("Kayla", "Bensing");

for (let i = 0; i < nameList.length; i++) {
    fullName(nameList[i]);
}

//while loop
let j = 0; 
while (j < nameList.length) {
  fullName(nameList[j]);
  j++;
}
/* year auto-date */
// Get the current year
var currentYear = new Date().getFullYear();
// Find the span element with id "currentYear"
var currentYearElement = document.getElementById("currentYear");
// Update the text content
currentYearElement.textContent = currentYear;

/* pop-up */
// Find the button element with the ID "btn-alert"
var btnAlert = document.getElementById("btn-alert");

// Add a click event listener to the button
btnAlert.addEventListener("click", function() {
  // Display an alert message
  alert(" Hey everyone, welcome to check out the latest design for PREP the music band! I'm really excited to connect with all of you :)");
});
// Show the button
btnAlert.style.display = "block";

/* Hover */
// Get the button element
const btnHover = document.getElementById('btn-hover');
// Define the text for the button
const buttonText = 'IG:@gojohnny.go';
// Set up event listeners for mouse enter and leave
btnHover.addEventListener('mouseenter', function() {
  btnHover.classList.add('text');
  btnHover.textContent = buttonText;
});
btnHover.addEventListener('mouseleave', function() {
  btnHover.classList.remove('text');
});


/*Incremental Button + If-else + Loop  */
let count = 1;

document.getElementById('btn-counter').onclick = () => {
  count = count + 1;
  document.getElementById('txt-counter').innerHTML = `Life is good: ${count} &#128378;`;
  if (count % 2 === 0) {
    document.getElementById('txt-counter').classList.remove('odd');
    document.getElementById('txt-counter').classList.add('even');
  } else {
    document.getElementById('txt-counter').classList.remove('even');
    document.getElementById('txt-counter').classList.add('odd');
  }
};

let numbersList = document.getElementById('numbers');
for (let i = 1; i <= 100; i++) {
  //const listItem = document.createElement('li');
  //listItem.textContent = i % 2 === 0 ? 'Even' : 'Odd';
  //numbersList.appendChild(listItem);
  numbersList.innerHTML += `<li>${i % 2 === 0 ? 'even': 'odd'}</li>`
}