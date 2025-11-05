var response

app.get('/', function (req, res) {
  response = 'This is version 1 of the app.' + '\n'

  //send the response to the client
  res.send(response)
})
