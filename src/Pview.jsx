import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Ptable from './Ptable';
import { samplecontext } from './App';

const Pview = ({close, id, showView }) => {
  
  console.log(id);
  return (
    
      <Modal style={{textAlign: "center"}} show={showView} onHide={close} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{id.category}</Modal.Title>
        </Modal.Header>
        <Modal.Body><h5>{id.title}</h5>
          <p>{id.description}</p>
          
          <h6>Price: {id.price}</h6>
          <h6>Discount Percentage: {id.discountPercentage}</h6></Modal.Body>
        <Modal.Footer>
          <Button 
          // className='ebutton btn-secondary' 
          variant='danger' 
          onClick={close}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      
      
      
  )
}

export default Pview
