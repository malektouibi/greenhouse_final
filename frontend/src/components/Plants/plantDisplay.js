import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PlantEntry = (props) => (
  <tr>
    <td>{props.plant_entry.areaId}</td>
    <td>{props.plant_entry.name}</td>
    <td>{props.plant_entry.quantity}</td>

    <td>
      <Link to={"/edit_plant/" + props.plant_entry._id}>Update</Link>|{" "}
      <Link
        href="#"
        onClick={() => {
          props.removePlantEntry(props.plant_entry._id);
        }}
      >
        Remove
      </Link>
    </td>
  </tr>
);

export default class plantDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.removePlant = this.removePlant.bind(this);

    this.state = {
      plant: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/plant")
      .then((res) => {
        this.setState({
          plant: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removePlant(id) {
    axios
      .delete("http://localhost:5000/api/plant/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      plant: this.state.plant.filter((e) => e._id !== id),
    });
  }

  plantList() {
    return this.state.plant.map((entry) => {
      return (
        <PlantEntry
          plant_entry={entry}
          removePlantEntry={this.removePlant}
          key={entry._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>plant Data</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>areaId</th>
              <th>Name</th>
              <th>quantiy</th>
            </tr>
          </thead>
          <tbody>{this.plantList()}</tbody>
        </table>
      </div>
    );
  }
}
