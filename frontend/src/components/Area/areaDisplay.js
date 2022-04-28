import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AreaEntry = (props) => (
  <tr>
    <td>{props.area_entry.greenhouseId}</td>
    <td>{props.area_entry.name}</td>
    <td>{props.area_entry._id}</td>
    <td>
      <Link to={"/edit_area/" + props.area_entry._id}>Update</Link>|{" "}
      <Link
        href="#"
        onClick={() => {
          props.removeAreaEntry(props.area_entry._id);
        }}
      >
        Remove
      </Link>
    </td>
  </tr>
);

export default class areaDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.removeArea = this.removeArea.bind(this);

    this.state = {
      area: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/area")
      .then((res) => {
        this.setState({
          area: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeArea(id) {
    axios
      .delete("http://localhost:5000/api/area/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      area: this.state.area.filter((e) => e._id !== id),
    });
  }

  areaList() {
    return this.state.area.map((entry) => {
      return (
        <AreaEntry
          area_entry={entry}
          removeAreaEntry={this.removeArea}
          key={entry._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Area Data</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>greenhouseId</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{this.areaList()}</tbody>
        </table>
      </div>
    );
  }
}
