const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

const comments = [
  {
    id: uuidv4(),
    username: 'Tod',
    comment: 'lol that is so funny!'
  },
  {
    id: uuidv4(),
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog'
  },
  {
    id: uuidv4(),
    username: 'Sk8erBoi',
    comment: 'Plz delete your account, Todd'
  },
  {
    id: uuidv4(),
    username: 'onlysayswoof',
    comment: 'woof woof woof'
  }
]

// GET /comments - list all comments
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
})

// POST /comments - create a new comments
app.get('/comments/new', (req, res) => {
  res.render('comments/new');
})

app.post('/comments', (req, res) => {
  const {username, comment} = req.body;
  const id = uuidv4();
  comments.push({ id, username, comment });
  res.redirect('/comments');
})

// GET /comments/:id - get one comment (using ID)
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id)
  res.render('comments/show', { comment });
})

app.get('/tacos', (req, res) => {
  res.send('GET /tacos response');
})

app.post('/tacos', (req, res) => {
  const {meat, qty} = req.body;
  res.send(`Ok, here are your ${qty} ${meat} tacos`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})




// PATCH /comments/:id - update one comment
// DELETE /comments/:id - remove one comment