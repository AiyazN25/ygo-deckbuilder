import React from 'react';
import { connect } from "react-redux";
import { openEnlargedCardModal, sendCard } from '../../redux/actions/actionCreators';
import Card from 'react-bootstrap/Card';
import SearchBar from '../SearchBar/SearchBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardActions from '../CardActions/CardActions'
import CardsSection from '../CardsSection/CardsSection';
import CardViewer from '../CardViewer/CardViewer';
import * as exampleCards from '../../assets/exampleCards'  ;

const extraDeckTypes = ["Synchro Monster", "Fusion Monster", "XYZ Monster", "Link Monster"];

class AllCardsControl extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            main: [],
            extra: [],
            currentViewedCard: exampleCards.SLIFER,
            searchFilterValue: '',
            inWhichCardSectionCurrentCardViewedIs: null
        }
    }

    componentDidMount() {
        fetch("https://db.ygoprodeck.com/api/v2/cardinfo.php")
            .then((response) => response.json())
            .then((json) => {
                const allCards = json[0];
                const main = [];
                const extra = [];
                allCards.forEach(card => {
                    if(extraDeckTypes.includes(card['type'])) {extra.push(card)}
                    else {main.push(card)}
                });
                this.setState({ main: main, extra: extra })
            })
    }

    handleCardClick = (card, inWhichCardSection) => {
        this.setState({ 
            currentViewedCard: card,
            inWhichCardSectionCurrentCardViewedIs: inWhichCardSection 
        });
    }

    handleMainCardClick = (card) => {this.handleCardClick(card, 'main')}
    handleExtraCardClick = (card) => {this.handleCardClick(card, 'extra')}

    handleFilter = (_, __, searchFilterValue) => {
        this.setState({ searchFilterValue })
    }

    showingSomeOfAllCardsTitle = (numCards) => {
        const totalNumberOfCards = this.state.main.length + this.state.extra.length;
        return "Showing " + numCards + " of " + totalNumberOfCards + " total cards."
    }

    render() {
        let cardActions;
        if (!extraDeckTypes.includes(this.state.currentViewedCard['type'])) {
            cardActions = [
                { text: 'To Main Deck', actionHandler: () => this.props.sendToHandler('deck', 'main', this.state.currentViewedCard) },
                { text: 'To Main Trunk', actionHandler: () => this.props.sendToHandler('trunk', 'main', this.state.currentViewedCard) },
                { text: 'To Side Deck', actionHandler: () => this.props.sendToHandler('deck', 'side', this.state.currentViewedCard) },
                { text: 'To Side Trunk', actionHandler: () => this.props.sendToHandler('trunk', 'side', this.state.currentViewedCard) }
            ]
        }
        else {
            cardActions = [
                { text: 'To Extra Deck', actionHandler: () => this.props.sendToHandler('deck', 'extra', this.state.currentViewedCard) },
                { text: 'To Extra Trunk', actionHandler: () => this.props.sendToHandler('trunk', 'extra', this.state.currentViewedCard) },
                { text: 'To Side Deck', actionHandler: () => this.props.sendToHandler('deck', 'side', this.state.currentViewedCard) },
                { text: 'To Side Trunk', actionHandler: () => this.props.sendToHandler('trunk', 'side', this.state.currentViewedCard) }
            ]
        }
        return (
            <Card border="warning" style={{ width: '360px', height: '850px', position: 'absolute', top: '20px', left: '970px' }}>
                <Card.Header>Search All Cards</Card.Header>
                <Card.Body style={{ padding: '9px' }}>
                    <Row style={{ height: '110px', marginTop: '10px' }}>
                        <Col xs={6}>
                            <SearchBar onFilter={this.handleFilter} />
                        </Col>
                        <Col xs={6}>
                            <CardActions cardActions={cardActions} />
                        </Col>
                    </Row>
                    <Row style={{ height: '450px' }}>
                        <Col style={{ height: '100%' }} xs={6}>
                            <CardsSection
                                totalCardsShownLimit={150}
                                searchFilterValue={this.state.searchFilterValue}
                                onCardClick={this.handleMainCardClick}
                                cards={this.state.main}
                                style={{ width: '100%', height: '100%' }}
                                type="Main"
                                title={this.showingSomeOfAllCardsTitle} />
                        </Col>
                        <Col style={{ height: '100%' }} xs={6}>
                            <CardViewer
                                onCardImgClick={this.props.enlargedCardModalOpenHandler}
                                cardData={this.state.currentViewedCard} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardsSection
                                totalCardsShownLimit={150}
                                searchFilterValue={this.state.searchFilterValue}
                                onCardClick={this.handleExtraCardClick}
                                cards={this.state.extra}
                                style={{ width: '100%', height: '200px', marginTop: '10px' }}
                                type="Extra"
                                title={this.showingSomeOfAllCardsTitle} />
                        </Col>

                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

const mapDispatchToProps = {
    enlargedCardModalOpenHandler: openEnlargedCardModal,
    sendToHandler: sendCard
}

export default connect(null, mapDispatchToProps)(AllCardsControl);