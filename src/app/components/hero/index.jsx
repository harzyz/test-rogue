import React from 'react'
import styles from "../hero/hero.module.scss";
import NavBar from '../navbar';

export default function Hero() {
  return (
    <div className={styles.hero_container}>
        <NavBar />
        <div className={styles.rogue_image}>
        <section className={styles.Unveil_wrapper}>
            <h5>Let’s help you</h5>
            <h2>Unveil <span>efficiency,</span> elevate <span>productivity.</span> Experience Rogue’s design today</h2>
            <p>Leading digital agency with solid design and development expertise</p>
            <button>Let&apos;s talk</button>
        </section>
        </div>
    </div>
  )
}
