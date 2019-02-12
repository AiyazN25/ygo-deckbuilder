import React, { Component } from 'react';
import LeftHeader from './components/LeftHeader/LeaftHeader';
import DeckControl from './components/DeckControl/DeckControl';
import AllCardsControl from './components/AllCardsControl/AllCardsControl';
import CreditsBox from './components/CreditsBox/CreditsBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import exampleCards from './assets/exampleCards'


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      trunk: {
        main: [], mainFilterCondition: '', 
        side: [], sideFilterCondition: '', 
        extra: [], extraFilterCondition: '',
        currentViewedCard: exampleCards()[1]
      },
      deck: {
        main: [], mainFilterCondition: '', 
        side: [], sideFilterCondition: '', 
        extra: [], extraFilterCondition: '',
        currentViewedCard: exampleCards()[2]
      }
    }
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <div style={{width: '960px', display: 'inline-block'}}>
          <Row>
            <Col xs={3}>
              <LeftHeader/>
            </Col>
            <Col xs={9}>
              <DeckControl fullDeckData={this.state.deck} title="Deck" mainDeckLimit={60} sideDeckLimit={15} extraDeckLimit={15}/>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <CreditsBox />
            </Col>
            <Col xs={9}>
              <DeckControl fullDeckData={this.state.trunk} title="Trunk"/>
            </Col>
          </Row>
        </div>
        <AllCardsControl />       
      </div>
    );
  }
}

export default App;
