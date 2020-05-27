import React, { Component } from "react";

class MapContainer extends Component {
  render() {
    return (
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="170"
            id="gmap_canvas"
            src="https://maps.google.com/maps?ll=42.4431172,19.24830189999999&q=Moskovska&t=&z=14&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default MapContainer;
