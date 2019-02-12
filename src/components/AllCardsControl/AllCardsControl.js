import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import SearchBar from '../SearchBar/SearchBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardActions from '../CardActions/CardActions'
import CardsSection from '../CardsSection/CardsSection';
import CardViewer from '../CardViewer/CardViewer';
import exampleCards from '../../assets/exampleCards'

class AllCardsControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allCards: [],
            allCardsFiltered: [],
            currentViewedCard: exampleCards()[0],
            searchFilterValue: ''
        }
    }

    componentDidMount = () => {        
        fetch("https://db.ygoprodeck.com/api/v2/cardinfo.php")
        .then((response) => response.json())
        .then( (json) => this.setState({allCards: json[0] }) )
    }

    handleCardClick = (card) => {
        this.setState({currentViewedCard: card});
    }

    handleFilter = (event) => {
        const searchString = event.target.value;
        if (searchString.length >= 3)
        this.setState({searchFilterValue: searchString})
    }
    
    render() {
        return (
            <Card border="warning" style={{ width: '360px' , height: '850px', position: 'absolute', top: '20px', left: '970px'}}>
                <Card.Header>Search All Cards</Card.Header>
                <Card.Body style={{padding: '9px'}}>
                    <Row style={{height: '110px', marginTop: '10px'}}>
                        <Col>
                            <SearchBar onFilter={this.handleFilter} />
                        </Col>
                        <Col>
                            <CardActions />
                        </Col>
                    </Row>  
                    <Row style={{height: '450px'}}>
                        <Col xs={6}>
                            <CardsSection 
                            searchFilterValue={this.state.searchFilterValue} 
                            onCardClick={this.handleCardClick} 
                            cards={this.state.allCards} 
                            style={{ width: '100%', height: '100%' }} 
                            type="Main"/>
                        </Col>
                        <Col xs={6}>
                            <CardViewer cardData={this.state.currentViewedCard} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardsSection 
                            searchFilterValue={this.state.searchFilterValue} 
                            onCardClick={this.handleCardClick} 
                            cards={this.state.allCards} 
                            style={{ width: '100%', height: '200px', marginTop: '10px'}} 
                            type="Extra"/>
                        </Col>
                        
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

export default AllCardsControl;