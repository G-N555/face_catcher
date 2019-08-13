import React, { Component } from "react";
import "../css/App.css";
import Input from "./Input";
import Response from "./Response";
import Webcam from "./Webcam";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "",
      sendData: "",
      responseFromAPI: "Your emotion is here",
      camera: true,
      webCamData: ""
    };
  }

  //create blob for sending data to azure
  makeblob = function(dataURL) {
    const BASE64_MARKER = ";base64,";
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
      const parts = dataURL.split(",");
      const contentType = parts[0].split(":")[1];
      const raw = decodeURIComponent(parts[1]);
      return new Blob([raw], { type: contentType });
    }
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;

    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    if (this.state.camera) {
      this.setState({
        webCamData: new Blob([uInt8Array], { type: contentType })
      });
    } else {
      this.setState({
        sendData: new Blob([uInt8Array], { type: contentType })
      });
    }
  };

  //create photoData (It's async!)
  readUploadedFileAsText = e => {
    const fr = new FileReader();
    return new Promise((resolve, reject) => {
      fr.onerror = () => {
        fr.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      fr.onload = () => {
        this.makeblob(fr.result);
        resolve(fr.result);
      };
      fr.readAsDataURL(e.target.files[0]);
    });
  };

  submitData = () => {
    const subscriptionKey = process.env.REACT_APP_AZURE_API_KEY; //キーを指定
    const uriBase =
      "https://face-recognition2.cognitiveservices.azure.com/face/v1.0/detect";

    // Request parameters.
    const params = {
      returnFaceId: "true",
      returnFaceAttributes: "emotion"
    };

    const config = {
      baseURL: uriBase,
      method: "post",
      headers: {
        "Content-Type": "application/octet-stream",
        "Ocp-Apim-Subscription-Key": subscriptionKey
      },
      processData: false,
      data: this.state.webCamData,
      params: params
    };

    axios
      .request(config)
      .then(res => {
        const jsonResponse = JSON.stringify(res.data, null, "  ");
        console.log("succeess!!!!!!!!", jsonResponse);
        this.setState({ responseFromAPI: jsonResponse });
      })

      .catch(error => console.log(error.response.data));
  };

  cameraOnOff = () => {
    this.setState({ camera: !this.state.camera });
  };

  getImage = webCamData => {
    this.makeblob(webCamData);
  };

  render() {
    return (
      <div className="App">
        <h1>Actually, it works</h1>
        <Input click={this.readUploadedFileAsText} />
        <button type="button" onClick={this.submitData}>
          submit
        </button>
        <button type="button" onClick={this.cameraOnOff}>
          Camera Off
        </button>
        {this.state.camera && <Webcam getImageFromChild={this.getImage} />}
        <Response text={this.state.responseFromAPI} />
        <canvas />
      </div>
    );
  }
}

export default App;
