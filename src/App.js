import logo from './logo.svg';
import './App.css';

import {Report} from "./Report";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AddPositionPlayerReport} from "./AddPositionPlayerReport";
import {AddPitcherReport} from "./AddPitcherReport";
import {ViewReport} from "./ViewReport";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
          Scouting Reports
      </h3>
      <Switch>
        <Route path='/' component={Report} exact/>
        <Route path='/NewPositionPlayerReport' component={AddPositionPlayerReport}/>
        <Route path='/NewPitcherReport' component={AddPitcherReport}/>
        <Route path='/:id' component={ViewReport}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
