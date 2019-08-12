import { React, Component } from "react";
import "./App.css";
require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      returnFaceId: "true",
      returnFaceLandmarks: "false",
      returnFaceAttributes:
        "age,gender,headPose,smile,facialHair,glasses,emotion," +
        "hair,makeup,occlusion,accessories,blur,exposure,noise"
    };
  }

  processImage() {
    // Replace <Subscription Key> with your valid subscription key.
    const subscriptionKey = process.env.AZURE_KEY;

    // NOTE: You must use the same region in your REST call as you used to
    // obtain your subscription keys. For example, if you obtained your
    // subscription keys from westus, replace "westcentralus" in the URL
    // below with "westus".
    //
    // Free trial subscription keys are generated in the "westus" region.
    // If you use a free trial subscription key, you shouldn't need to change
    // this region.
    const uriBase =
      "https://face-recognition2.cognitiveservices.azure.com/face/v1.0/detect";

    // Request parameters.
    const params = {
      returnFaceId: "true",
      returnFaceLandmarks: "false",
      returnFaceAttributes:
        "age,gender,headPose,smile,facialHair,glasses,emotion," +
        "hair,makeup,occlusion,accessories,blur,exposure,noise"
    };

    // Display the image.
    const sourceImageUrl = document.getElementById("inputImage").value;
    document.querySelector("#sourceImage").src = sourceImageUrl;

    // Perform the REST API call.
    $.ajax({
      url: uriBase + "?" + $.param(params),

      // Request headers.
      beforeSend: function(xhrObj) {
        xhrObj.setRequestHeader("Content-Type", "application/json");
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
      },

      type: "POST",

      // Request body.
      data: '{"url": ' + '"' + sourceImageUrl + '"}'
    })

      .done(function(data) {
        // Show formatted JSON on webpage.
        $("#responseTextArea").val(JSON.stringify(data, null, 2));
      })

      .fail(function(jqXHR, textStatus, errorThrown) {
        // Display error message.
        const errorString =
          errorThrown === ""
            ? "Error. "
            : errorThrown + " (" + jqXHR.status + "): ";
        errorString +=
          jqXHR.responseText === ""
            ? ""
            : jQuery.parseJSON(jqXHR.responseText).message
            ? jQuery.parseJSON(jqXHR.responseText).message
            : jQuery.parseJSON(jqXHR.responseText).error.message;
        alert(errorString);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>wwwkljwjlkrewlkjsafadsfafsa;afsjkl.js</code> and save to
            reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;