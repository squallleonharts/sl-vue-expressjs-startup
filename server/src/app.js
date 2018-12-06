const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello world.'
  })
})

app.listen(process.env.PORT || 8081)
