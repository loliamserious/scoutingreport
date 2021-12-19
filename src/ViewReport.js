import React, {Component} from "react";
import {Button, Col, Image, Row, Card, Container, Table, ButtonToolbar} from "react-bootstrap";
import {Link, withRouter} from 'react-router-dom';



export class ViewReport extends Component{

    state={
        id: this.props.match.params.id,
        detail:[]
    }


    handleReportInfo(){
        fetch('http://127.0.0.1:8000/report/id='+this.state.id)
        .then(response=>response.json())
        .then(data=>{
            this.setState({detail:data});
        })
        .catch(err=>{
            console.log(err)
        });
    }

    componentDidMount() {
        this.handleReportInfo();
    }

    render() {
        const{detail} = this.state;
        let table;
        if(detail.PlayerType==='Position Player'){
            table = <Table className="mt-3" striped hover size="lg" responsive >
                            <thead>
                            <tr>
                                <th>Tool</th>
                                <th>Grade</th>
                                <th>Report</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Hitting</td>
                                <td>{detail.HittingGrade}</td>
                                <td>{detail.HittingText}</td>
                            </tr>
                            <tr>
                                <td>Power</td>
                                <td>{detail.PowerGrade}</td>
                                <td>{detail.PowerText}</td>
                            </tr>
                            <tr>
                                <td>Running</td>
                                <td>{detail.RunningGrade}</td>
                                <td>{detail.RunningText}</td>
                            </tr>
                            <tr>
                                <td>Fielding</td>
                                <td>{detail.FieldingGrade}</td>
                                <td>{detail.FieldingText}</td>
                            </tr>
                            <tr>
                                <td>Throwing</td>
                                <td>{detail.ThrowingGrade}</td>
                                <td>{detail.ThrowingText}</td>
                            </tr>
                            </tbody>
                        </Table>
        }else{
            table = <Table className="mt-3" striped hover size="lg" responsive >
                            <thead>
                            <tr>
                                <th>PitchType</th>
                                <th>Grade</th>
                                <th>Velocity</th>
                                <th>Report</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Fastball</td>
                                <td>{detail.FastballGrade}</td>
                                <td>{detail.FastballVelocity}</td>
                                <td>{detail.FastballText}</td>
                            </tr>
                            <tr>
                                <td>Changeup</td>
                                <td>{detail.ChangeupGrade}</td>
                                <td>{detail.ChangeupVelocity}</td>
                                <td>{detail.ChangeupText}</td>
                            </tr>
                            <tr>
                                <td>Slider</td>
                                <td>{detail.SliderGrade}</td>
                                <td>{detail.SliderVelocity}</td>
                                <td>{detail.SliderText}</td>
                            </tr>
                            <tr>
                                <td>Curveball</td>
                                <td>{detail.CurveballGrade}</td>
                                <td>{detail.CurveballVelocity}</td>
                                <td>{detail.CurveballText}</td>
                            </tr>
                            </tbody>
                        </Table>
        }
        return(
            <div>
                <Container>
                    <br/>
                    <br/>
                    <Row>
                        <Col>
                            <Image src="https://content.mlb.com/images/headshots/current/60x60/672640@4x.png" responsive/>
                        </Col>
                        <Col sm={8}>
                            <Card>
                                <Card.Header as="h2">{detail.PlayerName}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>ReportID: {detail.ReportId}</p>
                                        <p>Position: {detail.PositionName}</p>
                                        <p>Team: {detail.TeamName}</p>
                                        <p>OFV: {detail.OFV}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        {table}
                    </Row>
                    <br/>
                    <Link to="/" className="btn btn-danger">Back</Link>
                </Container>
            </div>
        )
    }
}

export default withRouter(ViewReport);