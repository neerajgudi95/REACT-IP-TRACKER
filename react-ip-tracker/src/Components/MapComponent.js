import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";
const MapComponent = ({ latitude, longitude }) => {
  const position = [latitude, longitude];
  console.log([latitude, longitude]);
  return (
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "100vh",
        flex: 0.7,
        zIndex: -1,
        minWidth: "100vw",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
