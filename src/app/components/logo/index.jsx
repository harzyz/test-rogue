import React from 'react'
import styles from "../logo/logo.module.scss"
import { logo } from "../data";
import Image from 'next/image';

export default function Logo() {
  return (
        <div className={styles.logo_img}>
            {logo.map((item, i) => (
              <div
                key={i}
                className={styles.logo_icon}
              >
                <Image 
                src={item.icon}
                alt='logos'
                width={150}
                className={styles.logo}
                />
              </div>
            ))}
          </div>

  )
}
