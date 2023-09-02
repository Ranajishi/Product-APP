import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Form, Modal, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { samplecontext } from './App'
import Pview from './Pview'
import "./App.css";
import { BsFillEyeFill, BsFillTrash3Fill, BsPencilSquare } from 'react-icons/bs'
import { ToastContainer } from 'react-toastify'


const Ptable = () => {
    const sample1=useContext(samplecontext)
    const {id, setid, products, setproducts} = sample1

    const [showView, setshowView] = useState(false)
    const [showDelete, setshowDelete] = useState(false)
    const [item, setitem] = useState([  ])
    const [keyword, setkeyword] = useState("")
    const [newdata, setnewdata] = useState([  ])

    const nav=useNavigate()

    
    console.log(products);
    const showview =(p)=>{
        setid(p)
        setshowView(true)
    }
    const closeview =()=>{
        setshowView(false)
    }
    const Edit =(e)=>{
        nav("/editp")
        setid(e)
       
    }
    const showdel = (index,i,e) =>{
        setshowDelete(true);
        setid(index);
        setitem(i)
      }
  
      const Delete =() => {
        setproducts(products.filter((_, i) => i !== id))
        setshowDelete(false)
      }
      const Closedel = () =>{
        setshowDelete(false);
      }
      
      console.log(keyword);
      let filterBySearch = products?.filter((item) => {
        if (item.title.toLowerCase()
            .includes(keyword.toLowerCase())) { return item; }
      })
    console.log(filterBySearch);

      const handleSearchClick = (e) =>{
        
        // if (keyword === "") { 
        //   setproducts(products); 
        //   return; 
        // }
        
      }
      

    
  return (
    <div>
        <div>
        <Form className="d-flex w-25 m-auto mt-4 mb-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setkeyword(e.target.value)}
              name='title'
            />
            <Button onClick={handleSearchClick} variant="outline-success">Search</Button>
          </Form>
        </div>
        <div>
        <Table  striped bordered hover variant="success">
            <thead>
                <tr>
                    <th>#</th>
                    <th style={{width: "390px"}}><h5>Title</h5></th>
                    <th><h5>Brand</h5></th>
                    <th style={{width: "291px"}}><h5>Category</h5></th>
                    <th style={{width: "177px"}}><h5>Price</h5></th>  
                    <th></th>
            
                </tr>
            </thead>
            <tbody>
            {filterBySearch?.map((i,index)=>{
                return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.title}</td>
                        <td>{i.brand}</td>
                        <td>{i.category}</td>
                        <td>{i.price}</td>
                        <td>
                            <BsFillEyeFill className='iconn m-2'  onClick={()=>showview(i)}  />                                                      
                            <BsPencilSquare className='iconn m-2' onClick={()=>Edit(i)}  />
                            <BsFillTrash3Fill className='iconn m-2' onClick={(e )=>showdel(index,i,e)}  />
                            </td>
                    </tr>    
                )
            })}

            </tbody>
        </Table>
        <Pview close={closeview} showView={showView} id={id} />
        
        <Link to='/addproduct'><Button className='ebutton m-4 btn-dark'  >ADD PRODUCT</Button> </Link> 
        </div>

        <div>
          <Modal show={showDelete} onHide={Closedel} animation={false} >
            <Modal.Header closeButton> <h5>{item.title}</h5></Modal.Header>
            <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
            <Modal.Footer>
              
              <Button variant="secondary" onClick={Closedel}> CANCEL</Button>
              <Button variant="danger" onClick={Delete}> DELETE </Button>
            </Modal.Footer>
          </Modal>
        </div>
    </div>
  )
}

export default Ptable
