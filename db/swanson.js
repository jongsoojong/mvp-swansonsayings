var mongoose = require('mongoose');

var ClickSchema = new mongoose.Schema({
  name: String,
  Click: Number
});

module.exports = mongoose.model('Click', ClickSchema);
