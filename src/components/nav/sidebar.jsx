import styles from "./sidebar.module.css"
import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist";
// import { Box, IconButton, Typography, useTheme } from '@mui/material';
// import { Link } from "react-router-dom";
// // import icon from '../img/navicon.png'
import icon from "../../img/navicon.png"


const Sidebar = () => {

    const [isCollapsed, setIsCollaosed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")
    return (
        <div className={styles.sidebar}>
            <h1><div>Logo</div></h1>

            <ul>
                <div className={styles.div}>
                    <li>
                        <div><img src={icon} alt="" />
                        </div> <div>Dashboard</div>
                    
                    </li>
                    <li>
                        <div><img src={icon} alt="" />
                        </div> <div>Bookkeeping</div>
                    </li>
                    <li>
                        <div><img src={icon} alt="" />
                        </div> <div>Consultancy</div>
                    </li>
                    <li>
                        <div><img src={icon} alt="" />
                        </div> <div>Data entry</div>
                    </li>
                    <li>
                        <div><img src={icon} alt="" /></div>
                        <div>Blog</div>
                    </li>
                    <li>
                        <div><img src={icon} alt="" /></div> 
                        <div>Setting</div>
                    </li>
                    <li className={styles.logout}>
                        <div><img src={icon} alt="" />
                        </div> <div>Log out</div>
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
        </div>
    )
}





export default Sidebar