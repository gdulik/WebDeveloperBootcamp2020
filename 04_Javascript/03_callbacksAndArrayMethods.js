// forEach()
  const numbers = [1,2,3,4,5,6,7,8,9,10];

  // numbers.forEach(function(el){
  //   if(el % 2 === 0){
  //     console.log(el);
  //   }
  // })

  // for(let el of numbers){
  //   console.log(el);
  // }

  const movies = [{
    title: "Amadeus",
    score: 99
  },
  {
    title: "Stand By Me",
    score: 85
  },
  {
    title: "Parasite",
    score: 95
  },
  {
    title: "Alien",
    score: 90
  },
  {
    title: "13 Going On 30",
    score: 70
  },
  {
    title: "Sharknado",
    score: 35
  },
  {
    title: "Waterworld",
    score: 62
  }]

  // movies.forEach(function(movie){
  //   console.log(`${movie.title} - ${movie.score}/100`);
  // })

// map()
  // const doubles = numbers.map(function(num){
  //   return num*2;
  // });

  // const titles = movies.map(function(movie){
  //   return movie.title;
  // })

// arrow function
  // const add = function(x,y) {
  //   return x + y;
  // }

  // const multiply = (x,y) => {
  //   return x * y;
  // }

  // const square = (x) => {
  //   return x * x;
  // }

  // const rollDie = () => {
  //   return Math.floor(Math.random() * 6) + 1;
  // }

  // implicit return
    // const rollDie = () => (
    //   Math.floor(Math.random() * 6) + 1
    // )

    // const add = (a,b) => a + b;

    // const newMovies1 = movies.map(function(movie){
    //   return `${movie.title} - ${movie.score/10}`;
    // })

    // const newMovies2 = movies.map((movie) => {
    //   return `${movie.title} - ${movie.score/10}`;
    // })

    // const newMovies3 = movies.map((movie) => (
    //   `${movie.title} - ${movie.score/10}`
    // ))

    // const newMovies4 = movies.map(movie => `${movie.title} - ${movie.score/10}`);

// setTimeout()
  // setTimeout(() => {
  //   console.log("Hello");
  // }, 3000);

// setInterval()
  // const id = setInterval(() => {
  //   console.log(Math.random());
  // }, 2000);

  // clearInterval(id);

// filter()
  // const even = numbers.filter((n) => {
  //   return n % 2 === 0;
  // });

  // const odd = numbers.filter(n => n % 2 === 1);

  // const goodMovies = movies.filter(m => m.score > 85);
  // const badMovies = movies.filter(m => m.score < 70);

  // const goodTitles = goodMovies.map(m => m.title);
  // const badTitles = movies.filter(m => m.score < 70).map(m => m.title);

// some() return true/false
  // const exams = [80,98,92,78,77,90,89,84,81,77];
  // exams.some(score => score >= 95);
  // exams.some(score => score >= 99);

// every() return true/false
  // exams.every(score => score >= 75);
  // exams.every(score => score >= 80);

  // movies.some(movie => movie.score >= 95);

// reduce()
  const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

  // let total = 0;
  // for(let price of prices){
  //   total += price;
  // }
  // console.log(total);

  // const total = prices.reduce((total, price) => {
  //   return total + price;
  // })

  // const total = prices.reduce((total, price) => (total + price));

  // const minPrice = prices.reduce((min, price) => {
  //   if(price < min) {
  //     return price;
  //   } else {
  //     return min;
  //   }
  // });

  // const maxPrice = prices.reduce((max, price) => {
  //   if(price > max) {
  //     return price;
  //   } else {
  //     return max;
  //   }
  // });

  // const topRatedMovie = movies.reduce((topRated,movie) => {
  //   if(topRated.score < movie.score) {
  //     return movie;
  //   } else {
  //     return topRated;
  //   }
  // });
  // console.log(topRatedMovie.title);

  // const evens = [2,4,6,8];
  // const sum = evens.reduce((sum, num) => sum + num, 100);

  const person = {
    firstName: "Vigo",
    lastName: "Mortensen",
    fullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
      setTimeout(() => {
        console.log(this.fullName());
      },3000)
    }
  }