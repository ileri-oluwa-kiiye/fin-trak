import styles from "./dashboard.module.css"
import Sidebar from "../components/nav/sidebar"
import Topbar from "../components/nav/topbar"
import Welcome from "../components/sections/welcome"
// import Cashbook from "../components/sections/cashbook"





const Dashboard = () => {
    return(
        <div className={styles.app}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Topbar />
                <div className="controlwidth">
                    <Welcome />
                    <div>
                        {/* <Cashbook /> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard