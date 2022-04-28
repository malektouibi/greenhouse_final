import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GreenhouseEntry = (props) => (
  <tr>
    <td>{props.grh_entry.name}</td>
    <td>{props.grh_entry._id}</td>
    <td>
      <Link to={"/edit_greenhouse/" + props.grh_entry._id}>Update</Link>|{" "}
      <Link
        href="#"
        onClick={() => {
          props.removeGrhEntry(props.grh_entry._id);
        }}
      >
        Remove
      </Link>
    </td>
  </tr>
);

export default class greenhouseDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.removeGreenhouse = this.removeGreenhouse.bind(this);

    this.state = {
      greenhouse: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/greenhouse")
      .then((res) => {
        this.setState({
          greenhouse: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeGreenhouse(id) {
    axios
      .delete("http://localhost:5000/api/greenhouse/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      greenhouse: this.state.greenhouse.filter((e) => e._id !== id),
    });
  }

  greenhouseList() {
    return this.state.greenhouse.map((entry) => {
      return (
        <GreenhouseEntry
          grh_entry={entry}
          removeGrhEntry={this.removeGreenhouse}
          key={entry._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>greenhouse Data</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{this.greenhouseList()} </tbody>
        </table>
      </div>
    );
  }
}
