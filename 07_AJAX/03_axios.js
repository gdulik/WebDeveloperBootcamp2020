// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//   .then(res => {
//     console.log(res.data.ticker.price);
//   })
//   .catch(err => {
//     console.log("Error", err);
//   })

const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
    console.log(res.data.ticker.price);
  } catch (e) {
    console.log('Error', e);
  }
}

// fetchBitcoinPrice();

const getDadJoke = async () => {
  try {
    const res = await axios.get('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}});
    return res.data.joke;
  } catch (e) {
    return('No jokes available!');
  }
}

const addNewJoke = async () => {
  try {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
  } catch (e) {
    console.log('Error', e)
  }
}

const jokes = document.querySelector('#jokes');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  addNewJoke();
})