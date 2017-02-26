var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.port || 3000, function() { console.log('Serving port '+(process.env.port || 3000)) })
