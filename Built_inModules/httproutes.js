const http = require('http')
const server = http.createServer((req,res)=>{
    const url = req.url
    if(url === '/'){
        res.writeHead(200,{"content-type":"text"})
        res.end("Start node")
    }
    else if(url === '/project'){
         res.writeHead(200,{"content-type":"text"})
        res.end("Home page")
    }
    else{
       res.writeHead(400,{"content-type":"text"})
        res.end(" page not found")

    }
})
const port = 5001;
server.listen(port,()=>{
    console.log(`Server is started ${port}`);
    
})