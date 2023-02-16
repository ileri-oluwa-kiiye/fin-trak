import styles from './mainnav.module.css'



const Mainnav = () => {
    return(
        <div className={styles.wrapdiv}>
            <h1 className={styles.logo}><div>Logo</div></h1>


            <ul className={styles.firstlist}>
                <li className={styles.active}>Book keeping</li>
                <li>Consultancy</li>
                <li> Pricing  </li>
                <li>Blog</li>
            </ul>


            <ul className={styles.secondlist}>
                <li><button className={styles.login}>Log in</button></li>
                <li><button className={styles.signup}>Sign up</button></li>
            </ul>
        </div>
    )
}

export default Mainnav