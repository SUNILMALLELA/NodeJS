const express = require('express')
const app = express()
const path = require('path')
const port = 3000
console.log(path.join(__dirname,'EJS'));

//EJS (Embedded JavaScript) is a template engine used with Node.js + Express.
//It helps you create dynamic HTML pages — that means you can insert variables, loops, and conditions directly into your HTML.
app.set('view engine','ejs')
app.set('views',path.join(__dirname))
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
res.render('about')
})
app.listen(port,()=>{
    console.log(`Server is started on ${port}`);
    
})