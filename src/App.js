import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing"
import KanbanBoard from "./components/KanbanBoard"
import VehiclesByTechnician from "./components/VehiclesByTechnician"
import CustomerDetails from "./components/CustomerDetails";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
             <Landing />
          </header>
          <div className="content">
          <Switch>
            <Route exact path="/workflow" component={KanbanBoard}></Route>
            <Route exact path="/vehicles-on-site" component={VehiclesByTechnician}></Route>
            <Route exact path="/customer-details" component={CustomerDetails}></Route>
          </Switch> 
          </div>
        </div>
         


      </Router>
    );
  }
}


export default App;