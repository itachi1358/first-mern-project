import React ,{useState} from "react";
import './Home.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function DeleteBook() {
    const {id}=useParams();
    const [loading,setLoading]=useState(false)
    const navigate= useNavigate();
    const handleDelete=async()=>{
    axios
        .delete(`http://localhost:3000/books/${id}`)
        .then(()=>{
            console.log("Success!!")
            navigate("/")
        })
        .catch((e)=>{
            setLoading(false);
            console.log(" Can't delete the book")
        })
    }
  return (
    <div>
        <div className="box">
           <h3>Are you sure that you want to delete this book?</h3> 
        </div>
        <button onClick={handleDelete}> Yes</button>
        <button onClick={()=>{ navigate('/')}}> No</button>
    </div>
  )
}
