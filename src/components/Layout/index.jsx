import Header from "../Header"
import Footer from "../Footer"
import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom"


const Layout = () => {
    return(
        <div>
            <Header />
            <Navbar />
            <Outlet /> {/* vendria funcionar como mi body */}
            <Footer />
        </div>
    )
}

export default Layout;