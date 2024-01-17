import React from "react";
import { AiFillMail, AiFillGithub } from 'react-icons/ai';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import imghome02 from '../../assets/home_02.png'
import styles from "./contact.module.scss";
export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.contactContainer}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <AiFillGithub/>
              </div>
              <div>
                <a href="https://github.com/longdvph29867" target={'_black'}>https://github.com/longdvph29867</a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaPhoneAlt/>
              </div>
              <p>0971776865</p>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <AiFillMail/>
              </div>
              <p>longdvph29867@gmail.com</p>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaMapMarkerAlt/>
              </div>
              <p>Dan Phuong, Ha Noi</p>
            </div>
        </div>
      </div>
      <dir className={styles.imgCenter}>
        <img src={imghome02} alt="" />
      </dir>
    </div>
  );
}
