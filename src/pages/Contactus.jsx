import { Email, EmailOutlined, Instagram, LinkedIn, Telegram, WhatsApp, X } from "@mui/icons-material";
import React, { useState } from "react";
import background from "../assets/Contact-us.svg";
import hand from "../assets/click-hand.svg";
import whatsapp from '../assets/ic_twotone-whatsapp.svg';
import telegram from '../assets/la_telegram-plane.svg';
import mail from '../assets/mail.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram (1).svg';
import listItem from '../assets/Ellipse 2.svg';

import styles from "./Contactus.module.css"
const Contactus = () => {
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userMessage, setUserMessage] = useState();

    return(
        <>
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-12 ${styles.container}`}>
                    <p className={styles.contact_us_title}>ارتباط با ما</p>
                    <p className={styles.contact_us_des}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                    <div className={styles.contact_us_box}>
                        <div className={styles.contact_us_top_box}>
                            <div className={styles.right_top_box}>
                                <p>راه های ارتباطی</p>
                                <div className={styles.icons_group}>
                                    <a href="#">
                                        <img src={mail} alt="Mail icon" />
                                    </a>
                                    <a href="#">
                                        <img src={telegram} alt="Telegram icon" />
                                    </a>
                                    <a href="#">
                                        <img src={whatsapp} alt="Whatsapp icon" />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.left_top_box}>
                                <p>شبکه های اجتماعی</p>
                                <div className={styles.icons_group}>
                                    <a href="#">
                                        <img src={instagram} alt="Instagram icon" />
                                    </a>
                                    <a href="#">
                                        <img src={linkedin} alt="LinkedIn icon" />
                                    </a>
                                    <a href="#">
                                        <img src={twitter} alt="Twitter icon" />
                                    </a>
                                    <a href="#">
                                        <img src={telegram} alt="Telegram icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contact_us_bottom_box}>
                            <div className={styles.bottom_box_right}>
                                <div>
                                    <span>
                                        <img src={listItem} alt="Circle" />
                                        <p>شماره تماس جورچین</p>
                                    </span>
                                    <p>
                                        <a href="tel:">05138012312</a>
                                        <br />
                                        <a href="tel:">09151231231</a>
                                    </p>
                                </div>
                                <div>
                                    <span>
                                        <img src={listItem} alt="Circle" />
                                        <p>آدرس دفتر جورچین</p>
                                    </span>
                                    <p>
                                        <a href="tel:">مشهد، هاشمیه، سامانیه 11، پلاک 11</a>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.bottom_box_left}>
                                <div>
                                    <span>
                                        <img src={listItem} alt="Circle" />
                                        <p>شماره تماس جورچین</p>
                                    </span>
                                    <p>در کنار روش هایی که برای ارتباط با جورچین در نظر گرفته‌ایم، شما همچنان می‌توانید از طریق فرم زیر پیام خود را برای ما ارسال کنید.</p>
                                </div>
                                <div className={styles.form_group}>
                                    <div className={styles.form_right_group}>
                                        <div>
                                            <label htmlFor="">نام شما:</label>
                                            <br />
                                            <input type="text" onChange={(e) => setUserName(e.target.value)} />
                                        </div>
                                        <div>
                                            <label htmlFor="">آدرس ایمیل:</label>
                                            <br />
                                            <input type="text" onChange={(e) => setUserEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">متن پیام:</label>
                                            <br />
                                            <textarea name="" id="" cols="30" rows="5"  onChange={(e) => setUserMessage(e.target.value)}></textarea>
                                            <button onClick={() => console.log(userName, userEmail, userMessage)}>Click</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={hand} className={styles.hand_img} alt="Hand" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contactus;