import React, { useRef, useState } from "react";
import styles from "./Header.module.css";

const Header = ({ getIpAddress }) => {
  const ipInputRef = useRef("");
  const [invalidIPCheck, setInvalidIPCheck] = useState(false);

  const validateIp = (ip) => {
    return ip.split(".").length === 4 ? true : false;
  };
  const submitIpAddress = (e) => {
    e.preventDefault();
    let ip = ipInputRef.current.value;
    validateIp(ip) ? getIpAddress(ip) : setInvalidIPCheck(true);
    ipInputRef.current.value = "";
  };

  return (
    <div className={styles.header}>
      <h1>IP ADDRESS TRACKER</h1>
      <div className={styles.ip_input}>
        <form onSubmit={submitIpAddress}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            ref={ipInputRef}
          />
          <button type="submit" className={styles.btn}>
            &gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
