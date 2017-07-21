const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please type your name']
  },
  email: {
    type: String,
    required: [true, 'Please type your email']
  },
  password: String,
  places: [{
    type: Schema.Types.ObjectId,
    ref: 'Place'
  }]
})

userSchema.pre('save', function (next) {
  var user = this

  //only hash the password if it has been modified or new
  if(!user.isModified('password')) return next()

  //hash password
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) return next(err)
    user.password = hash
    next()
  })
})

const User = mongoose.model('User', userSchema)

module.exports = User
