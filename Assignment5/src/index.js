var http = require("http");
// const { type } = require("os");
// const url = require("url")
// console.log(type)
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  console.log(req.url)
  if(req.url == '/welcome'){
    res.writeHead(200,{"content-type":"text/plain"})
    res.end('Welcome to Dominos!')
  }
  else if(req.url == "/contact"){
    res.writeHead(200,{"content-type":"application/json"})
    res.end(JSON.stringify({  
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com' }))
  }
  else{
    res.writeHead(404, {
        "Content-type": "text/plain",
        "Keep-Alive": 10
    });
    res.write("PAGE NOT FOUND");
    res.end();
  }
}



module.exports = httpServer;