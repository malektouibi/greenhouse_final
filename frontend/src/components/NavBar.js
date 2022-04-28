import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Greenhouse App
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/measurement" className="nav-link">
                Measurement
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/add_measurement" className="nav-link">
                Add Measurement
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/area" className="nav-link">
                Area
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/add_area" className="nav-link">
                Add Area
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/plant" className="nav-link">
                plant
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/add_plant" className="nav-link">
                Add plant
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/greenhouse" className="nav-link">
                greenhouse
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/add_greenhouse" className="nav-link">
                Add greenhouse
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
