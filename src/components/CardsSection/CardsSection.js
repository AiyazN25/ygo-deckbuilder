import React from 'react';
import Card from 'react-bootstrap/Card';
import SearchBar from '../SearchBar/SearchBar';
import SortButton from './SortButton/SortButton'
import ClearButton from './ClearButton/ClearButton'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

const cardTypes = {
    Main: 'primary',
    Side: 'success',
    Extra: 'secondary'
}

const extraDeckTypes = ["Synchro Monster", "Fusion Monster", "XYZ Monster", "Link Monster"]

const cardsSection = (props) => (
    <Card style={props.style} bg={cardTypes[props.type]} text="white" >
        <Card.Header style={{fontSize: '15px'}}>
            <Row>
                <Col xs={!props.isClearable ? 12 : 5}>
                    {props.type} Deck Cards: 40
                </Col>
                {props.isSearchable && 
                <Col xs={3}>
                     <SearchBar />
                </Col>}
                {props.isSortable && 
                <Col xs={2}>
                     <SortButton />
                </Col>}
                {props.isClearable && 
                <Col xs={2}>
                    <ClearButton />
                </Col>}
            </Row>
        </Card.Header>
        <Card.Body style={{padding: '10px', overflow: 'scroll'}}>
            {/* <MiniYGOCard />
            <MiniYGOCard />
            <MiniYGOCard /> */}
            
            <ListGroup >
                {
                    props.cards.map(
                        (card, index) => {
                            // render a card iff if it belongs in the section (i.e: for example it's a synchro card in the extra deck section)
                            // and if it should remain after filter search
                            return (
                                (
                                    (props.type === "Extra" && extraDeckTypes.includes(card['type'])) || 
                                    (props.type === "Main" && !extraDeckTypes.includes(card['type']))
                                ) && 
                                card["name"].toLowerCase().includes(props.searchFilterValue.toLowerCase())
                                ) ? 
                            <ListGroup.Item 
                                as="button"
                                onClick={() => props.onCardClick(card)}
                                variant="light" 
                                key={card["id"] + index} 
                                style={{padding: '4px'}} 
                                action >
                                {card["name"]}
                            </ListGroup.Item> : null
                            }
                    )
                }
            </ListGroup>
            

        </Card.Body>
    </Card>
)

export default cardsSection;