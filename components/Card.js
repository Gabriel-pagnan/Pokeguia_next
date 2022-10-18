import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.css"

export default function Card({pokemon}){  
    return(
        <div className={styles.card} >
            <p>{`# ${pokemon.id}`}</p>           
                <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
                width="170"
                height="170"
                alt={`${pokemon.name}`}
                />

            <div>
                <h4>{pokemon.name}</h4>
                <Link href={`/pokemon/${pokemon.id}`}>
                    <a>Detalhes</a>
                </Link>
            </div>
        </div>
    )
}