// Default parameters
  // function rollDie (numSides = 6) {
  //   return Math.floor(Math.random() * numSides) + 1
  // }

  // function greet (person, msg = "Hey there", punc = "!") {
  //   console.log(`${msg}, ${person}${punc}`);
  // }

// Spread
  // Math.max(...), Math.min(...), console.log(...)
  // const nums = [13,4,5,21,3,3,1,2,7,6,4,2,53456];
  // console.log(Math.max(...nums));
  // console.log(Math.min(...nums));
  // console.log(...nums);

  // console.log(..."hello"); // console.log("h","e","l","l","o");

  // Arrays
    // const cats = ["Blue", "Scout", "Rocket"];
    // const dogs = ["Rusty", "Wyatt"];
    // const allPets = [...cats, ...dogs];

    // console.log([..."hello"]);

  // Objects
    // const feline = { legs: 4, family: "Felidae"};
    // const canine = { isFurry: true, family: "Caninae"};
    
    // const copy = {...feline};
    // const copyAdded = {...feline, color: "black"};

    // const catDog = {...feline,...canine};
    // const catDog = {...canine,...feline}; // order dependant if conflict

    // console.log({...[2,4,6,8]});
    // console.log({..."hello"});
  
    // const dataFromForm = {
    //   email: "blueman@gmail.com",
    //   password: "tobias123!",
    //   username: "tfunke"
    // };
    // const newUser = {...dataFromForm, id: 2345, isAdmin: false};

// Rest
  // function sumForOf() {
  //   let total = 0;
  //   for(let num of arguments) {
  //     total += num;
  //   }
  //   return total;
  // }

  // function sumReduce() {
  //   return arguments.reduce((total, el) => total + el)
  // }

  // function sumRest(...nums) {
  //   return nums.reduce((total, el) => total + el)
  // }

  // function sumRestForOf(...nums) {
  //   let total = 0;
  //   for(let el of nums) total += el;
  //   return total;
  // }

  // function raceResults(gold, silver, ...everyoneElse) {
  //   console.log(`Gold medal goes to: ${gold}`);
  //   console.log(`Silver medal goes to: ${silver}`);
  //   console.log(`And thanks to everyone else: ${everyoneElse}`);
  // }

  // raceResults("Tammy","Todd","Tina","Trevor","Travis");

// Destructuring
  // Arrays
    // const scores = [929321,899341,888336,772739,543671,243567,111934];
    // const highScore = scores[0];
    // const secondHighScore = scores[1];

    // const [gold,silver,bronze] = scores;

  // Objects
    const user = {
      email: "harvey@gmail.com",
      password: "sCoTt1948sMiTh",
      firstName: "Harvey",
      lastName: "Milk",
      born: 1930,
      died: 1978,
      bio: "Harvey Bernard Milk was an Americal politician and the first openly...",
      city: "San Francisco",
      state: "California"
    }

    // const user2 = {
    //   email: "stacy@gmail.com",
    //   firstName: "Stacy",
    //   lastName: "Gonzalez",
    //   born: 1987,
    //   city: "Tulsa",
    //   state: "Oklahoma"
    // }

    // const firstName = user.firstName;
    // const lastName = user.lastName;

    // const { email, firstName, lastName, city, bio } = user;
    // const { born: birthYear, died: deathYear = "N/A" } = user;

    // const { born: birthYear2, died: deathYear2 = "N/A" } = user2;

  // Parameters
    function fullName(user) {
      return `${user.firstName} ${user.lastName}`
    }

    function fullName2(user) {
      const { firstName, lastName } = user;
      return `${firstName} ${lastName}`
    }

    function fullName3({ firstName, lastName }) {
      return `${firstName} ${lastName}`
    }