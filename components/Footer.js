import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Poké <span>guia</span> &copy; 2022
            </p>
            <Link href="#home">
                <a href='#home' className={styles.btn_up}></a>
            </Link>
        </footer>

    )
}