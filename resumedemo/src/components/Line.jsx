import React from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Line() {
  return(
    <div>
        <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Button variant="danger" onClick={() => { localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); window.location.reload();}}> Change Mode </Button>
      </Nav.Item>
    </Nav>
    </div>
    
)
}
  
  export default Line;