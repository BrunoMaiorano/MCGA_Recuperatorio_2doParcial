import styles from "./footer.module.css"

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <p>Maiorano Bruno</p>
                <a href="https://github.com/BrunoMaiorano/MCGA_Recuperatorio_2doParcial">Link a repositorio Github</a>
            </div>
        </div>
    )
}

export default Footer;