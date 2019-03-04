import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'
import LeftHeader from './components/LeftHeader/LeaftHeader';
import DeckControl from './components/DeckControl/DeckControl';
import AllCardsControl from './components/AllCardsControl/AllCardsControl';
import CreditsBox from './components/CreditsBox/CreditsBox';
import exampleCards from './assets/exampleCards';
import ClearWarningModal from './components/Modals/ClearWarning'
import TestHandModal from './components/Modals/TestHand';
import './App.css';
import { Container } from 'react-bootstrap';
import EnlargedCardModal from './components/Modals/EnlargedCard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trunk: {
        main: [], mainSearchFilterValue: '',
        side: [], sideSearchFilterValue: '',
        extra: [], extraSearchFilterValue: '',
        currentViewedCard: exampleCards()[1],
        inWhichCardSectionCurrentCardViewedIs: null,
        currentViewedCardIndex: null
      },
      deck: {
        main: [], mainSearchFilterValue: '',
        side: [], sideSearchFilterValue: '',
        extra: [], extraSearchFilterValue: '',
        currentViewedCard: exampleCards()[2],
        inWhichCardSectionCurrentCardViewedIs: null,
        currentViewedCardIndex: null
      },
      showClearWarningModal: false,
      whatWillBeCleared: {
        whichDeckControl: null,
        whichCardsSection: null
      },
      showTestHandModal: false,
      numCardsToShowInTestHand: 5,
      sampleHand: [],
      showUploadFailAlert: false,
      showEnlargedCardModal: false,
      enlargedCardToShow: null
    }
  }

  handleSendingCard = (toWhichDeckControl, toWhichCardSection, card, fromWhichDeckControl, fromWhichCardSection) => {
    this.setState((prevState) => {
      if (!fromWhichDeckControl) {
        // Means we're sending a card from AllCardsSection to a DeckControl
        const toModifiedDeckControl = { ...prevState[toWhichDeckControl] };
        const toModifiedCardsSection = [...prevState[toWhichDeckControl][toWhichCardSection]];
        toModifiedCardsSection.push(card);
        toModifiedDeckControl[toWhichCardSection] = toModifiedCardsSection;
        return { [toWhichDeckControl]: toModifiedDeckControl }
      }

      else if (toWhichDeckControl === null && toWhichCardSection === null) {
        // Means we're deleting a card in a DeckControl
        const fromModifiedDeckControl = { ...prevState[fromWhichDeckControl] };
        const fromModifiedCardsSection = [...prevState[fromWhichDeckControl][fromWhichCardSection]];
        const indexOfCardToRemove = fromModifiedDeckControl.currentViewedCardIndex;
        fromModifiedCardsSection.splice(indexOfCardToRemove, 1);
        fromModifiedDeckControl[fromWhichCardSection] = fromModifiedCardsSection;
        fromModifiedDeckControl.currentViewedCard = null;
        fromModifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = null;
        fromModifiedDeckControl.currentViewedCardIndex = null;
        return { [fromWhichDeckControl]: fromModifiedDeckControl }
      }

      else if (toWhichDeckControl !== fromWhichDeckControl) {
        // Means we're sending a card from a deckControl to a different deckControl
        const toModifiedDeckControl = { ...prevState[toWhichDeckControl] };
        const toModifiedCardsSection = [...prevState[toWhichDeckControl][toWhichCardSection]];
        toModifiedCardsSection.push(card);
        toModifiedDeckControl[toWhichCardSection] = toModifiedCardsSection;

        const fromModifiedDeckControl = { ...prevState[fromWhichDeckControl] };
        const fromModifiedCardsSection = [...prevState[fromWhichDeckControl][fromWhichCardSection]];
        const indexOfCardToRemove = fromModifiedDeckControl.currentViewedCardIndex;
        fromModifiedCardsSection.splice(indexOfCardToRemove, 1);
        fromModifiedDeckControl[fromWhichCardSection] = fromModifiedCardsSection;
        fromModifiedDeckControl.currentViewedCard = null;
        fromModifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = null;
        fromModifiedDeckControl.currentViewedCardIndex = null;
        return { [toWhichDeckControl]: toModifiedDeckControl, [fromWhichDeckControl]: fromModifiedDeckControl }
      }
      else if (toWhichDeckControl === fromWhichDeckControl) {
        // Means we're sending a card from a deckControl to the same deckControl (to a different cardsSection)
        const toModifiedDeckControl = { ...prevState[toWhichDeckControl] };
        const toModifiedCardsSection = [...prevState[toWhichDeckControl][toWhichCardSection]];
        toModifiedCardsSection.push(card);
        toModifiedDeckControl[toWhichCardSection] = toModifiedCardsSection;

        const fromModifiedCardsSection = [...prevState[fromWhichDeckControl][fromWhichCardSection]];
        const indexOfCardToRemove = toModifiedDeckControl.currentViewedCardIndex;
        fromModifiedCardsSection.splice(indexOfCardToRemove, 1);
        toModifiedDeckControl[fromWhichCardSection] = fromModifiedCardsSection;
        toModifiedDeckControl.currentViewedCard = null;
        toModifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = null;
        toModifiedDeckControl.currentViewedCardIndex = null;
        return { [toWhichDeckControl]: toModifiedDeckControl }
      }
    })
  }

  handleCardClicked = (inWhichDeckControl, card, cardIndex, inWhichCardSection) => {
    const modifiedDeckControl = { ...this.state[inWhichDeckControl] };
    modifiedDeckControl.currentViewedCardIndex = cardIndex;
    modifiedDeckControl.currentViewedCard = card;
    modifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = inWhichCardSection;
    this.setState({ [inWhichDeckControl]: modifiedDeckControl })
  }

  handleCardsSectionSorting = (inWhichDeckControl, inWhichCardSection) => {
    this.setState(
      (prevState) => {
        const modifiedDeckControl = { ...prevState[inWhichDeckControl] }
        const modifiedCardsSection = [...prevState[inWhichDeckControl][inWhichCardSection]];
        modifiedCardsSection.sort((a, b) => {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        })
        modifiedDeckControl[inWhichCardSection] = modifiedCardsSection;
        if (modifiedDeckControl.inWhichCardSectionCurrentCardViewedIs === inWhichCardSection) {
          modifiedDeckControl.currentViewedCard = null;
          modifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = null;
          modifiedDeckControl.currentViewedCardIndex = null;
        }
        return { [inWhichDeckControl]: modifiedDeckControl }
      }
    )
  }

  handleCardsSectionClearing = (inWhichDeckControl, inWhichCardSection) => {
    this.setState(
      (prevState) => {
        const modifiedDeckControl = { ...prevState[inWhichDeckControl] }
        modifiedDeckControl[inWhichCardSection] = [];
        if (modifiedDeckControl.inWhichCardSectionCurrentCardViewedIs === inWhichCardSection) {
          modifiedDeckControl.currentViewedCard = null;
          modifiedDeckControl.inWhichCardSectionCurrentCardViewedIs = null;
          modifiedDeckControl.currentViewedCardIndex = null;
        }
        return { [inWhichDeckControl]: modifiedDeckControl, showClearWarningModal: false }
      }
    )
  }

  handleCardsSectionFiltering = (searchObj) => {
    this.setState(prevState => {
      const inWhichDeckControl = searchObj.inWhichDeckControl;
      const inWhichCardSection = searchObj.inWhichCardSection;
      const searchFilterValue = searchObj.searchFilterValue;
      const modifiedDeckControl = { ...prevState[inWhichDeckControl] }
      if (inWhichCardSection === 'main') {
        modifiedDeckControl.mainSearchFilterValue = searchFilterValue
      }
      else if (inWhichCardSection === 'side') {
        modifiedDeckControl.sideSearchFilterValue = searchFilterValue
      }
      else {
        modifiedDeckControl.extraSearchFilterValue = searchFilterValue
      }
      return { [inWhichDeckControl]: modifiedDeckControl }
    })
  }

  handleClosingClearWarningModal = () => {
    this.setState({
      showClearWarningModal: false,
      whatWillBeCleared: {
        whichDeckControl: null,
        whichCardsSection: null
      }
    })
  }

  handleOpeningClearWarningModal = (inWhichDeckControl, inWhichCardSection) => {
    this.setState({
      showClearWarningModal: true,
      whatWillBeCleared: {
        whichDeckControl: inWhichDeckControl,
        whichCardsSection: inWhichCardSection
      }
    })
  }

  handleClosingTestHandModal = () => {
    this.setState({ showTestHandModal: false, numCardsToShowInTestHand: 5 })
  }

  handleOpeningTestHandModal = () => {
    this.setState({
      showTestHandModal: true,
      sampleHand: [...this.state.deck.main].sort(() => 0.5 - Math.random())
    })
  }

  handleClosingEnlargedCardModal = () => {
    this.setState({ showEnlargedCardModal: false })
  }

  handleOpeningEnlargedCardModal = (cardImgUrl) => {
    this.setState({ showEnlargedCardModal: true, enlargedCardToShow: cardImgUrl })
  }

  handleCardDraw = () => {
    this.setState((prevState) => ({ numCardsToShowInTestHand: ++prevState.numCardsToShowInTestHand }))
  }

  handleDeckAndTrunkDataUpload = (e) => {
    e.persist();
    fetch("https://db.ygoprodeck.com/api/v2/cardinfo.php")
      .then((response) => response.json())
      .then((json) => {
        const allCards = json[0];
        const uploadedFile = e.target.files[0];
        var reader = new FileReader();
        reader.onload = (e) => {
          this.setState(prevState => {
            try {
              const type = /text.*/
              const uploadedTextFile = JSON.parse(e.target.result);
              if (uploadedFile.type.match(type) && !uploadedFile.type.match(/text.javascript/)) {
                const modifiedPrevState = { ...prevState }
                const modifiedTrunk = { ...prevState.trunk }
                const modifiedDeck = { ...prevState.deck }

                modifiedDeck.main = uploadedTextFile.deck.main.map(cardId => (
                  allCards.find(cardObj => cardObj.id === cardId)
                ))
                modifiedDeck.side = uploadedTextFile.deck.side.map(cardId => (
                  allCards.find(cardObj => cardObj.id === cardId)
                ))
                modifiedDeck.extra = uploadedTextFile.deck.extra.map(cardId => (
                  allCards.find(cardObj => cardObj.id === cardId)
                ))

                modifiedTrunk.main = uploadedTextFile.trunk.main.map(cardId => (
                  allCards.find(cardObj => cardObj.id === cardId)
                ))
                modifiedTrunk.side = uploadedTextFile.trunk.side.map(cardId => (
                  allCards.find(cardObj => cardObj.id === cardId)
                ))
                modifiedTrunk.extra = uploadedTextFile.trunk.extra.map(cardId => (
                  allCards.find(cardObj => cardObj.id === cardId)
                ))

                modifiedPrevState.deck = modifiedDeck;
                modifiedPrevState.trunk = modifiedTrunk;
                return modifiedPrevState;
              }
              else {
                throw new Error('Invalid file format uploaded')
              }
            }
            catch (error) {
              console.log(error);
              return { showUploadFailAlert: true }
            }
          })
        }
        if(uploadedFile) reader.readAsText(uploadedFile);
      })
  }

  handleUploadAlertShow = () => {
    this.setState({ showUploadFailAlert: true })
  }

  handleUploadAlertHide = () => {
    this.setState({ showUploadFailAlert: false })
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <div style={{ width: '960px', display: 'inline-block' }}>
          <Row>
            <Col xs={3}>
              <LeftHeader clickedTestHand={this.handleOpeningTestHandModal} />
            </Col>
            <Col xs={9}>
              <DeckControl
                enlargedCardModalOpenHandler={this.handleOpeningEnlargedCardModal}
                filterCardsInSectionHandler={this.handleCardsSectionFiltering}
                sortCardsInSectionHandler={this.handleCardsSectionSorting}
                clearWarningModalOpenHandler={this.handleOpeningClearWarningModal}
                sendToHandler={this.handleSendingCard}
                cardClicked={this.handleCardClicked}
                fullDeckData={this.state.deck}
                title="Deck" mainDeckLimit={60}
                sideDeckLimit={15}
                extraDeckLimit={15} />
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <CreditsBox
                deck={this.state.deck}
                trunk={this.state.trunk}
                onDataUpload={this.handleDeckAndTrunkDataUpload} />
              <Container>
                <Alert
                  dismissible
                  show={this.state.showUploadFailAlert}
                  onClose={this.handleUploadAlertHide}
                  variant='danger'>Something is wrong with the deck data you uploaded.</Alert>
              </Container>

            </Col>
            <Col xs={9}>
              <DeckControl
                enlargedCardModalOpenHandler={this.handleOpeningEnlargedCardModal}
                filterCardsInSectionHandler={this.handleCardsSectionFiltering}
                sortCardsInSectionHandler={this.handleCardsSectionSorting}
                clearWarningModalOpenHandler={this.handleOpeningClearWarningModal}
                sendToHandler={this.handleSendingCard}
                cardClicked={this.handleCardClicked}
                fullDeckData={this.state.trunk}
                title="Trunk" />
            </Col>
          </Row>
        </div>
        <AllCardsControl
          enlargedCardModalOpenHandler={this.handleOpeningEnlargedCardModal}
          sendToHandler={this.handleSendingCard} />
        <ClearWarningModal
          show={this.state.showClearWarningModal}
          onHide={this.handleClosingClearWarningModal}
          whatWillBeCleared={this.state.whatWillBeCleared}
          onClearButtonClick={this.handleCardsSectionClearing} />
        <TestHandModal
          show={this.state.showTestHandModal}
          onHide={this.handleClosingTestHandModal}
          cards={this.state.sampleHand}
          numCardsToShow={this.state.numCardsToShowInTestHand}
          onDraw={this.handleCardDraw} />
        <EnlargedCardModal
          cardImg={this.state.enlargedCardToShow}
          show={this.state.showEnlargedCardModal}
          onHide={this.handleClosingEnlargedCardModal} />
      </div>
    );
  }
}

export default App;
