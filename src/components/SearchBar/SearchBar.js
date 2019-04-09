import React from 'react';
import Form from 'react-bootstrap/Form';

const searchBar = (props) => (
    <Form.Control 
    style={props.style} 
    size="sm" 
    onChange={(e) => props.onFilter(
        props.inWhichDeckControl, 
        props.inWhichCardsSection, 
        e.target.value
    )} 
    type="text" 
    placeholder="Search" 
    className="mr-sm-2" 
    />
)

export default searchBar;