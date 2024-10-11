import React ,{useState} from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function CreateBook(){
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState("")
    const [publishyear, setpublishyear] = useState()
    const [loading,setLoading]=useState(false)
    const navigate= useNavigate();
    const saveBook = ()=>{
        const bookdata={
            title,
            author,
            publishyear,
        };
        setLoading(true);
        if(!title || !author || !publishyear ){
            alert("All Fields are required")
        }
        axios
        .post('http://localhost:3000/books',bookdata)
        .then(()=>{
         setLoading(false);
         navigate('/');
        })
        .catch((e)=>{
            setLoading(false);
            console.log(" Something happened")
        })
    };
  return (
    <>
    <div>
        <div className="cb-container">
        <h1 class="display-3">Add a book</h1>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the title of the book"
          onChange={(e)=>setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
        </label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the name of the author"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
        </label>
        <input
          type="number"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter the year in which the book is published"
          value={publishyear}
          onChange={(e)=>setpublishyear(e.target.value)}
        />
      </div>
      <button type="button" class="btn btn-primary" onClick={saveBook}>Add</button>
      </div>
    </div>
    </>
  );
}
