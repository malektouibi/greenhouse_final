import React from "react";
import axios from "axios";

export default class AddArea extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeGreenhouseId = this.onChangeGreenhouseId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      greenhouseId: "",
      name: "",
    };
  }

  componentDidMount() {
    this.setState({
      greenhouseId: "greenhouseId",
      name: "name",
    });
  }

  onChangeGreenhouseId(e) {
    this.setState({
      greenhouseId: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const entry = {
      greenhouseId: this.state.greenhouseId,
      name: this.state.name,
    };

    console.log(entry);
    axios
      .post("http://localhost:5000/api/area/add", entry)
      .then((res) => console.log(res.data));

    window.location = "/area";
  }

  render() {
    return (
      <div>
        <h3>Create New area Entry</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>GreenhouseId: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.greenhouseId}
              onChange={this.onChangeGreenhouseId}
            />
          </div>

          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Area Entry"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
