import styles from '../styles/Abount.module.css';
import Footer from '../components/Footer'
import Link from 'next/link';
import Image from 'next/image';
export default function Abount(){
    return (
        <>  
                <Link href="/">
                    <button className={styles.btn}>
                        
                        <Image
                            src={'/img/pokeboll.svg'}
                            width="40"
                            height="40"
                            alt="voltar"
                        />
                        Voltar
                    </button>
                </Link>
            
            <div>
                <div className={styles.container}>
                    <h1>Sobre o projeto</h1>
                    <p>Pokédex feita em base do curso de Next.Js do 
                    <Link target="_blank" href="https://www.youtube.com/c/MatheusBattisti">
                    <a>Matheus Battisti.</a>
                    </Link> No intuito de aprimorar um projeto que já havia feito com JavaScrit puro, porem que não estava totalmente optmizado e responsivo. E por mais, aprender esse grande framework.</p>
                    <h3>Referencias:</h3>

                    <ul>
                        <li>
                            API:
                            <Link target="_blank" href="https://pokeapi.co/">
                            <a>PokéAPI</a>
                            </Link>
                        </li>
                        <li>
                            Imagens:
                            <Link target="_blank" href="https://pixabay.com/pt/">
                            <a>Pixabay</a>
                            </Link>
                        </li>
                        <li>
                            Icones:
                            <Link target="_blank" href="https://www.iconfinder.com/">
                            <a>Iconfinder</a>
                            </Link>
                        </li>
                    </ul>
                </div> 
            </div>
            <Footer />
        </>
    )
}