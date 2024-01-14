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