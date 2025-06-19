import React from 'react'
import {Col,Row,Container} from "react-bootstrap";
import "./index.css";
const index = () => {
  return (
   <>
    <Row style={{ height: '55px', backgroundColor: 'black' }}  >
          <Col >
          
          <Container className="nav">
             <h1>Uber</h1>
             <li>Ride</li>
            <li>Drive</li>
            <li>Business</li> 
            <li>About</li>
            <li>EN</li>
            <li>Help</li>
           <li>Log in</li>
           <li>Sign up</li>
         </Container>
   
          </Col>
        </Row>
        
   </>
  )
}
export default index;