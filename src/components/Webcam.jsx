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
        <div className="button-container">
          <button className="capture" onClick={this.capture}>
            Capture photo
          </button>
          <button
            type="button"
            className="submit"
            onClick={this.props.submitData}
          >
            submit
          </button>
        </div>
      </div>
    );
  }
}
