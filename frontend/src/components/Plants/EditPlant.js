import React from "react";
import axios from "axios";

export default class EditPlant extends React.Component {
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
    axios
      .get("http://localhost:5000/api/plant/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          areaId: res.data.areaId,
          name: res.data.name,
          quantity: res.data.quantity,
        });
      })
      .catch((error) => {
        console.log(error);
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
      .patch(
        "http://localhost:5000/api/plant/add/" + this.props.match.params.id,
        entry
      )
      .then((res) => console.log(res.data));

    window.location = "/plant";
  }

  render() {
    return (
      <div>
        <h3>Update plant Entry</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>AreaId </label>
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
            <label>quantity </label>
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
              value="Update plant Entry"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
