import React from "react";
import Webcam from "react-webcam";
import "../css/Webcam.css";

export default class WebcamCapture extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
    this.state = {
      webCamphotoData: ""
    };
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.getImageFromChild(imageSrc);
  };

  render() {
    return (
      <div className="video-container">
        <Webcam
          className="video"
          audio={false}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
        />
        <button className="capture" onClick={this.capture}>
          Capture photo
        </button>
      </div>
    );
  }
}
