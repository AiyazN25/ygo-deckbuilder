import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const testHand = React.memo((props) => {
  const cardsArray = [];
  const totalCardsToShow = Math.min(props.cards.length, props.numCardsToShow);
  for (let i = 0; i < totalCardsToShow; i++) {
    let card = props.cards[i];
    cardsArray.push(
      <img
        style={{ width: "150px", margin: "10px" }}
        key={i}
        alt="card"
        src={card["card_images"][0].image_url}
      />
    );
  }
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sample Hand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{cardsArray}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button onClick={props.onDraw} variant="primary">
          Draw
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default testHand;
