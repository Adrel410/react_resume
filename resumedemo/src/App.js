
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Line from './components/Line';
import Body from './components/Body';
import self from './self.jpg';

function App() {
  return (
    <Container>
          <Row>
            <Col>
            <div className="App">
              <img src={self} alt="self" />
              </div>
            </Col>
            <Col><Body /></Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col><Line /></Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>    
  );
}

export default App;
