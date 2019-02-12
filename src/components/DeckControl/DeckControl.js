import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardViewer from '../CardViewer/CardViewer';
import CardsSection from '../CardsSection/CardsSection';
import CardActions from '../CardActions/CardActions';

const deckControl = (props) => (
    
    <Card border="success" style={{width: '100%', height: '660px', marginTop: '10px'}}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
            <Row style={{height: '575px'}}>
                <Col xs={9}>
                    <CardsSection cards={props.fullDeckData.main} isSortable isSearchable isClearable style={{ width: '100%', height: '47%', marginTop: '2%' }} type="Main"/>
                    <CardsSection cards={props.fullDeckData.side} isSortable isSearchable isClearable style={{ width: '100%', height: '22%', marginTop: '2%' }} type="Side"/>
                    <CardsSection cards={props.fullDeckData.extra} isSortable isSearchable isClearable style={{ width: '100%', height: '22%', marginTop: '2%' }} type="Extra"/>
                </Col>
                <Col xs={3}>
                    <CardViewer cardData={props.fullDeckData.currentViewedCard} />
                    <CardActions />
                </Col>
            </Row>
        </Card.Body>
    </Card>
    
)

export default deckControl