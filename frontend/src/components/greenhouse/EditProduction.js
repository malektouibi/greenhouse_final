import React from "react";
import axios from "axios";

export default class EditGreenhouse extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/greenhouse/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
        });
      })
      .catch((error) => {
        console.log(error);
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
      .patch(
        "http://localhost:5000/api/greenhouse/add/" +
          this.props.match.params.id,
        entry
      )
      .then((res) => console.log(res.data));

    window.location = "/greenhouse";
  }

  render() {
    return (
      <div>
        <h3>Update greenhouse Data Entry</h3>

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
              value="Edit Greenhouse Entry"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
