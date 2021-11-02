'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ItemsSchema = new Schema({
  item: {
    type: String
  },
  price: {
    type: Number
  },
  src: {
    type: String
  }
});

module.exports = mongoose.model('products', ItemsSchema);