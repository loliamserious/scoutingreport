import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar,Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {AddReport} from "./AddReport";

export class Report extends Component{

    constructor(props) {
        super(props);
        this.state={reps:[],addModalShow:false};
    }

    refreshList(){
        fetch('http://127.0.0.1:8000/report/')
            .then(response=>response.json())
            .then(data=>{
                this.setState({reps:data});
            })
            .catch(err=>{
                console.log(err)
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteReport(id){
        if(window.confirm('Are you sure?')){
            fetch('http://127.0.0.1:8000/report/'+id,{
                method:'DELETE',
                headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
                }})
        }
    }


    render() {
        const {reps}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
                <div>
                    <Container>
                    <Table className="mt-4" stripted bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>ReportId</th>
                            <th>PlayerName</th>
                            <th>PositionName</th>
                            <th>TeamName</th>
                            <th>OFV</th>
                            <th>Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reps.map(rep=>
                            <tr key={rep.ReportId}>
                                <td>{rep.ReportId}</td>
                                <td>{rep.PlayerName}</td>
                                <td>{rep.PositionName}</td>
                                <td>{rep.TeamName}</td>
                                <td>{rep.OFV}</td>
                                <td>
                                    <Link to={'/'+rep.ReportId} className="btn btn-info">
                                        View
                                    </Link>{' '}
                                    <Button className="mr-2" variant="danger"
                                            onClick={()=> this.deleteReport(rep.ReportId)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>)}
                        </tbody>
                    </Table>
                    <br/>
                    <ButtonToolbar>
                        <Button variant='primary'
                                onClick={()=>this.setState({addModalShow:true})}>
                            Add Report
                        </Button>
                        <AddReport show={this.state.addModalShow}
                                   onHide={addModalClose}></AddReport>
                    </ButtonToolbar>
                    </Container>
                </div>
        )
    }
}