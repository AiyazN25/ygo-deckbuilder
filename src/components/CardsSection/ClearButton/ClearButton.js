import React from 'react';
import Button from 'react-bootstrap/Button'

const clearButton = (props) => (
    <Button size='sm' style={props.style} variant="danger">Clear</Button>
);

export default clearButton;