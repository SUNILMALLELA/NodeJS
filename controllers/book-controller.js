const books = require('../models/books')
//get Method
const getAllBooks = async(req,res)=>{
    try {
        const allBooks = await books.find()
        if(allBooks.length>0){
            return res.status(200).json({
                success:true,
                message:"Book fetched succesfully",
                data:allBooks
            })
        }
        return res.status(404).json({
            success:false,
            message:"No Books Found",
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error fetching Books",
            error:error.message
        })
        
    }

}
//get Method By ID
const getSingleBookById = async(req,res)=>{
    try {
        const bookDetailsById = await books.findById(req.params.id)
        if(!bookDetailsById){
            return res.status(404).json({
                success:false,
                message:"Book not found",
            })
        }
        res.status(200).json({
            success:true,
            message:"Book fetched successfully",
            data:bookDetailsById
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error fetching Books by ID",
           error:error.message
        })
        
    }
    
}
//Post Method
const addNewBook = async (req, res) => {
  try {
    const newBook = await books.create(req.body);
    if (!newBook) {
     return res.status(400).json({
      success: false,
      message: "Failed to add book"
    });
    }
     return res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newBook
      });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error adding book",
      error: error.message
    });
  }
};
//Updated Book
const updateBook = async(req,res)=>{
    try {
        const updatedBook = await books.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updatedBook){
            return res.status(404).json({
                success:false,
                message:"Book not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Book Updated Succesfully",
            data:updatedBook
        })
    } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating book",
      error: error.message
    });
  }
    
}
//Deleted Book
const deleteBook = async(req,res)=>{
    try {
        const deletedBook = await books.findByIdAndDelete(req.params.id)
        if(!deletedBook){
            return res.status(404).json({
                success:false,
                message:"Book not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Book Deleted Successfully"
        })
        
    } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting book",
      error: error.message
    });
  }
    
}
module.exports = {getAllBooks,getSingleBookById,addNewBook,updateBook,deleteBook}