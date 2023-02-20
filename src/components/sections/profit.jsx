import styles from "./smallerdashboard.module.css"
import style from "./profit.module.css"


const Profit = () =>{
    return(
        <div className={style.cover}>
            <div className={style.profit}>
                <div className={style.header}>
                    <div>
                        <h1>Profit & loss</h1>
                        <p>To view profit & loss report, click on the view details</p>
                    </div>
                    <div>
                        <button className={styles.secondary}>View details</button>
                    </div>
                </div>
                <div className={style.hrline}></div>
                <div className={style.stats}>
                    <div className="piechart">
                        Pie Chart
                    </div>
                    <div className={style.info}>
                        <div className={style.flex}>
                            <div className={style.colorguide}></div>
                            <p>Profit</p>
                        </div>
                        <div className={style.flex}>
                            <div className={style.colorguide}></div>
                            <p>Loss</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Profit