import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const creditsBox = () => (
    <Container>
        <Card bg="warning" text="white">
            <Card.Header>Credits</Card.Header>
            <Card.Body>
                <Card.Title>Made with ReactJS</Card.Title>
                <Button block href="https://github.com/AiyazN25/ygo-deckbuilder">Source Code</Button>
            </Card.Body>
        </Card>
    </Container>
    
)

export default creditsBox;