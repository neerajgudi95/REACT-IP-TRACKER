import React from "react";
import styles from "./IpData.module.css";
const IpData = ({ info, data }) => {
  return (
    <div>
      <p className={styles.ipInfo}>{info}</p>
      <p className={styles.ipData}>{data}</p>
    </div>
  );
};

export default IpData;
