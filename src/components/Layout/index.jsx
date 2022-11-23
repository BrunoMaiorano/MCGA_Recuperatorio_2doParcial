import Header from "../Header"
import Footer from "../Footer"
import Navbar from "../Navbar"
import { Outlet } from "react-router-dom"


const Layout = () => {
    return(
        <div>
            <Header />
            <h1>welcome to mi web</h1>
            <Navbar />
            <Outlet /> {/* vendria funcionar como mi body */}
            <Footer />
        </div>
    )
}

export default Layout;