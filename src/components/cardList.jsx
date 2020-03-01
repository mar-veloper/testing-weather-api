import React, { Component } from "react";
import LoaderDot from "./utils/loaderDot.js";
import Card from "./card";

class CardList extends Component {
  state = {
    weather: "",
    consolidatedWeather: [],
    baseUrl: "https://www.metaweather.com/api/location/862592",
    corsBaseUrl:
      "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/862592/"
  };

  componentDidMount() {
    fetch(this.state.corsBaseUrl)
      .then(response => response.json())
      .then(json => this.handleFetch(json))
      .catch(err => console.log(err));
  }

  handleFetch = json => {
    const weather = json;
    const consolidatedWeather = json.consolidated_weather;
    this.setState({ weather, consolidatedWeather });
  };

  render() {
    const { weather, consolidatedWeather } = this.state;
    return (
      <>
        <div className="m-4">
          <h1>
            Location: {!weather ? <LoaderDot></LoaderDot> : weather.title}
          </h1>
        </div>
        <div className="row m-2">
          <Card consolidatedWeather={consolidatedWeather}></Card>
        </div>
      </>
    );
  }
}

export default CardList;
