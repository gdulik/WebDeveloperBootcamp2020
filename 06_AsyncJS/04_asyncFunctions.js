// async function Hello() {
// }

// const sing = async () => {
//   // throw new Error("Uh oh"); //reject promise (1st case)
//   throw "Oh no, problem!"; //reject promise (2nd case)
//   return "La La La La"; //resolve promise
// }

// sing()
//   .then((data) => {
//     console.log("Promise resolved with:",data);
//   })
//   .catch((err) => {
//     console.log("Oh no, promise rejected!");
//     console.log(err);
//   })

// const login = async (username, password) => {
//  if(!(username && password)) throw "Missing Credentials";
//  if(password === "corgifeetarecute") return "Welcome!";
//  throw "Invalid Password"
// }

// login("user","corgifeetarecute")
//   .then((msg) => {
//     console.log("Logged in!")
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   })

// const delayedColorChange = (newColor, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = newColor;
//       resolve();
//     }, delay);
//   })
// };

// async function rainbow() {
//   await delayedColorChange("red",1000);
//   await delayedColorChange("orange",1000);
//   await delayedColorChange("yellow",1000);
//   await delayedColorChange("green",1000);
//   await delayedColorChange("blue",1000);
//   await delayedColorChange("indigo",1000);
//   await delayedColorChange("violet",1000);
//   return "All done!"
// }

//   // rainbow()
//   //   .then(() => console.log("End of rainbow!"));

// async function printRainbow() {
//   await rainbow();
//   console.log("End of rainbow!")
// }

// printRainbow();

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * (4500)) + 500;
      setTimeout(() => {
          if (delay > 4000) {
              reject('Connection Timeout :(')
          } else {
              resolve(`Here is your fake data from ${url}`)
          }
      }, delay)
  })
}

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequestPromise("/page1");
    console.log(data1);
    let data2 = await fakeRequestPromise("/page2");
    console.log(data2);
  } catch (e) {
    console.log("Caught an error!");
    console.log("Error is:", e);
  }
}

makeTwoRequests();