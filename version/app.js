const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('This is version 2 of the app.\n')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
