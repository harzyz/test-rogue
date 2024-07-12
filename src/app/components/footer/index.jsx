import React from 'react'
import styles from "../footer/footer.module.scss"
import Image from 'next/image'
import logo from "../../../../public/Images/Purple_Modern_Software_Company_Logo-removebg-preview 1.svg"
import logotwo from "../../../../public/Images/google.svg"
import { facebook } from '../data'

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
    <div className={styles.footer_wrapper}>
            <div className={styles.footer_first}>
                <Image
                src={logo}
                alt='logo'
                width={100}
                 />
                 <p>Kindly reach us to make to simplify your problem into unique and simple solutions</p>
                 <Image
                src={logotwo}
                alt='logo'
                width={120}
                 />
            </div>
            <div className={styles.footer_second}>
                <ul>
                    <li>
                        <b>Links</b>
                    </li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Hot it Works</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className={styles.footer_third}>
                <b>Contact Us</b>
                <p>Interested in Rogue dev tech? Just pick up the phone to chat with a member of the sales team</p>
                <p>+923183561921</p>
            </div>
        </div>
        <div className={styles.logo_img}>
            {facebook.map((item, i) => (
              <div
                key={i}
                className={styles.Logo_icon}
              >
                <Image 
                src={item.icon}
                alt='logos'
                width={50}
                className={styles.Logo_img}
                />
              </div>
            ))}
          </div>
          <div className={styles.footer_privacy}>
            <p>© 2024 Copyright by Rogue designers. All rights reserved.</p>
          </div>
          

    </footer>
  )
}
