'use strict';


var mongoose = require('mongoose'),
  Product = mongoose.model('products');

exports.list_all_items = function(req, res) {
  Product.find({}, function(err, Item) {
    
    if (err)
      res.send(err);
    res.json(Item);
  });
};





// exports.create_a_Item = function(req, res) {
//   var new_Item = new Item(req.body);
//   new_Item.save(function(err, Item) {
//     if (err)
//       res.send(err);
//     res.json(Item);
//   });
// };


// exports.read_a_Item = function(req, res) {
//   Item.findById(req.params.ItemId, function(err, Item) {
//     if (err)
//       res.send(err);
//     res.json(Item);
//   });
// };


// exports.update_a_Item = function(req, res) {
//   Item.findOneAndUpdate({_id: req.params.ItemId}, req.body, {new: true}, function(err, Item) {
//     if (err)
//       res.send(err);
//     res.json(Item);
//   });
// };


// exports.delete_a_Item = function(req, res) {
//   Item.remove({
//     _id: req.params.ItemId
//   }, function(err, Item) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Item successfully deleted' });
//   });
// };
