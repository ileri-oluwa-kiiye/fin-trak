import styles from "./smallerdashboard.module.css"


const Profit = () =>{
    return(
        <div className={styles.wrapdiv}>
            <div className={styles.profit}>
                <div className={styles.header}>
                    <div>
                        <h1>Blog</h1>
                        <p>To view profit & loss report, click on the view details</p>
                    </div>
                    <button className={styles.secondary}>View details</button>
                </div>
                <div className={styles.stats}>
                    <div className="piechart">
                        Pie Chart
                    </div>
                    <div className={styles.info}>
                        <div className={styles.flex}>
                            <div className={styles.colorguide}></div>
                            <p>Profit</p>
                        </div>
                        <div className={styles.flex}>
                            <div className={styles.colorguide}></div>
                            <p>Loss</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profit