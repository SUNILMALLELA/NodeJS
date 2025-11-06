
const fs = require('fs')
const path = require('path')
//synccreate folder
const dataFolder = path.join(__dirname,"Example")
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("Folder is created Succesfully");
}
else{
    console.log("Folder  already created"); 
}
//synccreate file
const createFile = path.join(dataFolder,'sample.txt')
fs.writeFileSync(createFile,"Welcome to nodeJS")
console.log("file created sucessfully");
//syncread file
const readFile = fs.readFileSync(createFile,"utf8")
console.log("read a file",readFile);
//syncadd extra content to file
const extraContent = fs.appendFileSync(createFile,"Don't watch start Building")
console.log("new content");
//async create file 
const asyncCreateFile = path.join(dataFolder,"samples.txt")
fs.writeFile(asyncCreateFile,"Start learning atleast 2 hours Daily",(err)=>{
if(err) throw err
console.log("Async file is created");
fs.readFile(asyncCreateFile,'utf8',(err,data)=>{
    if(err)throw err 
    console.log("async file is read:",data); 
})
fs.appendFile(asyncCreateFile,"Node is a extension of javascript",(err)=>{
if(err) throw err;
console.log("update text is:");
})
})


