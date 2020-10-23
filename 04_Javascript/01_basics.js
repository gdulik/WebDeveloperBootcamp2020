// Connecting
  // console.log("Connected");
  // let total = 1 + 3;
  // console.log(`Total is ${total}`);

// Conditionals
  // console.log("Before conditional");
  // let random = Math.random();
  // if( random < 0.5 ) {
  //   console.log("Your number is less then 0.5.");
  // } else if ( random >= 0.5) {
  //   console.log("Your number is greater then 0.5.");
  // }
  // console.log("After conditional");

  // Password must be 6+ characters
  // Password cannot include space
  // const password = prompt("Enter new password");
  // if ( password.length >= 6 ) {
  //   if ( !(password.includes(" ")) ) {
  //     console.log("Password is good.");
  //   } else {
  //     console.log("Password must not contain space.");
  //   }
  // } else {
  //   console.log("Password is too short. Must be at least 6 characters.")
  // }

// Arrays
  // let daysOfWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// Array Methods
  // push(),pop(),shift(),unshift()
  // concat()
    // let cats = ["blue", "kitty"];
    // let dogs = ["rusty", "wyatt"];
    // let animals = cats.concat(dogs);
    // console.log(animals);
  // includes(),indexOf(),reverse(),slice(),splice(),sort()

//Objects
  // const person = {
  //   firstName: "Mick",
  //   lastName: "Jagger"
  // };
  // person.firstName,person["firstName"]

// Loops
  // For loop
    // for (let i = 1; i <= 10; i++) {
    //   console.log(i);
    // }

    // for (let i = 100; i >= 0; i -= 10) {
    //   console.log(i);
    // }

  //While loop
    // let num = 0;
    // while ( num < 5 ) {
    //   console.log(num);
    //   num++;
    // }

  //Combining loops
    // let maxNumber = parseInt(prompt("Welcome! Enter your max number:"));
    // while( !maxNumber ) {
    //   maxNumber = parseInt(prompt("Enter a valid max number:"));
    // }

    // const randomNumber = Math.floor( Math.random() * maxNumber ) + 1;
    // console.log(randomNumber);

    // let guess = parseInt(prompt("Enter your first guess:"));
    // let guessCount = 0;
    // while (true) {
    //   guessCount++;
    //   if ( guess === "q" ) break;

    //   if ( parseInt(guess) === randomNumber ) {
    //     break;
    //   } else if ( parseInt(guess) > randomNumber ) {
    //     guess = prompt("Too High. Guess again");
    //   } else if ( parseInt(guess) < randomNumber ) {
    //     guess = prompt("Too Low. Guess again");
    //   }
    // }
    // if ( guessCount === 1 ) {
    //   console.log(`It took you ${guessCount} guess`);
    // } else {
    //   console.log(`It took you ${guessCount} guesses`);
    // }

  // For Of loops
    // const subreddits = ["cringe","books","chickens","funny"];

    // for ( let i = 0; i < subreddits.length; i++ ) {
    //   console.log(`Visit reddit.com/r/${subreddits[i]}`);
    // }

    // for ( let sub of subreddits ) {
    //   console.log(`Visit reddit.com/r/${sub}`);;
    // }

  // For In loops
    // const testScores = {
    //   Jenny: 85,
    //   Dwayne: 91,
    //   Josh: 83,
    //   Lucy: 92
    // }

    // for ( let person in testScores ) {
    //   console.log(`${person} scored: ${testScores[person]}`);
    // }

    //Object.values(), Object.entries(), Object.keys()
      // let total = 0;
      // let scores = Object.values(testScores);
      // for (let score of scores) {
      //   total += score;
      // }
      // console.log(`Average score is ${total/scores.length}`);