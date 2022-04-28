import React from "react";
import axios from "axios";

export default class EditArea extends React.Component {
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
    axios
      .get("http://localhost:5000/api/area/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          greenhouseId: res.data.greenhouseId,
          name: res.data.name,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeGreenhouseId(e) {
    this.setState({
      greenhouse: e.target.value,
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
      .patch(
        "http://localhost:5000/api/area/add/" + this.props.match.params.id,
        entry
      )
      .then((res) => console.log(res.data));

    window.location = "/area";
  }

  render() {
    return (
      <div>
        <h3>Update area Entry</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>greenhouseId: </label>
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
              value="Update area Entry"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
