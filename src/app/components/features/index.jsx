import React from 'react'
import { development, portfolio, method} from "../data"
import Image from 'next/image'
import styles from "../features/features.module.scss"
import line from "../../../../public/Images/Line 12.svg"
import cross from "../../../../public/Images/Frame 175.svg"
import crossb from "../../../../public/Images/Frame 176.svg"
import crossc from "../../../../public/Images/Frame 177.svg"
import crossd from "../../../../public/Images/Frame 178.svg"
import two from "../../../../public/Images/Frame 181.svg"
import arrow from "../../../../public/Images/Arrow 1.svg"
import person from "../../../../public/Images/Group 129.svg"
import pilot from "../../../../public/Images/Group 129 (1).svg"
import dash from "../../../../public/Images/Frame 15.svg"
import dashblue from "../../../../public/Images/Frame 16.svg"
import star from "../../../../public/Images/Group 124.svg"
import arrownew from "../../../../public/Images/Arrow 1 (1).svg"
import crossnew from "../../../../public/Images/Frame 181 (1).svg"



export default function Features() {
  return (
    <main className={styles.card_wrapper_container}>
        <section className={styles.card_container}>
            <h2>WHAT WE OFFER</h2>
            <p>Transforming Your Ideas into Innovative Software Solutions</p>
            <div className={styles.card_wrapper}>
                {development.map((item, i) => (
                <div
                    key={i}
                    className={styles.card_contents}
                >
                    <div className={styles.card_Img}>
                        <Image 
                        src={item.icon}
                        alt='logos'
                        width={80}
                        />
                    </div>
                    <b>{item.text}</b>
                    <ul>
                        <li>{item.list}</li>
                        <li>{item.page}</li>
                        <li>{item.flat}</li>
                    </ul>
                    <div>
          </div>
                </div>
                ))}
            </div>
        </section>

        <div className={styles.line_full}>
            <Image 
            src={line}
            alt='line'
            width={100}
            className={styles.line_img}
            />
        </div>

        <section className={styles.process_container}>
            <h2>OUR PROCESS</h2>
            <div className={styles.process_images}>
                <div className={styles.process_img}>
                    <Image 
                    src={cross}
                    alt='cross'
                    width={90}
                    className={styles.process_icon}
                    />
                </div>
                    <Image 
                    src={arrow}
                    alt='cross'
                    width={100}
                    className={styles.process_icon}
                    />
                    <div className={styles.process_img}>
                        <Image 
                        src={crossb}
                        alt='cross'
                        width={90}
                        className={styles.process_icon}
                        />
                    </div>
                    <Image 
                    src={two}
                    alt='cross'
                    width={100}
                    className={styles.process_icon}
                    />
                    <div className={styles.process_img}>
                        <Image 
                        src={crossc}
                        alt='cross'
                        width={90}
                        className={styles.process_icon}
                        />
                    </div>
                    <Image 
                    src={arrow}
                    alt='cross'
                    width={100}
                    className={styles.process_icon}
                    />
                     <div className={styles.process_img}>
                        <Image 
                        src={crossd}
                        alt='cross'
                        width={90}
                        className={styles.process_icon}
                        />
                    </div>
                    
            </div>
            <div className={styles.design}>
                <b>We design</b>
                <b>We develop</b>
                <b>We test</b>
                <b>We deliver</b>
            </div>
        </section>

        <section className={styles.process_container_mobile}>
            <h2>OUR PROCESS</h2>
            <div className={styles.process_images}>
                <div className={styles.process_img}>
                    <Image 
                    src={cross}
                    alt='cross'
                    width={90}
                    className={styles.process_icon}
                    />
                    <b>We design</b>
                </div>
                    <Image 
                    src={arrownew}
                    alt='cross'
                    width={10}
                    className={styles.process_icon_two}
                    />
                    <div className={styles.process_img}>
                        <Image 
                        src={crossb}
                        alt='cross'
                        width={90}
                        className={styles.process_icon}
                        />
                        <b>We develop</b>
                    </div>
                    <Image 
                    src={crossnew}
                    alt='cross'
                    width={100}
                    className={styles.process_icon}
                    />
                    <div className={styles.process_img}>
                        <Image 
                        src={crossc}
                        alt='cross'
                        width={90}
                        className={styles.process_icon}
                        />
                        <b>We test</b>
                    </div>
                    <Image 
                    src={arrownew}
                    alt='cross'
                    width={10}
                    className={styles.process_icon_two}
                    />
                     <div className={styles.process_img}>
                        <Image 
                        src={crossd}
                        alt='cross'
                        width={90}
                        className={styles.process_icon}
                        />
                        <b>We deliver</b>
                    </div>
            </div>
        </section>

        <div className={styles.rogue_dev_stroke_container}>
            <section className={styles.rogue_dev_stroke}> </section>
            <div className={styles.line_full_two}>
                    <Image 
                    src={line}
                    alt='line'
                    width={100}
                    className={styles.line_img}
                    />
            </div>
            <div className={styles.about_us_container}>
                <h2>About Us</h2>
                <div className={styles.about_us_contents}>
                    <div className={styles.about_us_contents_img}>
                        <Image 
                        src={person}
                        alt='person'
                        width={450}
                        className={styles.about_us_contents_image}
                        />
                    </div>
                    <div className={styles.about_us_text}>
                        <b>Success of our clients</b>
                        <p>We take pride in the success stories of businesses and individuals who have leveraged our software to achieve their goals and realize their dreams.</p>
                    </div>
                </div>
                <div className={styles.about_us_contents_one}>
                    <div className={styles.about_us_contents_img}>
                        <Image  
                            src={pilot}
                            alt='person'
                            width={450}
                            className={styles.about_us_contents_image}
                            />
                    </div>
                    <div className={styles.about_us_text}>
                        <b>Relentless pursuit of excellence</b>
                        <p>From conceptualization to execution, we adhere to the highest standards of quality, ensuring that every line of code we write and every feature we develop is meticulously crafted to perfection.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.about_us_container_two}>
                <h2>About Us</h2>
                <div className={styles.about_us_contents}>
                    <div className={styles.about_us_contents_img}>
                        <Image 
                        src={person}
                        alt='person'
                        width={450}
                        className={styles.about_us_contents_image}
                        />
                    </div>
                    <div className={styles.about_us_text}>
                        <b>Success of our clients</b>
                        <p>We take pride in the success stories of businesses and individuals who have leveraged our software to achieve their goals and realize their dreams.</p>
                    </div>
                </div>
                <div className={styles.about_us_contents_one}>
                    <div className={styles.about_us_contents_img}>
                        <Image  
                            src={pilot}
                            alt='person'
                            width={450}
                            className={styles.about_us_contents_image}
                            />
                    </div>
                    <div className={styles.about_us_text}>
                        <b>Relentless pursuit of excellence</b>
                        <p>From conceptualization to execution, we adhere to the highest standards of quality, ensuring that every line of code we write and every feature we develop is meticulously crafted to perfection.</p>
                    </div>
                </div>
            </div>
        <section className={styles.portfolio_container}>
            <h2>Portfolio</h2>
            <div className={styles.portfolio_wrapper}>
                {portfolio.map((item, i) => (
                <div
                    key={i}
                    className={styles.portfolio_contents}
                >
                    <Image 
                    src={item.icon}
                    alt='logos'
                    width={400}
                    className={styles.portfolio_img}
                    />
                    <strong>{item.text}</strong>
                    <p>{item.list}</p>
                    <b>{item.page}</b>
                </div>
                ))}
            </div>
            <div className={styles.dash_box}>
                <Image 
                src={dash}
                alt='dash'
                width={65}
                className={styles.dash_img}
                />
                <Image 
                src={dashblue}
                alt='dash'
                width={65}
                className={styles.dash_img}
                />
            </div>
        </section>

        <section className={styles.method_container}>
            <h2>Our Method for Guaranteeing Total Satisfaction Among Our Partners</h2>
            <p>WE BRING YOUR DIGITAL BRAND TO LIFE</p>
            <div className={styles.method_wrapper}>
                {method.map((item, i) => (
                <div
                    key={i}
                    className={styles.method_contents}
                >
                    <Image 
                    src={item.icon}
                    alt='logos'
                    width={50}
                    className={styles.method_img}
                    />
                    <p>{item.text}</p>
                </div>
                ))}
          </div>

          <div className={styles.star_box_container}>
            <div className={styles.star_box}>
                <p>Hire the best to get you the best services. Rogue dev is just a call away</p>
                <div className={styles.star_image}>
                    <Image 
                    src={star}
                    alt='star'
                    width={200}
                    className={styles.star_img}
                    />
                </div>
            </div>
          </div>
        </section>

    </main>
  )
}
