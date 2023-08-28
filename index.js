const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to UNext - I Have the changed the code')
})

/*app.get('/', (req, res) => {
    res.send('welcome to node js application ')
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
