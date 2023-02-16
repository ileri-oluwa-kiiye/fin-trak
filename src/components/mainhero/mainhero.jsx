import styles from "./mainhero.module.css"

const Mainhero = () => {
    return(
        <div className={styles.wrapdiv}>
            <div className={styles.section}>
                <h1>The easiest way for book keeping & Consultancy services</h1>
                <p>
                    It is a long established fact that a reader will be distracted by the readable 
                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                </p>
                <button className="button">Sign Up</button>
            </div>
        </div>
    )
}

export default Mainhero