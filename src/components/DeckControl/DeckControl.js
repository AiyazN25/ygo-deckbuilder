import React, { useCallback } from 'react';
import { selectCard, sortCards, filterCards, openClearWarningModal, openEnlargedCardModal, sendCard } from '../../redux/actions/actionCreators'
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardViewer from '../CardViewer/CardViewer';
import CardsSection from '../CardsSection/CardsSection';
import CardActions from '../CardActions/CardActions';

const extraDeckTypes = ["Synchro Monster", "Fusion Monster", "XYZ Monster", "Link Monster"];

const getCardActions = function (inWhichDeckControl, inWhichCardSection, genericActionHandler, currentViewedCard) {
    let cardActions;
    if (inWhichDeckControl === 'deck') {
        if (inWhichCardSection === 'main') {
            cardActions = [
                { text: 'To Side Deck', actionHandler: () => genericActionHandler('deck', 'side', currentViewedCard, 'deck', 'main') },
                { text: 'To Main Trunk', actionHandler: () => genericActionHandler('trunk', 'main', currentViewedCard, 'deck', 'main') },
                { text: 'To Side Trunk', actionHandler: () => genericActionHandler('trunk', 'side', currentViewedCard, 'deck', 'main') },
                { text: 'Delete', actionHandler: () => genericActionHandler(null, null, currentViewedCard, 'deck', 'main') }
            ]
        }
        else if (inWhichCardSection === 'side') {
            cardActions = [
                (!extraDeckTypes.includes(currentViewedCard['type']) ?
                    { text: 'To Main Deck', actionHandler: () => genericActionHandler('deck', 'main', currentViewedCard, 'deck', 'side') }
                    :
                    { text: 'To Extra Deck', actionHandler: () => genericActionHandler('deck', 'extra', currentViewedCard, 'deck', 'side') }
                ),
                (!extraDeckTypes.includes(currentViewedCard['type']) ?
                    { text: 'To Main Trunk', actionHandler: () => genericActionHandler('trunk', 'main', currentViewedCard, 'deck', 'side') }
                    :
                    { text: 'To Extra Trunk', actionHandler: () => genericActionHandler('trunk', 'main', currentViewedCard, 'deck', 'side') }
                ),
                { text: 'To Side Trunk', actionHandler: () => genericActionHandler('trunk', 'side', currentViewedCard, 'deck', 'side') },
                { text: 'Delete', actionHandler: () => genericActionHandler(null, null, currentViewedCard, 'deck', 'side') }
            ]
        }
        else {
            //inWhichCardSection === 'extra'
            cardActions = [
                { text: 'To Side Deck', actionHandler: () => genericActionHandler('deck', 'side', currentViewedCard, 'deck', 'extra') },
                { text: 'To Extra Trunk', actionHandler: () => genericActionHandler('trunk', 'extra', currentViewedCard, 'deck', 'extra') },
                { text: 'To Side Trunk', actionHandler: () => genericActionHandler('trunk', 'side', currentViewedCard, 'deck', 'extra') },
                { text: 'Delete', actionHandler: () => genericActionHandler(null, null, currentViewedCard, 'deck', 'extra') }
            ]
        }
    }
    else {
        // inWhichDeckControl === 'trunk'
        if (inWhichCardSection === 'main') {
            cardActions = [
                { text: 'To Side Trunk', actionHandler: () => genericActionHandler('trunk', 'side', currentViewedCard, 'trunk', 'main') },
                { text: 'To Main Deck', actionHandler: () => genericActionHandler('deck', 'main', currentViewedCard, 'trunk', 'main') },
                { text: 'To Side Deck', actionHandler: () => genericActionHandler('deck', 'side', currentViewedCard, 'trunk', 'main') },
                { text: 'Delete', actionHandler: () => genericActionHandler(null, null, currentViewedCard, 'trunk', 'main') }
            ]
        }
        else if (inWhichCardSection === 'side') {
            cardActions = [
                (!extraDeckTypes.includes(currentViewedCard['type']) ?
                    { text: 'To Main Trunk', actionHandler: () => genericActionHandler('trunk', 'main', currentViewedCard, 'trunk', 'side') }
                    :
                    { text: 'To Extra Trunk', actionHandler: () => genericActionHandler('trunk', 'extra', currentViewedCard, 'trunk', 'side') }
                ),
                (!extraDeckTypes.includes(currentViewedCard['type']) ?
                    { text: 'To Main Deck', actionHandler: () => genericActionHandler('deck', 'main', currentViewedCard, 'trunk', 'side') }
                    :
                    { text: 'To Extra Deck', actionHandler: () => genericActionHandler('deck', 'main', currentViewedCard, 'trunk', 'side') }
                ),
                { text: 'To Side Deck', actionHandler: () => genericActionHandler('deck', 'side', currentViewedCard, 'trunk', 'side') },
                { text: 'Delete', actionHandler: () => genericActionHandler(null, null, currentViewedCard, 'trunk', 'side') }
            ]
        }
        else {
            //inWhichCardSection === 'Extra'
            cardActions = [
                { text: 'To Side Trunk', actionHandler: () => genericActionHandler('trunk', 'side', currentViewedCard, 'trunk', 'extra') },
                { text: 'To Extra Deck', actionHandler: () => genericActionHandler('deck', 'extra', currentViewedCard, 'trunk', 'extra') },
                { text: 'To Side Deck', actionHandler: () => genericActionHandler('deck', 'side', currentViewedCard, 'trunk', 'extra') },
                { text: 'Delete', actionHandler: () => genericActionHandler(null, null, currentViewedCard, 'trunk', 'extra') }
            ]
        }
    }
    return cardActions;
}

const deckControl = React.memo((props) => {
    const onCardClickInMainSection = useCallback((card, index) => { props.cardClicked(props.title.toLowerCase(), card, index, 'main') });
    const onCardClickInSideSection = useCallback((card, index) => { props.cardClicked(props.title.toLowerCase(), card, index, 'side') });
    const onCardClickInExtraSection = useCallback((card, index) => { props.cardClicked(props.title.toLowerCase(), card, index, 'extra') });

    return <Card border="success" style={{ width: '100%', height: '660px', marginTop: '10px' }}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
            <Row style={{ height: '575px' }}>
                <Col style={{ height: '100%' }} xs={9}>
                    <CardsSection
                        inWhichDeckControl={props.title.toLowerCase()}
                        cards={props.fullDeckData.main.cards}
                        onCardClick={onCardClickInMainSection}
                        isSortable
                        sortCardsInSectionHandler={props.sortCardsInSectionHandler}
                        isSearchable
                        filterCardsInSectionHandler={props.filterCardsInSectionHandler}
                        searchFilterValue={props.fullDeckData.main.searchFilterValue}
                        isClearable
                        clearWarningModalOpenHandler={props.clearWarningModalOpenHandler}
                        style={{ width: '100%', height: '37%', marginTop: '2%' }}
                        type="Main" />
                    <CardsSection
                        inWhichDeckControl={props.title.toLowerCase()}
                        cards={props.fullDeckData.side.cards}
                        onCardClick={onCardClickInSideSection}
                        isSortable
                        sortCardsInSectionHandler={props.sortCardsInSectionHandler}
                        isSearchable
                        filterCardsInSectionHandler={props.filterCardsInSectionHandler}
                        searchFilterValue={props.fullDeckData.side.searchFilterValue}
                        isClearable
                        clearWarningModalOpenHandler={props.clearWarningModalOpenHandler}
                        style={{ width: '100%', height: '27%', marginTop: '2%' }}
                        type="Side" />
                    <CardsSection
                        inWhichDeckControl={props.title.toLowerCase()}
                        cards={props.fullDeckData.extra.cards}
                        onCardClick={onCardClickInExtraSection}
                        isSortable
                        sortCardsInSectionHandler={props.sortCardsInSectionHandler}
                        isSearchable
                        filterCardsInSectionHandler={props.filterCardsInSectionHandler}
                        searchFilterValue={props.fullDeckData.extra.searchFilterValue}
                        isClearable
                        clearWarningModalOpenHandler={props.clearWarningModalOpenHandler}
                        style={{ width: '100%', height: '27%', marginTop: '2%' }}
                        type="Extra" />
                </Col>
                <Col style={{ height: '100%' }} xs={3}>
                    <CardViewer
                        onCardImgClick={props.enlargedCardModalOpenHandler}
                        cardData={props.fullDeckData.currentViewedCard} />
                    <CardActions
                        cardActions={props.fullDeckData.inWhichCardSectionCurrentCardViewedIs ?
                            getCardActions(
                                props.title.toLowerCase(),
                                props.fullDeckData.inWhichCardSectionCurrentCardViewedIs,
                                props.sendToHandler,
                                props.fullDeckData.currentViewedCard
                            ) : []
                        } />
                </Col>
            </Row>
        </Card.Body>
    </Card>
})

const mapStateToProps = (state, ownProps) => {
    const fullDeckData = state.deckControls[ownProps.title.toLowerCase()];
    return { fullDeckData }
}

const mapDispatchToProps = {
    cardClicked: selectCard,
    sortCardsInSectionHandler: sortCards,
    filterCardsInSectionHandler: filterCards,
    clearWarningModalOpenHandler: openClearWarningModal,
    enlargedCardModalOpenHandler: openEnlargedCardModal,
    sendToHandler: sendCard
}


export default connect(mapStateToProps, mapDispatchToProps)(deckControl);