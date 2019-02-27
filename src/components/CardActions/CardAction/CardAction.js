import React from 'react';
import Button from 'react-bootstrap/Button'

const cardAction = (props) => (
    <Button 
    onClick={props.cardActionData['actionHandler']}
    style={{minHeight: '44%', margin: '3px', width: '45%', fontSize: '10px'}} 
    variant={props.cardActionData['text'] ==='Delete' ? "danger" : "dark"}>
        {props.cardActionData['text']}
    </Button>
)

export default cardAction;