import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
export default function BackToTop() {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 150) {
                setBackToTopButton(true);
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (backToTopButton ? (<button 
    style={{
        position: 'fixed',
        width: 40,
        height:40,
        right: 20,
        bottom: 20,
        fontSize: 16,
        color:'#fff',
        backgroundColor:'#ffae00',
        border:'none',
        borderRadius: 8,
        cursor:'pointer',
        zIndex: 50
    }}
    onClick={scrollUp}
    >
        <FaArrowUp/>
    </button>) : <></>
  )
}
