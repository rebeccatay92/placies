const User = require('../models/User')
const bcrypt = require('bcrypt')

function create (req, res) {
  var salt = bcrypt.genSaltSync(10)
  var hash = bcrypt.hashSync(req.body.user.password, salt)

  res.send({
    reqbody: req.body,
    hash: hash
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
  create
}
