import React from "react";
import styles from "./Footer.module.css";
import joorchin_logo from "../../assets/Joorchin_logo.svg"
import { X , Telegram , Instagram , Email , WhatsApp } from "@mui/icons-material";
const Footer = () => {
    return(
        <>
        <div className={styles.back}>
        <div className={`container ${styles.footer_container}`}>
            <div className={`row`}>
                <div className={`col-5`}>
                    <div className={styles.footer_menu}>
                        <a>دوره ها</a>
                        <a>مدرسین</a>
                        <a>جرا جورچین؟</a>
                        <a>وبلاگ</a>
                        <a>ارتباط با ما</a>
                    </div>
                    <div>
                        <img/>
                        <p>جورچین آکادمی مدرسه ای پر از  خلاقیت خیلی زیاد  هنرجو های عالی استاد های شگفت انگیز بی نظیر اصلا
                        قابل وصف نیست ثبتنام کنیدیکهفتهایبهدرآمد برسید.</p>
                    </div>
                </div>
                <div className={`col-2`}>

                </div>
                <div className={`col-5`}>
                    <p>اطلاع از خبر های جدید جورچین آکادمی</p>
                    <p>با ما دوست باشید</p>
                    <div>
                        <Telegram/>
                        <X/>
                        <Instagram/>
                        <Email/>
                        <WhatsApp/>  
                    </div>
                </div>
            </div>
            <hr/>
            <div className={`row`}>
                <div className={`col-7`}>

                </div>
                <div className={`col-5 ${styles.footer_copyright_container}`}>
                    <a>Joorchin Digital Marketing Agency - بازنشر مطالب فقط با ذکر منبع مجاز می‌باشد</a>
                    <img src={joorchin_logo}/>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}


export default Footer;