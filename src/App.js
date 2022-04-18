import React, { useState } from "react";
import "./App.css";
import Map from "./Map/Map";
import Layers from "./Layers/Layers";
import TileLayer from "./Layers/TileLayer";
import VectorLayer from "./Layers/VectorLayer";
import { osm, vector } from "./Source";
import Controls from "./Controls/Controls";
import FullScreenControl from "./Controls/FullScreenControl";

const App = () => {
  const [center, setCenter] = useState([0, 0]);
  const [zoom, setZoom] = useState(2);
  return (
    <div>
      <Map center={center} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
};

export default App;
