import React from "react";
import axios from "axios";

export default class AddPlant extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeAreaId = this.onChangeAreaId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      areaId: "",
      name: "",
      quantity: 0,
    };
  }

  componentDidMount() {
    this.setState({
      areaId: "",
      name: "",
      quantity: 0,
    });
  }

  onChangeAreaId(e) {
    this.setState({
      areaId: e.target.value,
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const entry = {
      areaId: this.state.areaId,
      name: this.state.name,
      quantity: this.state.quantity,
    };

    console.log(entry);
    axios
      .post("http://localhost:5000/api/plant/add", entry)
      .then((res) => console.log(res.data));

    window.location = "/plant";
  }

  render() {
    return (
      <div>
        <h3>Create New Plant Entry</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>AreaId: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.areaId}
              onChange={this.onChangeAreaId}
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
            <label>quantity: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.quantity}
              onChange={this.onChangeQuantity}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Plant Entry"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
