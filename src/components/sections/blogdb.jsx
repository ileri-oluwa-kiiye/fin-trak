import styles from "./smallerdashboard.module.css"
import style from "./blogdb.module.css"


const Blog = () =>{
    return(
        <div className={style.cover}>
            <div className={style.blog}>
                <div className={style.header}>
                    <h1>Blog</h1>
                    <div><button className={styles.secondary}>View all</button></div>
                </div>
                <div className={style.hrline}></div>
                <div className={style.flex}>
                    <li>
                        <div>
                             <div className={style.image}></div>
                             <p>What is TIN & its importance</p>
                        </div>
                        <div><button className={styles.primary}>Read</button></div>
                    </li>
                    <li>
                        <div>
                             <div className={style.image}></div>
                             <p>What is TIN & its importance</p>
                        </div>
                        <div><button className={styles.primary}>Read</button></div>
                    </li>
                    <li>
                        <div>
                             <div className={style.image}></div>
                             <p>What is TIN & its importance</p>
                        </div>
                        <div><button className={styles.primary}>Read</button></div>
                    </li>
                </div>
            </div>
        </div>
    )
}


export default Blog