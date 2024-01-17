import React, { useEffect } from "react";
import 'animate.css';
import WOW from 'wowjs';
import styles from "./itemSkill.module.scss";

export default function ItemSkill({item}) {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <div className={`${styles.itemSkill} wow animate__animated animate__fadeInRight`}>
      <div className={styles.content}>
        <div className={styles.icon}>
          {item.icon}
        </div>
        <h3>{item.title}</h3>
        <ul>
          {item.desc.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}
