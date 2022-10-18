import styles from '../styles/404.module.css';
import Link from 'next/link';
import Footer from '../components/Footer'

export default function NotFound() {
    return(
        <>
            <div className={styles.notFound}>
                <h1>4 <span>0</span> 4 </h1>
                <h3>Página não encontrada.</h3>
                <Link href="/">
                    <a>Voltar</a>
                </Link>
            </div>
            <Footer />
        </>
    )
}