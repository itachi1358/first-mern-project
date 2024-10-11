import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import axios from 'axios';
import {link} from 'react-router-dom';
import BookDetails from './pages/BookDetails';
function App() {
  return (

    <div className="root">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create"  element={<CreateBook/>} />
      <Route path="/books/:id" element={<BookDetails/>} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
    </Routes>
    </BrowserRouter>
    {/* <Home/> */}
    </div> 
  );
}

export default App;
