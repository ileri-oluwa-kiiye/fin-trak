
import styles from "./signup.module.css"
import Loginform from "../components/sections/loginform"


const Login = () => {
    return(
        <div className="controlwidth">
            <div className={styles.flex}>
                <div className={styles.image}></div>
                <div className={styles.main}>
                    <section>
                        <Loginform />
                    </section>
                </div>
            </div>
        </div>
    )
}


export default Login