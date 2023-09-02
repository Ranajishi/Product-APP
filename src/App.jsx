import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pview from './Pview';
import Addproduct from './Addproduct';
import Ptable from './Ptable';
import Editp from './Editp';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import Login from './Login';

const samplecontext= createContext()
function App() {

  const api = "https://dummyjson.com/products"
  let [products, setproducts] = useState([])
  const [id, setid] = useState([])
  useEffect(() => {
    axios.get(api).then((res)=>setproducts(res.data.products))
  }, [])

  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <samplecontext.Provider value={ {id, setid , products, setproducts } }>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={ <Login /> } />
              <Route path='/ptable' element={ <Ptable /> } />
              <Route path='/addproduct' element={ <Addproduct /> } />
              <Route path='/editp' element={ <Editp /> } />
          </Routes>
        </BrowserRouter>   
      </samplecontext.Provider>
    </div>
  );
}
export default App;
export {samplecontext}
