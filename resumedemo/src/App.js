import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Line from './components/Line';
import Body from './components/Body';
import Skills from './components/Skills';
import Interests from './components/Interests';
import About from './components/About';
import Little from "./components/Little";
import Footer from "./components/Footer";
import Experience from "./components/Experence";

function App() {
  return (
    <div>
      <Line />
      <Container>
            <Row>
              <Col> <About /> </Col>
              <Col> <Interests /> </Col>
            </Row>
            <Row>
              <Col><Skills /></Col>
              <Col> <Little /> </Col> 
            </Row>
            <Row>
              <Col ><Experience />  </Col>
              <Col class="col-sm-2"> <Body /> </Col>
            </Row>
          </Container>
          <Footer />
      </div>    
  );
}

export default App;
