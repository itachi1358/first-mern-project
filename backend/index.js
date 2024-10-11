import express from "express";
import {PORT,mongodbURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import cors from 'cors';
const app=express();

app.use(express.json());

app.use(cors())
app.post('/books',async (req,res)=>{
    try{
        if( !req.body.title || !req.body.author || !req.body.publishyear) {
            console.log("A few fields are missing ")
        }
        const Newbook={
            title: req.body.title,
            author:req.body.author,
            publishyear: req.body.publishyear,
        };

        const book= await Book.create(Newbook)
        res.send(book);
    }
    catch(e){
        console.log(e)
        res.send(e);
    }
})

app.get("/books",  async (req,res) =>{
    try {
        const books=await Book.find({});
        res.json({
            count:books.length,
            data:books
        });
    } catch (e) {
        
    }
})

app.get("/books/:id",  async (req,res) =>{
    try {
        const {id}=req.params;
        const book= await Book.findById(id);
        if(book){
            res.send(book) 
        }
        else{
            res.send("Can't find the book specified")
        }
    } catch (e) {
        
    }
})
app.delete('/books/:id',async (req,res) =>{
    try {
        const {id}=req.params;
        const book=await Book.findByIdAndDelete(id)
        if(book){
            res.send("Book deleted")
        }
        else{
            res.send("Can't find the book specified")
        }
    } catch (e) {
        console.log(e)
    }
} )

mongoose
    .connect(mongodbURL)
    .then(()=>{
        console.log('App Connected to Database')
        app.listen(PORT,()=>{
            console.log(`The App is currently at http://localhost:${PORT}`)
        })
        app.get('/' ,(req,res)=>{
            res.send("Hello World")
        })
        
    })
    .catch((error)=>{
        console.log(error)
    })