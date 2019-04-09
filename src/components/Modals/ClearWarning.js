import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const clearWarning = (props) => (
    <Modal
        show={props.show}
        onHide={props.onHide}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Confirm Clear
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>
                Are you sure you want to delete all cards from this section?
           </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
            <Button variant="danger"
                onClick={props.onClearButtonClick}>
                Clear
            </Button>
        </Modal.Footer>
    </Modal>
)

export default clearWarning;