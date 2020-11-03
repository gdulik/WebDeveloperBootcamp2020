const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connection open');
  })
  .catch(err => {
    console.log("Oh no, error");
    console.log(err);
  })

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive']
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: {
    type: [String]
  },
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L']
  }
});

productSchema.methods.greet = function() {
  console.log('Hello, Hi!');
  console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function() {
  this.onSale = !this.onSale;
  return this.save();
}

productSchema.methods.addCategory = function(newCat) {
  this.categories.push(newCat);
  return this.save();
}

productSchema.statics.fireSale = function() {
  return this.updateMany({}, {onSale: true, price: 0});
}

// const findProduct = async () => {
//   const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
//   foundProduct.onSale = !foundProduct.onSale;
//   foundProduct.save();
// }

// findProduct();

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory('Outdoors')
  console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res));

// const bike = new Product({name: 'Cycling Jersey', price: 49.99, categories: ['Cycling'], size: 'S'});
// bike.save()
//   .then(data => {
//     console.log('It worked');
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('Oh no, error');
//     console.log(err);
//   })

// Product.findOneAndUpdate({ name: 'Tire pump' }, { price: -10.99 }, { new: true, runValidators: true })
//   .then(data => {
//     console.log('It worked');
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('Oh no, error');
//     console.log(err);
//   })