import React, {Component} from "react";
import {Button, Col, Form, Row,FloatingLabel,Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export class AddPitcherReport extends Component{

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
            FastballGrade:null,
            FastballVelocity:null,
            FastballText:null,
            ChangeupGrade:null,
            ChangeupVelocity:null,
            ChangeupText:null,
            SliderGrade:null,
            SliderVelocity:null,
            SliderText:null,
            CurveballGrade:null,
            CurveballVelocity:null,
            CurveballText:null,
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
                PlayerType: 'Pitcher',
                FastballGrade: event.target.FastballGrade.value,
                FastballVelocity: event.target.FastballVelocity.value,
                FastballText: event.target.FastballText.value,
                ChangeupGrade: event.target.ChangeupGrade.value,
                ChangeupVelocity: event.target.ChangeupVelocity.value,
                ChangeupText: event.target.ChangeupText.value,
                SliderGrade: event.target.SliderGrade.value,
                SliderVelocity: event.target.SliderVelocity.value,
                SliderText: event.target.SliderText.value,
                CurveballGrade: event.target.CurveballGrade.value,
                CurveballVelocity: event.target.CurveballVelocity.value,
                CurveballText: event.target.CurveballText.value,
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
            <div className="container">
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
                        <Col>
                            <FloatingLabel controlId="FastballGrade" label="Fastball Grade">
                                    <Form.Select>
                                    <option>Please select</option>
                                    {this.state.grades.map(grade=>
                                        <option>{grade.value}</option>)}
                                    </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <br/>
                        <Col>
                            <FloatingLabel controlId="FastballVelocity" label="Fastball Velocity">
                                <Form.Control type="text" name="FastballVelocity" required
                                              placeholder="Fastball Velocity"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="FastballText" label="Fastball Comments">
                                <Form.Control as="textarea" name="FastballText"
                                              placeholder="Leave a comment here"
                                              style={{ height: '150px' }}/>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="ChangeupGrade" label="Changeup Grade">
                                    <Form.Select>
                                    <option>Please select</option>
                                    {this.state.grades.map(grade=>
                                        <option>{grade.value}</option>)}
                                    </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <br/>
                        <Col>
                            <FloatingLabel controlId="ChangeupVelocity" label="Changeup Velocity">
                                <Form.Control type="text" name="ChangeupVelocity" required
                                              placeholder="Changeup Velocity"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="ChangeupText" label="Changeup Comments">
                                <Form.Control as="textarea" name="ChangeupText"
                                              placeholder="Leave a comment here"
                                              style={{ height: '150px' }}/>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="SliderGrade" label="Slider Grade">
                                    <Form.Select>
                                    <option>Please select</option>
                                    {this.state.grades.map(grade=>
                                        <option>{grade.value}</option>)}
                                    </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <br/>
                        <Col>
                            <FloatingLabel controlId="SliderVelocity" label="Slider Velocity">
                                <Form.Control type="text" name="SliderVelocity" required
                                              placeholder="Slider Velocity"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="SliderText" label="Slider Comments">
                                <Form.Control as="textarea" name="SliderText"
                                              placeholder="Leave a comment here"
                                              style={{ height: '150px' }}/>
                        </FloatingLabel>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="CurveballGrade" label="Curveball Grade">
                                    <Form.Select>
                                    <option>Please select</option>
                                    {this.state.grades.map(grade=>
                                        <option>{grade.value}</option>)}
                                    </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <br/>
                        <Col>
                            <FloatingLabel controlId="CurveballVelocity" label="Curveball Velocity">
                                <Form.Control type="text" name="CurveballVelocity" required
                                              placeholder="Curveball Velocity"/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <FloatingLabel controlId="CurveballText" label="Curveball Comments">
                                <Form.Control as="textarea" name="CurveballText"
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