import React from "react";
import styles from './Page404.module.css';
import earth from '../../assets/planet-13.svg';
import number4 from '../../assets/4-left.svg';
import fibido from '../../assets/fibido.svg';
import tether from '../../assets/tether.svg';
import rocket from '../../assets/Rocket.svg';
import planet from '../../assets/planet-14.svg';

const Page404 = () => {

    return (
        <>
            <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className={`col-12 ${styles.temp}`}>
                        <div>
                            <div className={styles.top_row}>
                                <img src={fibido} alt="Fibido" className={styles.fibido_img} />
                                <img src={tether} alt="Tether" className={styles.tether_img} />
                                <img src={rocket} alt="Rocket" className={styles.rocket_img} />
                            </div>
                            <div className={styles.center_row}>
                                <img src={number4} alt="Number 4" className={styles.right_num} />
                                <img src={earth} alt="Earth" className={styles.earth_img} />
                                <img src={number4} alt="Number 4" className={styles.left_num} />
                            </div>
                            <div className={styles.bottom_row}>
                                <p>صفحه پیدا نشد!</p>
                                <div className={styles.links_group}>
                                    <a href="#">بازگشت</a>
                                    <a href="#">صفحه اصلی</a>
                                </div>
                            </div>
                        </div>
                        <img src={planet} alt="Planet" className={styles.right_bottom_planet} />
                        <img src={planet} alt="Planet" className={styles.center_bottom_planet} />
                        <img src={planet} alt="Planet" className={styles.left_bottom_planet} />
                        <img src={planet} alt="Planet" className={styles.center_top_planet} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page404;
