import React from "react";
import axios from "axios";

export default class AddGreenhouse extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    this.setState({
      name: "",
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
      name: this.state.name,
    };

    console.log(entry);
    axios
      .post("http://localhost:5000/api/greenhouse/add", entry)
      .then((res) => console.log(res.data));

    window.location = "/greenhouse";
  }

  render() {
    return (
      <div>
        <h3>Create New Greenhouse</h3>

        <form onSubmit={this.onSubmit}>
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
              value="Create Measurement Entry"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
