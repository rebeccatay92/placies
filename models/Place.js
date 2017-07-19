const mongoose = require('mongoose')
const Schema = mongoose.Schema

var placeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  reference: String
})

// mongoose.model(<singular form of model>, <schemaName>)
const Place = mongoose.model('Place', placeSchema)

module.exports = Place
