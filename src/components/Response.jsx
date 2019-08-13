import React, { Component } from "react";
import "../css/Response.css";

class Response extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <textarea>{this.props.text}</textarea>
      </div>
    );
  }
}

export default Response;
