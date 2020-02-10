const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello from session management')
})
 
app.listen(3005)
