import React from 'react';
import Button from 'react-bootstrap/Button';

const clearButton = (props) => (
    <Button 
    onClick={() => props.onClearButtonClicked(props.inWhichDeckControl, props.inWhichCardsSection)} 
    size='sm' style={props.style} 
    variant="danger">Clear
    </Button>
);

export default clearButton;