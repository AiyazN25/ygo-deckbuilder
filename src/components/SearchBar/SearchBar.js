import React from 'react';
import Form from 'react-bootstrap/Form';

const searchBar = (props) => (
    <Form.Control 
    style={props.style} 
    size="sm" 
    onChange={(e) => props.onFilter({
        inWhichDeckControl: props.inWhichDeckControl, 
        inWhichCardSection: props.inWhichCardsSection, 
        searchFilterValue: e.target.value
    })} 
    type="text" 
    placeholder="Search" 
    className="mr-sm-2" 
    />
)

export default searchBar;