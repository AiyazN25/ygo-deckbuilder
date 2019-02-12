import React from 'react';
import { Button } from 'react-bootstrap';
import './LeftHeader.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


const leftHeader = () => (
    
    <Container>            
        <Card bg="dark" text="white" >
            <Card.Header className="text-center">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" fluid></Image>
            </Card.Header>
            <Card.Body>
                <Card.Title>Yugioh Deck Builder App</Card.Title>
                    Build a deck and do test draws!
                    <div style={{marginTop: '6px'}} className="text-right">
                        <Button variant="primary">Test Hand</Button> 
                    </div>
                    <hr style={{backgroundColor: 'white'}}/>
                    <h6>Instructions</h6>
                    <ul style={{padding: '0'}}>
                        <li>You can search for any card on the far right panel (at least 3 characters long) and add it to your deck or trunk.</li>
                        <li>Click a card to view its info.</li>
                    </ul>
            </Card.Body>
        </Card>
    </Container>
    
)

export default leftHeader;