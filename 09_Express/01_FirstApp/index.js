const express = require('express');
const app = express();
const port = 3000;

// app.use((req, res) => {
//   console.log('We got a new request!');
//   // res.send("Hello, we got your request!");
//   // res.send({color: 'red'});
//   res.send('<h1>This is my webpage</h1>');
// })

// '/'
app.get('/', (req,res) => {
  console.log('home request');
  res.send('Welcome to my homepage!');
})

app.get('/r/:subreddit', (req,res) => {
  const {subreddit} = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:postId', (req,res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
})

// /cats => 'meow'
app.get('/cats', (req, res) => {
  console.log('cat request');
  res.send('Meow');
})

app.post('/cats', (req, res) => {
  res.send('Post request to /cats');
})

// /dogs => 'woof'
app.get('/dogs', (req, res) => {
  console.log('dog request');
  res.send('Woof');
})

app.get('/search',(req,res) => {
  const { q } = req.query;
  if(!q) {
    res.send(`<h1>Nothing found if nothing searched</h1>`);
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
})

app.get('*', (req,res) => {
  res.send(`I don't know that path`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
})
