import styles from "./seventh.module.css"
import img from "./../../img/img.png"

const Seventhsection = () => {
    return(
        <div className="controlwidth">
            <div className={styles.flex}>
                <div className={styles.review}>
                    <div className={styles.text}>“Ever since I started using Fin-traka, I don’t worry about how to sort my finances anymore”</div>
                    <div className={styles.user}>
                        <img src={img} alt="" />
                        <p>Anuoluwa </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seventhsection