const http = require('http')
const server = http.createServer((req,res)=>{
    console.log("req",req);
   res.writeHead(200,{"Content-Type":"text/plain"})
   res.end("welcome to nodeJS")
})
const port = 5000;
server.listen(port, ()=>{
    console.log(`Server is started on ${port}`);
    
})