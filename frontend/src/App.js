import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";

import measurementDisplay from "./components/measurement/measurementDisplay";
import AddMeasurement from "./components/measurement/AddMeasurement";
import EditMeasurement from "./components/measurement/EditMeasurement";

import areaDisplay from "./components/Area/areaDisplay";
import AddArea from "./components/Area/AddArea";
import EditArea from "./components/Area/EditArea";

import plantDisplay from "./components/Plants/plantDisplay";
import AddPlant from "./components/Plants/AddPlant";
import EditPlant from "./components/Plants/EditPlant";

import greenhouseDisplay from "./components/greenhouse/greenhouseDisplay";
import AddGreenhouse from "./components/greenhouse/AddGreenhouse";
import EditGreenhouse from "./components/greenhouse/EditProduction";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />

        <br />
        <Route path="/" exact component={measurementDisplay} />
        <Route path="/measurement" component={measurementDisplay} />
        <Route path="/add_measurement" component={AddMeasurement} />
        <Route path="/edit_measurement/:id" component={EditMeasurement} />

        <Route path="/area" component={areaDisplay} />
        <Route path="/add_area" component={AddArea} />
        <Route path="/edit_area/:id" component={EditArea} />

        <Route path="/plant" component={plantDisplay} />
        <Route path="/add_plant" component={AddPlant} />
        <Route path="/edit_plant/:id" component={EditPlant} />

        <Route path="/greenhouse" component={greenhouseDisplay} />
        <Route path="/add_greenhouse" component={AddGreenhouse} />
        <Route path="/edit_greenhouse/:id" component={EditGreenhouse} />
      </div>
    </Router>
  );
}

export default App;
