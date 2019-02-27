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

const extraDeckTypes = ["Synchro Monster", "Fusion Monster", "XYZ Monster", "Link Monster"];

const cardsSection = (props) => {
    const allYGOCardsArray = [];
    let i=0;
    let totalCardsShownLimit = props.totalCardsShownLimit ? props.totalCardsShownLimit : Infinity
    // Will only show first totalCardsShownLimit (150 for AllCardsControl, Infinity for DeckControl) cards of each search
    while(allYGOCardsArray.length < totalCardsShownLimit && i < props.cards.length){
        let card = props.cards[i];
        let cardIndex = i; // to prevent the props.onCardClick function calls in the loop refer to the same lexical environment
        // render a card iff if it belongs in the section (i.e: for example 
        // it's a synchro card in the extra deck section, push it to the cards array)
        // and if it should remain after filter search. Ofc any kind of card can go into a Side Deck.
        const typeOfCardSectionIsSide = props.type === "Side";
        const typeOfCardSectionIsExtraAndCardTypeIsAlsoExtra = props.type === "Extra" && extraDeckTypes.includes(card['type']);
        const typeOfCardSectionIsMainAndCardTypeIsAlsoMain = props.type === "Main" && !extraDeckTypes.includes(card['type']);
        const cardShouldRemainAfterFilterSearch = card["name"].toLowerCase().includes(props.searchFilterValue.toLowerCase());
        const shouldRenderCard = typeOfCardSectionIsSide || 
        ((typeOfCardSectionIsExtraAndCardTypeIsAlsoExtra || typeOfCardSectionIsMainAndCardTypeIsAlsoMain) && cardShouldRemainAfterFilterSearch)
        if(shouldRenderCard){
            let cardListItem = 
            <ListGroup.Item
                as="button"
                onClick={() => props.onCardClick(card, cardIndex)}
                variant="light"
                key={card["id"] + cardIndex}
                style={{ padding: '4px' }}
                action >
                {card["name"]}
            </ListGroup.Item>
            allYGOCardsArray.push(cardListItem)
        }
        i++;
    }
    return (
        <Card style={props.style} bg={cardTypes[props.type]} text="white" >
            <Card.Header style={{ fontSize: '15px' }}>
                <Row>
                    <Col xs={!props.isClearable ? 12 : 5}>
                        {props.title(allYGOCardsArray.length)}
                </Col>
                    {props.isSearchable &&
                        <Col xs={3}>
                            <SearchBar 
                            inWhichDeckControl={props.inWhichDeckControl}
                            inWhichCardsSection={props.type.toLowerCase()}
                            onFilter={props.filterCardsInSectionHandler}
                            />
                        </Col>}
                    {props.isSortable &&
                        <Col xs={2}>
                            <SortButton 
                            inWhichDeckControl={props.inWhichDeckControl}
                            inWhichCardsSection={props.type.toLowerCase()}
                            onSortButtonClicked={props.sortCardsInSectionHandler}
                            />
                        </Col>}
                    {props.isClearable &&
                        <Col xs={2}>
                            <ClearButton 
                            inWhichDeckControl={props.inWhichDeckControl}
                            inWhichCardsSection={props.type.toLowerCase()}
                            onClearButtonClicked={props.clearWarningModalOpenHandler}
                            />
                        </Col>}
                </Row>
            </Card.Header>
            <Card.Body style={{ padding: '10px', overflow: 'scroll' }}>
                <ListGroup >
                    {allYGOCardsArray}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default cardsSection;