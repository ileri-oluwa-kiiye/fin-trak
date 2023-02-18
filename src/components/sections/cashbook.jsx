import styles from "./subdashboard.module.css"
import arrow from "../../img/arrowdown.png"
import Barchart from "./barchart"





const Cashbook = () => {
    return(
        <div>
            <div>
                <div>
                    <div>
                        <h1>Cashbook</h1>
                        <p>Below is an overview of your sales and purchase</p>
                    </div>
                    <button className={styles.primary}>View details</button>
                </div>
                <div className={styles.hrline}></div>
                {/* <div className={styles.h3text}>
                    Week |
                    Month |
                    Year |
                </div> */}
                <div className={styles.flex}>
                    <div className={styles.barchart}>
                        <Barchart />
                    </div>
                    <div className={styles.details}>
                        <li>
                            <p id="moneyin">#70,000</p>
                            <img src={arrow} alt="" />
                            <p>Money in</p>
                        </li>
                        <li>
                            <p id="moneyout">#30,000</p>
                            <img src={arrow} alt="" />
                            <p>Money out</p>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cashbook