const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: String, required: true}, 
  shoppingCart: { type: Array, required: true }
});

module.exports = mongoose.model('Order', OrderSchema);