import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import './App.css';
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
    const nav=useNavigate()
    const [Data, setData] = useState({})
    const [error, seterror] = useState({})
    const [inputl, setinputl] = useState({email: "", password: ""})
    const loginuser = (e) => {
        setinputl({...inputl, [e.target.name] : e.target.value })
    }
    console.log(inputl);

    // const Sendproduct = async () => {
    //     await axios
    //         .post("https://textile.torcdeveloper.com/api/v1/login", inputl)
    //         .then((res)=> setData(res.data))   
    // }
    
    const handlesubmit = async (e) => {
        e.preventDefault();
        try{
          await axios
          .post("https://textile.torcdeveloper.com/api/v1/login", inputl)
          .then((res)=> setData(res.data));
          
        setTimeout(()=>{
          nav('/ptable')
        })
        toast.success("login success", {position: toast.POSITION.TOP_CENTER })
        
        }
        catch(error){
          toast.error(error?.message, {position: toast.POSITION.TOP_CENTER })
          setTimeout(()=>{
            nav('/')
          })
          console.log(error);
        }
    }

  return (
    <div>
    
    <MDBContainer  className="my-5" >

      <MDBCard  >
        <MDBRow   className='g-0'>
          <MDBCol  md='6'>
            <MDBCardImage src='https://img.freepik.com/free-photo/medium-shot-woman-with-laptop_23-2149013890.jpg'  alt="login form"  className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol style={{ background: "#add3cd"}}  md='6'>
            <MDBCardBody className='d-flex flex-column m-5'>

              <div className='d-flex flex-row mt-5'>
                
                {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/> */}
                <span className=" m-auto h1 fw-bold mb-0">Login</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-5 m-auto w-65' label='Email address' id='formControlLg' type='email' size="lg" onChange={loginuser} name='email'/>
                <MDBInput wrapperClass='mb-5 m-auto w-65' label='Password' id='formControlLg' type='password' size="lg" onChange={loginuser} name='password'/>

              <MDBBtn className="mb-4 px-5 m-auto w-85 shadow-lg" color='dark' size='lg' onClick={handlesubmit}>LOGIN</MDBBtn>
              {/* <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div> */}

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
   </div>
  )
}

export default Login

// https://textile.torcdeveloper.com/api/v1/login
// {
//     "email":"demo@demo.com",
//     "password":"123456"
// }


