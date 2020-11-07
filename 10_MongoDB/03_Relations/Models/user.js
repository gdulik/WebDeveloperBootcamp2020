const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Mongo connection open!');
  })
  .catch((err) => {
    console.log('Mongo connection error!');
    console.log(err);
  })

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String
    }
  ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
  const u = new User({
    first: 'Harry',
    last: 'Potter'
  })
  u.addresses.push({
    street: '123 Sesame st.',
    city: 'New York',
    state: 'NY',
    country: 'USA'
  })
  const res = await u.save();
  console.log(res);
}

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: '993rd St.',
    city: 'New York',
    state: 'NY',
    country: 'USA'
  })
  const res = await user.save();
  console.log(res);
}

addAddress('5fa66e3321eac03a40f2fcc6');