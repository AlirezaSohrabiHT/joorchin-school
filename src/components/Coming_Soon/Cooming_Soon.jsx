import { Instagram, LinkedIn, Telegram, WhatsApp, X } from "@mui/icons-material";
import styles from "./Cooming_Soon.module.css"
import React from "react";
import back from "../../assets/Group 3.svg"
import fibido from "../../assets/fibido.svg"
import earth from "../../assets/earth.svg"
import planet from "../../assets/planet-14.svg"
const Comingsoon = () => {

    return(
        <>
        <img  className={styles.back} src={back}/>
        <div className={styles.main_cintainer}>
            <div className={styles.detail_container}>
          
                <p className={styles.title}>درهای مدرسه به زودی باز میشه !</p>
                <div className={styles.social_container}>
                    <Telegram className={styles.icon}/>
                    <X className={styles.icon}/>
                    <LinkedIn className={styles.icon}/>
                    <Instagram className={styles.icon}/>
                    <WhatsApp className={styles.icon}/>
                </div>
                <img src={fibido} className={styles.fibido}/>
   
            </div>
        
        </div>
        <p className={styles.copyright}>Joorchin Digital Marketing Agency</p>
        <img className={styles.earth} src={earth}/>
        <img className={styles.plant} src={planet}/>
        <img className={styles.plant2} src={planet}/>
        <img className={styles.plant3} src={planet}/>
        </>
    )
}

export default Comingsoon;