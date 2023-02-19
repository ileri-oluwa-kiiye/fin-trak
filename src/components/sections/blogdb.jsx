import styles from "./smallerdashboard.module.css"


const Blog = () =>{
    return(
        <div className={styles.wrapdiv}>
            <div className={styles.blog}>
                <div className={styles.header}>
                    <h1>Blog</h1>
                    <button className={styles.secondary}>View all</button>
                </div>
                <div className={styles.flex}>
                    <li>
                        <div>
                             <div className={styles.image}></div>
                             <p>What is TIN & its importance</p>
                        </div>
                        <button className={styles.primary}>Read</button>
                    </li>
                    <li>
                        <div>
                             <div className={styles.image}></div>
                             <p>What is TIN & its importance</p>
                        </div>
                        <button className={styles.primary}>Read</button>
                    </li>
                    <li>
                        <div>
                             <div className={styles.image}></div>
                             <p>What is TIN & its importance</p>
                        </div>
                        <button className={styles.primary}>Read</button>
                    </li>
                </div>
            </div>
        </div>
    )
}


export default Blog