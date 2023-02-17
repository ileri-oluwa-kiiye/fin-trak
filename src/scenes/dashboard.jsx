import styles from "./dashboard.module.css"
import Sidebar from "../components/nav/sidebar"
import Topbar from "../components/nav/topbar"




const Dashboard = () => {
    return(
        <div className={styles.app}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Topbar />
            </div>
            {/* <Routes>
                <Route path="/" element= {<Topbar />} />
            </Routes> */}
        </div>

    )
}

export default Dashboard