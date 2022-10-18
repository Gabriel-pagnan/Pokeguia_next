import Image from "next/image";
import styles from '../../styles/Pokemon.module.css'
import Link from "next/link";

export const getStaticPaths = async ()=>{
    const numPokemon = 905;

  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const response = await fetch(`${url}/?limit=${numPokemon}`);
  const data = await response.json();

  //parametros
  const paths = data.results.map((pokemon, index)=>{
    return {
        params: {
            pokemonId: (index+1).toString(),
        }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context)=>{
    const id = context.params.pokemonId;

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    const tipos = data.types.map((t)=>  t.type.name)

    return {
        props: {
            pokemon: data,
            tipo: tipos
        }
        
    }
}

export default function Pokemon({pokemon, tipo}) {
    return(
        <>  
        <nav className={`${styles.nav_container} ${styles[tipo[0]]}`}>
            <div className={styles.btn_container}>
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
            </div>
            <div>
                <h1>Poké<span>Guia</span></h1>
            </div>
        </nav>
        

            <div className={styles.container}>
                <div className={styles.container_status}>
                    <div className={styles.id}>
                        <p>ID </p>
                        <p>{`# ${pokemon.id}`}</p>                    
                    </div>
                    <div className={styles.types_container}>
                        {pokemon.types.map((item, index)=> (
                            <span 
                            key={index} 
                            className={`${styles.types} ${styles[item.type.name]}`}>
                                {item.type.name}
                            </span>
                        ))}
                    </div>
                    <div className={styles.container_data}>
                        <span>Altura: {pokemon.height * 10} cm</span>
                        <span>Peso: {pokemon.weight / 10} Kg</span>
                    </div>
                </div>

                <div className={styles.container_img}>
                    <p className={styles.title}>{`${pokemon.name}`}</p>

                    <Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
                    width="450"
                    height="450"
                    alt={`${pokemon.name}`}/>
                </div>

                <div className={styles.container_stats}>

                     <ul>
                        {pokemon.stats.map((item, index)=>(
                            <li  className={styles[tipo[0]]} key={index}>
                                {item.stat.name}: <p>{item.base_stat}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <footer className={`${styles.footer} ${styles[tipo[0]]}`}>
                <p>
                    Poké <span>guia</span> &copy; 2022
                </p>
            </footer>
        </>
    )
}