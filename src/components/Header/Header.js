import React, { useEffect, useState } from "react";
import { Space, Dropdown } from "antd";
import { AiOutlineMenu } from 'react-icons/ai';
import styles from './header.module.scss'
import { Link } from "react-scroll";

export default function Header() {
  const [headerSticky, setHeaderSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleSetActive = (to) => {
    setActiveSection(to);
  };


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setHeaderSticky(true);
      }
      else {
        setHeaderSticky(false)
      }
    })
  }, [])
  
  const menuList = [
    { label: "Home", link: "home" },
    { label: "About", link: "about" },
    { label: "Skills", link: "skills" },
    { label: "Projects", link: "projects" },
    { label: "Experience", link: "experience" },
  ]
  const items = [
    {
      label: <a href="#home">HOME</a>,
      key: "0",
    },
    {
      label: <a href="#about">ABOUT</a>,
      key: "1",
    },
    {
      label: <a href="#skills">SKILLS</a>,
      key: "2",
    },
    {
      label: <a href="#projects">PROJECTS</a>,
      key: "3",
    },
    {
      label: <a href="#experience">EXPERIENCE</a>,
      key: "4",
    },
  ];
  return (
    <header className={headerSticky ? styles.sticky : undefined}>
      <div className="container">
        <div className={styles.headerContainer}>
          <a href="index.html" className={styles.brand}>
            Do Van <span>Long</span>
          </a>
          <nav className={styles.menu}>
            <ul>
              {menuList.map((item, index) => {
                return (<li key={index}>
                  <Link
                  className={activeSection === item.link ? styles.activeNav : ''}
                  to={item.link}
                  spy={true}
                  smooth={true}
                  duration={0}
                  onSetActive={handleSetActive}
                  >
                    {item.label}
                  </Link>
                </li>)
              })}
            </ul>
          </nav>
          <div className={styles.dropdown}>
          <Dropdown 
          placement="bottomRight"
          menu={{ items }} 
          trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <AiOutlineMenu/>
              </Space>
            </a>
          </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
