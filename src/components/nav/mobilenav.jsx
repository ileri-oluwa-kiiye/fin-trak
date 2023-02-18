import styles from "./mobilenav.module.css"
import { Link } from "react-router-dom"
import opennav from "../../img/hamburger.png"



const Mobilenav = () => {
    return(
        <div>
            <div className={styles.flex}>
                <div className={styles.logo}>Fin-traka</div>
                <div className={styles.opennav}><img src={opennav} alt="" /></div>
            </div>
            <div className={styles.wrapdiv}>
                <h1 className={styles.logo}><div>Logo</div></h1>


                <ul className={styles.firstlist}>
                    <li className={styles.active}>Book keeping</li>
                    <li><Link to="/dashboard" style={{color:'inherit', textDecoration: 'none'}}>Dashboard</Link></li>
                    <li> Pricing  </li>
                    <li>Blog</li>
                </ul>


                <ul className={styles.secondlist}>
                    <li><button className={styles.login}><Link to="/login" style={{color:'inherit', textDecoration: 'none'}}>Log In</Link></button></li>
                    <li><button className={styles.signup}><Link to="/signup" style={{color:'inherit', textDecoration: 'none'}}>Sign up</Link></button></li>
                </ul>
            </div>
        </div>
    )
}

export default Mobilenav