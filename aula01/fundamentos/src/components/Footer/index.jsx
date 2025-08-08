import styles from './Footer.module.css'

const Footer = ({ rodape }) => {
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.rodape}>{rodape}</p>
            </footer>
        </>
    )
}

export default Footer