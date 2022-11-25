import Header from "../Header"
import Footer from "../Footer"
import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"


const Layout = () => {
    return(
        <div>
            <Header />
            <Navbar />
            
            <div className={styles.container}>
                <Outlet /> {/* vendria funcionar como mi body */}
            </div>
             
            <Footer />
        </div>
    )
}

export default Layout;