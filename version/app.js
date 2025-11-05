const express = require('express')
const app = express()
const port = process.env.PORT || 8080

// route utama
app.get('/', (req, res) => {
  res.send('Hello OpenShift!')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
