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
  useEffect(() => {
    ipAddr !== null &&
      fetchIPDetails(
        `https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${ipAddr}`
      );
  }, [ipAddr, URL]);
  return (
    <div className="app">
      <Header getIpAddress={setIpAddr} />
      <IpAddressDetails ipAddrDetails={ipAddrDetails} />
      <MapComponent />
    </div>
  );
}

export default App;
