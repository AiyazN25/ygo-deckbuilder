import React from 'react';
import Modal from 'react-bootstrap/Modal';

const enlargedCard = (props) => (
    <Modal
        {...props}
        aria-labelledby="enlarged-card-modal"
    >
        <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Enlarged Card
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={props.cardImg} alt='cardImg' style={{width: '400px', display: 'block', margin: 'auto'}}/>
        </Modal.Body>
    </Modal>
)

export default enlargedCard