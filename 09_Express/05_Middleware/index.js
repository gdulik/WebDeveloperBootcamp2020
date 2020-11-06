const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use('/dogs', (req, res, next) => {
  console.log('I love dogs');
  next();
})

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if(password === 'chickennugget'){
    next();
  }
  res.send('Sorry, you need a password');
}

// app.use((req, res, next) => {
//   console.log('This is my first middleware');
//   return next();
//   console.log('This is my first middleware - after calling next')
// })
// app.use((req, res, next) => {
//   console.log('This is my second middleware');
//   return next();
// })
// app.use((req, res, next) => {
//   console.log('This is my third middleware');
//   return next();
// })

app.get('/', (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send('Home Page!');
})

app.get('/dogs', (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send('Woof Woof!');
})

app.get('/secret', verifyPassword, (req, res) => {
  res.send('Secret webpage');
})

app.use((req, res) => {
  res.status(404).send('Not found!');
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})