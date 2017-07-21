const User = require('../models/User')
const Place = require('../models/Place')

const request = require('request')
const bcrypt = require('bcrypt')

// function placeSearch(url, callback) {
//   request(`${apiUrl}${qString}${apiKey}`, callback)
// }

function register (req, res) {
  // getting all places from my list of places in the db
  Place.find({}, function (err, allPlaces) {
    if (err) res.send(err)

    res.render('users/new', {
      places: allPlaces
    })
  })
}

function create (req, res, next) {
  var salt = bcrypt.genSaltSync(10)
  var hash = bcrypt.hashSync(req.body.user.password, salt)

  // res.send({
  //   reqbody: req.body,
  //   hash: hash
  // })

  var newUser = new User ({
    name: req.body.user.name,
    email: req.body.user.email,
    password: req.body.user.password
  })

  newUser.places.push(req.body.place.id)
  newUser.save(function (err, createdUser) {
    if (err) next(err)
    //exit this save middleware to next one
    //leave another middleware to catch error
    res.send({
      reqbody: req.body,
      createdUser: createdUser
    })
  })

  // User.create(req.body.user, function (err, newUser) {
  //   if (err) {
  //     // flow if user is invalid
  //     // passing error message to /users
  //
  //     res.send(err)
  //     // res.redirect('/users')
  //   }
  //
  //   // flow is user is created
  //
  //   res.format({
  //     html: function () {
  //       res.redirect('/users/new')
  //     },
  //
  //     json: function () {
  //       res.send('respond for ajax')
  //     }
  //   })
  //   // res.redirect('/users/new')
  // })
}

module.exports = {
  create,
  register
}
