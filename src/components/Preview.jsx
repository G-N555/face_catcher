import React, { Component } from "react";
import "../css/Preview.css";

//I leave this component for any case need to use
class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="image" src={this.props.captureData} alt="image" />
      </div>
    );
  }
}

export default Preview;
