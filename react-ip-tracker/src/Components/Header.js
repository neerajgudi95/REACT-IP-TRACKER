import React, { useRef, useState } from "react";
import styles from "./Header.module.css";

const Header = ({ getIpAddress }) => {
  const ipInputRef = useRef("");
  const [invalidIPCheck, setInvalidIPCheck] = useState();

  const validateIp = (ip) => {
    return ip.split(".").length === 4 ? true : false;
  };
  const submitIpAddress = (e) => {
    e.preventDefault();
    let ip = ipInputRef.current.value;
    if (validateIp(ip)) {
      setInvalidIPCheck(false);
      getIpAddress(ip);
      ipInputRef.current.value = "";
    } else {
      setInvalidIPCheck(true);
    }
  };

  const validIpTemplate = invalidIPCheck && "Please enter a valid IP address";

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
      <p className={styles.error}>{validIpTemplate}</p>
    </div>
  );
};

export default Header;
