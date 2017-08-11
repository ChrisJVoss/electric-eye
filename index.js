const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const users = require('./knex.js')
const app = express()

const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)
const jsonParser = bodyParser.json()

app.use(staticMiddleware)
app.use(jsonParser)

app.get('/users', (req, res) => {
  users.getUsers()
    .then(() => {
      res.sendStatus(200)
    })
})

app.listen(3000, () => {
  console.log("Listening")
})
