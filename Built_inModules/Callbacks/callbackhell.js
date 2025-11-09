const fs = require('fs')
fs.readFile('input.txt','utf8',(err,data)=>{
    if(err) throw err;
   const modifyData = data.toUpperCase();
   fs.writeFile('output.txt',modifyData,(err)=>{
    if(err) throw err
    console.log("new file create");
    fs.readFile('output.txt','utf8',(err,data)=>{
        if(err) throw err
        console.log(data);
        
    })
   })
    
})