import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
export default function BookDetails() {
    const [book,setBook]=useState({});
    const [loading,setLoading]=useState(false);
    const {id}=useParams();
    useEffect(()=>{
      setLoading(true);
      axios
        .get(`http://localhost:3000/books/${id}`)
        .then((response)=>{
          setBook(response.data);
          setLoading(false);
        })
        .catch((error)=>{
          console.log(error);
          setLoading(false);
        })
    },[])
    console.log(book);
    return (
    <div>
        {

            <div className="container">
                <h1 className='display-3'> {book.title} </h1>
                {/* <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae asperiores nam autem ducimus molestias veritatis fugiat voluptatibus illum sed amet unde reprehenderit, assumenda eos natus cum nesciunt dolore aspernatur.</p> */}
                <li>
                    <h5>Author:</h5>
                    <p>{book.author}</p>
                </li>
                <li>
                    <h5>Publish Year:</h5>
                    <p>{book.publishyear}</p>
                </li>
            </div>
        }
    </div>
  )
}
