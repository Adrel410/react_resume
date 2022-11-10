import React from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Line() {
  return(
    <div id="Nav">
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Skills" >Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Body">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/Footer">Footer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Button variant="danger" onClick={() => { localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); window.location.reload();}}> Change Mode </Button>
        </Nav.Item>
      </Nav>
    </div>
  )
}
  
  export default Line;