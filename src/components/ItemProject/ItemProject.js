import React, { useEffect } from 'react'
import styles from './itemProject.module.scss'
import 'animate.css';
import WOW from 'wowjs';

export default function ItemProject({item}) {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <div className={`${styles.itemProject} wow animate__animated animate__fadeInUp`}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={item.img} alt="" />
        </div>
        <a href={item.link} target='blank' className={styles.overlay}>
          <h3>{item.type}</h3>
        </a>
      </div>
    </div>
  )
}
