import React, {Component} from 'react';
import {Modal,Button,Row,Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

export class AddReport extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Choose Player Type
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col md={{ span: 4, offset: 2 }}>
                                <Link to='/NewPositionPlayerReport' className="btn btn-outline-primary">
                                    Position Player
                                </Link>
                            </Col>
                            <Col md={{ span: 4, offset: 2 }}>
                                <Link to='/NewPitcherReport' className="btn btn-outline-primary">
                                    Pitcher
                                </Link>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}