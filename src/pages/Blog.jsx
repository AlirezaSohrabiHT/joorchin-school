import React from "react";
import styles from "./Blog.module.css"
import Comingsoon from "../components/Coming_Soon/Cooming_Soon";
const Blog = () => {
    return(
        <>
        <div className={`container_fluid`}>
            <div className={`row`}>
                <div className={`col-12 ${styles.temp}`}>
                        <Comingsoon/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog;