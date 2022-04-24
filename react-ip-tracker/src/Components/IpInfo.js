import React from "react";
import styles from "./IpInfo.module.css";
const IpInfo = ({ desc, data }) => {
  return (
    <div>
      <h3>{desc}</h3>
      <p>{data}</p>
    </div>
  );
};

export default IpInfo;
