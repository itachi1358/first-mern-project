import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {Link, link} from 'react-router-dom';
import './Home.css'
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const navigate= useNavigate();
  const deleteBook=(id)=>{
    axios
    .delete(`http://localhost:3000/books/${id}`)
    .then(()=>{
        console.log("Success!!")
    })
    .catch((e)=>{
        setLoading(false);
        console.log(" Can't delete the book")
    })
  }

  const [books,setBooks]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    axios
      .get('http://localhost:3000/books')
      .then((response)=>{
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error);
        setLoading(false);
      })
  },[])
  return (
    <div className='home'>
      <div className="flex">
      <h1>List of Books</h1>
      <button className='btn btn-primary'>
        <Link to="/books/create">
        <div className="Link">Add Book</div>
        </Link> 
        </button>
      </div>
      <div className="table-container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S no</th>
              <th scope="col">Book</th>
              <th scope="col">Author</th>
              <th scope="col">Publish Year</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {books.map((book,index)=>(
              <tr key={book._id}>
                <th scope="row">
                 <Link to={ `/books/${book._id}`} className='idx'>{index+1}</Link> 
                </th>
                <td>
                 {book.title} 
                </td>
                <td>
                  {book.author}
                </td>
                <td>
                  {book.publishyear}
                </td>
                <Link to={`/books/delete/${book._id}`}>
                <button type="button" className='delete' >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 574 510"> <path d="M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
                </button>
                </Link>
              </tr>

            ))}
          </tbody>
        </table>
        </div>
    </div>
  )
}

