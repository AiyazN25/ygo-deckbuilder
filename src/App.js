import React, { useCallback } from 'react';
import { connect } from "react-redux";
import {
  drawCard, closeTestHandModal, openTestHandModal, fetchAllCardsAndUploadData, clearCards,
  closeEnlargedCardModal, closeClearWarningModal, hideUploadFailAlert
} from './redux/actions/actionCreators';
import {
  getDeckAndTrunkCardsOnly, getWhatWillBeCleared, getShowStatusOfClearWarningModal, getTestHandModalData,
  getShowStatusOfUploadFailAlert, getEnlargedCardModalData
} from './redux/selectors'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'
import LeftHeader from './components/LeftHeader/LeaftHeader';
import DeckControl from './components/DeckControl/DeckControl';
import AllCardsControl from './components/AllCardsControl/AllCardsControl';
import CreditsBox from './components/CreditsBox/CreditsBox';
import ClearWarningModal from './components/Modals/ClearWarning'
import TestHandModal from './components/Modals/TestHand';
import EnlargedCardModal from './components/Modals/EnlargedCard';
import './App.css';


const App = (props) => {
  const handleTestHandBtnClick = useCallback(() => {props.openTestHandModal(props.deck.main)})
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ width: '960px', display: 'inline-block' }}>
        <Row>
          <Col xs={3}>
            <LeftHeader
              clickedTestHand={handleTestHandBtnClick}
            />
          </Col>
          <Col xs={9}>
            <DeckControl title="Deck" />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <CreditsBox
              deck={props.deck}
              trunk={props.trunk}
              onDataUpload={props.fetchAllCardsAndUploadData} />
            <Container>
              <Alert
                dismissible
                show={props.showUploadFailAlert}
                onClose={props.hideUploadFailAlert}
                variant='danger'>Something is wrong with the deck data you uploaded.
                </Alert>
            </Container>

          </Col>
          <Col xs={9}>
            <DeckControl title="Trunk" />
          </Col>
        </Row>
      </div>
      <AllCardsControl />
      <ClearWarningModal
        show={props.showClearWarningModal}
        onHide={props.closeClearWarningModal}
        whatWillBeCleared={props.whatWillBeCleared}
        onClearButtonClick={props.clearCards} />
      <TestHandModal
        show={props.showTestHandModal}
        onHide={props.closeTestHandModal}
        cards={props.sampleHand}
        numCardsToShow={props.numCardsToShowInTestHand}
        onDraw={props.drawCard} />
      <EnlargedCardModal
        cardImg={props.enlargedCardToShow}
        show={props.showEnlargedCardModal}
        onHide={props.closeEnlargedCardModal} />
    </div>
  )
}

const mapDispatchToProps = {
  drawCard, closeTestHandModal, openTestHandModal, fetchAllCardsAndUploadData, clearCards, closeEnlargedCardModal, closeClearWarningModal,
  hideUploadFailAlert
}

const mapStateToProps = (state) => {
  const { trunk, deck } = getDeckAndTrunkCardsOnly(state);
  const whatWillBeCleared = getWhatWillBeCleared(state);
  const showClearWarningModal = getShowStatusOfClearWarningModal(state);
  const { showTestHandModal, numCardsToShowInTestHand, sampleHand } = getTestHandModalData(state);
  const showUploadFailAlert = getShowStatusOfUploadFailAlert(state);
  const { showEnlargedCardModal, enlargedCardToShow } = getEnlargedCardModalData(state);
  return {
    trunk, deck, whatWillBeCleared, showClearWarningModal, showTestHandModal, numCardsToShowInTestHand, sampleHand,
    showUploadFailAlert, showEnlargedCardModal, enlargedCardToShow
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
