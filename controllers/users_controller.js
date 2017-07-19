const User = require('../models/User')

function create (req, res) {
  User.create(req.body.user, function (err, newUser) {
    if (err) {
      // flow if user is invalid
      // passing error message to /users

      res.send(err)
      // res.redirect('/users')
    }

    // flow is user is created

    res.format({
      html: function () {
        res.redirect('/users/new')
      },

      json: function () {
        res.send('respond for ajax')
      }
    })
    // res.redirect('/users/new')
  })
}

module.exports = {
  create
}
