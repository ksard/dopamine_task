// Remote server
const http = require('http')
const port = 3050
process.env.TZ = 'America/New_York';

var serverTime = new Date();

const requestHandler = (req, res) => {
    if(req.url == '/getTime'){
        //creating random delay with range - 50 - 200 milliseconds
        var randomDelay = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        res.setHeader('Content-Type', 'application/json');
        var jsonRes = JSON.stringify({ 
            serverTime: serverTime.toLocaleString(), 
            networkDelay: randomDelay
          });  
        //below is server response delay simulation which is random for every request
        setInterval(function() {
            res.end(jsonRes);
        }, randomDelay);
    } else {
        res.end('This is the remote server');
    }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Remote server is listening on ${port}`)
})