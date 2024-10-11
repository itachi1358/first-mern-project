import mongoose  from "mongoose";



const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'Path `title` is required.'],
    },
    author: {
      type: String,
      required: [true, 'Path `author` is required.'],
    },
    publishyear: {
      type: Number,
      required: [true, 'Path `publishyear` is required.'],
    }
  });
  
export const Book= mongoose.model('books',bookSchema)