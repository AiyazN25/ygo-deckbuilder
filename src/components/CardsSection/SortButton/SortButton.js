import React from 'react';
import Button from 'react-bootstrap/Button'

const sortButton = (props) => (
    <Button 
    onClick={() => props.onSortButtonClicked(props.inWhichDeckControl, props.inWhichCardsSection)} 
    block 
    size='sm' 
    style={props.style} 
    variant="light">Sort</Button>
)

export default sortButton