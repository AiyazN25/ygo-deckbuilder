import React from 'react';
import Button from 'react-bootstrap/Button';

const clearButton = (props) => (
    <Button 
    onClick={() => {console.log(props.inWhichDeckControl, props.inWhichCardsSection); return props.onClearButtonClicked(props.inWhichDeckControl, props.inWhichCardsSection)}} 
    size='sm' style={props.style} 
    variant="danger">Clear
    </Button>
);

export default clearButton;