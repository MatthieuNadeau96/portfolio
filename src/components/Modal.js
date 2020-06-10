import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { Row, Col } from "react-bootstrap";

const modal = props => (

    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton />
        <Row>
            <Col >
                <Image src={props.image} fluid />
            </Col>
            <Col >
                <Modal.Body>
                    <h3>{props.title}</h3>
                    <p>
                        {props.description}
                    </p>
                </Modal.Body>
            </Col>
        </Row>
        <Modal.Footer>
            <Button variant="primary">Download</Button>
            <Button variant="outline-dark">Code</Button>
        </Modal.Footer>
    </Modal>

);

export default modal;
