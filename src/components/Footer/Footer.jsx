import React from "react";
import styles from "./Footer.module.css";
import joorchin_logo from "../../assets/Joorchin_logo.svg"
import logo from "../../assets/Logo.svg"
import { X , Telegram , Instagram , Email , WhatsApp, Margin, LinkedIn } from "@mui/icons-material";
const Footer = () => {
    return(
        <>
        <div className={styles.back}>
        <div className={`container ${styles.footer_container}`}>
            <div className={`row ${styles.footer_box}`}>
                <div className={`col-md-5 col-12 ${styles.footer_right}`}>
                    <div className={styles.footer_menu}>
                        <a>دوره ها</a>
                        <a>مدرسین</a>
                        <a>جرا جورچین؟</a>
                        <a>وبلاگ</a>
                        <a>ارتباط با ما</a>
                    </div>
                    <div className={styles.footer_discription}>
                        <img src={logo}/>
                        <p>جورچین آکادمی مدرسه ای پر از  خلاقیت خیلی زیاد  هنرجو های عالی استاد های شگفت انگیز بی نظیر اصلا
                        قابل وصف نیست ثبتنام کنیدیکهفتهایبهدرآمد برسید.</p>
                    </div>
                </div>
                <div className={`col-12 col-md-5 ${styles.footer_left}`}>
                    <p>اطلاع از خبر های جدید جورچین آکادمی</p>
                    <input className={styles.footer_input} placeholder="ایمیل خود را وارد کنید" type="email" id="name" name="name" required minlength="4" maxlength="8" size="10" />
                    <div>
                      <p className={`mt-3 `}>با ما دوست باشید</p>
                      <div className={styles.icon_container}>
                      <Telegram/>
                        <X/>
                       <a href="https://www.instagram.com/joorchin.school?igsh=NTc4MTIwNjQ2YQ=="><Instagram/></a> 
                        <Email/>
                        <WhatsApp/> 
                        <LinkedIn />
                      </div>
  
                    </div>
                </div>
            </div>
            <hr/>
            <div className={`row`}>
                <div className={`col-7`}>

                </div>
                <div className={`col-12 col-md-5 ${styles.footer_copyright_container}`}>
                    <a href="https://joorchin.co/">Joorchin Digital Marketing Agency - بازنشر مطالب فقط با ذکر منبع مجاز می‌باشد</a>
                    <img src={joorchin_logo}/>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}


export default Footer;