import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MeasurementEntry = (props) => (
  <tr>
    <td>{props.mes_entry.areaId}</td>
    <td>
      {props.mes_entry.data && props.mes_entry.data.light_intensity
        ? props.mes_entry.data.light_intensity
        : "n/a"}
    </td>
    <td>
      {props.mes_entry.data && props.mes_entry.data.relative_humidity
        ? props.mes_entry.data.relative_humidity
        : "n/a"}
    </td>
    <td>
      {props.mes_entry.data && props.mes_entry.data.temperature
        ? props.mes_entry.data.temperature
        : "n/a"}
    </td>
    <td>
      <Link to={"/edit_measurement/" + props.mes_entry._id}>Update</Link>|{" "}
      <Link
        href="#"
        onClick={() => {
          props.removeMesEntry(props.mes_entry._id);
        }}
      >
        Remove
      </Link>
    </td>
  </tr>
);

export default class measurementDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.removeMeasurement = this.removeMeasurement.bind(this);

    this.state = {
      measurement: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/measurement")
      .then((res) => {
        this.setState({
          measurement: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeMeasurement(id) {
    axios
      .delete("http://localhost:5000/api/measurement/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      measurement: this.state.measurement.filter((e) => e._id !== id),
    });
  }

  measurementList() {
    return this.state.measurement.map((entry) => {
      return (
        <MeasurementEntry
          mes_entry={entry}
          removeMesEntry={this.removeMeasurement}
          key={entry._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Measurement Data</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Area ID</th>
              <th>Light intensity</th>
              <th>Rel. humidity</th>
              <th>Temperature</th>
            </tr>
          </thead>
          <tbody>{this.measurementList()}</tbody>
        </table>
      </div>
    );
  }
}
