const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World Again!')
})

app.put('/', (req, res) => {
  res.send('Sent')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})