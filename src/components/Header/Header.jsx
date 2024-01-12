import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg"
import search from "../../assets/Search.svg"
const Header = () => {
    return (
        <>
            <div className={`container-fluid ${styles.container}`}>
               <div className={`row`}>
                <div className={`col-6`}>
                    <img src={logo} href="logo"></img>
                    <a className={`${styles.menu_link}`}>دوره ها</a>
                    <a className={`${styles.menu_link}`}>مدرسین</a>
                    <a className={`${styles.menu_link}`}> چرا جورچین؟</a>
                    <a className={`${styles.menu_link}`}> درباره ما</a>
                    <a className={`${styles.menu_link}`}>ارتباط با ما</a>
                </div>
                <div className={`col-3`}>

                </div>  
                <div className={`col-3`}>
                    <img src={search} href="search"></img>
                </div>
               </div>
            </div>
        </>
    )
}

export default Header;