import React from "react";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles["mic-loader"]}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default Loader;
