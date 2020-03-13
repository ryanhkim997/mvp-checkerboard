const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const boardSchema = new mongoose.Schema({
  row1: [Number],
  row2: [Number],
  row3: [Number],
  row4: [Number],
  row5: [Number],
  row6: [Number],
  row7: [Number],
  row8: [Number]
})

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;