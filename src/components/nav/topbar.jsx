import notification_icon from "../../img/notifications.png"
import arrowdown from "../../img/arrowdown.png"
import styles from "./topbar.module.css"

const Topbar = () => {
    return (
        <div className={styles.topbar}>
            <div>
                {/* The Add New Button */}
                <button>Add new <img src={arrowdown} alt="" /></button>
            </div>
            <div className={styles.icons}>
                {/* The Icons For The Top Bar */}
                <ul>
                    <li><img src={notification_icon} alt="" /></li>
                    <li><img src={notification_icon} alt="" /></li>
                    <li><img src={notification_icon} alt="Notifications"/></li>
                    <li><img src={notification_icon} alt="" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Topbar