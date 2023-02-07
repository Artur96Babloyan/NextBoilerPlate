import * as React from "react";
import styles from "./Divider.module.scss";

const Divider = () => {
  return (
    <div className={styles.DividerWrapper} >
      <div className={styles.Divider} />
    </div>
  );
};

export default Divider;
