import { useMap } from "react-leaflet";

const MyMapComponent = ({ center,zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

export default MyMapComponent;
