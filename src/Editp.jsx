import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { samplecontext } from './App'
import { useNavigate } from 'react-router-dom'
import './App.css';
import { toast } from 'react-toastify';
import { MDBBtn, MDBCheckbox, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';


const Editp = () => {
    const sample1=useContext(samplecontext)
    const {  id, setid, products, setproducts } = sample1
    const nav= useNavigate()
    console.log(id);
    console.log(id.id);
    // const [inpute, setinpute] = useState({title: "", brand: "", category: "", price: ""})
    const [inpute, setinpute] = useState({
        title: id.title || '',
        brand: id.brand || '',
        category: id.category || '',
        price: id.price || '',
      })
    const edititem = (e) => {
        setinpute({...inpute, [e.target.name] : e.target.value })
    }
    console.log(inpute);

    const edit = (e) => {
        e.preventDefault(); 
        //  const productIndex = id.id-1
        const productIndex = products.findIndex((product) => product.id === id.id);
        products[productIndex] = { ...products[productIndex], ...inpute };
        setproducts(products);
        toast.success(`successfully edited ${inpute.title}`, {position: toast.POSITION.TOP_CENTER });

        nav("/ptable")
    
  };
  console.log(products);
    
  return (
    
    <MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow>
      <h2 style={{fontFamily: "Papyrus"}} className="mb-5">Edit Products</h2>
        <MDBCol  col='10' md='6'>
          <img className='m-1' src="https://img.freepik.com/free-vector/businessman-writing-sales-report-laptop_3446-471.jpg?w=740&t=st=1691495986~exp=1691496586~hmac=adab2ff6564e88c14998bb822e55a86e9c6621a7b0cdcdeb4e7a7a23cb26d4d9" style={{height: "350px"}} class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol  col='4' md='6'>
        
          <MDBInput wrapperClass='mb-4 w-75'  defaultValue={id.title} id='formControlLg' type='text' size="lg" onChange={edititem}  name="title"/>
          <MDBInput wrapperClass='mb-4 w-75'  defaultValue={id.brand } id='formControlLg' type='text' size="lg" onChange={edititem}  name="brand"/>
          <MDBInput wrapperClass='mb-4 w-75'  defaultValue={id.category} id='formControlLg' type='text' size="lg" onChange={edititem}  name="category"/>
          <MDBInput wrapperClass='mb-4 w-75'  defaultValue={id.price} id='formControlLg' type='text' size="lg" onChange={edititem}  name="price"/> 

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn onClick={edit}  className="mb-0 px-5" color='dark' size='lg'>SAVE</MDBBtn>
          </div>

        </MDBCol>

      </MDBRow>

     

    </MDBContainer>
  )
}

export default Editp
