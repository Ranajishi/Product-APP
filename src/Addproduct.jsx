import React, { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { samplecontext } from './App'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCheckbox, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit'


const Addproduct = () => {
    const sample1=useContext(samplecontext)
    const { products, setproducts, api } = sample1
    const nav= useNavigate()
    
    let [input, setinput] = useState({title: "", brand: "", category: "", price: ""})

  
    const additem = (e) => {
        setinput({...input, [e.target.name] : e.target.value })
    }
    console.log(input);
    console.log(products);

    const submit = (e) => {
      e.preventDefault();
      console.log("haii");
      const newproduct=[...products, input]
      setproducts(newproduct) 
      // alert(`successfully added ${input.title}`)
      toast.success(`successfully added ${input.title}`, {position: toast.POSITION.TOP_CENTER });
      
      nav("/ptable")
    }     
  return (
    
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://www.incimages.com/uploaded_files/image/1920x1080/IN0316INA07-web_80579.jpg)', height: '350px'}}></div>

      <MDBCard className=' mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-170px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center w-75 m-auto'>

          <h2 className="fw-bold mb-5">Add Products</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Enter the title' id='form1' type='text' onChange={additem} name="title"/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Enter the brand' id='form1' type='text' onChange={additem} name="brand"/>
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' label='Enter the category' id='form1' type='text' onChange={additem} name="category"/>
          <MDBInput wrapperClass='mb-4' label='Enter the price' id='form1' type='text' onChange={additem} name="price"/>

          

          <MDBBtn onClick={submit}  className=' mb-4 m-auto w-25 shadow-lg' color='dark' size='md'>ADD</MDBBtn>

          

            {/* <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn> */}

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  )
}

export default Addproduct





