import React from "react";
import styles from "./title.module.scss";

export default function Title({className, title}) {
  return (
    <div className={`${styles.title} ${className}`}>
      <h2>{title}</h2>
      <hr />
    </div>
  );
}
