import styles from "./sidebar.module.css"
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist";
// import { Box, IconButton, Typography, useTheme } from '@mui/material';
// import { Link } from "react-router-dom";
// // import icon from '../img/navicon.png'
import icon from "../../img/navicon.png"


const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h1><div>Logo</div></h1>

            <ul>
                <div className={styles.div}>
                    <li>
                        <div><img src={icon} alt="" />
                        </div> <div className={styles.text}>Dashboard</div>
                    
                    </li>
                    <li className={styles.active}>
                        <div><img src={icon} alt="" />
                        </div> <div className={styles.text} >Bookkeeping</div>
                    </li>
                    <li>
                        <div><img src={icon} alt="" />
                        </div> <div className={styles.text}>Consultancy</div>
                    </li>
                    <li>
                        <div><img src={icon} alt="" />
                        </div> <div className={styles.text}>Data entry</div>
                    </li>
                    {/* <li>
                        <div><img src={icon} alt="" /></div>
                        <div className={styles.text}>Blog</div>
                    </li> */}
                    <li>
                        <div><img src={icon} alt="" /></div> 
                        <div className={styles.text}>Setting</div>
                    </li>
                    <li className={styles.logout}>
                        <div><img src={icon} alt="" />
                        </div> <div className={styles.text}>Log out</div>
                    </li>
                </div>
                
                {/* <Box paddingRight={isCollapsed ? undefined : "10%"}>
                    <li
                        title="Dashboard"
                        to="/"
                        icon = {icon}
                        selected = {selected}
                        setSelected = {setSelected}
                    ></li>
                </Box> */}
            </ul>

            <div className={styles.premium}>
                <div className={styles.whitespace}></div>
                <div>
                    <h3>Explore more options</h3>
                    <button>Go Premium</button>
                </div>
            </div>
        </div>
    )
}





export default Sidebar