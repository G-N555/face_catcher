import React, { Component } from "react";
import "../css/Response.css";

class Response extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-container">
        <ul>
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
