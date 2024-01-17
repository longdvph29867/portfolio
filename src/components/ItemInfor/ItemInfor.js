import React, { useEffect } from 'react'
import 'animate.css';
import WOW from 'wowjs';
import styles from './itemInfor.module.scss'
export default function ItemInfor({item, className}) {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <div className={`${styles.itemInfor} ${className} wow animate__animated animate__fadeInRight`}>
        <div className={styles.icon}>
            {item.icon}
        </div>
        <div className={styles.aboutInfor}>
            <h4>{item.title}</h4>
            <p>{item.year}</p>
            <p>{item.inst}</p>
            <p>{item.desc}</p>
        </div>
    </div>
  )
}
