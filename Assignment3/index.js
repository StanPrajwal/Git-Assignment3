const fs = require('fs')
const http = require("http");
fs.writeFile("index.html","<div><h1> Hello World </h1><p>This is {Prajwal}...</p></div>",err=>{
    if(err){
        console.log(err)
    }
    console.log("created")
})
http.createServer((req,response)=>{
   
        fs.readFile("index.html",(err,data)=>{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data)
            response.end()
             
        })

    
    
}).listen(5040,()=>console.log("Server started."))
