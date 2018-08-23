// Local server
const http = require('http')
const port = 3040

const requestHandler = (request, response) => {
  response.end('Local Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`local server is listening on ${port}`)
})