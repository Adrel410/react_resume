import React from "react";
import Card from 'react-bootstrap/Card';
import Computer from './Computer.jpg'

function Little() {
    return (
        <div class="stuff">
            <Card>
                <Card.Img variant="top" src={Computer} alt="self" />
                <Card.Body>
                <Card.Title><h4>Web Developer</h4></Card.Title>
                <Card.Text>
                        Web Developer with more than 5 years experience enhancing user experience. 
                        Experienced in designing for several interfaces, as well as testing and debugging. 
                        Excels in optimizing the experience for users and improving workflows.
                    </Card.Text>
                    </Card.Body>
            </Card>
        </div>        
    );
}

export default Little;