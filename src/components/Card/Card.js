import React from 'react';
import Card from 'react-bootstrap/Card';

const card = (props) => (
    <Card style={{ width: '45px', display: 'inline-block', margin: '6px', cursor: 'pointer'}}>
        {/* <Card.Img variant="top" src="https://ygoprodeck.com/pics_small/58775978.jpg" /> */}
        <Card.Img variant="top" src={"https://ygoprodeck.com/pics_small/" + props.cardData["id"] + ".jpg"} />
    </Card>
)

export default card;