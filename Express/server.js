const express = require('express')
const app = express()
const port = 5000;
app.use('/',(req,res)=>{
res.send("Welcome to nodeJS")
})
app.listen(port,()=>{
    console.log(`Server is started on ${port} number`);
    
})