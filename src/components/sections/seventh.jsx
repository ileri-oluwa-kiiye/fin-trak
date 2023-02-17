import styles from "./seventh.module.css"
import img from "./../../img/img.png"

const Seventhsection = () => {
    return(
        <div className="controlwidth">
            <div className={styles.flex}>
                <h1>See what users are saying about us</h1>
                <div className={styles.reviews}>
                    <div className={styles.review}>
                        <div className={styles.text}>“Ever since I started using Fin-traka, I don't worry about how to sort my finances anymore”</div>
                        <div className={styles.user}>
                            <img src={img} alt="" />
                            <p>Anuoluwa </p>
                        </div>
                    </div>
                    <div className={styles.flexx}>
                        <div className={styles.review}>
                            <div className={styles.text}>“Ever since I started using Fin-traka, I don't worry about how to sort my finances anymore”</div>
                            <div className={styles.user}>
                                <img src={img} alt="" />
                                <p>Anuoluwa </p>
                            </div>
                        </div>
                        <div className={styles.review}>
                            <div className={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus eveniet ducimus amet 
                            rerum unde asperiores aspernatur iusto delectus cumque, quas atque aliquam, vitae temporibus 
                            velit sit. Enim quidem perferendis quo labore, tenetur aut dolorem ad culpa repellendus, cupiditate 
                            minus cum! Reiciendis rerum deserunt molestias earum numquam. Quas tempore tenetur mollitia.</div>
                            <div className={styles.user}>
                                <img src={img} alt="" />
                                <p>Anuoluwa </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.review}>
                        <div className={styles.text}>“Ever since I started using Fin-traka, I don't worry about how to sort my finances anymore”</div>
                        <div className={styles.user}>
                            <img src={img} alt="" />
                            <p>Anuoluwa </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seventhsection