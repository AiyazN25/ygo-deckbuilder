import React from 'react';
import Form from 'react-bootstrap/Form';

const searchBar = (props) => (
    <Form.Control style={props.style} size="sm" onChange={props.onFilter} type="text" placeholder="Search" className="mr-sm-2" />
)

export default searchBar;