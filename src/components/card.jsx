import React, { Component } from "react";
import LoaderCircle from "./utils/loaderCircle.js";

class Card extends Component {
  render() {
    const { consolidatedWeather } = this.props;
    return (
      <>
        {!consolidatedWeather.length ? (
          <LoaderCircle></LoaderCircle>
        ) : (
          consolidatedWeather.map(elem => (
            <div className="col-sm-4">
              <div className="card mb-3 shadow bg-white rounded">
                <div className="card-body">
                  <h3 className="card-title">
                    <span className="font-weight-bolder">Weather: </span>
                    <span className="text-info">{elem.weather_state_name}</span>
                  </h3>
                  <h5 className="card-subtitle mb-4">
                    <span className="font-weight-bolder">
                      Applicable date:{" "}
                    </span>
                    <span className="text-secondary">
                      {elem.applicable_date}
                    </span>
                  </h5>
                  <h6>
                    <span className="font-weight-bolder">Created: </span>
                    <span>{elem.created}</span>
                  </h6>
                  <h6>
                    <span className="font-weight-bolder">Temperature: </span>
                    <span>{Math.ceil(elem.the_temp)}</span>
                  </h6>
                  <h6>
                    <span className="font-weight-bolder">
                      Minimum Temperature:{" "}
                    </span>
                    <span>{Math.ceil(elem.min_temp)}</span>
                  </h6>
                  <h6>
                    <span className="font-weight-bolder">
                      Maximum Temperature:{" "}
                    </span>
                    <span>{Math.ceil(elem.max_temp)}</span>
                  </h6>
                  <h6>
                    <span className="font-weight-bolder">Wind Speed: </span>
                    <span>{elem.wind_speed}</span>
                  </h6>
                  <h6>
                    <span className="font-weight-bolder">Wind Direction: </span>
                    <span>{elem.wind_direction}</span>
                  </h6>
                  <h6>
                    <span className="font-weight-bolder">Air Pressure: </span>
                    <span>{elem.air_pressure}</span>
                  </h6>
                  <h6>
                    <span className="font-weight-bolder">Humidity: </span>
                    <span>{elem.humidity}</span>
                  </h6>
                  <h6>
                    <span className="font-weight-bolder">Visibility: </span>
                    <span>{elem.visibility}</span>
                  </h6>
                  <h6>
                    <span className="font-weight-bolder">Predictability: </span>
                    <span>{elem.predictability}</span>
                  </h6>
                </div>
              </div>
            </div>
          ))
        )}
      </>
    );
  }
}

export default Card;
