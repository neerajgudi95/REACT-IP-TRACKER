import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IpAddressDetails from "./Components/IpAddressDetails";
import MapComponent from "./Components/MapComponent";

function App() {
  const [ipAddr, setIpAddr] = useState(null);
  const [ipAddrDetails, setIpAddrDetails] = useState({});
  const api_key = process.env.REACT_APP_IPFY_API_KEY;
  const fetchIPDetails = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setIpAddrDetails(data);
  };
  let URL = `https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=`;
  useEffect(() => {
    ipAddr !== null && fetchIPDetails(`${URL}${ipAddr}`);
  }, [ipAddr, URL]);

  let lat = 0,
    lng = 0;
  if (Object.keys(ipAddrDetails).length !== 0) {
    lat = ipAddrDetails.location.lat;
    lng = ipAddrDetails.location.lng;
  }
  return (
    <div className="app">
      <Header getIpAddress={setIpAddr} />
      <IpAddressDetails ipAddrDetails={ipAddrDetails} />
      <MapComponent latitude={lat} longitude={lng} />
    </div>
  );
}

export default App;
