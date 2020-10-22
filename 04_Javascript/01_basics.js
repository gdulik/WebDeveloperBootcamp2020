// Connecting
console.log("Connected");
let total = 1 + 3;
console.log(`Total is ${total}`);

// Conditionals
console.log("Before conditional");
let random = Math.random();
if( random < 0.5 ) {
  console.log("Your number is less then 0.5.");
} else if ( random >= 0.5) {
  console.log("Your number is greater then 0.5.");
}
console.log("After conditional");

// Password must be 6+ characters
// Password cannot include space
const password = prompt("Enter new password");
if ( password.length >= 6 ) {
  if ( !(password.includes(" ")) ) {
    console.log("Password is good.");
  } else {
    console.log("Password must not contain space.");
  }
} else {
  console.log("Password is too short. Must be at least 6 characters.")
}

// Arrays
let daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// Array Methods
// push(),pop(),shift(),unshift()
// concat()
let cats = ["blue", "kitty"];
let dogs = ["rusty", "wyatt"];
let animals = cats.concat(dogs);
console.log(animals);
// includes(),indexOf(),reverse(),slice(),splice(),sort()

//Objects
const person = {
  firstName: "Mick",
  lastName: "Jagger"
};