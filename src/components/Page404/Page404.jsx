import React from "react";
import styles from './Page404.module.css';
import earth from '../../assets/planet-13.svg';
import number4 from '../../assets/4-left.svg';
import layer_1 from '../../assets/Layer_1.svg';
import tether from '../../assets/tether.svg';
import rocket from '../../assets/Rocket.svg';

const Page404 = () => {

    return (
        <>
            <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className={`col-12 ${styles.temp}`} dir="ltr">
                        <div>
                            <div>
                                <img src={layer_1} className={`${styles.layer_1}`} alt="" />
                                <div className={`position-absolute d-flex ${styles.image_group}`}>
                                    <img src={tether} className={styles.tether} alt="" />
                                    <img src={rocket} className={styles.rocket} alt="" />
                                </div>
                            </div>
                            <div>
                                <img src={number4} alt="" />
                                <img src={earth} alt="" />
                                <img src={number4} alt="" />
                            </div>
                            <div>
                                <p className={styles.title}>صفحه پیدا نشد!</p>
                                <div className={styles.button_group}>
                                    <a href="#">بازگشت</a>
                                    <a href="#">صفحه اصلی</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page404;
