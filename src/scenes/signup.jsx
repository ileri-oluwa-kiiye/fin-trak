import line from "../img/Line.png"
import styles from "./signup.module.css"
import Stepone from "../components/sections/stepone"


const Signup = () => {
    return(
        <div className="controlwidth">
            <div className={styles.flex}>
                <div className={styles.image}></div>
                <div className={styles.main}>
                    <div className={styles.steps}>
                        <div>
                            <p>1</p>
                            <p>Sign up</p>
                        </div>
                        <div className={styles.line}>
                            <img src={line} alt="" />
                        </div>
                        <div>
                            <p>2</p>
                            <p>Confirmation</p>
                        </div>
                    </div>
                    <section>
                        <Stepone />
                    </section>
                </div>
            </div>
        </div>
    )
}


export default Signup