"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../navbar/navbar.module.scss";
import Image from "next/image";
import logo from "../../../../public/Images/Purple_Modern_Software_Company_Logo-removebg-preview 1.svg"
import menu from "../../../../public/Images/menu.svg"
import exit from "../../../../public/Images/exit.svg"

const NavBar = () => {

  const [color, setColor] = useState(false)
  const [mobile, setMobile] = useState(true);

  const toggleMenu = () => {
    setMobile((open) => !open)
}

const changeColor = () => {
  if (window.scrollY >= 310){
    setColor(true)
    setMobile(mobile);
  }else {
    setColor(false)
  }
  
}


  // useEffect(() => {
  
  //   window.addEventListener('scroll', changeColor)
  // }, []);

  const router = useRouter();
  

  return (
      <nav className={styles.navbar}>
        <div className={styles.logo_image}>
          <Image 
          src={logo}
          alt="logo"
          width={150}
          className={styles.logo_img}
          />
        </div>
        <div className={mobile ? styles.Navbar_List : styles.Navbar_List_isopen}>
          <ul>
            <li>
              <button>High-tech</button>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Porfolio</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div id={styles.Hamburger}> 
            <span
              className="Hamburger span"
              onClick={toggleMenu}
            >
              <div className="Hamburger">
                {mobile ? <Image src={menu} alt="menu" width={25}/> : <Image src={exit} alt="menu" width={20}/>}
              </div>
            </span>
        </div>
      </nav>
  );
};

export default NavBar;
