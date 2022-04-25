import React from "react";
import styles from "./IpAddressDetails.module.css";
import IpData from "./IpData";
import Loader from "./Loader";

const IpAddressDetails = ({ ipAddrDetails }) => {
  const ipGiven = ipAddrDetails.ip || "NA";
  const ipLocation =
    Object.keys(ipAddrDetails).length === 0
      ? "NA"
      : `${ipAddrDetails.location.city}, ${ipAddrDetails.location.country}`;
  const timeZone = ipAddrDetails?.location?.timezone || "NA";
  const serviceProvider = ipAddrDetails?.isp || "NA";
  const template =
    ipAddrDetails === undefined ? (
      <Loader />
    ) : (
      <div className={styles.details}>
        <IpData info="IP ADDRESS" data={ipGiven} />
        <IpData info="LOCATION" data={ipLocation} />
        <IpData info="TIMEZONE" data={timeZone} />
        <IpData info="ISP" data={serviceProvider} />
      </div>
    );
  return template;
};

export default IpAddressDetails;
