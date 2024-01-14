import React from "react";
import styles from "./Blog.module.css"
const Blog = () => {
    return(
        <>
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-12 ${styles.temp}`}>
                    <p>Blog</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog;