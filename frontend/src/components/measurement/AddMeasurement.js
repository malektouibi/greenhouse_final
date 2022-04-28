import React from "react";
import axios from "axios";

export default class AddMeasurement extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeAreaID = this.onChangeAreaID.bind(this);
    this.onChangeLightIntensity = this.onChangeLightIntensity.bind(this);
    this.onChangeRelativeHumidity = this.onChangeRelativeHumidity.bind(this);
    this.onChangeTemperature = this.onChangeTemperature.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      areaId: "",
      data: {
        light_intensity: 0,
        relative_humidity: 0,
        temperature: 0,
      },
    };
  }

  componentDidMount() {
    this.setState({
      areaId: "",
      data: {
        light_intensity: 20,
        relative_humidity: 55,
        temperature: 24,
      },
    });
  }

  onChangeAreaID(e) {
    this.setState({
      time: e.target.value,
    });
  }

  onChangeLightIntensity(e) {
    this.setState({
      data: { ...this.state.data, light_intensity: e.target.value },
    });
  }

  onChangeRelativeHumidity(e) {
    this.setState({
      data: { ...this.state.data, relative_humidity: e.target.value },
    });
  }

  onChangeTemperature(e) {
    this.setState({
      data: { ...this.state.data, temperature: e.target.value },
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const entry = {
      areaId: this.state.areaId,
      data: { ...this.state.data },
    };

    console.log(entry);
    axios
      .post("http://localhost:5000/api/measurement/add", entry)
      .then((res) => console.log(res.data));

    window.location = "/measurement";
  }

  render() {
    return (
      <div>
        <h3>Create New Measurement Entry</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>AreaId: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.areaId}
              onChange={this.onChangeAreaID}
            />
          </div>

          <div className="form-group">
            <label>Light Intensity: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.data.light_intensity}
              onChange={this.onChangeLightIntensity}
            />
          </div>

          <div className="form-group">
            <label>Rel. Humidity: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.data.relative_humidity}
              onChange={this.onChangeRelativeHumidity}
            />
          </div>

          <div className="form-group">
            <label>Temperature: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.data.temperature}
              onChange={this.onChangeTemperature}
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
