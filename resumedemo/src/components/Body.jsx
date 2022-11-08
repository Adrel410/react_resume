import React from "react";
import Button from 'react-bootstrap/Button';
import self from './self.jpg';

function Body() {
    return (
        <div className="App">
            <img src={self} alt="self" />
            <Button variant="primary" size="lg" active>
            This is me
            </Button>  
        </div>
    );
}

export default Body;