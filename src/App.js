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
import DataEntry from "./components/DataEntry";
import Reports from "./components/Reports"



class App extends Component {
  render() {
    return (
      <Router>
        
          <header className="app">
             <Landing />
          </header>
          <Switch className="content">
            <Route exact path="/workflow" component={KanbanBoard}></Route>
            <Route exact path="/vehicles-on-site" component={VehiclesByTechnician}></Route>
            <Route exact path="/customer-details" component={CustomerDetails}></Route>
            <Route exact path = "/reports" component={Reports}></Route>
            <Route exact path = "/data-entry" component={DataEntry}></Route>
          </Switch> 

      </Router>
    );
  }
}


export default App;