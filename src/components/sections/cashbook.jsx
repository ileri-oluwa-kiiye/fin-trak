import styles from "./subdashboard.module.css"
import arrow from "../../img/arrowdown.png"
import Barchartt from "./barchart"





const Cashbook = () => {
    return(
        <div className={styles.cover}>
            <div>
                <div className={styles.heading}>
                    <div>
                        <h1>Cashbook</h1>
                        <p>Below is an overview of your sales and purchase</p>
                    </div>
                    <button className={styles.secondary}>View details</button>
                </div>
                <div className={styles.hrline}></div>
                <div className={styles.fletx}>
                    <div className={styles.barchart} style={{width:'300px', height:"190px", maxWidth:"60vw", minWidth:'270px'}}>
                        <Barchartt />
                    </div>
                    <div className={styles.details}>
                        <li>
                            <p id="moneyin">#80,000</p>
                            <img src={arrow} alt="" />
                            <p>Sales</p>
                        </li>
                        <li>
                            <p id="moneyout">#55,000</p>
                            <img src={arrow} alt="" />
                            <p>Purchases</p>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cashbook