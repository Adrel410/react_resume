import React from "react";
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';

function Line() {
  return(
    <div id="footer">
        <Nav id="footer" className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link id="footer" href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="footer" href="#skills" >Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="footer" href="#stuff">Interests</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link id="footer" href="#info">Contact</Nav.Link>
        </Nav.Item >
        <Nav.Item>
          <Nav.Link id="footer" href="#App">Experence</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link id="footer" onClick={() => { localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); window.location.reload();}}> Change Mode </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
  
  export default Line;