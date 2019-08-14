import React, { Component } from "react";
import "../css/Input.css";

//I leave this component for any case need to use
class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <form>
          <input id="input" type="file" onChange={this.props.click} />
        </form>
      </div>
    );
  }
}

export default Input;
