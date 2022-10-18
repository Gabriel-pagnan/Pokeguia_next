import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

    return(
        <nav className={styles.navbar}>
            <div>
                <h1>Poké<span>Guia</span></h1>
            </div>
            <span className={styles.exploration}></span>
            <p className={styles.exploration_p}>Veja seus Pokémons favoritos!</p>
            <ul>
                <li>
                    <Link href="https://github.com/Gabriel-pagnan" target='_blank'>
                        <Image src='/img/github.svg' width="20" height="20" alt='github' />
                    </Link>
                </li>
                <li>
                    <Link href="/abount"><a>Projeto</a></Link>
                </li>
            </ul>
        </nav>

    )
}