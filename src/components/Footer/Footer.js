import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
  const menu = [
    { label: "home", link: "#home" },
    { label: "about", link: "#about" },
    { label: "skills", link: "#skills" },
    { label: "projects", link: "#projects" },
    { label: "experience", link: "#experience" },
  ];
  return (
    <footer>
      <div className="container">
        <div className={styles.footerContainer}>
          <h3>
            Do Van <span>Long</span>
          </h3>
          <ul className={styles.menu}>
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.link}>{item.label}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
