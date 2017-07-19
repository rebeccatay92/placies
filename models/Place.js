const mongoose = require('mongoose')
const Schema = mongoose.Schema

var placeSchema = new Schema({
  name: String,
  address: String,
  reference: String
})

// mongoose.model(<singular form of model>, <schemaName>)
const Place = mongoose.model('Place', placeSchema)

module.exports = Place
