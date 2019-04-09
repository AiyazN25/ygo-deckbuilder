import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const getCardIdArray = (cardArray) => (
    cardArray.map(card => card.id)
)

const getDeckControlObjWithCardIdsOnly = (deckControlObj) => (
    {
        main: getCardIdArray(deckControlObj.main),
        side: getCardIdArray(deckControlObj.side),
        extra: getCardIdArray(deckControlObj.extra)
    }
)

const creditsBox = (props) => {
    const deckAndTrunkData = {
        deck: getDeckControlObjWithCardIdsOnly(props.deck),
        trunk: getDeckControlObjWithCardIdsOnly(props.trunk)
    }
    return (
    <Container>
        <Card bg="warning" text="white">
            <Card.Header>Credits And Actions</Card.Header>
            <Card.Body>
                <Card.Title>Made with ReactJS</Card.Title>
                <Button variant="dark" block href="https://github.com/AiyazN25/ygo-deckbuilder/tree/master">Source Code</Button>
                Upload and download your deck+trunk data.
                <Button 
                    as="a" 
                    href={'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(deckAndTrunkData))} 
                    download='DeckAndTrunkData.txt'
                    variant="success" block>
                    Download Data
                </Button>
                <input 
                    style={{display: 'inline-block', width: '100%', marginTop: '8px'}} 
                    type="file" 
                    onChange={props.onDataUpload} accept='.txt'/>
            </Card.Body>
        </Card>
    </Container>
    
)}

export default creditsBox;