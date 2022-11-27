//vamos a crear enlaces para la navBar, para eso usamos el componente
//link de reacRouter

import { Link } from "react-router-dom"
import styles from "./navbar.module.css"

const Navbar = () => {
    
    return(
        <div className={styles.container}>
                <Link to="/home" className={styles.button}>Home</Link> {" "}
                <Link to="/about" className={styles.button}>About</Link> {" "}
                <Link to="/users" className={styles.button}>Users</Link> {" "}
                <Link to="/add" className={styles.button}>Add User</Link> {" "}
        </div>
    )
}

export default Navbar