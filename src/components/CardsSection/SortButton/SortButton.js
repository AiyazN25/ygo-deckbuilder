import React from 'react';
import Button from 'react-bootstrap/Button'

const sortButton = (props) => (
    <Button block size='sm' style={props.style} variant="light">Sort</Button>
)

export default sortButton