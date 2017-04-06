const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  series: {
    type: String,
  },
  genre: {
    type: String,
    required: true
  },
  inStock: {
    type: Boolean,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  added: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Book', BookSchema);
