import React from 'react';
import Card from 'react-bootstrap/Card';


const cardViewer = (props) => (
    <Card style={{width: '100%', height: '100%', maxHeight: '450px'}}>
        <Card.Img variant="top" src={"https://ygoprodeck.com/pics/" + props.cardData["id"] + ".jpg"} />
        <Card.Body>
            
        </Card.Body>
    </Card>
)

export default cardViewer;