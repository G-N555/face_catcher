import React, { Component } from "react";
import "../css/Response.css";
import { Doughnut } from "react-chartjs-2";

class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "Anger",
          "Contempt",
          "Disgust",
          "Fear,",
          "Happiness",
          "Neutral",
          "Sadness",
          "Surprise"
        ],
        datasets: [
          {
            data: [],
            backgroundColor: [
              "#FF6384",
              "purple",
              "red",
              "gray",
              "yellow",
              "pink",
              "blue",
              "lightgreen"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "purple",
              "red",
              "gray",
              "yellow",
              "pink",
              "blue",
              "lightgreen"
            ]
          }
        ]
      }
    };
  }

  updateData = e => {
    const datasetsCopy = this.state.data.datasets.slice(0);
    const responseData = Object.values(this.props.responseData);
    const dataCopy = responseData.map(value => value);
    datasetsCopy[0].data = dataCopy;

    this.setState({
      data: Object.assign({}, this.state.data, {
        datasets: datasetsCopy
      })
    });
  };

  render() {
    return (
      <div className="list-container">
        <Doughnut
          data={this.state.data}
          options={{
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default Response;
