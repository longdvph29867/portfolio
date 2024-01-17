import React from "react";
import "animate.css";
import styles from "./banner.module.scss";
import imgHome06 from "../../assets/home_06.png";
import imgSlider2 from "../../assets/home_slider_2.png";
import imgHome01 from "../../assets/home_01.png";
import imgBg from "../../assets/home_03.png";
import Contact from "../Contact/Contact";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.bannerContainer}>
          <div className={styles.bannerLeft}>
            <h3 className="animate__animated animate__fadeInUp">
              Hello, my name is
            </h3>
            <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
              Do Van Long
            </h1>
            <h2 className="animate__animated animate__fadeInUp animate__delay-2s">
              I'm a <span>FRONT-END DEVELOPER</span>
            </h2>
            <a
              target="_blank"
              href="https://www.topcv.vn/xem-cv/CAJUBANdU1YBBVsIDQ5dBAFVBAUDUFQBVwsADA9d2a?ta_source=EditCVInAfterSaveCV"
              rel="noreferrer"
              className="animate__animated animate__fadeInUp animate__delay-3s"
            >
              My CV
            </a>
          </div>
          <div
            className={`${styles.bannerRight} animate__animated animate__fadeInUp animate__delay-2s`}
          >
            <div className={styles.myImg}></div>
            <div className={styles.imgBg}>
              <img src={imgBg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <div className={styles.imgLeft}>
        <img src={imgHome06} alt="" />
      </div>
      <div className={styles.imgTop}>
        <img src={imgSlider2} alt="" />
      </div>
      <div className={styles.imgTopleft}>
        <img src={imgHome01} alt="" />
      </div>
    </div>
  );
}
