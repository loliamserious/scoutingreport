import React, {Component} from "react";
import {Button, Col, Form, Row,FloatingLabel,Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export class AddPositionPlayerReport extends Component{

    constructor(props) {
        super(props);
        this.state={
            grades:[
                {value:"30"},
                {value:"35"},
                {value:"40"},
                {value:"45"},
                {value:"50"},
                {value:"55"},
                {value:"60"},
                {value:"65"},
                {value:"70"},
                {value:"75"},
                {value:"80"},
            ],
            PlayerName:null,
            PositionName:null,
            TeamName:null,
            OFV:null,
            HittingGrade:null,
            HittingText:null,
            PowerGrade:null,
            PowerText:null,
            RunningGrade:null,
            RunningText:null,
            FieldingGrade:null,
            FieldingText:null,
            ThrowingGrade:null,
            ThrowingText:null,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://127.0.0.1:8000/report/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ReportId:null,
                PlayerName:event.target.PlayerName.value,
                PositionName: event.target.PositionName.value,
                TeamName: event.target.TeamName.value,
                OFV: event.target.OFV.value,
                PlayerType:'Position Player',
                HittingGrade: event.target.HittingGrade.value,
                HittingText: event.target.HittingText.value,
                PowerGrade: event.target.PowerGrade.value,
                PowerText: event.target.PowerText.value,
                RunningGrade: event.target.RunningGrade.value,
                RunningText: event.target.RunningText.value,
                FieldingGrade: event.target.FieldingGrade.value,
                FieldingText: event.target.FieldingText.value,
                ThrowingGrade: event.target.ThrowingGrade.value,
                ThrowingText: event.target.ThrowingText.value,
            })
        })
         .then(res=>res.json())
         .then((result)=> {
             alert(result);
         },
         (error)=>{
             alert('Failed');
         })
    }

    render() {

        return(
            <Form onSubmit={this.handleSubmit}>
                <div>
                    <Container>
                    <Row>
                        <h2 style={{textAlign: "center"}}>New Report</h2>
                    </Row>
                    <br/>
                    <Row>
                        <Col md>
                            <FloatingLabel controlId="PlayerName" label="Player Name">
                                <Form.Control type="text" name="PlayerName" required
                                placeholder="FirstName LastName"/>
                            </FloatingLabel>
                            <br/>
                            <FloatingLabel controlId="OFV" label="Overall Future Value">
                                    <Form.Select>
                                    <option>Please select</option>
                                    {this.state.grades.map(grade=>
                                        <option>{grade.value}</option>)}
                                    </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId="TeamName" label="Team Name">
                                <Form.Control type="text" name="TeamName" required
                                              placeholder="Team"/>
                            </FloatingLabel>
                            <br/>
                            <FloatingLabel controlId="PositionName" label="Position Name">
                                <Form.Control type="text" name="PositionName" required
                                              placeholder="Position"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="HittingGrade" label="Hitting Grade">
                                    <Form.Select>
                                    <option>Please select</option>
                                    {this.state.grades.map(grade=>
                                        <option>{grade.value}</option>)}
                                    </Form.Select>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="HittingText" label="Hitting Comments">
                                <Form.Control as="textarea" name="HittingText"
                                              placeholder="Leave a comment here"
                                              style={{ height: '150px' }}/>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="PowerGrade" label="Power Grade">
                                    <Form.Select>
                                    <option>Please select</option>
                                    {this.state.grades.map(grade=>
                                        <option>{grade.value}</option>)}
                                    </Form.Select>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="PowerText" label="Power Comments">
                                <Form.Control as="textarea" name="PowerText"
                                              placeholder="Leave a comment here"
                                              style={{ height: '150px' }}/>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="RunningGrade" label="Running Grade">
                                    <Form.Select>
                                    <option>Please select</option>
                                    {this.state.grades.map(grade=>
                                        <option>{grade.value}</option>)}
                                    </Form.Select>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="RunningText" label="Running Comments">
                                <Form.Control as="textarea" name="RunningText"
                                              placeholder="Leave a comment here"
                                              style={{ height: '150px' }}/>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="FieldingGrade" label="Fielding Grade">
                                    <Form.Select>
                                    <option>Please select</option>
                                    {this.state.grades.map(grade=>
                                        <option>{grade.value}</option>)}
                                    </Form.Select>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="FieldingText" label="Fielding Comments">
                                <Form.Control as="textarea" name="FieldingText"
                                              placeholder="Leave a comment here"
                                              style={{ height: '150px' }}/>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="ThrowingGrade" label="Throwing Grade">
                                    <Form.Select>
                                    <option>Please select</option>
                                    {this.state.grades.map(grade=>
                                        <option>{grade.value}</option>)}
                                    </Form.Select>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="ThrowingText" label="Throwing Comments">
                                <Form.Control as="textarea" name="ThrowingText"
                                              placeholder="Leave a comment here"
                                              style={{ height: '150px' }}/>
                        </FloatingLabel>
                    </Row>
                    <br/>

                    <Button variant="primary" type="submit">Submit</Button>{' '}
                    <Link to="/" className="btn btn-danger">Back</Link>
                    </Container>
                </div>
            </Form>
        )
    }
}