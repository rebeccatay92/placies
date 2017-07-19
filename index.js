// all the modules we install and we need to require
const mongoose = require('mongoose')
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const url = 'mongodb://localhost:27017/placies'

mongoose.Promise = global.Promise
mongoose.connect(url, {
  useMongoClient: true
}).then(
  function () { // resolve cb
    console.log('connected successfully')
  },
  function (err) { // reject cb
    console.log(err)
  }
)

// this is the express itself
const app = express()

// set middleware
app.use(express.static('public'))
app.engine('handlebars', exphbs({}))
app.set('view engine', 'handlebars')
// listen to ajax request - json post
app.use(bodyParser.json())

// listen to form data submission
app.use(bodyParser.urlencoded({extended: true}))

// setup all files that the proj needs to require
const placesRoute = require('./routes/placeRoute')

// setup your project routes
// NO REQUIRING AFTER THIS LINE
app.use('/places', placesRoute)

// and this is opening the port
const port = 4000
app.listen(port, function () {
  console.log(`express is running on ${port}`)
})
