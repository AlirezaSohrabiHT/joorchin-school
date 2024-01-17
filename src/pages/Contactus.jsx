import { Email, Instagram, Telegram, WhatsApp, X } from "@mui/icons-material";
import React from "react";
import background from "../assets/Contact-us.svg";
import hand from "../assets/click-hand.svg"
import styles from "./Contactus.module.css"
const Contactus = () => {

    return(
        <>
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-12 ${styles.container}`}>
                    <p className={styles.title}>ارتباط با ما</p>
                    <p></p>
                    <div className={`${styles.main_container}`}>
                        <div className={`${styles.contact_us}`}>
                            <div>
                                <p>راه های ارتباطی</p>
                                <Email/>
                                <Telegram/>
                                <WhatsApp/>
                            </div>
                            <hr/>
                            <div>
                                <p> شبکه های اجتماعی </p>
                                <Email/>
                                <Telegram/>
                                <WhatsApp/>
                                <X/>
                                <Instagram/>
                            </div>
                        </div>
                        <div className={styles.data_container}>
                            <div className={styles.number_container}>
                                <div>
                                    <p className={styles.label}>شماره تماس جورچین</p>
                                    <p>05138012312-09151231231</p>
                                </div>
                                <div>
                                    <p className={styles.label}>آدرس دفتر جورچین</p>
                                    <p>مشهد-هاشمیه،سامانیه ۱۱، پلاک ۱۱</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className={styles.label}>فرم ارتباط با ما</p>
                                    <p>در کنار روش‌های که  برای ارتباط با جورچین در نظر گرفته‌ایم،شما همچنین می‌توانید از طریق فرم زیر  پیام خود را برای ما ارسال کنید.</p>
                                </div>
                                <div>
                                    <div className={styles.input_container}>
                                        <label>نام شما:</label>
                                        <input className={styles.input} type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
                                        <label>متن پیام:</label>
                                        <input className={styles.input}  type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
                                    </div>
                                    <div className={styles.input_container}>
                                    <label>آدرس ایمیل:</label>
                                        <input className={styles.input}  type="email" id="name" name="name" required minlength="4" maxlength="8" size="10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                        <img className={styles.hand} src={hand}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contactus;