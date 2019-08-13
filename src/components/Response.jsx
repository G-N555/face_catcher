import React, { Component } from "react";
import "../css/Response.css";

class Response extends Component {
  constructor(props) {
    super(props);
  }

  check = () => {
    console.log(this.props.responseData);
  };

  render() {
    return (
      <div className="response-container">
        <ul className="emotion-container">
          <li>ANGER: {this.props.responseData.anger}</li>
          <li>CONTEMPT: {this.props.responseData.contempt}</li>
          <li>DISGUST: {this.props.responseData.disgust}</li>
          <li>FEAR: {this.props.responseData.fear}</li>
          <li>HAPPINESS: {this.props.responseData.happiness}</li>
          <li>NEUTRAL: {this.props.responseData.neutral}</li>
          <li>SADNESS: {this.props.responseData.sadness}</li>
          <li>SURPRISE: {this.props.responseData.surprise}</li>
        </ul>
      </div>
    );
  }
}

export default Response;
