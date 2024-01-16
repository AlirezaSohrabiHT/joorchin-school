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
            <div>
          
                <p>درهای مدرسه به زودی باز میشه !</p>
                <div>
                    <Telegram/>
                    <X/>
                    <LinkedIn/>
                    <Instagram/>
                    <WhatsApp/>
                </div>
                <img src={fibido}/>
                <p>Joorchin Digital Marketing Agency</p>
            </div>
        
        </div>
        <img className={styles.earth} src={earth}/>
        <img className={styles.plant} src={planet}/>
        </>
    )
}

export default Comingsoon;