const express = require('express')
const app = express()
const port = 3000;
app.use(express.json())
const books = [
    {
        id:'1',
        label:'Book 1 '
    },
    {
        id:'2',
        label:'Book 2'
    }
]
app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to Books API"
    })
})
app.get('/books',(req,res)=>{
    res.json(books)
})
app.get('/books/:id',(req,res)=>{
    const book = books.find(item=>item.id===req.params.id)
    if(book){
        return res.status(200).json(book)
    }
    else{
        return res.status(404).json({
            message:"Book Id not found"
        })
    }
})
app.post('/books/add',(req,res)=>{
    const addBook = 
        {
            id:books.length+1,
            label:`Books ${books.length+1}`
        }
    
    books.push(addBook)
    res.status(200).json({
        data: addBook,
        message:"New Book added successfully"
    })
})
app.put('/update/:id',(req,res)=>{
    const findBook = books.find(item=>item.id === req.params.id)
    if(findBook){
        findBook.label = req.body.label || findBook.label
        res.status(200).json({
            data:findBook,
            message:`Update with no  ${req.params.id} id`
        })
    }
})
app.delete('/books/delete/:id', (req, res) => {
  const bookIndex = books.findIndex(item => item.id === req.params.id);
  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);
    return res.status(200).json({
      data: deletedBook,
      message: `Book with ID ${req.params.id} deleted successfully`
    });
  } else {
    return res.status(404).json({ message: "Book ID not found" });
  }
});
app.listen(port,()=>{
    console.log(`Server is started on ${port} number`);
    
})